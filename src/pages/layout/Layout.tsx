import React from "react";
import Header from "../../layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../layout/Footer";

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default React.memo(Layout);