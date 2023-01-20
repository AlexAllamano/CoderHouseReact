import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";

export const baseUrl =
  "https://6388b860a4bb27a7f78fbeb6.mockapi.io/microsoftStore";

export  const  consultarFireBase = () => {

  const db = getFirestore();
  const listaAppsFirebase = collection(db, "apps");

  return getDocs(listaAppsFirebase)
    .then((snapshot) => {
      const result = snapshot.docs.map((doc) => (doc.data()));
      return snapshot.docs.map((doc) => (doc.data()));
    })
    .catch((error) => {
      console.log(error);
    });
};
