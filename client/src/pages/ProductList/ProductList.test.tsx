import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { graphql } from "msw";
import { setupServer } from "msw/node";

import ProductList from "./ProductList";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { HOST_NAME } from "../../constants/constants";
// import fetch from "cross-fetch";

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

const client = new ApolloClient({
  uri: `${HOST_NAME}/graphql`,
  cache: new InMemoryCache(),
});
const link = graphql.link(`${HOST_NAME}/graphql`);
const server = setupServer(
  link.query("productLists", (req, res, ctx) => {
    return res(
      ctx.data({
        categories: categories,
      })
    );
  })
);
// establish API mocking before all tests
beforeAll(() => server.listen());

// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => {
  // jest.useRealTimers();
  server.resetHandlers();
});
// clean up once the tests are done
afterAll(() => server.close());
describe("<ProductList/>", () => {
  it("render  ", async () => {
    render(
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ProductList />
        </ApolloProvider>
      </BrowserRouter>
    );

    const buttonElement = await screen.findByText(/Kategorien/i);
    expect(buttonElement).toBeInTheDocument();
  });
  it("render data  ", async () => {
    render(
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ProductList />
        </ApolloProvider>
      </BrowserRouter>
    );

    const buttonElement = await screen.findByText(/Article 1 Page 1/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
