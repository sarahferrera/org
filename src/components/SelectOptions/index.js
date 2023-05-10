import "./SelectOptions.css";

const SelectOptions = (props) => {
  //Metodo map -> arreglo.map( (team, index)=>{
  //  return <option></option>
  //} ) :

  //Esto lo elimino y lo saco todo de una fuente
  // const teams = [
  //   "Programacion",
  //   "Front End",
  //   "Data Science",
  //   "Devops",
  //   "UX y Diseno",
  //   "Movil",
  //   "Innovacion y Gestion",
  // ];

  const manageChange = (e) => {
    props.updateTeam(e.target.value);
  };

  return (
    <div className="select-options">
      <label>Equipos</label>
      <select value={props.value} onChange={manageChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {props.teams.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
