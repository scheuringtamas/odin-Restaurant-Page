import "./styles.css";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

home();

const nav = document.querySelector("nav");

nav.addEventListener("click", onClick);

function onClick(e) {
  const page = e.target.id;

  switch (page) {
    case "home":
      home();
      break;
    case "menu":
      menu();
      break;
    case "contact":
      contact();
      break;
    default:
      home();
      break;
  }
}
