function showMap() {
  let map = L.map("map").setView([49.99156074653186, 36.23183824527851], 13);

  L.tileLayer(
    "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  ).addTo(map);

  // const marker = L.icon({
  //   iconUrl: "assets/img/Pin.png",
  // });

  // L.marker([40.68109417370822, -73.90362749889778], { icon: marker })
  //   .addTo(map)
  //   .openPopup();
}

document.getElementById("go_map").addEventListener("click", function (e) {
  e.preventDefault();
  // if (e.target.id === "go_map") {
  //   showMap();
  // }
  showMap();
});

showMap();
