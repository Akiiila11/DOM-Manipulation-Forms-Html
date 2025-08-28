const addValues = document.getElementById("form");

addValues.addEventListener("submit", function (sub) {
  sub.preventDefault();

//   get form values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const mobile = document.getElementById("mobile-no").value;
  const email = document.getElementById("email-id").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const address = document.getElementById("addr").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const pinCode = document.getElementById("pin-code").value;
  const cars = [];

  const checkBox = document.querySelectorAll('input[type="checkbox"]:checked');
  checkBox.forEach(function (checkbox) {
    cars.push(checkbox.nextElementSibling.textContent);
  });

//   reference to the table body
  const tableRow = document.querySelector(".table tbody");
  const newRow = tableRow.insertRow();
  
//   insert cells into the row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);
  const cell7 = newRow.insertCell(6);
  const cell8 = newRow.insertCell(7);
  const cell9 = newRow.insertCell(8);
  const cell10 = newRow.insertCell(9);
  const cell11 = newRow.insertCell(10);

  cell1.textContent = firstName;
  cell2.textContent = lastName;
  cell3.textContent = mobile;
  cell4.textContent = email;
  cell5.textContent = gender;
  cell6.textContent = address;
  cell7.textContent = city;
  cell8.textContent = state;
  cell9.textContent = country;
  cell10.textContent = pinCode;
  cell11.textContent = cars.join(", ");

  document.getElementById("form").reset();
});
