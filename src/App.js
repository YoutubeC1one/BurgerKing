import "./globalStyle.css";
import Header from "./components/Header";
import MainPage from "./Pages/MainPage";
import Page01 from "./Pages/MenuPages/01";
import Page02 from "./Pages/MenuPages/02";
import Page03 from "./Pages/MenuPages/03";
import Page04 from "./Pages/MenuPages/04";
import Page05 from "./Pages/MenuPages/05";
import Page06 from "./Pages/MenuPages/06";
import Page07 from "./Pages/MenuPages/07";
import Page08 from "./Pages/MenuPages/08";
import FindStore from "./Pages/FindStore";
import EventPage0 from "./Pages/EventPages/0";
import EventPage1 from "./Pages/EventPages/1";
import EventPageAll from "./Pages/EventPages/all";
import Up from "./components/PageUp";
import NewShop from "./Pages/EventPages/NewShop"
import EV1 from "./Pages/EventPages/Details/1"
import EV2 from "./Pages/EventPages/Details/2"
import S1 from "./Pages/EventPages/DetailsShop/1"
import EV3 from "./Pages/EventPages/Details/3"
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
        <Route path="/findStore" element={<FindStore />}></Route>
        <Route path="/event/0" element={<EventPage0 />}></Route>
        <Route path="/event/1" element={<EventPage1 />}></Route>
        <Route path="/event/all" element={<EventPageAll />}></Route>
        <Route path="/newshop" element={<NewShop />}></Route>
        <Route path="/eventdetail/1" element={<EV1 />}></Route>
        <Route path="/eventdetail/2" element={<EV2 />}></Route>
        <Route path="/eventdetail/3" element={<EV3 />}></Route>
        <Route path="/eventdetail/shop/1" element={<S1 />}></Route>
      </Routes>
    </>
  );
}

export default App;
