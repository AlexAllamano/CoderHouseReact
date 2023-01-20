import React, { useContext, useEffect } from "react";
import estilos from "./sidebar.css";
import SidebarItem from "./SideBarItem/sidebaritem";
import { ListaContext } from "../../../context/ListaContext";

const Sidebar = () => {

  const { listaCarrito } = useContext(ListaContext);

  

  
  return (
    <div className="sidebar">
      <ul>
        <SidebarItem texto={"Inicio"} icono={"fa-solid fa-house"} ruta={"/home"}></SidebarItem>
        <SidebarItem texto={"Apps"} icono={"fa-solid fa-grip"} ruta={"/apps"}></SidebarItem>
        <SidebarItem texto={"Juegos"} icono={"fa-solid fa-gamepad"} ruta={"/juegos"}></SidebarItem>
      </ul>

      <ul>
        <SidebarItem texto={`Carrito (${listaCarrito.length})`} icono={"fa-solid fa-cart-shopping"} ruta={"/carrito"}></SidebarItem>
        <SidebarItem texto={"Contacto"} icono={"fa-solid fa-comment"} ruta={"/"}></SidebarItem>
      </ul>
    </div>
  );
};

export default Sidebar;
