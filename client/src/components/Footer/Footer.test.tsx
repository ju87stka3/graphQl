import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

describe("<Footer/>", () => {
  it("render ", async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const buttonElement = await screen.findByText(/alle/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
