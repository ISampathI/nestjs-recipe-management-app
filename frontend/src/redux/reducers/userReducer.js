import { ActionTypes } from "../constants/actionTypes";

// Reducer for managing the users state
export const userReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return payload;
    default:
      return state;
  }
};

// Reducer for managing the selectedUser state
// export const selectedUserReducer = (state = {}, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SELECT_USER:
//       return payload;
//     default:
//       return state;
//   }
// };
