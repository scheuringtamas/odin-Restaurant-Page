function contact() {
  const content = document.getElementById("content");
  content.textContent = "";
  const contact = document.createElement("div");
  contact.id = "contactDiv";
  content.appendChild(contact);
}
