import Feed from "./Feed";
import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import InformacoesAdicionais from "./InformacoesAdicionais";

export default function Corpo() {
    return (
      <div className="corpo">
        <div className="esquerda">
            <Feed />
        </div>

        <div className="sidebar">
            <Usuario src="assets/img/catanacomics.svg" username="catanacomics" name="Catana"/>
            <Sugestoes />
            <InformacoesAdicionais />
        </div>
      </div>
    );
}