import "./Collaborator.css";
import { TiDelete } from "react-icons/ti";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Collaborator = (props) => {
  const { name, position, photo, team, id, fav } = props.data;

  const { primaryColor, deleteCollaborator, like } = props;

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
        {fav ? (
          <AiFillHeart onClick={() => like(id)} color="red" className="" />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Collaborator;
