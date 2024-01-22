import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { lazy } from "react";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { Suspense } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import HomePage from "./pages/HomePage";
// import PageNoteFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

const HomePage= lazy(()=>import("./pages/HomePage"))
const Product= lazy(()=>import("./pages/Product"))
const Pricing= lazy(()=>import("./pages/Pricing"))
const Login= lazy(()=>import("./pages/Login"))
const PageNoteFound= lazy(()=>import("./pages/PageNotFound"))
const AppLayout= lazy(()=>import("./pages/AppLayout"))

// dist/assets/index-qfxgx9Mg.css   31.91 kB │ gzip:   5.27 kB
// dist/assets/index-4k1mMTSn.js   532.9z5 kB │ gzip: 150.65 kB



const App = () => {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage/>}>
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
              }>
               {/* ////This is a protected route, only logged in users can access in this case the whole app execpt the login page
             */}
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
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
};

export default App;
