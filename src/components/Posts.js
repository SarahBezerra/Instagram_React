export default function Posts() {
    const infos_post = [
        {topo:{img:"meowed.svg", nome:"meowed"}, img_conteudo:"gato-telefone.svg", curtidas:{img:"respondeai.svg", nome:"respondeai", qtdd:"outras 101.523 pessoas"}},
        {topo:{img:"barked.svg", nome:"barked"}, img_conteudo:"dog.svg", curtidas:{img:"adorable_animals.svg", nome:"adorable_animals", qtdd:"outras 99.159 pessoas"}},
    ];

    return(
        infos_post.map(infos => 
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={`assets/img/${infos.topo.img}`} />
                        {infos.topo.nome}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={`assets/img/${infos.img_conteudo}`} />
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
                        <img src={`assets/img/${infos.curtidas.img}`} />
                        <div class="texto">
                            Curtido por <strong>{infos.curtidas.nome}</strong> e <strong>{infos.curtidas.qtdd}</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
    
}