let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "/test-site/images/firefox-icon.svg.png") {
    myImage.setAttribute("src", "/test-site/images/firefox-icon-2.svg.png");
  } else {
    myImage.setAttribute("src", "/test-site/images/firefox-icon.svg.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please Enter your name.");
  if(!myName){
      setUserName();
  }else{
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
  }
}
if(!localStorage.getItem("name")){
    setUserName();
}else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function(){
    setUserName();
}

