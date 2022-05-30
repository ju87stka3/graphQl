import React from "react";
import { Link } from "react-router-dom";
import { Category } from "../../types/types";
import { Flex } from "../Flex";
import { List } from "../List";
import { ListItem } from "../ListItem";
import { Text } from "../Text";
// import "./Sidebar.css";
const Header = ({
  loading,
  categories,
}: {
  loading: boolean;
  categories: Category[];
}) => {
  return (
    // <div className={"sidebar"}>
    <Flex flexDirection="column" bg="lavender" gridArea="sidebar" p={[1, 2, 3]}>
      <Text fontSize={3}>Kategorien</Text>
      {!loading ? (
        <List p={0} m={0}>
          {categories[0]?.name && (
            <Link to={`/articles/${categories[0]?.ids}`}>
              {<Text fontSize={2}>{categories[0]?.name}</Text>}
            </Link>
          )}
          {categories[0]?.childrenCategories?.list?.map(({ name, urlPath }) => {
            return (
              <ListItem ml={2} pt={2} pb={2} key={name}>
                <Link to={`/articles/${urlPath}`}>{name}</Link>
              </ListItem>
            );
          })}
          {categories[0]?.ids !== "index" && (
            <Link to={`/articles}`}>{<h3>Main</h3>}</Link>
          )}
        </List>
      ) : (
        "Loading..."
      )}
    </Flex>
  );
};
export default Header;
