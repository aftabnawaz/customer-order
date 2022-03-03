import Invoice from "../constants";

const initalState = {
  invoiceData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
    
  switch (action.type) {
    case Invoice.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Invoice.LOAD_SUCCESS:
      return {
        ...state,
        invoiceData: action.invoiceData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;