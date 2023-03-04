import React from "react";

import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./data";

import "./style.css";
import "./css/all.min.css";


export default function App() {
    return (
        <div class="container">
            <Navbar />
            <section class="cards">
                {data.map((item) => {
                    return <Card {...item} />
                })}
            </section>
        </div>
    )
}
