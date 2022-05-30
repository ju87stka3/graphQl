import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Sidebar from "./Sidebar";
import { BrowserRouter } from "react-router-dom";

describe("<Sidebar/>", () => {
  const categories = [
    {
      ids: "index",
      name: "Article 1",
      articleCount: 23,
      childrenCategories: {
        list: [
          {
            name: "Article 1 Page 1",
            urlPath: "article1-page1",
          },
          {
            name: "Article 1 Page 2",
            urlPath: "article1-page2",
          },
        ],
      },
      categoryArticles: {
        articles: [
          {
            name: "cvcvcv",
            variantName: "kfhdjfdf",
            images: [{ path: "sjjduu/com" }],

            prices: {
              currency: "usd",
              regular: {
                value: 2232,
              },
            },
          },
          {
            images: [{ path: "sjjaaaduu/com" }],

            name: "cvcvcav",
            variantName: "kfhdjfdasdf",
            prices: {
              currency: "usds",
              regular: {
                value: 2883,
              },
            },
          },
        ],
      },
    },
    {
      ids: "article1-page1",
      name: "Article 1-Page 1",
      articleCount: 23,
      childrenCategories: {
        list: [
          //   {
          //   name:" Article 1-Page 1-Page 1",
          //   urlPath:"article1-page1-page1"
          // },{
          //   name:"Article 1-Page 1-Page 2",
          //   urlPath:"article1-page1-page2"
          // }
        ],
      },
      categoryArticles: {
        articles: [
          {
            name: "cvcvcv",
            variantName: "kfhdjfdf",
            images: [{ path: "sjjduu/com" }],

            prices: {
              currency: "usd",
              regular: {
                value: 2232,
              },
            },
          },
          {
            images: [{ path: "sjjaaaduu/com" }],

            name: "cvcvcav",
            variantName: "kfhdjfdasdf",
            prices: {
              currency: "usds",
              regular: {
                value: 2883,
              },
            },
          },
        ],
      },
    },
    {
      ids: "article1-page2",
      name: "Aricle 1 page2",
      articleCount: 23,
      childrenCategories: {
        list: [
          //   {
          //   name:"Article 1 Page 2 page1",
          //   urlPath:"article1-page2-page1"
          // },{
          //   name:"Article 1 Page 2 Page 2",
          //   urlPath:"artile1-page2-page2"
          // }
        ],
      },
      categoryArticles: {
        articles: [
          {
            name: "cvcvcv",
            variantName: "kfhdjfdf",
            images: [{ path: "sjjduu/com" }],

            prices: {
              currency: "usd",
              regular: {
                value: 2232,
              },
            },
          },
          {
            images: [{ path: "sjjaaaduu/com" }],

            name: "cvcvcav",
            variantName: "kfhdjfdasdf",
            prices: {
              currency: "usds",
              regular: {
                value: 2883,
              },
            },
          },
        ],
      },
    },
  ];
  it("render loading ", async () => {
    render(
      <BrowserRouter>
        <Sidebar loading={true} categories={categories} />
      </BrowserRouter>
    );

    const buttonElement = await screen.findByText(/loading/i);
    expect(buttonElement).toBeInTheDocument();
  });
  it("render categories ", async () => {
    render(
      <BrowserRouter>
        <Sidebar loading={false} categories={categories} />
      </BrowserRouter>
    );

    const buttonElement = await screen.findByText(/article 1 page 2/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
