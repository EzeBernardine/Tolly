import styled from "styled-components";

export const AcordionWrapper = styled("div")`
  width: ${({ width }) => (width ? width : "100%")};
  margin: 5em 0;
  .panel {
    margin-top: 10px;
  }
  .panel__label {
    position: relative;
    display: block;
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    padding: 25px 15px;
    font-weight: 500;
    color: #333333;
    font-size: 14px;
    font-family: inherit;
    transition: color 0.2s linear;
    cursor: pointer;
    background: white;
  }
  .panel__label:hover .panel_icon {
    color: #444;
    transition: 0.5s linear;
  }
  .panel__label:hover .panel_icon {
    color: #444;
    transition: 0.5s linear;
  }
  .panel__label:focus {
    outline: none;
  }
  .panel__label::-moz-focus-inner {
    border: 0;
  }

  .panel_icon {
    position: absolute;
    right: 25px;
    top: calc(50% - 10px);
    width: 14px;
  }
  .panel_icon {
    transform: rotate(0deg);
    transition: transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  .panel[aria-expanded="true"] .panel__content {
    opacity: 1;
  }
  .panel[aria-expanded="true"] .panel__label {
    color: ${({
      theme: {
        palette: { primary },
      },
    }) => primary.main};
  }
  @media (max-width: 820px) {
    .panel[aria-expanded="true"] .panel__label {
   
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }

  .panel[aria-expanded="true"] .panel_icon {
    transform: rotate(-180deg);
  }

  .panel[aria-expanded="true"] .panel_icon {
    background-color: ${({
      theme: {
        palette: { primary },
      },
    }) => primary.main};
  }

  .panel__inner {
    overflow: hidden;
    will-change: height;
    padding: 0 15px;
    transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  .panel__content {
    margin: 20px 0px;
    font-size: 14px;
    color: #3a3d41;
    line-height: 26.8px;
    opacity: 0;
    animation: enter 1s forwards;
    transition: opacity 0.3s linear 0.18s;
  }

  @keyframes enter {
    0% {
      transform: translateY(-200px);
      display: block;
    }
    100% {
      transform: translateY(0px);
      display: block;
      opacity: 1;
    }
  }
  .panel:not(:last-child) {
    margin-top: 6px;
  }
`;
