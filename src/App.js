import OptionCard from "./OptionCard";
import data from "./data.json";

function App() {
  const options = Object.keys(data).map((option, index) => {
    return (
      <OptionCard
        key={index}
        option={option}
        text={data[option].text}
        color={data[option].color}
      />
    );
  });
  return (
    <div className="wrapper">
      <div className="options">{options}</div>
    </div>
  );
}

export default App;
