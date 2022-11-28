import React from "react";
import estilos from "./sidebar.css";
import SidebarItem from "./SideBarItem/sidebaritem";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <SidebarItem texto={"Inicio"} icono={"fa-solid fa-house"}></SidebarItem>
        <SidebarItem texto={"Apps"} icono={"fa-solid fa-grip"}></SidebarItem>
        <SidebarItem
          texto={"Juegos"}
          icono={"fa-solid fa-gamepad"}
        ></SidebarItem>
      </ul>

      <ul>
        <SidebarItem texto={"Carrito (0)"} icono={"fa-solid fa-cart-shopping"}></SidebarItem>
        <SidebarItem texto={"Contacto"} icono={"fa-solid fa-comment"}></SidebarItem>
      </ul>
    </div>
  );
};

export default Sidebar;
