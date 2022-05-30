import express, { Application } from 'express';
import cors from "cors";
import { graphqlHTTP }  from "express-graphql" ;
import { schema } from './shema';

const app: Application = express();


app.use(cors())
const arr=[
  {
  ids:"index",
  name:"Article 1",
          articleCount:"23",
          childrenProductLists:  {
            list: [{
              name:"Article 1 Page 1",
              urlPath:"article1-page1"
            },{
              name:"Article 1 Page 2",
              urlPath:"article1-page2"
            }]
          },
          articlesList:
            {
            articles: [{
              name:"cvcvcv",
              variantName:"kfhdjfdf",
                            images:[{path:"sjjduu/com"}],

              prices :{
                currency:"usd",
                regular :{
                  value:2232
                }
              }},
              {
                              images:[{path:"sjjaaaduu/com"}],

              name:"cvcvcav",
              variantName:"kfhdjfdasdf",
              prices :{
                currency:"usds",
                regular :{
                  value:2883
                }
              }
            }
                 
            
          ]}
        },
            {
  ids:"article1-page1",
  name:"Article 1-Page 1",
          articleCount:"23",
          childrenProductLists:  {
            list: [
            //   {
            //   name:" Article 1-Page 1-Page 1",
            //   urlPath:"article1-page1-page1"
            // },{
            //   name:"Article 1-Page 1-Page 2",
            //   urlPath:"article1-page1-page2"
            // }
          ]
          },
          articlesList:
            {
            articles: [{
              name:"cvcvcv",
              variantName:"kfhdjfdf",
                            images:[{path:"sjjduu/com"}],

              prices :{
                currency:"usd",
                regular :{
                  value:2232
                }
              }},
              {
                              images:[{path:"sjjaaaduu/com"}],

              name:"cvcvcav",
              variantName:"kfhdjfdasdf",
              prices :{
                currency:"usds",
                regular :{
                  value:2883
                }
              }
            }
                 
            
          ]}
        },
            {
  ids:"article1-page2",
  name:"Aricle 1 page2",
          articleCount:"23",
          childrenProductLists:  {
            list: [
            //   {
            //   name:"Article 1 Page 2 page1",
            //   urlPath:"article1-page2-page1"
            // },{
            //   name:"Article 1 Page 2 Page 2",
            //   urlPath:"artile1-page2-page2"
            // }
          ]
          },
          articlesList:
            {
            articles: [{
              name:"cvcvcv",
              variantName:"kfhdjfdf",
                            images:[{path:"sjjduu/com"}],

              prices :{
                currency:"usd",
                regular :{
                  value:2232
                }
              }},
              {
                              images:[{path:"sjjaaaduu/com"}],

              name:"cvcvcav",
              variantName:"kfhdjfdasdf",
              prices :{
                currency:"usds",
                regular :{
                  value:2883
                }
              }
            }
          ]

        
      
            
          }
        }]
    

        
     

        
      
          
          


const root={
  productLists:({ids="index",locale="de_DE"}:{ids:string,locale:string})=>{
    console.log("ids",ids)
    return arr.filter(item=>item.ids===ids)
  },
      
      


}

app.use('/graphql', graphqlHTTP({
  schema:schema,
  graphiql:true,
  rootValue:root
}));
app.listen(3001);
