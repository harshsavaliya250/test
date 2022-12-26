import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiCameraMovie } from "react-icons/bi";

const Topheader = () => {
  return (
    <>
      <div id="Topheader">
        <div className="container">
          <div className="row my-2 align-items-center justify-containt-between header-box">
            <div className="col-4">
              <img
                src={require("../Images/day-to-day-movie-low-resolution-color-logo .png")}
                width={"300px"}
              ></img>
            </div>
            <div className="col-6">
              <div>
                <div className="wrapper">
                  <div className="container">
                    <form
                      role="search"
                      method="get"
                      className="search-form form"
                      action
                    >
                      <label>
                        <span className="screen-reader-text">
                          Search for...
                        </span>
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Type something..."
                          name="s"
                          title
                        />
                      </label>
                      <input
                        type="submit"
                        className="search-submit button"
                        defaultValue=""
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 icon">
              <span><BiCameraMovie/></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topheader;
