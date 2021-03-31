import React from "react";
import { Styles } from "./styles.js";
import { Flex, Frame, Grid } from "../../../../component/Box/styles";
import MasterCode from "../../../../assets/yelloOrange.webp";
import Image from "../../../../assets/unnamed.png";
import Input from "../../../../component/Input";
import { VisibilityIcon } from "../../../../assets/svg";
import { generateID } from "../../../../lib/generateID.js";

const PaymentDetails = () => {
  const cardArray = [Image, Image, Image];
  return (
    <Styles>
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        className="container"
      >
        <Grid
          gap="20px"
          className="cardContainer"
          gridCol="repeat(auto-fill,minmax(250px, 1fr))"
        >
          {cardArray.map((img) => (
            <Frame
              width="250px"
              height="120px"
              className="card"
              key={generateID(15)}
            >
              <img src={img} alt="card" />
            </Frame>
          ))}
        </Grid>

        <form className="card-details">
          <Grid gap="36px">
            <Flex justifyContent="flex-start">
              <label>Credit Card</label>
              <Input text="44444 11132 6666 6644" img={MasterCode} />
            </Flex>

            <Flex justifyContent="flex-start">
              <label>Name</label>
              <Input text="Annete Murphy" />
            </Flex>

            <Flex justifyContent="flex-start">
              <Flex
                justifyContent="flex-start"
                width="150px"
                margin="0 20px 0 0"
              >
                <label>Expiration date</label>
                <Input text="08/2021" />
              </Flex>

              <Flex justifyContent="flex-start" width="100px">
                <label>CVV</label>
                <Input
                  text="407"
                  icon={<VisibilityIcon width="20px" height="20px" />}
                />
              </Flex>
            </Flex>

            <Flex justifyContent="flex-start" className="buttonWrap">
              <input type="submit" value="Confirm order" />
              <input type="submit" value="Cancel and return" />
            </Flex>
          </Grid>
        </form>
      </Flex>
    </Styles>
  );
};

export default PaymentDetails;
