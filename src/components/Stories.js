export default function Stories() {
    const infos_storie = [
        {src:"assets/img/9gag.svg", usuario:"9gag"},
        {src:"assets/img/meowed.svg", usuario:"meowed"},
        {src:"assets/img/barked.svg", usuario:"barked"},
        {src:"assets/img/nathanwpylestrangeplanet.svg", usuario:"nathanwpylestrangeplanet"},
        {src:"assets/img/wawawicomics.svg", usuario:"wawawicomics"},
        {src:"assets/img/respondeai.svg", usuario:"respondeai"},
        {src:"assets/img/filomoderna.svg", usuario:"filomoderna"},
        {src:"assets/img/memeriagourmet.svg", usuario:"memeriagourmet"}
    ];

    return (
        infos_storie.map(infos => 
            <div class="story">
                <div class="imagem">
                    <img src={infos.src} />
                </div>
                <div class="usuario">
                {infos.usuario}
                </div>
            </div>
        )
      
    );

}