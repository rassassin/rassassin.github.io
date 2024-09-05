import { gql } from "apollo-angular";

const GET_POSTS = gql`
query GetPosts {
    projects {
    description
    title
    updatedAt
    url
    imageId
    longDescription
  }
}`

export { GET_POSTS };