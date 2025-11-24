function loadServices() {
  const container = document.getElementById("destinations-cards-container");

  const destinations = [
    {
      title: "Rajasthan",
      img: "/images/rajasthan.jpeg",
      desc: "Royal forts, golden deserts, regal palaces, rich culture, and unforgettable heritage journeys.",
    },
    {
      title: "Maharashtra",
      img: "/images/maharashtra.jpg",
      desc: "Bustling cities, serene beaches, ancient caves, hill stations, and vibrant cultural experiences.",
    },
    {
      title: "Gujarat",
      img: "/images/gujarat.jpg",
      desc: "Coastal beauty, white desert wonders, wildlife sanctuaries, temples, and colorful cultural traditions.",
    },
    {
      title: "Kerala",
      img: "/images/kerala.jpg",
      desc: "Lush backwaters, tranquil beaches, hill stations, Ayurveda retreats, and breathtaking natural beauty.",
    },
    {
      title: "Uttarakhand",
      img: "/images/uttarakhand.jpg",
      desc: "Sacred pilgrimage sites, peaceful hill towns, adventure trails, rivers, and Himalayan serenity.",
    },
    {
      title: "North East",
      img: "/images/north-east.jpg",
      desc: "Untouched landscapes, tribal culture, waterfalls, living bridges, wildlife, and pristine mountain beauty.",
    },
    {
      title: "Ladakh",
      img: "/images/ladakh.jpg",
      desc: "High-altitude deserts, monasteries, blue lakes, mountain passes, and unmatched adventure landscapes.",
    },
    {
      title: "Uttar Pradesh",
      img: "/images/uttar-pradesh.jpg",
      desc: "Spiritual cities, iconic monuments, sacred rivers, heritage sites, and diverse cultural experiences.",
    },
    {
      title: "USA",
      img: "/images/usa.jpg",
      desc: "Iconic cities, national parks, vibrant culture, stunning coastlines, and endless adventure experiences.",
    },
    {
      title: "Canada",
      img: "/images/canada.jpg",
      desc: "Majestic mountains, pristine lakes, charming cities, wildlife encounters, and breathtaking natural landscapes.",
    },
    {
      title: "Europe",
      img: "/images/europe.jpg",
      desc: "Historic landmarks, diverse cultures, scenic countryside, and world-class cuisine.",
    },
    {
      title: "South Africa",
      img: "/images/south-africa.jpg",
      desc: "Wildlife safaris, dramatic landscapes, vibrant cities, beaches, and rich cultural diversity.",
    },
    {
      title: "South Korea",
      img: "/images/south-korea.jpg",
      desc: "Modern cities, scenic mountains, rich culture, vibrant markets, and contemporary charm.",
    },
    {
      title: "Indian Islands",
      img: "/images/indian-islands.jpg",
      desc: "Tropical beaches, turquoise waters, coral reefs, luxury resorts, and peaceful island escapes.",
    },
    {
      title: "Australia",
      img: "/images/australia.jpg",
      desc: "Golden beaches, unique wildlife, modern cities, coral reefs, and vast natural wonders.",
    },
    {
      title: "Japan",
      img: "/images/japan.jpg",
      desc: "Ancient temples, futuristic cities, cherry blossoms, unique cuisine, and serene cultural experiences.",
    },
  ];

  destinations.forEach((destination) => {
    const col = document.createElement("div");
    col.className = "destinations";

    col.innerHTML = `
      <div class="image-container">
        <img src="${destination.img}" alt="${destination.title}" />
        <div class="overlay"></div>
      </div>
      <div class="destination-details">
        <h2>${destination.title}</h2>
        <p>${destination.desc}</p>
      </div>
    `;
    container.appendChild(col);
  });
}

// Call the function to load destinations
loadServices();
