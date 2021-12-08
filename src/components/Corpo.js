import Feed from "./Feed";
import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import InformacoesAdicionais from "./InformacoesAdicionais";

export default function Corpo() {
    return (
      <div class="corpo">
        <div class="esquerda">
            <Feed />
        </div>

        <div class="sidebar">
            <Usuario src="assets/img/catanacomics.svg" username="catanacomics" name="Catana"/>
            <Sugestoes />
            <InformacoesAdicionais />
        </div>
      </div>
    );
}