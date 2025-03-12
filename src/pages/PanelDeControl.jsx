import Cards from "../components/Card";
import Menulateral from "../components/MenuLateral";
import { envios } from "../services/dataBase";

const PanelControl = () => {
  return (
    <section className="panel-control">
      <Menulateral />
      <div className="panel-control-contenido">
        {envios.map((envio) => {
          return <Cards info={envio} />;
        })}
      </div>
    </section>
  );
};

export default PanelControl;
