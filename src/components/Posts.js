export default function Posts() {
    const infos_post = [
        {topo:{img:"assets/img/meowed.svg", nome:"meowed"}, img_conteudo:"assets/img/gato-telefone.svg", curtidas:{img:"assets/img/respondeai.svg", nome:"respondeai", qtdd:"outras 101.523 pessoas"}},
        {topo:{img:"assets/img/barked.svg", nome:"barked"}, img_conteudo:"assets/img/dog.svg", curtidas:{img:"assets/img/adorable_animals.svg", nome:"adorable_animals", qtdd:"outras 99.159 pessoas"}},
    ];

    return(
        infos_post.map(infos => 
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={infos.topo.img} />
                        {infos.topo.nome}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={infos.img_conteudo} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={infos.curtidas.img} />
                        <div class="texto">
                            Curtido por <strong>{infos.curtidas.nome}</strong> e <strong>{infos.curtidas.qtdd}</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
    
}