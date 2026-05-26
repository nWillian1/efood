import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Perfil from "./pages/Perfil/index";

const Rotas = () => (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
    </Routes>
);

export default Rotas;