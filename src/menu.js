import burgerImg from "./images/burger.jpg";
import breadImg from "./images/bread.jpg";

const cards = [
  {
    name: "Burger",
    description:
      "A burger is a patty of ground beef grilled and placed between two halves of a bun.",
    img: burgerImg,
    price: "3$",
  },
  {
    name: "Bread",
    description:
      "Bread, baked food product made of flour or meal that is moistened, kneaded, and sometimes fermented.",
    img: breadImg,
    price: "1$",
  },
];

function menu() {
  const content = document.getElementById("content");
  content.textContent = "";

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  for (let menuItem of cards) {
    const div = document.createElement("div");
    div.classList.add("card");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img-wrapper");
    const itemImg = document.createElement("img");
    itemImg.src = menuItem.img;
    imgWrapper.appendChild(itemImg);
    div.appendChild(imgWrapper);

    const itemName = document.createElement("h3");
    itemName.textContent = menuItem.name;
    itemName.classList.add("item-name");
    div.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = menuItem.description;
    itemDescription.classList.add("description");
    div.appendChild(itemDescription);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = menuItem.price;
    div.appendChild(itemPrice);

    wrapper.appendChild(div);
  }

  content.appendChild(wrapper);
}

export { menu };
