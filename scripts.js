console.log("hey!");

/*
for(let i = 0; i < 10000; i++) {
  menuItems.push({ id: i });
}
*/

// объявляем массив пунктов меню
var menuItems = [
  {
    id: "section-1"
  },
  {
    id: "section-2"
  },
  {
    id: "section-3"
  }
];

// находим элемент меню
var menu = document.querySelector("nav > ul");
console.log(menu);

// объявляем функцию createMenuItemElement
function createMenuItemElement(menuItem) {
  // создаём новый элемент <li>
  var menuItemElement = document.createElement("li");
  // ставим ему внутрь текст из menuItem.id
  menuItemElement.innerText = menuItem.id;

  // находим элемент по id
  var section = document.getElementById(menuItem.id);
  // добавляем обработчик события клик созданному выше элементу <li>
  menuItemElement.addEventListener('click', function () {
    // скроллим до элемента section
    section.scrollIntoView({ behavior: 'smooth' });
  });

  // добавляем созданный выше элемент в меню
  menu.appendChild(menuItemElement);
}

// для каждого элемента массива menuItems вызываем функцию createMenuItemElement
menuItems.forEach(createMenuItemElement);
