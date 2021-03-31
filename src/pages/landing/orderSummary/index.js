import React, { useState, useRef } from "react";
import { Styles, PaymentStyles, SummaryStyles } from "./styles.js";
import { Flex, Frame, Grid } from "../../../component/Box/styles";
import { Header3, Bold, Span, Small } from "../../../component/FontSize/styles";
import Accordion from "../../../component/Acordion";
import { ShippingIcon, PaymentIcon, ReviewIcon } from "../../../assets/svg";

const OrderSummary = () => {
  const summary = [
    {
      icon: <ShippingIcon width="30px" height="20px" />,
      text: "Shipping",
      color: "#ced9fd",
    },
    {
      icon: <PaymentIcon width="30px" height="20px" />,
      text: "Payment",
      color: "#f9cba0",
    },
    {
      icon: <ReviewIcon width="30px" height="20px" />,
      text: "Review",
      color: "#bddba6",
    },
  ];

  const panels = [
    {
      label: "Prada",
      content: (
        <Grid>
          <Flex justifyContent="space-between">
            <Small colorTheme="primary/darker" weight="500">
              Leather mini-bag
            </Small>
            <Span colorTheme="black" size="14px">
              &#36; 1500.00
            </Span>
          </Flex>
          <Flex justifyContent="space-between">
            <Small colorTheme="primary/darker" weight="500">
              Estimated SHipping
            </Small>
            <Span colorTheme="black" size="14px">
              &#36; 1500.00
            </Span>
          </Flex>
          <Flex justifyContent="space-between">
            <Small colorTheme="primary/darker" weight="500">
              Discount
            </Small>
            <Span colorTheme="black" size="14px">
              &#36; 0.00
            </Span>
          </Flex>
          <Flex justifyContent="space-between">
            <Small colorTheme="primary/darker" weight="500">
              Total
            </Small>
            <Span colorTheme="black" size="14px">
              &#36; 2220.00
            </Span>
          </Flex>
        </Grid>
      ),
    },

    {
      label: "Dr Martens",
      content:
        "Therefore, useDebugValue accepts a formatting function as an optional second parameter. The function is only called if the hooks are inspected.  It receives the debug value as a parameter and returns the formatted display value.  ",
    },
    {
      label: "Chanel",
      content:
        "herefore, useDebugValue accepts a formatting function as an optional second parameter. The function is only called if",
    },
  ];

  return (
    <Styles>
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Header3 size="28px" colorTheme="black" weight="550">
          Order Summary
        </Header3>
      </Flex>
      <Grid
        gridCol="repeat(auto-fill, minmax(120px, 1fr))"
        justifyContent="space-between"
      >
        {summary.map(({ icon, text, color }, i) => (
          <Flex width="max-content">
            <Flex
              width="40px"
              height="40px"
              bgColor={color}
              className="iconWrap"
            >
              {icon}
            </Flex>
            <Flex
              width="max-content"
              flexDir="column"
              margin="0 0 0 10px"
              alignItems="flex-start"
            >
              <Small colorTheme="primary/dark">Step {i + 1}</Small>
              <Span colorTheme="primary/dark" size="15px" lineHeight="22px">
                {text}
              </Span>
            </Flex>
          </Flex>
        ))}
      </Grid>
      <Accordion panels={panels} />``
      <footer>
        <Flex justifyContent="space-between">
          <Span colorTheme="primary/darker" weight="500">
            Total Amount
          </Span>
          <Span colorTheme="black" size="18px" bold>
            &#36; 3650.00
          </Span>
        </Flex>
      </footer>
    </Styles>
  );
};

export default OrderSummary;
