console.log("hey!");

/*
for(let i = 0; i < 10000; i++) {
  menuItems.push({ id: i });
}
*/

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

var menu = document.querySelector("nav > ul");
console.log(menu);

function createMenuItemElement(menuItem) {
  var menuItemElement = document.createElement("li");
  menuItemElement.innerText = menuItem.id;

  var section = document.getElementById(menuItem.id);
  menuItemElement.addEventListener('click', function () {
    section.scrollIntoView({ behavior: 'smooth' });
  });

  menu.appendChild(menuItemElement);
}

menuItems.forEach(createMenuItemElement);
