import React from "react";
import car_manager from "../../assets/images/car_manager.svg";
import './styles.css';
import { logout } from "../../services/auth";

const _handleLogout = () => {
    logout();
    window.location.href = "/";
}

const Header = () => {
    return (
        <nav className="header-container">
            <div>
                <a href="/home/">
                    <img className="logo" src={car_manager} />
                </a>
            </div>
            <div>
                <a className="btn btn-commom" href="/home/cars">Carros</a>
                <a className="btn btn-commom" href="/home/brands">Marcas</a>
            </div>
            <div>
                <a className="btn btn-exit" onClick={() => _handleLogout()}>Sair</a>
            </div>
        </nav>
    )
}

export default Header;