import React from "react";
import "./header.css";

function Header() {
    return (
        <header className="header">
            <h1 className="logo">Eatudy</h1>
            <button type="button" className="hamburger">
                {/* &#127828; */}
            </button>
        </header>
    );
}
export default Header;
