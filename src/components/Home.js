import React from "react";
import "../css/home.css";
import "../rensponsive/home.css";
import Nav from "./Nav";
import { Button } from "@mui/material";
import Footer from "./Footer";
import UnfoldMoreDoubleIcon from "@mui/icons-material/UnfoldMoreDouble";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Home() {
  return (
    <div className="body">
      <Nav />
      <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-content">
              <UnfoldMoreDoubleIcon
                className="main-ikona"
                sx={{
                  marginRight: ["-4rem", "-2rem", "-3rem"],
                  color: "#76BA1B",
                  width: ["70px", "200px", "250px"], // Responsive width for different screen sizes
                  height: ["70px", "200px", "250px"], // Responsive height for different screen sizes
                  backgroundColor: "transparent",
                }}
              />
              <h1 className="hero-text">
                E Bukura <br /> dhe <br /> Bisha
              </h1>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------------------------------
--------------------------------------------------------------------- */}
        <section className="section-photo">
          <h1 className="photo-text">Ktu Ushtrojin Bishat</h1>
          <span class="line"></span>

          <div className="photo-container">
            <div className="parent ">
              <img
                className="child fitnes-1"
                src="../img/fitnes-1.jpg"
                alt="Fitness 1"
              />
            </div>
            <div className="parent">
              <img
                className="child fitnes-2"
                src="../img/fitnes-2.webp"
                alt="Fitness 2"
              />
            </div>

            <div className="parent">
              <img
                className="child fitnes-3"
                src="../img/fitnes-3.jpg"
                alt="Fitness 3"
              />
            </div>

            <div className="parent">
              <img
                className="child fitnes-4"
                src="../img/fitnes-4.jpg"
                alt="Fitness 4"
              />
            </div>
          </div>
        </section>

        <section className="section-pricing">
          <h1 className="photo-text">Oferta</h1>
          <span class="line-2"></span>
          <div class="grid grid--2-cols margin-button-md">
            <div class="pricing-plan pricing-plan--starter">
              <header class="plan-header">
                <p class="plan-name">Meshkuj</p>
                <p class="plan-price">
                  <span>€</span>260
                </p>
                <p class="plan-text">për 12 muaj</p>
                <div className="motivation-container">
                  <p class="motivation-text">
                    {" "}
                    <CheckCircleIcon
                      sx={{
                        marginRight: "8px",
                        color: "white",
                        width: 25,
                        height: 25,
                        backgroundColor: "transparent",
                      }}
                    />
                    Ambient Motivues
                  </p>
                  <p class="motivation-text">
                    {" "}
                    <CheckCircleIcon
                      sx={{
                        marginRight: "8px",
                        color: "white",
                        width: 25,
                        height: 25,
                        backgroundColor: "transparent",
                      }}
                    />
                    Trajner profesional
                  </p>
                  <p class="motivation-text">
                    {" "}
                    <CheckCircleIcon
                      sx={{
                        marginRight: "8px",
                        color: "white",
                        width: 25,
                        height: 25,
                        backgroundColor: "transparent",
                      }}
                    />
                    Paisjet më moderne
                  </p>
                </div>
              </header>
            </div>
            <div class="pricing-plan pricing-plan--complete">
              <header class="plan-header">
                <p class="plan-nameee">Femra</p>
                <p class="plan-price">
                  <span>€</span>220
                </p>
                <p class="plan-text">për 12 muaj</p>
                <div className="motivation-container">
                  <p class="motivation-text">
                    {" "}
                    <CheckCircleIcon
                      sx={{
                        marginRight: "8px",
                        color: "white",
                        width: 25,
                        height: 25,
                        backgroundColor: "transparent",
                      }}
                    />
                    Ambient Motivues
                  </p>
                  <p class="motivation-text">
                    {" "}
                    <CheckCircleIcon
                      sx={{
                        marginRight: "8px",
                        color: "white",
                        width: 25,
                        height: 25,
                        backgroundColor: "transparent",
                      }}
                    />
                    Trajner profesional
                  </p>
                  <p class="motivation-text">
                    {" "}
                    <CheckCircleIcon
                      sx={{
                        marginRight: "8px",
                        color: "white",
                        width: 25,
                        height: 25,
                        backgroundColor: "transparent",
                      }}
                    />
                    Paisjet më moderne
                  </p>
                </div>
              </header>
            </div>
          </div>
          <div class="butoni-oferta">
            <a href="/ofertat" class="btn ">
              Shiko ofertat e tjera
            </a>
          </div>
        </section>
      </main>
      <hr className="hr"></hr>

      <Footer />
    </div>
  );
}
