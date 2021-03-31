import styled from "styled-components";

export const Styles = styled.section`
  background: ${({ theme }) => theme.palette.common.white};

  > div > h3 {
    padding-bottom: ${({ theme }) => theme.spacing.small};
  }
  > div > div {
    @media (max-width: 950px) {
      width: 100%;
    }
  }
`;
