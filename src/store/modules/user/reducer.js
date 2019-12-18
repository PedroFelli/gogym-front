import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, aciton) {
  switch (aciton.type) {
    case '@auth/SIGN_IN_SUCESS':
      return produce(state, draft => {
        draft.profile = aciton.payload.user;
      });
    default:
      return state;
  }
}
