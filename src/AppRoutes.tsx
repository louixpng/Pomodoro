import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import History from "./routes/History/History";
import DefaultLayout from "./layouts/DefaultLayout";

export default function AppRoutes () {
    return (
    <Routes>
        <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/historico" element={<History />} />
        </Route>
    </Routes>
    )

}