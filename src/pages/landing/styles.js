import styled from "styled-components";

export const Styles = styled.div`
  background: ${({ theme }) => theme.palette.primary.background};
  > div {
    @media (max-width: 950px) {
      flex-direction: column;
      > div{
        width: 100%
      }
    }
  }
`;

export const PaymentStyles = styled.div`
  background: ${({ theme }) => theme.palette.common.white};
  margin: ${({ theme }) => theme.spacing.gutter};
  padding: ${({ theme }) => theme.spacing.xlarge};
  padding-top: 0;
  width: 100%;
  
  @media (max-width: 950px) {
    padding: ${({ theme }) => theme.spacing.gutter};
    margin: 0;
  }
`;
export const SummaryStyles = styled.div`
  background: ${({ theme }) => theme.palette.primary.background};
  width: 100%;

`;
