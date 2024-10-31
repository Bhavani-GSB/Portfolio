import React from "react";
import { NavFunction } from "../navbar/navbar";
import { Content } from "../content/content";
import "./newHeader.style.css";
import "../content/container.style.css";

export const Header = () => {
    return (
        <div className="header">
            <NavFunction />
            <Content />
        </div>
    );
};
