import "./Team.css";
import Collaborator from "../Collaborator";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
  //Destructuracion
  const { primaryColor, title } = props.data;

  const { collaborators, deleteCollaborator, updateTeamColor } = props;

  const obj = {
    backgroundColor: hexToRgba(primaryColor, 0.2),
  };

  console.log(primaryColor, obj);

  return (
    collaborators.length > 0 && (
      <section className="team" style={obj}>
        <h3 style={{ borderColor: primaryColor }}>{title}</h3>

        <input
          type="color"
          className="input-color"
          value={primaryColor}
          onChange={(event) => {
            updateTeamColor(event.target.value, title);
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
