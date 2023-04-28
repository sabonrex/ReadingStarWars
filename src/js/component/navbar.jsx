import React, {useContext} from "react";
import {Link} from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/index.css";
import {Context} from "../store/appContext.js";

export const Navbar = () => {
  const {store, actions} = useContext(Context); 

  const handleDelete = (item) => { 
    actions.deleteFav(item); 
  };

  return (
    <nav className="navbar sticky-top" id="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <h3 className="my-3" id="titulo-navbar">
        STAR WARS DATABASE
      </h3>

      <div className="mx-5">
        <div className="dropdown">
          <button
            className="btn btn-outline-warning dropdown-toggle"
            id="navdrop"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
            <span className="badge badge-warning">{store.fav.length 
            }</span>
          </button>

          {store.fav.length === 0 ? (
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <p>No hay elementos favoritos aún</p>
              </li>
            </ul>
          ) : (
            <ul className="dropdown-menu dropdown-menu-end">
              {store.fav.map((item, key) => ( 
                <li key={key}>
                  {item}
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => handleDelete(item)
                    }
                  ></i>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};