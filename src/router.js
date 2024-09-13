const route = () => {
  const event = window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  locationHandler();
};

const routes = {
  "/product": {
    template: "/src/pages/product.html",
    title: "Product",
    description: "This is product",
  },
  "/": {
    template: "/src/pages/home.html",
    title: "Home",
    description: "This is the home page",
  },
  "/about": {
    template: "/src/pages/about.html",
    title: "About Us",
    description: "This is the about page",
  },
  "/pricing": {
    template: "/src/pages/pricing.html",
    title: "Pricing",
    description: "This is the pricing page",
  },
  "/contact": {
    template: "/src/pages/contact.html",
    title: "Contact Us",
    description: "This is the contact page",
  },
};

const locationHandler = async () => {
  const location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = "/";
  }
  // get the route object from the urlRoutes object
  const route = routes[location] || routes["404"];
  // get the html from the template
  const html = await fetch(route.template).then((response) => response.text());
  // set the content of the content div to the html
  document.getElementById("root").innerHTML = html;
  // set the title of the document to the title of the route
  document.title = route.title;
  // set the description of the document to the description of the route
  document
    .querySelector('meta[name="description"]')
    .setAttribute("root", route.description);
};

document.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("nav a")) {
    return;
  }
  event.preventDefault();
  route();
});

window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();

// router from handleD
