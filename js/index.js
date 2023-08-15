console.log("hi");

const clientIdInput = document.getElementById("client-input");
const providerInput = document.getElementById("provider-input");

const clientIdValue = document.getElementById("client-value");
const providerIdValue = document.getElementById("provider-value");

clientIdInput.addEventListener(
  "input",
  (e) => (clientIdValue.innerHTML = e.target.value)
);

providerInput.addEventListener(
  "input",
  (e) => (providerIdValue.innerHTML = e.target.value)
);
