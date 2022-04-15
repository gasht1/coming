import "./App.css";

const Hello = (props) => {
  return (
    <div className="">
      <h1>{props.name}</h1>
      <h3>{props.lastname}</h3>
      <h2> {props.age}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Hello name="gashaw" lastname="hello" age={24} />
      <Hello name="dave" age={20} />
      <Hello />
      <Hello />
    </div>
  );
};

export default App;
