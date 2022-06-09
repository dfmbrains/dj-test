import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/molecules/Header/Header";
import Footer from "../components/molecules/Footer/Footer";
import Events from "../pages/Events/Events";
import EventDetails from "../pages/EventDetails/EventDetails";

const PublickRoutes = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/events"} element={<Events/>}/>
                    <Route path={"/events/1"} element={<EventDetails/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
};

export default PublickRoutes;