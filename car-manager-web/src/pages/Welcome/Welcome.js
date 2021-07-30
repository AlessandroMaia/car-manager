import React from 'react';
import car_manager from "../../assets/images/car_manager.svg";
import "./styles.css";

const Welcome = () => {
    return (
        <main className="welcome-container">
            <img className="logo-welcome" src={car_manager} />
            <h2 className="text-welcome">Bem vindo!</h2>
        </main>
    )
}

export default Welcome;