import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_PROJECT } from "../queries/ProjectQueries";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";

const Project = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;

  if (error) return <p>Something went wrong.</p>;

  return (
    <div className="mx-auto w-75 card p-5">
      <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
        Back
      </Link>
      <h1>{data.project.name}</h1>
      <p> {data.project.description}</p>
      <h5 className="mt-3">Project Status</h5>
      <p className="lead">{data.project.status}</p>
      <ClientInfo client={data.project.clients} />
    </div>
  );
};

export default Project;
