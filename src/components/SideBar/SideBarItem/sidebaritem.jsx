import React from "react";
import estilos from "../sidebar.css";

const SidebarItem = ({icono, texto}) => {
    


  return (    
        <li >
          <i className={icono}></i>
          <small>{texto}</small>
        </li>   
  );
};

export default SidebarItem;
