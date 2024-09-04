function home() {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  container.id = "containerDiv";
  content.appendChild(container);

  const title = document.createElement("h1");
  title.textContent = "Beary's Breakfast Bar";
  container.appendChild(title);

  const welcomeDiv = document.createElement("div");
  welcomeDiv.id = "welcome";
  container.appendChild(welcomeDiv);

  const welcomeP = document.createElement("p");
  welcomeP.id = "welcomeP";
  welcomeP.textContent =
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  welcomeDiv.appendChild(welcomeP);
}

export { home };
