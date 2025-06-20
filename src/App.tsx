import Header from "@components/layout/Header/Header";
import Footer from "@components/layout/Footer/Footer";
import Main from "@components/layout/Main/Main";

const App: React.FC = () => {
  return (
    <div className="container base">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default App;
