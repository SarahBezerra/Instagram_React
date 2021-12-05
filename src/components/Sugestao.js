export default function Sugestao() {
    const sugestoes = [
        {src:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"},
        {src:"assets/img/chibirdart.svg", nome:"chibirdart", razao:"Segue você"},
        {src:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", razao:"Novo no Instagram"},
        {src:"assets/img/adorable_animals.svg", nome:"adorable_animals", razao:"Segue você"},
        {src:"assets/img/smallcutecats.svg", nome:"smallcutecats", razao:"Segue você"},
    ];

    return (
        sugestoes.map(infos => 
          <div class="sugestao">
            <div class="usuario">

            <img src={infos.src} />
            <div class="texto">
                <div class="nome">{infos.nome}</div>
                <div class="razao">{infos.razao}</div>
            </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        )         
    );
    
}