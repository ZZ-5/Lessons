const root = document.getElementById("root");

const onWordClick = (event) => {
  console.log("event ", event);

  console.log(`${event.target.innerText} clicked!`);
};

const getKeyboard = () => {
  const alph = "qwertyuiopasdfghjklzxcvbnm";

  const keyboard = document.createElement("div");
  keyboard.className = "keyboard";

  const keyboardBtns = alph.split("").map((word) => {
    const newElement = document.createElement("button");
    newElement.appendChild(document.createTextNode(word));
    newElement.className = "keyboard__btn";
    newElement.onclick = onWordClick;

    return newElement;
  });

  keyboard.append(...keyboardBtns);

  return keyboard;
};

if (document) {
  let keyboard = getKeyboard();

  root.append(keyboard);
}
