import "./styles/stylekanban.css";
import routes from "./routes.js";

//arrow function - 2015
export const router = async () => {
  const app = document.getElementById("app");
  const path = location.pathname || "/";
  const route = routes[path];

  try {
    const res = await fetch(route.path);
    const html = await res.text();
    app.innerHTML = html;


  } catch (error) {
    app.innerHTML = "<h1> 404 PAGE NOT FOUND </h1>";
  }
};

router();
