import "./Collaborator.css";

const Collaborator = (props) => {
  const { name, position, photo, team } = props.data;
  return (
    <div className="collaborator">
      <div className="header">
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
