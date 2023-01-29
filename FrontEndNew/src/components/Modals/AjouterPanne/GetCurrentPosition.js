const getCurrentPosition = () => {
  //   const options = {
  //     enableHighAccuracy: true,
  //     timeout: 5000,
  //     maximumAge: 0,
  //   };

  //   function success(pos) {
  //     const crd = pos.coords;

  //     console.log("Votre position actuelle est :");
  //     console.log(`Latitude : ${crd.latitude}`);
  //     console.log(`Longitude : ${crd.longitude}`);
  //     console.log(`La précision est de ${crd.accuracy} mètres.`);
  //   }

  //   function error(err) {
  //     console.warn(`ERREUR (${err.code}): ${err.message}`);
  //   }

  //   navigator.geolocation.getCurrentPosition(success, error, options);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
      },
      function () {
        alert("nope");
      }
    );
  }
};

export default getCurrentPosition;
