import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/ProjectQueries";
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";
import AddProjectModal from "./AddProject";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;

  if (error) return <p>Something went wrong.</p>;

  return (
    <>
      <AddProjectModal />
      <div className="row mt-3">
        {data.projects.length > 0 ? (
          data.projects.map((project) => <ProjectCard project={project} key={project.id} />)
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </>
  );
};

export default Projects;
