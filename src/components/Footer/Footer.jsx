import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebook, FaSpotify } from "react-icons/fa";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section
        className="d-flex justify-content-center justify-content-lg-between border-bottom"
        style={{ backgroundColor: "#56ccf2", paddingLeft: "100px" }}
      >
        <div className="me-5 d-none d-lg-block">
          <span
            className="footer-title"
            style={{
              textAlign: "center",
              color: "white",
              width: "50%",
              fontSize: "50px",
              fontWeight: "bold",
              margin: "0 auto",
            }}
          >
            The Generics
          </span>
        </div>

        <div className={classes['footer-icons']}>
          <ul>
            <li>
              <Link to="https://www.youtube.com" target="_self">
                <FaYoutube style={{ width: "100px", fontSize: "40px" }} />
              </Link>
            </li>
            <li>
              <Link to="https://www.spotify.com" target="_self">
                <FaSpotify style={{ width: "100px", fontSize: "40px" }} />
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com" target="_self">
                <FaFacebook style={{ width: "100px", fontSize: "40px" }} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </MDBFooter>
  );
}
