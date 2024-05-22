import React from "react";
import "../css/info.css";
import "../rensponsive/info.css";
import Nav from "./Nav";
import Footer from "./Footer";

function Info() {
  return (
    <div>
      <Nav />
      <section className="section-info">
        <h1 className="photo-texttt">EB7 ORARI I PUNES & INFORMACIONE</h1>
        <span class="line line-ofertaa"></span>
      </section>

      <div className="center-container">
        <div className="orari-punes">
          <p className="text-orari">E Hënë-E Shtune: 07:30 AM - 23:00 PM</p>
          <p className="text orari">E Diele: 17:00 AM - 22:00 PM </p>
        </div>

        <div className="vertical-line"></div>
        <p className="info-text">
          Mirë se vini në EB7-Fitnes, ku kampionët trajnohen dhe përvoja e
          shkëlqimit është traditë. Vendosur në zemër të Gjakoves në EB7-Fitnes
          bazamentet tona janë ndërtuar mbi përvojën e trajnerëve tanë.
          EB7-Fitnes është e pajisur me veglat e fundit, duke siguruar që ju të
          keni gjithçka që ju nevojitet për të ngritur trajnimin tuaj në nje
          nivel tjeter. Bashkohuni me ne sot dhe bëni hapin e parë drejt një
          versioni më të fortë, më të shëndetshëm, dhe më të sigurt të vetes
          suaj.
        </p>
      </div>
      <hr className="hr"></hr>
      <Footer />
    </div>
  );
}

export default Info;
