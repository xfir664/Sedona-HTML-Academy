import Header from "./components/layout/Header/Header";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header></Header>
      <div className="main">
        <h1 className="title">Main</h1>
      </div>
      <div className="footer">
        <h1>footer</h1>
      </div>
    </div>
  );
};

export default App;
