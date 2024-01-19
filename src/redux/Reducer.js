import { GETUSER } from "./Actiontype"

const initialState = {users:[]}

export const Userreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GETUSER:
    return { ...state,users:payload }

  default:
    return state
  }
}
