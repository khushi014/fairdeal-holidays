function loadServices() {
  const container = document.getElementById("service-cards-container");
  const services = [
    {
      title: "Domestic & International Tours",
      svgPath: "/images/s1.svg",
    },
    {
      title: "Air Tickets",
      svgPath: "/images/s2.svg",
    },
    {
      title: "Visas",
      svgPath: "/images/s3.svg",
    },
    {
      title: "Hotels",
      svgPath: "/images/s4.svg",
    },
    {
      title: "Cruises",
      svgPath: "/images/s5.svg",
    },
    {
      title: "Travel Insurance",
      svgPath: "/images/s6.svg",
    },
    {
      title: "Passports",
      svgPath: "/images/s7.svg",
    },
  ];

  services.forEach((service) => {
    const col = document.createElement("div");
    col.className = "col-md-3";

    col.innerHTML = `
                     <div class="service-card-shadow">
              <div class="service-card">
               <img src='${service.svgPath}' alt='${service.title}' class='img-fluid'/>
                <h3>${service.title}</h3>
              </div>
            </div>
                `;

    container.appendChild(col);
  });
}

loadServices();
