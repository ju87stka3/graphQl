import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import ArticleCard from "./ArticleCard";
import { BrowserRouter } from "react-router-dom";

describe("<ArticleCard/>", () => {
  it("render ", async () => {
    const article = {
      name: "cvcvcv",
      variantName: "kfhdjfdf",
      images: [{ path: "sjjduu/com" }],

      prices: {
        currency: "usd",
        regular: {
          value: 2232,
        },
      },
    };
    render(
      <BrowserRouter>
        <ArticleCard article={article} />
      </BrowserRouter>
    );

    const buttonElement = await screen.findByText(/cvcvcv/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
