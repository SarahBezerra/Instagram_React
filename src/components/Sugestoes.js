export default function Sugestoes() {
    const info_sugestoes = [
        {imagem:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", situacao:"Segue você"},
        {imagem:"assets/img/chibirdart.svg", nome:"chibirdart", situacao:"Segue você"},
        {imagem:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", situacao:"Novo no Instagram"},
        {imagem:"assets/img/adorable_animals.svg", nome:"adorable_animals", situacao:"Segue você"},
        {imagem:"assets/img/smallcutecats.svg", nome:"smallcutecats", situacao:"Segue você"},
    ];

    return (
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {info_sugestoes.map(infos => <Sugestao imagem={infos.imagem} nome={infos.nome} situacao={infos.situacao} key={infos.nome} />)}
      </div>
    );
    
}


function Sugestao(props) {
  return(
    <div className="sugestao">
      <div className="usuario">

      <img src={props.imagem} alt={props.nome} />
        <div className="texto">
          <div className="nome">{props.nome}</div>
          <div className="razao">{props.situacao}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}