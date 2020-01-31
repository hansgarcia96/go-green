import "../sass/styles.scss";

console.log("Webpack Boilerplate");

const today = new Date(2020, 0, 30);

let theYear = today.getFullYear();
let lastMonth = today.getMonth() - 1;
if (lastMonth < 0) {
  theYear = theYear - 1;
  lastMonth = 11;
} else {
  lastMonth = lastMonth - 1;
}
const oldTime = new Date(theYear, lastMonth, 26);
let options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric"
};
console.log(oldTime.toLocaleDateString("en-US", options));

let dynamicDate = document.getElementById("page-date");
dynamicDate.innerHTML = `${oldTime.toLocaleDateString("en-US", options)}`;

// CHECK FIRST VISIT

function setCookie(cookieName, value, exdays) {
  var exdate = new Date();

  exdate.setDate(exdate.getDate() + exdays);

  var cookieValue =
    escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = cookieName + "=" + cookieValue;
}

function getCookie(cookieName) {
  var cookieValue = document.cookie;
  var cookieStart = cookieValue.indexOf(" " + cookieName + "=");
  if (cookieStart == -1) {
    cookieStart = cookieValue.indexOf(cookieName + "=");
  }
  if (cookieStart == -1) {
    cookieValue = null;
  } else {
    cookieStart = cookieValue.indexOf("=", cookieStart) + 1;
    var cookieEnd = cookieValue.indexOf(";", cookieStart);
    if (cookieEnd == -1) {
      cookieEnd = cookieValue.length;
    }
    cookieValue = unescape(cookieValue.substring(cookieStart, cookieEnd));
  }
  return cookieValue;
}

function checkSession() {
  var c = getCookie("visited");
  if (c === "yes") {
    //  alert("Welcome back!");
  } else {
    alert("Welcome new visitor!");
  }
  setCookie("visited", "yes", 365); // expire in 1 year; or use null to never expire
}

checkSession();

function myFunction(e, data) {
  e.preventDefault();

  const formData = { lastName: data.lastName.value, email: data.email.value };
  console.log(formData);
}
