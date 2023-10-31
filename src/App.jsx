import "./App.css";
import Increment from "./components/Increment";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <LoginPage />
      <Increment />
    </>
  );
}

export default App;
