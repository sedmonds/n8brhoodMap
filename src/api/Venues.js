const CLIENT = "QEDGLBW2DKG1VNT15ERQBMZCCLVKO4J3JDNP4UJQTLH35FBZ";
const SECRET = "SDEEK4HQN34GE24JP2TELDEJWX3CRI3V1X0YLO4CV15FF4CJ";

// Grocery Store - 4bf58dd8d48988d118951735
// Supermarket 52f2ab2ebcbc57f1066b8b46

// Health Food Store 50aa9e744b90af0d42d5de0e
// zipcode 96749

export let getVenues = () => {
  return fetch(`https://api.foursquare.com/v2/venues/explore?categoryId=4bf58dd8d48988d118951735&near=96749&client_id=${CLIENT}&client_secret=${SECRET}&v=20190212
`)
    .then(response => response.json())
    .then(result => result.response.groups[0].items);
};

