export default function Stories() {
    const infos_storie = [
        {src:"9gag.svg", usuario:"9gag"},
        {src:"meowed.svg", usuario:"meowed"},
        {src:"barked.svg", usuario:"barked"},
        {src:"nathanwpylestrangeplanet.svg", usuario:"nathanwpylestrangeplanet"},
        {src:"wawawicomics.svg", usuario:"wawawicomics"},
        {src:"respondeai.svg", usuario:"respondeai"},
        {src:"filomoderna.svg", usuario:"filomoderna"},
        {src:"memeriagourmet.svg", usuario:"memeriagourmet"}
    ];

    return (
        infos_storie.map(infos => 
            <div class="story">
                <div class="imagem">
                    <img src={`assets/img/${infos.src}`} />
                </div>
                <div class="usuario">
                {infos.usuario}
                </div>
            </div>
        )
      
    );

}