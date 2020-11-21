import React, { useState } from 'react';

import { Container } from '../styles/GlobalStyle';
import {
  LeadContainer,
  LeadTitle,
  AddContainer,
  FormContainer,
  InputAdd,
  TextareaAdd,
  AddTableRow,
  AddTableHead,
  AddTableData,
  LeadButton,
  OportunidadeButton,
  InputLabel,
  FormField,
} from '../styles/BoardStyle';
import { connect } from 'react-redux';
import { addCard } from '../../actions/leads';

const AddBoard = ({ addCard }) => {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    desc: '',
  });
  const { name, tel, email, desc } = formData;
  const [novaOportunidade, setNovaOportunidade] = useState('');
  const [oportunidades, setOportunidades] = useState([
    [false, 'RPA'],
    [false, 'Produto Digital'],
    [false, 'Analytics'],
    [false, 'BPM'],
  ]);

  const onChangeForm = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const changeOportunidades = (e) => {
    const retOpo = [...oportunidades];
    retOpo[e.target.name] = [e.target.checked, oportunidades[e.target.name][1]];
    setOportunidades(retOpo);
  };

  const criarOportunidade = () => {
    const retOpo = oportunidades;
    retOpo.push([true, novaOportunidade]);
    setNovaOportunidade('');
    setOportunidades(retOpo);
  };

  const sendFormData = () => {
    const oport = oportunidades
      .filter((el) => el[0] === true)
      .map((el) => el[1])
      .join();
    // setFormData({ ...formData, oport: oport });
    addCard({
      ...formData,
      oport: oport,
    });
    setFormData({
      name: '',
      tel: '',
      email: '',
      desc: '',
    });
  };

  return (
    <Container>
      <LeadContainer>
        <LeadTitle>Adicionar lead</LeadTitle>
        <AddContainer>
          <FormContainer>
            <FormField>
              <InputAdd
                required
                type="text"
                name="name"
                onChange={(e) => onChangeForm(e)}
                value={name}
                placeholder="Nome do lead"
              />
              <InputLabel htmlFor="nome">Nome:</InputLabel>
            </FormField>
            <FormField>
              <InputAdd
                required
                onChange={(e) => onChangeForm(e)}
                value={tel}
                type="number"
                name="tel"
                placeholder="Telefone (Apenas números, sem espaços)"
              />
              <InputLabel htmlFor="tel">Telefone:</InputLabel>
            </FormField>
            <FormField>
              <InputAdd
                required
                onChange={(e) => onChangeForm(e)}
                value={email}
                type="email"
                name="email"
                placeholder="Email do lead"
              />
              <InputLabel htmlFor="email">E-mail:</InputLabel>
            </FormField>
            <FormField>
              <TextareaAdd
                minRows="3"
                name="desc"
                onChange={(e) => onChangeForm(e)}
                value={desc}
                placeholder="Opicional"
              />
              <InputLabel htmlFor="desc">Descrição:</InputLabel>
            </FormField>
          </FormContainer>
          <table>
            <thead>
              <tr>
                <AddTableHead>
                  <OportunidadeButton onClick={(e) => criarOportunidade()}>
                    Adicionar
                  </OportunidadeButton>
                </AddTableHead>
                <AddTableHead>
                  <FormField>
                    <InputAdd
                      name="oportunidade"
                      value={novaOportunidade}
                      onChange={(e) => setNovaOportunidade(e.target.value)}
                    />
                    <InputLabel htmlFor="oportunidade">
                      Oportunidade:
                    </InputLabel>
                  </FormField>
                </AddTableHead>
              </tr>
            </thead>
            <tbody>
              {oportunidades.map((opo, index) => {
                return (
                  <AddTableRow key={index}>
                    <AddTableData>
                      <input
                        type="checkbox"
                        name={index}
                        checked={opo[0]}
                        onChange={(e) => changeOportunidades(e)}
                      />
                    </AddTableData>
                    <AddTableData>{opo[1]}</AddTableData>
                  </AddTableRow>
                );
              })}
            </tbody>
          </table>
        </AddContainer>
        <LeadButton onClick={(e) => sendFormData()}>Criar</LeadButton>
      </LeadContainer>
    </Container>
  );
};

export default connect(null, { addCard })(AddBoard);
