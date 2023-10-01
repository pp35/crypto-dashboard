import { combineReducers } from 'redux';
import cryptoReducer from './cryptoReducer';
import currencyReducer from './currencyReducer';
import exchangeReducer from './exchangeReducer';
import chartReducer from './chartReducer';


const rootReducer = combineReducers({
  crypto: cryptoReducer, 
  currency: currencyReducer,
  exchange: exchangeReducer,
  chartData: chartReducer,
  
 
});

export default rootReducer;