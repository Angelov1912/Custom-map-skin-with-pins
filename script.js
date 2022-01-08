//Coordinates- 37.994926, 23.697439
//Coordinates are used to center the map to this location
//In this case map is centered on the pin so coordinates are the same

//IF USED AS A TEMPLATE, READ THE BELLOW COMMENTS


//Map ID to be changed with ID of the relevant map
//Coordinates to be changed with clients location on the relevant map
//Path to marker images to be changed with the ones for the relvant map

function initMap() {
    //Location where we center the map
    const location = { lat: 37.994926, lng: 23.697439 };
    const map = new google.maps.Map(document.getElementById("map"), {
      mapId: "a210e3b986403917",
      center: location,
      zoom: 14,
    });

    //Add Marker
  const marker = new google.maps.Marker({
    position: location, //This map is centered on the pin, so we use the same variable
    map: map,
    title: "Location to be edited according to client",
    draggable: true,
    animation: google.maps.Animation.DROP, //Animation single drop effect on page load
    icon: {
      url: "hospital-h.svg",
      scaledSize: new google.maps.Size(60, 60), //Adjust the size of the marker
    }
  });

  //Create an info window for the location of the pin
  const infowindow = new google.maps.InfoWindow({
    content: "Custom pin- text to be edited depending on the website", //Text of the info bubble to be changed here
  });

  //Add event listeber that opens the info window when click on the pin
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });  
}
