import {
HashRouter,
Routes,
Route
} from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import Inventario from "./pages/Inventario";

import Pesaje from "./pages/Pesaje";

import Vacunaciones from "./pages/Vacunaciones";

import EventoSanitario from "./pages/EventoSanitario";

import ProtectedRoute from "./components/ProtectedRoute";

import "./styles/responsive.css";

export default function App(){

  return(

<HashRouter>

<Routes>

<Route

path="/login"

element={<Login/>}

/>

<Route
path="/"
element={
  <ProtectedRoute>
    <Dashboard/>
  </ProtectedRoute>
}
/>

<Route
path="/inventario"
element={
  <ProtectedRoute>
    <Inventario/>
  </ProtectedRoute>
}
/>

<Route
path="/pesaje"
element={
  <ProtectedRoute>
    <Pesaje/>
  </ProtectedRoute>
}
/>

<Route
path="/vacunaciones"
element={
  <ProtectedRoute>
    <Vacunaciones/>
  </ProtectedRoute>
}
/>

<Route
path="/evento"
element={
  <ProtectedRoute>
    <EventoSanitario/>
  </ProtectedRoute>
}
/>

</Routes>

</HashRouter> );

}