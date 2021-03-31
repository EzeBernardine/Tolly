import React from "react";
import { Styles } from "./styles.js";
import { Frame } from "../Box/styles";

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
