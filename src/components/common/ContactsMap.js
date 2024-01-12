import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
// eslint-disable-next-line no-unused-vars
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Contacts from "../Contacts";
import iconUrl from "../../assets/img/marker.svg";

function ContactsMap() {
  const customIcon = new L.Icon({
    iconUrl: iconUrl,
    iconSize: [52, 78],
    iconAnchor: [0, 73],
    popupAnchor: [26, -72],
  });
  return (
    <section className="map">
      <div id="map">
        <MapContainer
          center={[37.733342553128155, -122.38638130100699]}
          zoom={15}
          scrollWheelZoom={true}
          gestureHandling={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          />
          <Marker
            position={[37.73342553128155, -122.38638130100699]}
            icon={customIcon}
          >
            <Popup>Tattoo studio</Popup>
          </Marker>
        </MapContainer>
      </div>
      <Contacts />
    </section>
  );
}

export default ContactsMap;
