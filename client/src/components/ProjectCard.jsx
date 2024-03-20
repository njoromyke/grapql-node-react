/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title">{project.name}</h5>
            <a href={`/project/${project.id}`} className="btn btn-light">
              View
            </a>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;