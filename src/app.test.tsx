import React from "react";
import { render, screen } from "@testing-library/react";

import {Appp} from "./Appp";

test("Header contains correct text", () => {
  render(<Appp/>);
  const text = screen.getByText("hola");
  expect(text).toBeInTheDocument();
});
