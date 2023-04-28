import React, {useEffect, useState} from "react";
import "../../styles/single.css";
import {Link, useParams} from "react-router-dom";
import { getData } from "../../js/component/Card.jsx";

export const SinglePlanet = () => {
  const [planet, setSinglePlanet] = useState({}); 
  const [loading, setLoading] = useState(true);
  const params = useParams(); 

  useEffect(() => {
   
    const fetchData = async () => { 
      try {
        setLoading(true); 
        const info = await getData(params.category, params.id); 
        
        setSinglePlanet(info.result.properties); 
        setLoading(false); 
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [params.category, params.id]); 
  
  
  return (
    <>
    {loading ? (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ) : 
   ( <>
      <div className="single">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                params.id === "1"
                  ? "https://oakthorne.net/wiki/images/Tatooine.jpg"
                  : `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`
              }
              alt="Planet Image"
              style={params.id === "1" ? {width: "400px", height: "400px"} : {}}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title"> {planet.name}</h1>
              <p className="card-text">
                {planet.name} is a planet with a {planet.climate}{" "}
                 climate. It has a diameter of {planet.diameter} kilometers
                and a {planet.gravity} gravity. The planet takes{" "}
                {planet.orbital_period} days to complete one orbit and has
                a rotation period of {planet.rotation_period} hours.{" "}
                {planet.name} surface is {planet.terrain} {" "}
                terrain with level {planet.surface_water}% {" "}water. The planet has
                a population of {planet.population} people.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <button
          className="btn btn-outline-warning btn-lg"
          href="#"
          role="button"
        >
          Volver al Inicio
        </button>
      </Link>
    </>)
   } </>
  );
};