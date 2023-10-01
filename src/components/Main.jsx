import React,{useState} from "react";

// Importing necessary components
import Searchbar from "./Search";
import CryptoChart from "./CryptoChart";
import CoinsExchange from "./CoinsExchange";
import CryptoPieChart from "./CryptoPieChart";
import SideBar from "./SideBar";
import CurrencySelector from "./CurrencySelector";

function Main() {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };
  return (
    <>
      {/* Main container with background and flex layout */}
      <div className="bg-slate-200 flex flex-col m-4 pt-2 md:m-6 px-2 h-full rounded md:flex-row ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-2">
            <div className="md:col-span-3">
              <div className="md:3/4 mx-auto">
                <div className="flex">
                  {/* Dropdown to select currency */}
                 
                  <CurrencySelector
                    selectedCurrency={selectedCurrency}
                    setSelectedCurrency={setSelectedCurrency}
                  />

                  {/* Search bar component */}
                  <Searchbar />
                </div>

                {/* Component to display cryptocurrency chart */}
                <CryptoChart />
              </div>

              <div className="md:flex  mt-1 gap-2">
                {/* Component to display cryptocurrency pie chart */}
                <CryptoPieChart />

                {/* Component for exchanging cryptocurrencies */}
                <CoinsExchange />
              </div>
            </div>

            <div>
              {/* Sidebar component */}
              <SideBar
                selectedCurrency={selectedCurrency}
                handleCurrencyChange={handleCurrencyChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
