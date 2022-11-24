import "./style.css";

const button = document.querySelector("button");
const input = document.querySelector("input");
const result = document.querySelector("span");

button.addEventListener("click", () => {
  const numberOfSmallA = getNumberOfSmallA(input.value);
  result.textContent = numberOfSmallA;
});

const getNumberOfSmallA = (text) => {
  return text.split("").reduce((acc, cur) => {
    const isA = cur === "a";
    const numberOfSmallA = acc + isA;

    return numberOfSmallA;
  }, 0);
};
