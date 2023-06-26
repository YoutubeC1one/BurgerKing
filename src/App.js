import "./globalStyle.css";
import Header from "./components/Header";
import MainPage from "./Pages/MainPage";
import Footer from "./components/Footer";
import Page01 from "./Pages/MenuPages/01";
import Page02 from "./Pages/MenuPages/02";
import Page03 from "./Pages/MenuPages/03";
import Page04 from "./Pages/MenuPages/04";
import Page05 from "./Pages/MenuPages/05";
import Page06 from "./Pages/MenuPages/06";
import Page07 from "./Pages/MenuPages/07";
import Page08 from "./Pages/MenuPages/08";
import Up from "./components/PageUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/sepcialSale" element={<Page01 />}></Route>
        <Route path="/sepcialSale01" element={<Page02 />}></Route>
        <Route path="/sepcialSale02" element={<Page03 />}></Route>
        <Route path="/sepcialSale03" element={<Page04 />}></Route>
        <Route path="/sepcialSale04" element={<Page05 />}></Route>
        <Route path="/sepcialSale05" element={<Page06 />}></Route>
        <Route path="/sepcialSale06" element={<Page07 />}></Route>
        <Route path="/sepcialSale07" element={<Page08 />}></Route>
      </Routes>
      <Up />
      <Footer />
    </>
  );
}

export default App;
