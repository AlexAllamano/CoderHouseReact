import React from "react";
import estilos from "./sidebar.css";
import SidebarItem from "./SideBarItem/sidebaritem";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <SidebarItem texto={"Inicio"} icono={"fa-solid fa-house"} ruta={"/home"}></SidebarItem>
        <SidebarItem texto={"Apps"} icono={"fa-solid fa-grip"} ruta={"/apps"}></SidebarItem>
        <SidebarItem texto={"Juegos"} icono={"fa-solid fa-gamepad"} ruta={"/juegos"}></SidebarItem>
      </ul>

      <ul>
        <SidebarItem texto={"Carrito (0)"} icono={"fa-solid fa-cart-shopping"} ruta={"/"}></SidebarItem>
        <SidebarItem texto={"Contacto"} icono={"fa-solid fa-comment"} ruta={"/"}></SidebarItem>
      </ul>
    </div>
  );
};

export default Sidebar;
