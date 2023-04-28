import React, {useEffect, useState} from "react";
import "../../styles/single.css";
import {Link, useParams} from "react-router-dom";
import { getData } from "../../js/component/Card.jsx";

export const SinglePeople = () => { 
    const [people, setPeople] = useState({}); 
    const [loading, setLoading] = useState(true); 
    const params = useParams(); 

  useEffect(() => {
    
    const fetchData = async () => { 
        try {
            setLoading(true); 
            const info = await getData(params.category, params.id); 
            setPeople(info.result.properties); 
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
      ) : (
        <>
          <div className="single">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title"> {people.name}</h1>
                  <p className="card-text">
                    {" "}
                    {people.name} is a {people.gender} character
                    from the Star Wars saga. He was born in the year{" "}
                    {people.birth_year}. He has {people.eye_color}{" "}
                    eyes, {people.hair_color} hair, and{" "}
                    {people.skin_color} skin. His height is{" "}
                    {people.height} cm and his weight is{" "}
                    {people.mass} kg.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/">
            <button className="btn btn-outline-warning btn-lg" role="button">
              Volver al Inicio
            </button>
          </Link>
        </>
      )}
    </>
  );
};