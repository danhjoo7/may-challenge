import React from "react";
import styled from "styled-components";

import theme from "./theme";

import PrayerGuide from "../documents/PrayerGuide.pdf";

import { useBreakpoint } from "../providers/BreakpointProvider";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.breakpoint === "md" &&
    `
      justify-content: center;
      text-align: center;

      && .btn {
        width: 500px;
        margin: 10px 0;
        border-radius: 5px;
        text-transform: uppercase;
      }
    `}

  ${(props) =>
    props.breakpoint === "sm" &&
    `
        justify-content: center;
        text-align: center;

        && .btn {
          width: 100%;
          margin: 10px 0;
          border-radius: 5px;
          text-transform: uppercase;
        }
      `}
`;

const Button = styled.a`
  padding: 10px 20px;
  margin-right: 20px;
  background: ${theme.colors.fadedPink};
  color: ${theme.colors.white};
  border-radius: 30px;

  &&:last-of-type {
    margin-right: 0px;
  }

  &&.ghost {
    background: ${theme.colors.background};
    color: ${theme.colors.burgundy};
    font-weight: 700;
  }
`;

const LinkContainer = () => {
  const { breakpoint } = useBreakpoint();

  return (
    <Container breakpoint={breakpoint}>
      <Button className="ghost btn">Resources</Button>
      <Button className="btn" href={PrayerGuide} download="prayer-guide.pdf">
        Prayer Guide
      </Button>
    </Container>
  );
};

export default LinkContainer;
