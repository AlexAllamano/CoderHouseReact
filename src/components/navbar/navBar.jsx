import React from "react";
import "./navBar.css";
import logo from "../../assets/img/storeLogo.png";
import Sidebar from "./SideBar/sidebar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="barraSuperior ps-4 pe-4">
        <ul className="d-flex justify-content-between align-items-center">
          <Link className="colorGris logo" to={"/home"}>
            <li className="d-flex align-items-center">
              <img src={logo} alt="logo" />
              <p className="ms-2">Microsoft Store</p>
            </li>
          </Link>

          <li>
            <input
              type="search"
              className="inputTextBarra"
              placeholder="Buscar aplicaciones, juegos, películas y mucho más"
            />
          </li>
          
          <li>
            <i className="fa-solid fa-user"></i>
          </li>
        </ul>
      </div>
      <Sidebar />
    </>
  );
};

export default NavBar;
