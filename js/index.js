const date = document.getElementById("date");
const nowDate = new Date();
const formattedDate =
  nowDate.getFullYear() +
  ". " +
  (nowDate.getMonth() + 1) +
  ". " +
  nowDate.getDate();

date.innerHTML = formattedDate;

// 갑/을 이름
const clientIdInput = document.getElementById("client-input");
const providerInput = document.getElementById("provider-input");

const clientIdValue = document.getElementById("client-value");
const providerIdValue = document.getElementById("provider-value");

// input => span 토글
const saveBtn = document.getElementsByClassName("save-button");
const pdfBtn = document.getElementsByClassName("pdf-button");
const saveBtnContainer = document.getElementsByClassName("button-container");
const inputs = document.getElementsByClassName("inputs");

// input 여러개
const termInput = document.getElementById("term-input");
const dutyInput = document.getElementById("duty-input");

clientIdInput.addEventListener(
  "input",
  (e) => (clientIdValue.innerHTML = e.target.value)
);

providerInput.addEventListener(
  "input",
  (e) => (providerIdValue.innerHTML = e.target.value)
);

termInput.addEventListener("keyup", (e) => {
  const newInput = document.createElement("input");
  newInput.setAttribute("placeholder", "ex. 1. 살이라 함은, 체중을 뜻한다.");
  newInput.setAttribute("class", "inputs term-input");
  newInput.setAttribute("style", "width: 60%");
  if (e.key === "Enter") {
    termInput.parentNode.appendChild(newInput);
  }
});

dutyInput.addEventListener("keyup", (e) => {
  const newInput = document.createElement("input");
  newInput.setAttribute(
    "placeholder",
    "ex. 1. 갑과 을 모두 최선을 다해 다이어트에 임한다."
  );
  newInput.setAttribute("class", "inputs term-input");
  newInput.setAttribute("style", "width: 60%");
  if (e.key === "Enter") {
    dutyInput.parentNode.appendChild(newInput);
  }
});

// save 클릭 시
const onSaveFunc = () => {
  const inputsArr = [...inputs];

  // input => span 으로 교체
  if (inputsArr) {
    inputsArr.map((input) => {
      if (
        input.classList.contains("duty-input") ||
        input.classList.contains("term-input")
      ) {
        console.log();
        const inputValue = document.createElement("p");
        inputValue.innerHTML = input.value;
        input.replaceWith(inputValue);
      } else {
        const inputValue = document.createElement("span");
        inputValue.innerHTML = input.value;
        input.replaceWith(inputValue);
      }
    });
  }
};

const htmlToPdf = () => {
  console.log("@!!!");
  const newWindow = window.open();
  const html = document.createElement("html");
  const head = document.head.cloneNode(true);
  const body = document.createElement("body");
  const header = document.getElementById("header").cloneNode(true);
  const main = document.getElementById("main").cloneNode(true);

  body.appendChild(header);
  body.appendChild(main);

  html.appendChild(head);
  html.appendChild(body);

  newWindow.document.write(html.innerHTML);
  newWindow.document.close();
  console.log(newWindow.document);

  setTimeout(() => {
    newWindow.print();
    newWindow.close();
  }, 100);
};

// input 여러개일 때
