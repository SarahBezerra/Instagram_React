export default function Stories() {
    const infos_storie = [
        {imagem:"9gag.svg", usuario:"9gag"},
        {imagem:"meowed.svg", usuario:"meowed"},
        {imagem:"barked.svg", usuario:"barked"},
        {imagem:"nathanwpylestrangeplanet.svg", usuario:"nathanwpylestrangeplanet"},
        {imagem:"wawawicomics.svg", usuario:"wawawicomics"},
        {imagem:"respondeai.svg", usuario:"respondeai"},
        {imagem:"filomoderna.svg", usuario:"filomoderna"},
        {imagem:"memeriagourmet.svg", usuario:"memeriagourmet"}
    ];

    return (
        <div className="stories">
            {infos_storie.map((story) => <Story imagem={story.imagem} usuario={story.usuario} />)}
            
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}


function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${props.imagem}`} />
            </div>
            <div class="usuario">
            {props.usuario}
            </div>
        </div>
    );
}