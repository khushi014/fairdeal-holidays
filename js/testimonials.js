function loadServices() {
  const container = document.getElementById("testimonials-cards-container");

  const testimonials = [
    {
      title: "Subba Rao Ganti",
      desc: " We have been availing the services of Fairdeal for the past 20 years on various occasions. Fairdeal offers exceptionally high quality professional services with a touch of love and affection. Their prompt response to address any issues during ticketing, travel etc., is commendable. My best wishes to Fairdeal in providing great services to their customers.",
    },
    {
      title: "Subba Rao Ganti",
      desc: " We have been availing the services of Fairdeal for the past 20 years on various occasions. Fairdeal offers exceptionally high quality professional services with a touch of love and affection. Their prompt response to address any issues during ticketing, travel etc., is commendable. My best wishes to Fairdeal in providing great services to their customers.",
    },
    {
      title: "Subba Rao Ganti",
      desc: " We have been availing the services of Fairdeal for the past 20 years on various occasions. Fairdeal offers exceptionally high quality professional services with a touch of love and affection. Their prompt response to address any issues during ticketing, travel etc., is commendable. My best wishes to Fairdeal in providing great services to their customers.",
    },
  ];

  testimonials.forEach((testimonial) => {
    const col = document.createElement("div");
    col.className = "testimonials";

    col.innerHTML = `
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
      <div class="testimonials-rating">
        <img src="images/testimonail-star.svg" class="img-fluid" alt="" />
        <img src="images/testimonail-star.svg" class="img-fluid" alt="" />
        <img src="images/testimonail-star.svg" class="img-fluid" alt="" />
        <img src="images/testimonail-star.svg" class="img-fluid" alt="" />
        <img src="images/testimonail-star.svg" class="img-fluid" alt="" />
      </div>
    `;
    container.appendChild(col);
  });
}

// Call the function to load destinations
loadServices();
