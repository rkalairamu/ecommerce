import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./Routes";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
