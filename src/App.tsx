import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./pages/routes";

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
