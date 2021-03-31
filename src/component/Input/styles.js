import styled from "styled-components";

export const Styles = styled.div`
  background: ${({ theme }) => theme.palette.primary.background};
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  align-items: center;
  > input {
    flex: 1;
    min-width: 0;
    padding: ${({ theme }) => theme.spacing.xxsmall};
  }
  svg {
    color: ${({ theme }) => theme.palette.primary.fade};
    cursor: pointer
  }
`;
