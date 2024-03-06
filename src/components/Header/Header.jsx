// Header.jsx
import React from "react";
import { IoPlay } from "react-icons/io5";
import {useLocation } from "react-router-dom"; 
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <div className="Header">
        <h1>The Generics</h1>
        {isHomePage && (
          <>
              <button
                style={{
                  display: "block",
                  border: "1px solid #56CCF2",
                  padding: "15px 30px",
                  fontSize: "23px",
                  fontWeight: "200",
                  margin: "10px auto",
                  background: "inherit",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Get Our Latest Album
              </button>
            <button
              style={{
                cursor: "pointer",
                display: "block",
                border: "2px solid #56CCF2",
                borderRadius: "50%",
                padding: "20px",
                fontSize: "30px",
                fontWeight: "200",
                margin: "15px auto",
                background: "inherit",
                color: "#56CCF2",
                objectFit: 'cover'
              }}
            >
              <IoPlay />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
