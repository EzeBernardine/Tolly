import React from "react";
import { Styles, PaymentStyles, SummaryStyles } from "./styles.js";
import { Flex } from "../../component/Box/styles";
import Header from "../../component/Header";
import PaymentDetails from "./paymentDetails";
import OrderSummary from "./orderSummary";

const Landing = () => {
  return (
    <Styles>
      <Flex minHeight="100vh" alignItems="flex-start">
        <Flex width="60%" alignItems="flex-start">
          <PaymentStyles>
            <Header />
            <PaymentDetails />
          </PaymentStyles>
        </Flex>

        <Flex width="40%" inHeight="100vh">
          <SummaryStyles>
            <OrderSummary />
          </SummaryStyles>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Landing;
