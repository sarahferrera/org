import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import MiOrg from "./components/MiOrg";

function App() {
  const [showForm, UpdateShow] = useState(true);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // O podria estar sin el else(:)
  // condicion && seMuestra

  const switchShow = () => {
    UpdateShow(!showForm);
  };

  return (
    <div>
      <Header />
      {/* {showForm === true ? <Form /> : <></>} */}
      {/* Otra menera: */}
      {showForm && <Form />}
      <MiOrg switchShow={switchShow} />
    </div>
  );
}

export default App;
