import "./SelectOptions.css";

const SelectOptions = () => {
  //Metodo map -> arreglo.map( (team, index)=>{
  //  return <option></option>
  //} ) :

  const teams = [
    "Programacion",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseno",
    "Movil",
    "Innovacion y Gestion",
  ];

  return (
    <div className="select-options">
      <label>Equipos</label>
      <select>
        {teams.map((team, index) => (
          <option key={index}>{team}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
