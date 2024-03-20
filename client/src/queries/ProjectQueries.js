import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      name
      id
      status
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      name
      id
      status
      description
      clients {
        name
        id
        phone
        email
      }
    }
  }
`;


export { GET_PROJECTS, GET_PROJECT};
