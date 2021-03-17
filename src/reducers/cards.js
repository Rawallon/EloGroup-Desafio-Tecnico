import { ADD_LEAD, UPDATE_LEAD } from '../actions/types';

const initialState = {
  'card-y9b6dmbdg': {
    id: 'card-y9b6dmbdg',
    createdat: '1605892589815',
    updatedat: '',
    name: 'Ind. Farm LTDA',
    tel: '86872432811',
    email: 'FarmInd@gmail.com',
    oport: 'Produto Digital',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque viverra libero. Duis volutpat consectetur laoreet. Mauris vitae lorem ac turpis facilisis lacinia sed ut libero. Suspendisse vestibulum placerat elit, vitae condimentum quam tempus at. Nunc porttitor ultrices orci ut lacinia.',
    list: '1-list',
  },
  'card-7c1wufqqk': {
    id: 'card-7c1wufqqk',
    createdat: '1605892589815',
    updatedat: '',
    name: 'Org. Internacionais',
    tel: '45697172118',
    email: 'Internacionais@org.com',
    oport: 'Produto Digital, Analytics',
    desc: '',
    list: '0-list',
  },
  'card-ttkz1k89c': {
    id: 'card-ttkz1k89c',
    createdat: '1605892589815',
    updatedat: '',
    name: 'Musc. Sound Live Camp',
    tel: '50528319315',
    email: 'Musc@SoundLiveCamp.com',
    oport: 'RPA, BPM',
    desc: '',
    list: '0-list',
  },
};

const cards = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_LEAD:
    case ADD_LEAD:
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};

export default cards;
