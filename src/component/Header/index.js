import React, { useState, useRef } from "react";
import { Styles } from "./styles.js";
import { Flex, Frame } from "../../component/Box/styles";
import { Span, Header4 } from "../../component/FontSize/styles";
import Logo from "../../assets/woman-coder.webp";
import User from "../../assets/me.jpg";
import { DropdownIcon } from "../../assets/svg";

const Header = () => {
  return (
    <Styles>
      <Flex justifyContent="space-between">
        <Flex width="max-content">
          <Frame object="contain" width="30px" height="30px">
            <img src={Logo} alt="logo" />
          </Frame>
          <Header4 colorTheme="black">Tolly</Header4>
        </Flex>

        <Flex width="max-content" className="user">
          <Frame width="15px" height="15px" rounded>
            <DropdownIcon width="15px" height="15px" />
          </Frame>
          <Span colorTheme="black">Tolly</Span>
          <Frame width="40px" height="40px" rounded>
            <img src={User} alt="logo" />
          </Frame>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Header;
