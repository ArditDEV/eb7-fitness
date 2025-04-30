import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container grid grid--footer">
          <div class="logo-col">
            <a href="/" class="footer-logo">
              <img class="logo" alt="EB7" src="../img/logo.jpg" />
            </a>
            <ul class="social-links"></ul>

            <p class="copyright">
              Copyright &copy; 2025 by Ardit Bakalli,All rights reserved
            </p>
          </div>
          <div class="address-col">
            <p class="footer-heading">Na Kontaktoni</p>

            <address class="contacts">
              <p class="address fix">
                <LocationOnIcon style={{ marginRight: "8px" }} /> Rr. Ferid
                Domi, Gjakovë 50000
              </p>

              <p className="fix">
                <a
                  class="footer-link-1 footer-link "
                  href="tel:+383-49-888-643"
                >
                  <CallIcon style={{ marginRight: "8px" }} /> 049-888-643
                </a>
              </p>
              <br />

              <a class="footer-link" href="mailto:elvinbeqa77@gmail.com">
                <EmailIcon style={{ marginRight: "8px" }} /> elvinbeqa77@gmail.com
              </a>
            </address>
          </div>
          <nav class="nav-col">
            <p class="footer-heading">Na Ndjekni</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/EB7fitnes" target="_blank">
                <FacebookIcon
                  sx={{
                    color: "white",
                    width: 40,
                    height: 40,
                    marginRight: "15px",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/eb7_fitnes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <InstagramIcon sx={{ color: "white", width: 40, height: 40 }} />
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
