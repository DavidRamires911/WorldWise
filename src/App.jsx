import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNoteFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";


const App = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = "http://localhost:9000";

  useEffect(() => {
    async function fetchCities() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch (err) {
        alert("Error fetching cities");
      }finally{
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            
            <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path="cities/:id" element={<City/>}/>
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />{" "}
            <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/> } />{" "}
            <Route path="form" element={<Form/>} />
          </Route>
          <Route path="*" element={<PageNoteFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
