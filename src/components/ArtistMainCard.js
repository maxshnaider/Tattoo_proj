import React from "react";
import Atropos from "atropos/react";
import { Link } from "react-router-dom";

function ArtistMainCard({ name, experience, link }) {
  return (
    <div className="artist_item">
      <Atropos shadow={false} highlight={false} rotateTouch={false}>
      <div className={`artist_img ${link}_card`}> 
          <div className="book">
            <span className="icon-arrow-right2"></span>
            <Link to="/application" className="book_text">
              <span>Make an appointment</span>
            </Link>
          </div>
        </div>
      </Atropos>
      <h3 className="title_h3">{name}</h3>
      <p>Work experience: {experience} years</p>
    </div>
  );
}

export default ArtistMainCard; 