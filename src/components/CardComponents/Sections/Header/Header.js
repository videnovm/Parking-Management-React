import React from "react";
import { Menu } from "semantic-ui-react";
import { Wrapper } from "./Header.styles";

const Header = ({ menuItems, activeMenu, handleHeaderOnClick }) => {
  return (
    <Wrapper>
      <Menu
        inverted
        size="huge"
        widths={menuItems.length + 1}
        pointing
        stackable
      >
        {menuItems.map((item, index) => (
          <Menu.Item
            name={item}
            key={index}
            onClick={handleHeaderOnClick}
            active={activeMenu === item ? true : false}
            color={activeMenu === item ? "blue" : "black"}
          />
        ))}{" "}
      </Menu>{" "}
    </Wrapper>
  );
};

export default Header;
