// CurrencySelector.js

import React from 'react';
import { connect } from 'react-redux';
import { setSelectedCurrency } from '../actions/currencyAction';
const CurrencySelector = ({ selectedCurrency, setSelectedCurrency }) => {
  const handleChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className="h-11 w-20 relative left-6 rounded-md border font-semibold focus:border-black shadow-md"
      value={selectedCurrency}
    >
      <option value="usd">USD</option>
      <option value="inr">INR</option>
      <option value="eur">EUR</option>
    </select>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCurrency: state.currency.selectedCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCurrency: (currency) => dispatch(setSelectedCurrency(currency)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);
