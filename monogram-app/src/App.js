import Login from "./Pages/Login/Login";
import { useSelector } from "react-redux";
import PageHeader from "./Components/PageHeader/PageHeader";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="App">
      {isLoggedIn && <PageHeader></PageHeader>}
      <Login></Login>
    </div>
  );
}

export default App;
