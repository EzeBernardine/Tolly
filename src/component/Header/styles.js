import styled from "styled-components";

export const Styles = styled.header`
  width: 100%;

  margin: ${({ theme }) =>theme.spacing.xlarge + ' 0'};
  .user {
    border-radius: 20px;
    background: ${({ theme }) => theme.palette.primary.background};
    > span {
      padding: 0 20px;
    }
    > div:first-child {
      margin-left: 20px;
    }
  }
`;
