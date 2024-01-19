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
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
              ////This is a protected route, only logged in users can access in this case the whole app execpt the login page
            >
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
    </AuthProvider>
  );
};

export default App;
