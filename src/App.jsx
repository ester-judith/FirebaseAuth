import "./App.css";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Auth</h1>
      </div>
    </AuthProvider>
  );
}

export default App;