import React from "react";
import { Parallax } from "react-parallax";
import "atropos/css";
import ScrollToTop from "../components/common/ScrollToTop";
import bg_artist from "../assets/img/bg_artists_page.png";
import artistsData from "../data/artists.json";
import ArtistInfo from "../components/ArtistInfo";

function Artists() {
  return (
    <Parallax bgImage={bg_artist} strength={1000}>
      <main>
        <section className="artists_page">
          <div className="container">
          {artistsData.map((artist, index) => (
  <ArtistInfo key={index} artist={{ ...artist, index }} />
))}
          </div>
        </section>
      </main>
      <ScrollToTop />
    </Parallax>
  );
}

export default Artists;
