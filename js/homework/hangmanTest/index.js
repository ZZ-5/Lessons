// загрузим данные из json асинхронно в браузере
let data = await fetch("./data.json"); // получить json
data = await data.json(); // приведем к обьекту

// найдем корневой тег
let root = document.getElementById("root");

const createNode = (objData) => {
  const elem = document.createElement(objData.tagName);

  Object.keys(objData).map((key) => {
    if (key !== "children" && key !== "tagName") {
      elem[key] = objData[key];
    }
  });

  return elem;
};

// реализовать метод, который пробегается по дереву компонентов и создает его
function createNodes(objData) {
  if (!objData.children) {
    // если children пустой, то создаем последний элемент и возвращаем
    const elem = createNode(objData);
    return elem;
  }

  const elem = createNode(objData);

  objData.children.forEach((child) => {
    // обходим дочерние узлы элемента
    elem.append(createNodes(child)); // вызываем для каждого дочернего узла метод и добавляем результат в текущий элемент
  });

  return elem; // возвращаем текущий элемент
}

// вставим результат обхода обьекта данных в корневой тэг
root.append(createNodes(data));
