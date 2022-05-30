import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("<Header/>", () => {
  it("render ", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const buttonElement = await screen.findByText(/home24/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
