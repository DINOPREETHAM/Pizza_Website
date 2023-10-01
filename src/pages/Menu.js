import React from "react";
import "../styles/Menu.css";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">OUR MENU</div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          // console.log(menuItem, key);
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
