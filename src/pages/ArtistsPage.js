import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import artistsData from "../data/artists.json";
import "atropos/css";
import Atropos from "atropos/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import nick_gallery from "../data/nick_gallery.json";

function ArtistPage() {
    const { artistName } = useParams();
    const [artist, setArtist] = useState(null);
  
    useEffect(() => {
      const artistData = artistsData.find((artist) => artist.link === artistName);
      setArtist(artistData);
    }, [artistName]);
    
    if (!artist) {
      return <div>404</div>;
     }

  return (
    <div className="nick_wrap">
      <main>
        <section className="artists_page">
          <div className="container">
            <div className="artist_page_item reverse">
              <div className="artist_page_info animate__animated animate__slideInRight">
                <Atropos shadow={false} highlight={false}>
                  <h2 className="title_h2">{artist.name}</h2>
                </Atropos>
                <p className="text1">{artist.description1}</p>
                <p className="text2">{artist.description2}</p>
                <Link to="/application">
                  <button type="button" className="btn btn_long btn_nick">
                    Make an appointment
                  </button>
                </Link>
              </div>
              <div className="artist_photo animate__animated animate__slideInLeft">
                <img src={`./assets/img/${artist.image}`} alt={`${artist.name}_master`} />
              </div>
            </div>
          </div>
          <div className="nick_gallery">
            <div className="container_1440">
              <div className="grid_gallery">
                <LightGallery
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  thumbWidth={100}
                  className="lightgallery"
                >
                  {nick_gallery.map((el, index) => {
                    return (
                      <a
                        key={index}
                        href={`./assets/img/gallery/${el.src}`}
                        className="grid_item"
                      >
                        <img
                          src={`./assets/img/gallery/${el.src}`}
                          alt="tattoo_item"
                        />
                      </a>
                    );
                  })}
                </LightGallery>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ArtistPage; 