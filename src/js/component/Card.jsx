import React, {useContext} from "react";
import "../../styles/cards.css";

import {Link} from "react-router-dom";
import {Context} from "../store/appContext.js";

export const getData = async (info, uid) =>{
    const URL= "https://www.swapi.tech/api/"
    try{ 
        const response = await fetch(`${URL}/${info}/${uid}`.trim(),{ 
            method: "GET",
            headers: {"Content-Type": "application/json"},})

        return await response.json()
     

    } catch(error){ console.log("Error:",error)}

}

const Card = (props) => {
  const {store, actions} = useContext(Context); 

  const singlePage = 
        props.category == "people" ? "singlePeople" 
        : props.category == "vehicles" ? "singleVehicle" 
        : props.category == "planets" ? "singlePlanet" 
        : null;

  const handleClick = () => { 
    actions.addFab(props.name);
  };

  return (
    <div className="cartas">
      <div className="card" style={{width: "18rem"}}>
        <img
          className="card-img-top"
          src={props.image}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h6 className="card-title">{props.name}</h6>
        </div>
        <div className="card-footer">
          <Link to={`${singlePage}/${props.category}/${props.id}`}>
            <button type="button" className="btn btn-outline-warning">
              Info
            </button>
          </Link>
          <div className="btn btn-outline-warning" onClick={handleClick}>
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;