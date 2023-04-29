import "./SelectOptions.css";

const SelectOptions = () => {

  //Metodo map -> arreglo.map


  return (
    <div className="select-options">
      <label>Equipos</label>
      <select>
        <option>Programacion</option>
        <option>Front End</option>
        <option>Data Science</option>
        <option>Devops</option>
        <option>UX y Diseno</option>
        <option>Movil</option>
        <option>Innovacion y Gestion</option>
      </select>
    </div>
  );
};

export default SelectOptions;
