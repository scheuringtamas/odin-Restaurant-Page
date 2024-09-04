function contact() {
  const content = document.getElementById("content");
  content.textContent = "";

  const contact = document.createElement("div");
  contact.id = "contactDiv";
  content.appendChild(contact);

  const title = document.createElement("h3");
  title.textContent = "Mama Bear";
  contact.appendChild(title);

  const paragraph = document.createElement("p");
  paragraph.textContent = "Springfield, IL 62704";
  contact.appendChild(paragraph);
}

export { contact };
