import React, { useContext, useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { globalContext } from "../context/GlobalContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Navbar() {
  const navigate = useNavigate()
  const { userIdentity ,setUserIdentity } = useContext(globalContext);
  const [username, setUsername] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  useEffect(() => {
    let user = JSON.parse(window.localStorage.getItem(userIdentity.email));
    if (user) {
      const username = user.first_name + " " + user.last_name;
      setUsername(username);
    }
  }, [userIdentity]);
  function handleLogout(){
    window.localStorage.clear();
    setUserIdentity({auth:false,email:null})
    setUsername(null)
    setShowLogout(!showLogout)
    navigate("/login") 
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar_item">
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-light fs-1 ms-4" href="#">
          TripWeb
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse p-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-light text-white"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Destinations
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-light text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-light text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-light text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dashboard
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  fw-light text-white"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>

        <button type="button" className="btn btn-light p-3">
          Become an Expert
        </button>

        {username ? (
          <div>
          <div style={{ display: "flex", flexDirection: "horizontal" }}>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "1.2rem",
                fontFamily: "serif",
              }}
              className="border border-primary text-center p-2 mt-3 ms-2"
            >
              {username}
              <ArrowDropDownIcon
                onClick={() => {
                  setShowLogout(!showLogout);
                }}
              />
            </p>
          </div>
          {showLogout && <button type="button" className="btn btn-danger p-3 ms-2 showLogout" onClick={handleLogout}>logout</button>}
          </div>
        ) : (
          <Link to="/signup">
            <button
              type="button"
              className="btn btn-outline-secondary m-3 p-3 text-white border-light"
            >
              Sign In/ Register
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
