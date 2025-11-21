function loadServices() {
  const container = document.getElementById("travel-categories-cards");
  const categories = [
    {
      title: "Mountain",
      svgPath: "/images/tc1.svg",
    },
    {
      title: "Iconic",
      svgPath: "/images/tc2.svg",
    },
    {
      title: "Beach",
      svgPath: "/images/tc3.svg",
    },
    {
      title: "Jungle",
      svgPath: "/images/tc4.svg",
    },
    {
      title: "Rural",
      svgPath: "/images/tc5.svg",
    },
    {
      title: "Desert",
      svgPath: "/images/tc6.svg",
    },
  ];

  categories.forEach((category) => {
    const col = document.createElement("div");
    col.className = "col-md-2";

    col.innerHTML = `
        <div class="individual-category">
            <h3>${category.title}</h3>
            <img src='${category.svgPath}' alt='${category.title}' class='img-fluid'/>
        </div>
`;

    container.appendChild(col);
  });
}

loadServices();
