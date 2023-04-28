import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./views/home.jsx";
import { SinglePeople } from "./views/SinglePeople.jsx";
import { SinglePlanet } from "./views/SinglePlanet.jsx";
import { SingleVehicle } from "./views/SingleVehicle.jsx";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/SinglePeople/:category/:id"
            element={<SinglePeople />}
          />
          <Route
            path="/SingleVehicle/:category/:id"
            element={<SingleVehicle />}
          />
          <Route
            path="/SinglePlanet/:category/:id"
            element={<SinglePlanet />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);