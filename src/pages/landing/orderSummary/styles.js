import styled from "styled-components";

export const Styles = styled.section`
  background: ${({ theme }) => theme.palette.primary.background};

  margin: ${({ theme }) => theme.spacing.gutter};
  margin-right: ${({ theme }) => theme.spacing.xxlarge};
  padding: ${({ theme }) => theme.spacing.xlarge + " 0"};
  @media (max-width: 950px) {
    margin: ${({ theme }) => theme.spacing.gutter};
  }
  > div:nth-child(2) {
    margin: ${({ theme }) => theme.spacing.xlarge + " 0"};
    .iconWrap {
      padding: 10px;
      border-radius: 50%;
    }
  }
`;
