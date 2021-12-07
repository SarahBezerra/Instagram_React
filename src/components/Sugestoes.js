export default function Sugestoes() {
    const info_sugestoes = [
        {imagem:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", situacao:"Segue você"},
        {imagem:"assets/img/chibirdart.svg", nome:"chibirdart", situacao:"Segue você"},
        {imagem:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", situacao:"Novo no Instagram"},
        {imagem:"assets/img/adorable_animals.svg", nome:"adorable_animals", situacao:"Segue você"},
        {imagem:"assets/img/smallcutecats.svg", nome:"smallcutecats", situacao:"Segue você"},
    ];

    return (
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {info_sugestoes.map(infos => <Sugestao imagem={infos.imagem} nome={infos.nome} situacao={infos.situacao} />)}
      </div>
    );
    
}


function Sugestao(porps) {
  return(
    <div class="sugestao">
      <div class="usuario">

      < img src={porps.imagem} />
        <div class="texto">
          <div class="nome">{porps.nome}</div>
          <div class="razao">{porps.situacao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}