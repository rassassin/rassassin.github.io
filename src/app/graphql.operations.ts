import { gql } from 'apollo-angular';

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
  }
`;

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
  }
`;

const GET_CVINFORMATION = gql`
  query GetPosts {
    cvDetails(orderBy: jobStartDate_DESC) {
      jobTitle
      jobStartDate
      jobEndDate
      roleDetails
      workPlace
    }
  }
`;

export { GET_PROJECTS };
export { GET_WORKINFORMATION };
export { GET_CVINFORMATION };
