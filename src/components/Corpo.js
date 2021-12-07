import Stories from "./Stories";
import Posts from "./Posts";
import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function Corpo() {
    return (
      <div class="corpo">
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>

        <div class="sidebar">
            <Usuario 
                src="assets/img/catanacomics.svg"
                username="catanacomics"
                name="Catana"/>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <Sugestoes />
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
    );
}