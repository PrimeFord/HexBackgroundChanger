const bodyEl = document.querySelector("body");
const btn = document.querySelector(".button");
const pEl = document.querySelector("p");
const span = document.createElement("span");

btn.addEventListener(
  "click",
  (randomHexBackground = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    span.textContent = "#" + randomColor.toLocaleUpperCase();
    pEl.appendChild(span);

    bodyEl.style.background = "#" + randomColor;
  })
);
