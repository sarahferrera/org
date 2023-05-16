import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  //Estado - hooks
  //useState()
  //const [nombreVariable,funcionActualizadora] = useState(valorInicial)
  // console.log(props);
  // const [show, updateShow] = useState(true)
  // const manageClick = () => {
  //     console.log("Mostrar/Ocultar elemento", !show)
  //     actualizarMostrar(!show)
  // }

  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src="/img/Btn-add.svg" alt="add" onClick={props.switchShow} />
    </section>
  );
};

export default MiOrg;
