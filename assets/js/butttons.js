const secondaryButtons = document.getElementsByClassName("btn--secondary");

function changeElementText(element, type) {
  console.log(element);
  if (type == "on") {
    element.setAttribute("data-text-original", element.innerHTML);
    element.innerHTML = element.getAttribute("data-text-swap");
  } else if (type == "out") {
    element.innerHTML = element.getAttribute("data-text-original");
  }
}

for (let index = 0; index < secondaryButtons.length; index++) {
  const button = secondaryButtons[index];
  button.addEventListener("mouseover", function() {
    changeElementText(button, "on");
  }, false);
  button.addEventListener("focus", function() {
    changeElementText(button, "on");
  }, false);
  button.addEventListener("mouseout", function() {
    changeElementText(button, "out");
  }, false);
  button.addEventListener("focusout", function() {
    changeElementText(button, "out");
  }, false);
}