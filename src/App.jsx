import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { CitiesProvider } from "./contexts/CitiesContext";

const App = () => {
  return (
    
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            {/* {<CityList cities={cities} isLoading={isLoading} />} */}
            <Route index element={<Navigate replace to="cities" />} />
            {/* This Navigate component is used to redirect to the 
            cities page when the app is loaded otherwise would say on /app 
            Replace is to back work*/}
            <Route path="cities" element={<CityList />} />{" "}
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />{" "}
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNoteFound />} />
        </Routes>
      </BrowserRouter>
      </CitiesProvider>
   
  );
};

export default App;
