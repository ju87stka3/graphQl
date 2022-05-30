 import { buildSchema } from "graphql"
 export const schema=buildSchema(`
 type Category {
  ids:String
  name: String
  articlesList(first:Int): CategoryArticle
  articleCount: Int
  childrenProductLists: childrenProductLists
}

 type Article  {
  name:  String
  variantName: String
  prices: Prices
  images: [Image]
  
}
type pageInfo{
 endCursor:String
        hasNextPage:Boolean
}
type childrenProductLists  {
  list: [childrenLists]
}
type childrenLists{
    
    name: String
    urlPath: String
  
}

 type Prices  {
  currency: String
  regular:PriceRegular
    
  
}
type PriceRegular{
    value: Int
}

 type Image {
  path: String
}

 type CategoryArticle  {
  articles: [Article]
}
type Query{
    productLists(ids:String,locale:String):[Category]

}
 


 `)







//  categories: productLists(ids: "156126", locale: de_DE) {
//           name
//           articleCount
//           childrenCategories: childrenProductLists {
//             list {
//               name
//               urlPath
//             }
//           }
//           categoryArticles: articlesList(first: 50) {
//             articles {
//               name
//               variantName
//               prices {
//                 currency
//                 regular {
//                   value
//                 }
//               }
//               images(
//                 format: WEBP
//                 maxWidth: 200
//                 maxHeight: 200
//                 limit: 1
//               ) {
//                 path
//               }