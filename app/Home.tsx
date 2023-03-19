"use client";

import { Button } from "@skbkontur/react-ui";
import styled from "@emotion/styled";

const PurpleTestBox = styled.div`
  width: 100px;
  height: 100px;
  border: 5px purple solid;
`;

export const Home = () => (
  <>
    <PurpleTestBox />
    <Button>test</Button>
  </>
);
