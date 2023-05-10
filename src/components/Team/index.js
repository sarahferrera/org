import "./Team.css";
import Collaborator from "../Collaborator";

const Team = (props) => {
  //Destructuracion
  const { primaryColor, backgroundColor, title } = props.data;

  const { collaborators } = props;

  return (
    collaborators.length > 0 && (
      <section className="team" style={{ backgroundColor: backgroundColor }}>
        <h3 style={{ borderColor: primaryColor }}>{title}</h3>
        <div className="collaborators">
          {collaborators.map((collaborator, index) => (
            <Collaborator
              data={collaborator}
              key={index}
              primaryColor={primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
