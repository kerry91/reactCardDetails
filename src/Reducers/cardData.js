/* eslint-disable import/no-anonymous-default-export */


import { CARD } from "../Constants/constant";

const initialState = {
  Data: {cardholderName: "Jane Appleseed", cardNumber: "0000000000000000", month: "00", year: "00", cvc:"123"},
};

export default function (state = initialState, action) {
  if (action) {
    switch (action.type) {
      case CARD:
        return {
          ...state,
          Data: action.payload,
        };
          default:
        return state;
    }
    
  }
}


  