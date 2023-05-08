import React, { useState } from "react";

function Menu() {
  const [activeIndex, setActiveIndex] = useState(0); // set the initial active index to the first menu item

  const handleMenuItemClick = (index) => {
    setActiveIndex(index);
  };

  const menuItems = [
    { label: "Menu Item 1", bgColor: "#ff0000" },
    { label: "Menu Item 2", bgColor: "#00ff00" },
    { label: "Menu Item 3", bgColor: "#0000ff" },
  ]; // define an array of menu items as objects with a label and bgColor property

  const getMenuStyle = (index) => {
    if (index === activeIndex) {
      return { backgroundColor: menuItems[index].bgColor }; // set the background color to the bgColor property of the active menu item
    } else {
      return {}; // return an empty object for the inactive menu items
    }
  };

  return (
    <ul>
      {menuItems.map((item, index) => (
        <li
          key={index}
          style={getMenuStyle(index)}
          onClick={() => handleMenuItemClick(index)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
