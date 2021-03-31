import React, { useState } from "react";
import { Styles } from "./styles.js";
import { Flex, Frame } from "../../../component/Box/styles";
import { Header3, Bold, Span } from "../../../component/FontSize/styles";
import Tabs from "../../../component/Tabs";
import CreditCard from "./creditCard";
import { PadlockIcon } from "../../../assets/svg";

const PaymentDetails = () => {
  const [, setTabType] = useState("redit Card");

  return (
    <Styles>
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Header3 colorTheme="black" weight="550" size="28px">
          Payment details
        </Header3>

        <Flex width="200px" flexWrap="nowrap" alignItems="flex-start">
          <Frame object="contain" width="20px" height="20px">
            <PadlockIcon color="black" width="20px" height="20px" />
          </Frame>

          <Flex flexDir="column" alignItems="flex-start" margin=" 0 0 0 10px">
            <Bold colorTheme="black">Card is secure</Bold>
            <Span size="12px" colorTheme="primary/fade" align="start">
              Your data is protected , everything will be private
            </Span>
          </Flex>
        </Flex>
      </Flex>

      <Tabs click={(tab) => setTabType(tab)}>
        <div label="Credit Card">
          <CreditCard />
        </div>
        <div label="Paypal">Paypal</div>
        <div label="Other">Other</div>
      </Tabs>
    </Styles>
  );
};

export default PaymentDetails;
