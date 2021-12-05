export default function Usuario(props) {
    const src = props.src;
    const username = props.username;
    const name = props.name;

    return (
      <div class="usuario">
        <img src={src} />
        <div class="texto">
          <strong>{username}</strong>
          {name}
        </div>
      </div>
    )
}