import "./Team.css";
import Collaborator from "../Collaborator";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
  //Destructuracion
  const { primaryColor, title, id } = props.data;

  const { collaborators, deleteCollaborator, updateTeamColor } = props;

  const obj = {
    backgroundColor: hexToRgba(primaryColor, 0.2),
  };

  return (
    collaborators.length > 0 && (
      <section className="team" style={obj}>
        <h3 style={{ borderColor: primaryColor }}>{title}</h3>

        <input
          type="color"
          className="teams__input-color"
          value={primaryColor}
          onChange={(event) => {
            updateTeamColor(event.target.value, id);
          }}
        />

        <div className="collaborators">
          {collaborators.map((collaborator, index) => (
            <Collaborator
              data={collaborator}
              key={index}
              primaryColor={primaryColor}
              deleteCollaborator={deleteCollaborator}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
