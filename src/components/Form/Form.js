import "./Form.css";
import TextField from "../TextField";
import SelectOptions from "../SelectOptions";
import Button from "../Button";

const Form = () => {
  const manageSubmission = (e) => {
    e.preventDefault();
    console.log("boton");
  };

  return (
    <section className="form">
      <form onSubmit={manageSubmission}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <TextField
          title="Nombre"
          placeholder="Ingrese nombre"
          required={true}
        />
        <TextField title="Puesto" placeholder="Ingrese puesto" required />
        <TextField title="Foto" placeholder="Ingrese enlace de foto" required />
        <SelectOptions title="Equipo" placeholder="Seleccione el equipo" />
        {/* Otra manera de hacerlo: le puedo agregar varios hijos de diferentes tipos: imagenes, texto, etc */}
        <Button>Crear</Button>
      </form>
    </section>
  );
};

export default Form;
