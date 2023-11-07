import React from "react";
import Atropos from "atropos/react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

function ArtistInfo({ artist }) {
  return (
    <div className={`artist_page_item ${artist.index % 2 === 1 ? "reverse" : ""}`}>
      <div className="artist_page_info">
        <Atropos shadow={false} highlight={false} rotateTouch={false}>
          <h2 className="title_h2">{artist.name}</h2>
        </Atropos>
        <p className="text1">{artist.description1}</p>
        <p className="text2">{artist.description2}</p>
        <Link to={artist.link}>
          <button type="button" className="btn btn_see btn_artist">
            See works
          </button>
        </Link>
      </div>

      <div className="artist_photo">
        <Atropos shadow={false} highlight={false} rotateTouch={false}>
          <LazyLoad height={648} offset={100}>
            <img src={`./assets/img/${artist.image}`} alt={`${artist.name}_master`} />
          </LazyLoad>
        </Atropos>
      </div>
      <Link to={`/artists/${artist.link}`}>
        <button type="button" className="btn btn_see btn_artist_resp">
          See works
        </button>
      </Link>
    </div>
  );
}

export default ArtistInfo;