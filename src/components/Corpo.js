import Sugestao from "./Sugestao";
import Storie from "./Storie";
import Post from "./Post";
import Usuario from "./Usuario";

export default function Corpo() {
    return (
      <div class="corpo">
        <div class="esquerda">
          <div class="stories">
            <Storie />
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div class="posts">
            <Post />
          </div>
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

            <Sugestao />
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