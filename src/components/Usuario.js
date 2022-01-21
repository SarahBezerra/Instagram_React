export default function Usuario(props) {
    const src = props.src;
    const username = props.username;
    const name = props.name;

    return (
      <div className="usuario">
        <img src={src} alt="" />
        <div className="texto">
          <strong>{username}</strong>
          {name}
        </div>
      </div>
    )
}