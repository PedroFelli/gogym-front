import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, aciton) {
  switch (aciton.type) {
    case '@auth/SIGN_IN_SUCESS':
      return produce(state, draft => {
        draft.token = aciton.payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
}
