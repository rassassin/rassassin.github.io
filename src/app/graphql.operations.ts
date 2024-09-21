import { gql } from "apollo-angular";

const GET_PROJECTS = gql`
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

const GET_WORKINFORMATION = gql`
query GetPosts {
    workcards(orderBy: startDate_DESC) {
      workCardTitle
      workDescription
      technologyUsed
      organisationUrl
      startDate
      endDate
    }
}`

export { GET_PROJECTS };
export { GET_WORKINFORMATION };