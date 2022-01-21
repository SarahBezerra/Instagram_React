export default function Posts() {
    const infos_post = [
        {topo:{img:"meowed.svg", nome:"meowed"}, img_conteudo:"gato-telefone.svg", curtidas:{img:"respondeai.svg", nome:"respondeai", qtdd:"outras 101.523 pessoas"}},
        {topo:{img:"barked.svg", nome:"barked"}, img_conteudo:"dog.svg", curtidas:{img:"adorable_animals.svg", nome:"adorable_animals", qtdd:"outras 99.159 pessoas"}},
    ];

    return (
        <div className="posts">
            {infos_post.map((post) => <Post imagemTopo={post.topo.img}
                                        nomeTopo={post.topo.nome}
                                        imagemPostada={post.img_conteudo} 
                                        fotoCurtidas={post.curtidas.img} 
                                        usuarioCutidas={post.curtidas.nome} 
                                        qtddCurtidas={post.curtidas.qtdd} key={post.topo.nome} />)}
        </div>
    )
}


function Post(props) {

    return(
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={`assets/img/${props.imagemTopo}`} alt="" />
                    {props.nomeTopo}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={`assets/img/${props.imagemPostada}`} alt="" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={`assets/img/${props.fotoCurtidas}`} alt="" />
                    <div className="texto">
                        Curtido por <strong>{props.usuarioCurtidas}</strong> e <strong>{props.qtddCurtidas}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
    
}