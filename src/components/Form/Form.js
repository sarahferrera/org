import "./Form.css";
import TextField from "../TextField";
import SelectOptions from "../SelectOptions";

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <TextField title="Nombre" placeholder="Ingrese nombre" />
        <TextField title="Puesto" placeholder="Ingrese puesto" />
        <TextField title="Foto" placeholder="Ingrese enlace de foto" />
        <SelectOptions title="Equipo" placeholder="Seleccione el equipo" />
      </form>
    </section>
  );
};

export default Form;
