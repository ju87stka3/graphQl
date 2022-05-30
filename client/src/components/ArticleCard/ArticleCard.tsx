import { Article } from "../../types/types";
import React from "react";
import { formatter } from "../../helpers/formatter";
import { Box } from "../Box";
import { Img } from "../Img";
import { Button } from "../Button";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Box p={[1, 2, 3]} border="1px solid lavenderblush">
      <Img
        display={"inline-block"}
        padding={"4px 0"}
        margin={"4px 0"}
        width={"100%"}
        alt={article?.images[0]?.path}
        src={article?.images[0]?.path}
      />
      <Box
        display={"inline-block"}
        padding={"4px 0"}
        margin={"4px 0"}
        width={"100%"}
      >
        {article?.name}
      </Box>
      <Box
        display={"inline-block"}
        padding={"4px 0"}
        margin={"4px 0"}
        width={"100%"}
      >
        {formatter?.format(article?.prices?.regular?.value / 100)}
      </Box>
      <Button
        display={"inline-block"}
        padding={"2em"}
        margin={"4px 0"}
        width={"100%"}
        bg={"lightgoldenrodyellow"}
        border={"1px solid lightgray"}
        textAlign={"center"}
      >
        Add to cart
      </Button>
    </Box>
  );
};

export default ArticleCard;
