import styled from "styled-components";

export const Styles = styled.section`
  background: ${({ theme }) => theme.palette.common.white};

  .container {
    > .cardContainer {
      width: 40%;
      min-width: 250px;
      flex: 1;
      .card {
        border-radius: 10px;
      }
    }
    > .card-details {
      margin-top: ${({ theme }) => theme.spacing.small};
      width: 60%;
      max-width: 600px;
      flex: 1;
      label {
        color: ${({ theme }) => theme.palette.primary.fade};
        margin-bottom: ${({ theme }) => theme.spacing.xsmall};
        font-size: 14px;
      }

      .buttonWrap {
        > input:first-child {
          background: ${({ theme }) => theme.palette.common.black};
          color: ${({ theme }) => theme.palette.common.white};
          margin-right: 20px;
        }
        > input:last-child {
          color: ${({ theme }) => theme.palette.primary.fade};
        }
      }
    }
    @media (max-width: 1285px) {
      flex-direction: column;
      .cardContainer,
      .card-details {
        width: 100% !important;
      }
    }
  }
`;
