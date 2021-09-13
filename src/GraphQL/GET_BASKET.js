import { gql } from "@apollo/client";

export const GET_BASKET = gql`
  query {
    getBasket {
      name
      category
      id
    }
  }
`;
