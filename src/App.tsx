import Header from "@components/layout/Header/Header";
import Main from "@components/layout/Main/Main";

const App: React.FC = () => {
  return (
    <div className="container base">
      <Header></Header>
      <Main></Main>
      <div className="footer">
        <h1>footer</h1>
      </div>
    </div>
  );
};

export default App;
