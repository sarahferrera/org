import "./Collaborator.css";
import { TiDelete } from "react-icons/ti";

const Collaborator = (props) => {
  const { name, position, photo, team, id } = props.data;
  const { primaryColor, deleteCollaborator } = props;

  return (
    <div className="collaborator">
      <TiDelete className="delete" onClick={() => deleteCollaborator(id)} />
      <div
        style={{ backgroundColor: primaryColor }}
        className="header"
        team={team}
      >
        <img src={photo} alt="profile" />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
