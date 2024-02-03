import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import { FaYoutube, FaFacebook, FaSpotify } from "react-icons/fa";

import "./Footer.css";

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

        <div className="footer-icons">
          <ul>
            <li>
              <a
                href="https://www.youtube.com"
                target="_self"
                rel="noopener noreferrer"
              >
                <FaYoutube style={{ width: "100px", fontSize: "40px" }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.spotify.com"
                target="_self"
                rel="noopener noreferrer"
              >
                <FaSpotify style={{ width: "100px", fontSize: "40px" }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_self"
                rel="noopener noreferrer"
              >
                <FaFacebook style={{ width: "100px", fontSize: "40px" }} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </MDBFooter>
  );
}
