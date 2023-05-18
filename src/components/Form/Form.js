import { useState } from "react";
import "./Form.css";
import Input from "../Input";
import SelectOptions from "../SelectOptions";
import Button from "../Button";

const Form = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");
  const [title, updateTitle] = useState("");
  const [color, updateColor] = useState("");

  const { registerCollaborator, createTeam } = props;

  const manageSubmission = (e) => {
    e.preventDefault();
    let dataToSend = {
      name: name,
      //A continuacion: JS sabe que si lo pongo asi es por que el nombre y el componente tienen el mismo valor
      position,
      photo,
      team,
    };
    registerCollaborator(dataToSend);
  };

  const manageNewTeam = (e) => {
    e.preventDefault();
    createTeam({ title, primaryColor: color });
  };

  return (
    <section className="form">
      <form onSubmit={manageSubmission}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <Input
          title="Nombre"
          placeholder="Ingrese nombre"
          required={true}
          value={name}
          updateValue={setName}
        />
        <Input
          title="Puesto"
          placeholder="Ingrese puesto"
          required
          value={position}
          updateValue={setPosition}
        />

        <Input
          title="Foto"
          placeholder="Ingrese enlace de foto"
          required
          value={photo}
          updateValue={setPhoto}
        />

        <SelectOptions
          title="Team"
          placeholder="Seleccione el equipo"
          value={team}
          updateTeam={setTeam}
          teams={props.teams}
        />
        {/* Otra manera de hacerlo: le puedo agregar varios hijos de diferentes tipos: imagenes, texto, etc */}
        <Button>Crear</Button>
      </form>
      <form onSubmit={manageNewTeam}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <Input
          title="Titulo"
          placeholder="Ingrese titulo"
          required={true}
          value={title}
          updateValue={updateTitle}
        />
        <Input
          title="Color"
          placeholder="Ingrese el color en hexadecimal"
          required
          value={color}
          updateValue={updateColor}
          type="color"
        />
        <Button>Registrar Equipo</Button>
      </form>
    </section>
  );
};

export default Form;
