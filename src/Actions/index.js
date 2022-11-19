import { CARD} from "../Constants/constant";
  
export const SaveCardData = (data) => (dispatch) => {
  dispatch({
    type: CARD,
    payload: data,
  });
};
  
  