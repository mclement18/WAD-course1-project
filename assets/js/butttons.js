// Get secondary buttons
const secondaryButtons = document.getElementsByClassName("btn--secondary");
// Get input file elements and triggers
const fileInputs = document.getElementsByClassName("input__file");
const fileButtons = document.getElementsByClassName("input__file-trigger");

// Change the displayed text in the button by the swap text and save original (type ==  "on")
// Change it back to the original text (type == "out")
function changeElementText(element, type) {
  console.log(element);
  if (type == "on") {
    element.setAttribute("data-text-original", element.innerHTML);
    element.innerHTML = element.getAttribute("data-text-swap");
  } else if (type == "out") {
    element.innerHTML = element.getAttribute("data-text-original");
  }
}

// Add event listeners to secondary buttons on the page
// When focus or mouseover -> use changeElementText() with type == "on"
// When focusout or mouseout -> use changeElementText() with type =="out"
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

// Add event listener to all input file elements on the page
// When change, replace the text of the trigger by the selected file name
for (let index = 0; index < fileInputs.length; index++) {
  const input = fileInputs[index];
  input.addEventListener("change", function() {  
    fileButtons[index].innerHTML = this.value.split("\\").pop();  
  });  
}
