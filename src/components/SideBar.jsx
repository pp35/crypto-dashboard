import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCryptoData } from '../actions/cryptoAction';

const Sidebar = ({ selectedCurrency, cryptoData, fetchCryptoData  }) => {
  useEffect(() => {
    console.log(selectedCurrency); 
    fetchCryptoData(selectedCurrency);
  }, [selectedCurrency, fetchCryptoData]);

  const formatCurrency = (value, currency) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    });
    return formatter.format(value);
  };

  return (
    <div className="w-full p-4 shadow-md bg-white">
      <h1 className="font-extrabold text-center text-2xl shadow-sm mb-2">
        Top Cryptocurrencies by Market Cap
      </h1>

      <div className="crypto-list space-y-4 overflow-scroll">
        {cryptoData.map((crypto) => (
          <div key={crypto.id} className="flex items-center space-x-4">
            <div className="w-12 h-12 mr-3">
              <img src={crypto.image} alt={crypto.name} />
            </div>
           
            <div>
              <p>{crypto.name}</p>
              <p>M Cap: {formatCurrency(crypto.market_cap, selectedCurrency)}</p>
            </div>
            <p>
              {crypto.priceChangeDirection === 'up' ? (
                <span><img className='h-5 w-5' src="./uparrow.png" alt="" /></span>
              ) : (
                <span><img className='h-5 w-5' src="./down.jpg" alt="" /></span>
              )}{' '}
              {Math.abs(crypto.dailyPriceChange).toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cryptoData: state.crypto.cryptoData,
    selectedCurrency: state.currency.selectedCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCryptoData: (currency) => dispatch(fetchCryptoData(currency)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
