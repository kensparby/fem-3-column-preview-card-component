export default function OptionCard(props) {
  return (
    <div className="card" style={{ backgroundColor: props.color }}>
      <img
        alt=""
        src={`assets/images/icon-${props.option.toLowerCase()}.svg`}
      />
      <h2 className="title">{props.option}</h2>
      <p className="text">{props.text}</p>
      <input
        className="btn"
        name={props.option}
        type="button"
        value="Learn More"
        style={{ color: props.color }}
      />
    </div>
  );
}
