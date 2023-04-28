import React, {useEffect, useState} from "react";
import "../../styles/single.css";
import {Link, useParams} from "react-router-dom";
import { getData } from "../../js/component/Card.jsx";

export const SingleVehicle = () => {
  const [vehicle, setSingleVehicle] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const params = useParams(); 

  useEffect(() => {
    const fetchData = async () => { 
      try {
        setLoading(true); 
        const info = await getData(params.category, params.id); 
        setSingleVehicle(info.result.properties); 
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
              src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title"> {vehicle.name}</h1>
              <p className="card-text">
                The {vehicle.name} is a {vehicle.vehicle_class}{" "}
                {vehicle.model} manufactured by{" "}
                {vehicle.manufacturer} with a cargo capacity of{" "}
                {vehicle.cargo_capacity} kg. It is crewed by{" "}
                {vehicle.crew}{" "}
                person and can accommodate consumables for{" "}
                {vehicle.consumables}. Its cost in credits is{" "}
                {vehicle.cost_in_credits}. The{" "}
               vehicle has a length of{" "}
                {vehicle.length} meters and a maximum atmospheric speed of{" "}
                {vehicle.max_atmosphering_speed} km/h. It is designed to
                carry {vehicle.passengers} passengers.
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
