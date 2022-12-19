import axios from "axios";

export const baseUrl = "https://6388b860a4bb27a7f78fbeb6.mockapi.io/microsoftStore";

export const API_Endpoints = {
  APPS: "/Apps",
  WALLPAPERS: "/Wallpapers"
};
export const API_Verbos = {
  POST: "POST",
  GET: "GET",
  DELETE: "DELETE",
  PUT: "PUT"
};

export  function consultaApi(endPoint, verbo, objeto = {}) {

  try {
    if (verbo == API_Verbos.DELETE) {
      const response =  axios.delete(`${baseUrl}${endPoint}/${objeto.id}`);
      return response;
    } else {
      const response =  axios({
        url: `${baseUrl}${endPoint}`,
        method: verbo,
        data: objeto,
      });
      return response;
    }
  } catch (e) {
    console.log(e)
  }
}