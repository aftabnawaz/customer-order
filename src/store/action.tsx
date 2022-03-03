import axios from "axios";
import invoice from "../constants";

export const requestinvoice = () => async (dispatch) => {
  dispatch({
    type: invoice.LOAD,
  });
  try {
    const json = await axios.get("invoice.data.json");

    dispatch({
      type: invoice.LOAD_SUCCESS,
      invoiceData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: invoice.LOAD_SUCCESS,
      invoiceData: [],
      isError: true,
    });
  }
};