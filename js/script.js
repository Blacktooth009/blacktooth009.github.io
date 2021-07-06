let buttonMenu = document.querySelector("#menu_button");
// Text diplay ↓
let displayContentEdit = document.querySelector("#display_content_hide");
let displayMenuEdit = document.querySelector("#menu_start");
let switchKey = 0;

buttonMenu.onclick = function displaySetup() {
  if (switchKey === 0) {
    hideText();
    switchKey = 1;
    console.log(switchKey);
  } else {
    hideMenu();
    switchKey = 0;
    console.log(switchKey);
  }
};

function hideText() {
  displayContentEdit.classList.remove("display_text");
  displayContentEdit.classList.add("display_text_hide");
  displayMenuEdit.classList.remove("header_menu_hide");
  displayMenuEdit.classList.add("header_menu");
  displayMenuEdit.classList.add("header_menu_service");

  console.log("Click key1");
  console.log(switchKey);
}

function hideMenu() {
  displayMenuEdit.classList.replace("header_menu", "header_menu_hide");
  displayContentEdit.classList.replace("display_text_hide", "display_text");
  
  console.log("Click key2");
  console.log(switchKey);
}
