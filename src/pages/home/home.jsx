import ItemList from "../../components/itemList/itemList";
import { React, useEffect, useState } from "react";
import { API_Endpoints, API_Verbos, consultaApi } from "../../services/ApiService";

const Home = ({listaApps}) => {

  const [listaCarrusel, setListaCarrusel] = useState([]);

  useEffect(() => {
    consultaApi(API_Endpoints.WALLPAPERS, API_Verbos.GET).then((arr) => {
      setListaCarrusel(arr.data);
    });
  }, []);

  return (
    <>


    <div
        id="carouselExampleIndicators"
        className="carousel slide mb-5"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {listaCarrusel.map((item) => (
            <div className="carousel-item active" key={item.id}>
              <img src={item.imagen} alt="..." className="carruselImg" />
              <div className="carousel-caption d-none d-md-block backNegro">
                <h5>{item.titulo}</h5>
                <p>{item.subtitulo}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <ItemList listaApps={listaApps.filter(item => item.tipo === "app")} titulo={"Principales apps gratuitas"}/>
      <ItemList listaApps={listaApps.filter(item => item.tipo === "juego")} titulo={"Principales juegos"}/>
    </>
  );
};

export default Home;

