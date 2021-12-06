import { gql } from "@apollo/client";

export const REMOVE_BASKET = gql`
  mutation removeFromBasket($name: String!, $id: Int!, $category: String!) {
    removeFromBasket(name: $name, id: $id, category: $category) {
      name
      id
      category
    }
  }
`;
