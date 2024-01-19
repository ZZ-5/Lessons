// загрузим данные из json асинхронно в браузере
let data = await fetch("./data.json"); // получить json
data = await data.json(); // приведем к обьекту

// найдем корневой тег
let root = document.getElementById("root");

// реализовать метод, который пробегается по дереву компонентов и создает его
function createNodes(objData) {
  if (!objData.children) {
    const elem = document.createElement(objData.tagName);
    elem.className = objData.className;
    return elem;
  }

  const elem = document.createElement(objData.tagName);
  elem.className = objData.className;

  objData.children.forEach((child) => {
    elem.append(createNodes(child));
  });

  return elem;
}

// вставим результат обхода обьекта данных в корневой тэг
root.append(createNodes(data));
