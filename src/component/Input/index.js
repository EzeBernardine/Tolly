import React, { useState, useRef } from "react";
import { Styles } from "./styles.js";
import { Flex, Frame, Grid } from "../Box/styles";
import { Header4, Header3, Span } from "../FontSize/styles";
import Tabs from "../Tabs";
import Logo from "../../assets/woman-coder.webp";

const Input = ({ icon, img, text }) => {
  return (
    <Styles>
      <input placeholder={text} />
      {img ? (
        <Frame width="25px" height="25px" object="contain">
          <img src={img} alt="icon" />
        </Frame>
      ) : icon ? (
        icon
      ) : null}
    </Styles>
  );
};

export default Input;
