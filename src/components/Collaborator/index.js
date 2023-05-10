import "./Collaborator.css";

const Collaborator = (props) => {
  const { name, position, photo } = props.data;
  const { primaryColor } = props;
  return (
    <div className="collaborator">
      <div style={{ backgroundColor: primaryColor }} className="header">
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
