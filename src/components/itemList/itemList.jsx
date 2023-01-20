import "./itemList.css";
import ItemCard from "../itemCard/itemCard";
import { React } from "react";
const ItemList = ({ listaApps, titulo }) => {
  return (
    <div className="colorClaro mb-4">
      

      <div className="container ">
        <h2>{titulo}</h2>
        <hr />
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
