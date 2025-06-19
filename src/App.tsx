import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="container base">
      <Outlet></Outlet>
    </div>
  );
};

export default App;
