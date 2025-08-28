const addValues = document.getElementById("form");

addValues.addEventListener("submit", function (sub) {
  sub.preventDefault();
});

const firstName = document.getElementById("first-name").value;
const lastName = document.getElementById("last-name").value;
const mobile = document.getElementById("mobile-no").value;
const email = document.getElementById("email-id").value;
const gender = document.querySelector('input[name="gender"]:checked').value;
const address = document.getElementById("addr").value;
const city = document.getElementById("state").value;
const country = document.getElementById("country").value;
const pinCode = document.getElementById("pin-code").value;


