import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SingIn";
import AuthDetails from "./components/auth/AuthDetails";

function App() {
  return (
    <div className="App">
      <SignUp />
      <SignIn />
      <AuthDetails />
    </div>
  );
}

export default App;
