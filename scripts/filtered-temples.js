const temples = [
  {
    name: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    name: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "images/manti-temple.jpg"
  },
  {
    name: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "images/payson-utah-temple.jpg"
  },
  {
    name: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl: "images/yigo_guam_temple.jpg"
  },
  {
    name: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "images/washington_dc_temple.jpg"
  },
  {
    name: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl: "images/lima-peru-temple-evening.jpg"
  },
  {
    name: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "images/mexico-city-temple.jpg"
  },
  {
    name: "Sao Paulo Brazil Temple",
    location: "Sao Paulo, Brazil",
    dedicated: "1978-10-30",
    area: 59246,
    imageUrl: "images/sao-paulo-brazil-temple.jpg"
  },
  {
    name: "Recife Brazil Temple",
    location: "Recife, Brazil",
    dedicated: "2000-12-15",
    area: 37200,
    imageUrl: "images/recife-brazil-temple.jpg"
  },

  {
    name: "Porto Alegre Brazil Temple",
    location: "Porto Alegre, Brazil",
    dedicated: "2000-12-17",
    area: 13325,
    imageUrl: "images/porto-alegre-brazil-temple.jpg"
  },
  {
    name: "Campinas Brazil Temple",
    location: "Campinas, Brazil",
    dedicated: "2002-05-17",
    area: 48100,
    imageUrl: "images/campinas-brazil-temple.jpg" }
];

function displayTemples(filteredTemples) {
  const container = document.querySelector("#temples-container");
  container.innerHTML = ""; 

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

document.querySelector("#home").addEventListener("click", () => displayTemples(temples));
document.querySelector("#old").addEventListener("click", () => displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)));
document.querySelector("#new").addEventListener("click", () => displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)));
document.querySelector("#large").addEventListener("click", () => displayTemples(temples.filter(t => t.area > 90000)));
document.querySelector("#small").addEventListener("click", () => displayTemples(temples.filter(t => t.area < 10000)));

displayTemples(temples);

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;