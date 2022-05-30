import React, { useEffect, useState } from "react";

import { Category } from "../../types/types";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../query/product";
import { useParams } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/";
import Sidebar from "../../components/Sidebar";
import Error from "../../components/Error";
import { Box } from "../../components/Box";
import { Grid } from "../../components/Grid";
import { Text } from "../../components/Text";

const ArticleList = () => {
  const { page } = useParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
    variables: { ids: page },
  });
  useEffect(() => {
    if (!loading) {
      console.log("data", data);
      setCategories(data?.categories);
    }
    //eslint-disable-next-line
  }, [data]);
  console.log("data", data);

  useEffect(() => {
    refetch();
    //eslint-disable-next-line
  }, [page]);
  console.log("cat", categories[0]);
  const articles = categories?.map((category) => {
    return category?.categoryArticles?.articles?.map((article) => {
      return <ArticleCard article={article} />;
    });
  });

  return (
    <>
      <Sidebar loading={loading} categories={categories} />
      {/* <div className={"content"}> */}
      <Box gridArea={"content"} gridColumn={"span 2"}>
        {!loading ? (
          <Text fontSize={5}>
            {categories[0]?.name}
            <Text display={"inline"} fontSize={4}>
              {" "}
              ({categories[0]?.articleCount})
            </Text>
          </Text>
        ) : (
          "Loading..."
        )}
        <Grid
          gridGap={"26px"}
          gridTemplateColumns={"repeat(auto-fill, minmax(200px, 1fr) )"}
        >
          {articles}
        </Grid>
      </Box>
      {!!error && <Error message={JSON.stringify(error)} />}
    </>
  );
};

export default ArticleList;
