// src/reducers/currencyReducer.js
const initialState = {
    selectedCurrency: 'usd',
    cryptoData: null,
  };
  
  const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_CURRENCY':  
  return {
    ...state,
    selectedCurrency: action.payload,
  };
      case 'FETCH_CRYPTO_DATA':
        return {
          ...state,
          cryptoData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default currencyReducer;
  