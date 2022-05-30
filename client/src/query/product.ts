import { gql } from "@apollo/client";

export const GET_PRODUCTS=gql`
query productLists($ids:String, $locale: String){
        categories: productLists(ids:$ids, locale: $locale) {
            ids
          name
          articleCount
          childrenCategories: childrenProductLists {
            list {
              name
              urlPath
            }
          }
          categoryArticles: articlesList(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images
              
               {
                path
              }
            }
          }
        }
    }
`

