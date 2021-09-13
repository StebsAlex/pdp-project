import { gql } from "@apollo/client";

export const ADD_BASKET = gql`
  mutation addToBasket($name: String!, $id: Int!, $category: String!) {
    addToBasket(name: $name, id: $id, category: $category) {
      name
      id
      category
    }
  }
`;
