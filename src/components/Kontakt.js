import React from "react";
import "../css/kontakt.css";
import "../rensponsive/kontakt.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import Nav from "./Nav";
import Footer from "./Footer";

function Kontakt() {
  return (
    <div>
      <Nav />
      <section className="section-kontakt">
        <h1 className="photo-textttt">Kontakt</h1>
        <span class="line line-oferta"></span>
        <div class="containerrr">
          <div class="ctaaa">
            <div class="cta-text-boxxx">
              <p class="cta-texttt">
                <EmailIcon
                  sx={{ fontSize: "3rem" }}
                  className="ikona-kontakt"
                />{" "}
                elvinbeqa77@gmail.com
              </p>
              <p class="cta-texttt">
                <CallIcon sx={{ fontSize: "3rem" }} className="ikona-kontakt" />{" "}
                +383-49-888-643
              </p>
              <p class="cta-texttt">
                Na ndjekni:{" "}
                <a
                  className="ikona-kontakt"
                  target="_blank"
                  href="https://www.instagram.com/eb7_fitnes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                >
                  <InstagramIcon
                    sx={{ fontSize: "3rem" }}
                    className="ikona-kontakt ikona-gold"
                  />{" "}
                </a>
                <a
                  className="ikona-kontakt"
                  href="https://www.facebook.com/EB7fitnes"
                  target="_blank"
                >
                  <FacebookIcon
                    sx={{ fontSize: "3rem" }}
                    className="ikona-kontakt ikona-gold"
                  />{" "}
                </a>
              </p>
            </div>

            <div className="cta-nav-boxxx" style={{}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.0199526284628!2d20.43354467515715!3d42.38472143354457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353b1831c106ae9%3A0x11723d05db6aba28!2sEB7%20Fitnes!5e0!3m2!1sen!2s!4v1711576022919!5m2!1sen!2s"
                width="500"
                height="400"
                style={{
                  border: "0",
                  borderRadius: "20px",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <hr className="hr"></hr>
      <Footer />
    </div>
  );
}

export default Kontakt;
