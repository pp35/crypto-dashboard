import axios from 'axios';

// Action to set the currency
export const setSelectedCurrency = (currency) => {
  return {
    type: 'SET_SELECTED_CURRENCY',
    payload: currency,
  };
};

// Action to fetch cryptocurrency data
export const fetchCryptoData = (currency) => async (dispatch) => {
  try {
    // Make a GET request to the CoinGecko API
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=${currency}`);

    // Extract the data you need from the response
    const cryptoData = {
      bitcoin: response.data.bitcoin[currency],
      ethereum: response.data.ethereum[currency],
    };

    // Dispatch the data to the Redux store
    dispatch({
      type: 'FETCH_CRYPTO_DATA',
      payload: cryptoData,
    });
  } catch (error) {
    // Handle any errors that may occur during the API request
    console.error('Error fetching cryptocurrency data:', error);
  }
};