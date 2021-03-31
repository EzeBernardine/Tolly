
import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  width: ${({ width }) => width || "100%"};
  min-width: ${({ minWidth }) => minWidth && minWidth};
  height: ${({ height }) => height || "100%"};
  min-height: ${({ minHeight }) => minHeight && minHeight};
  text-align: ${({ textAlign }) => textAlign || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  margin: ${({ margin }) => margin && margin};
  background-color: ${({ bgColor }) => bgColor || 'unset'};
`;

export const Grid = styled("div")`
  display: grid;
  grid-template-columns: ${(props) => props.gridCol || "1fr"};
  grid-template-rows: ${(props) => props.gridRow || "auto"};
  grid-gap: ${(props) => props.gap || "10px"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: 100%;
  & > * {
    min-width: 0;
  }
`;
export const Frame = styled("div")`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  border-radius: ${({ rounded }) => (rounded ? '100%' : "0")};
  overflow: hidden;
  & > img {
    min-width: 0;
    object-fit: ${({ object }) => (object ? object : "cover")};
    width: 100%;
    height: 100%;
  }
`;
