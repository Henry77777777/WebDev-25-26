function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");
  let build = "";
  build += `<div>
              <h2>${school.name}</h2>
              <img src = "${school.image}">
              <p>${school.address}</p>
            </div>`;
  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Kendrick Lamar",
    "image":"kendricklamar.webp",
    "album":"Not Like Us",
    "url":"https://www.youtube.com/@kendricklamar/about"
  };
  let output = document.getElementById("output");
  let build = "";
  build += `<div>
                <h2>${artist.name}</h2>
                <p>${artist.album}</p>
                <a href = "${artist.url}"target = blank>
                <img src = "${artist.image}">
                </a>
                </div>`
  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  output.innerHTML = build;
}




