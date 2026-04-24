function loadServices() {
  const container = document.getElementById("testimonials-cards-container");

  const testimonials = [
    {
      title: "Apurva Madia",
      desc: "Fairdeal Travels have been my service provider for travel related needs for last 15 years. They are extremely fair, transparent, friendly and efficient. I am very comfortable when I book tickets and hotels with them, both domestic and international travel.",
    },
    {
      title: "Anil Kansara",
      desc: "Excellent travel advisory and services in Ahmedabad. We have been associated with Fairdeal for more than a decade now. Personal attention to every need a traveler can ask for.",
    },
    {
      title: "Subba Rao Ganti",
      desc: "We have been availing the services of Fairdeal for the past 20 years on various occasions. Fairdeal offers exceptionally high quality professional services with a touch of love and affection. Their prompt response to address any issues during ticketing, travel etc., is commendable. My best wishes to Fairdeal in providing great services to their customers.",
    },
    {
      title: "Foram Shah",
      desc: "I had a wonderful experience with Mr. Ajay from Fairdeal holidays. The entire trip was well-organized. They were very responsive, provided clear information, and handled everything smoothly. The itinerary was thoughtfully planned, and all arrangements were comfortable and hassle-free. I would definitely recommend their services to anyone looking for a reliable travel guidance and bookings.",
    },
    {
      title: "Sandip Parikh",
      desc: "Great service from the first call to the end of the trip. Organized well with every detail without flaw. Also, communicated during the trip to make sure all was well. Very happy with chosen hotels, guides and transportation. Will use services again. Highly recommended!!😀",
    },
    {
      title: "Shobna Narang",
      desc: "3 days holiday to Bhuj was very well planned by Fairdeal experiencing road to heaven, watching museums of earthquake disaster, going back to history of Indus valley civilisation, experiencing camel carts and walking on salt lake. Very memorable trip. Very comfortable stay in Rann Utsav tent city with excellent hospitality.",
    },
  ];

  testimonials.forEach((testimonial) => {
    const col = document.createElement("div");
    col.className = "testimonials";

    col.innerHTML = `
     <div class="testimonials-rating">
        <img src="images/testimonail-star.svg" class="img-fluid" alt="" />
        <img src="images/testimonail-star.svg" class="img-fluid" alt="" />
        <img src="images/testimonail-star.svg" class="img-fluid" alt="" />
        <img src="images/testimonail-star.svg" class="img-fluid" alt="" />
        <img src="images/testimonail-star.svg" class="img-fluid" alt="" />
      </div>
      <div class="testimonial-upper-quote-img">
        <img
          src="images/upper-testimonial.png"
          class="img-fluid"
          alt=""
        />
      </div>
      <div class="testimonial-description">
        <h2>${testimonial.title}</h2>
        <p>${testimonial.desc}</p>
      </div>
     
    `;
    container.appendChild(col);
  });
}

// Call the function to load destinations
loadServices();
