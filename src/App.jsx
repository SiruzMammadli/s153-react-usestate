import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./_pages/RootLayout";
import Home from "./_pages/Home";
import Charts from "./_pages/Charts";
import Tables from "./_pages/Tables";

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout/>}>
                    <Route index element={<Home/>} />
                    <Route path="charts" element={<Charts/>} />
                    <Route path="tables" element={<Tables/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}