import "./itemList.css";
import ItemCard from "../itemCard/itemCard";
import { React, useState, useEffect } from "react";
import {
  API_Endpoints,
  API_Verbos,
  consultaApi,
} from "../../services/ApiService";

const ItemList = ({ listaApps, titulo }) => {
  return (
    <div className="colorClaro">
      

      <div className="container pt-5">
        <h4>{titulo}</h4>
        <div className="row mt-5">
          {listaApps.map((app) => (
            <div className="col-md-4 col-sm-12">
              <ItemCard key={app.id} app={app}></ItemCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
