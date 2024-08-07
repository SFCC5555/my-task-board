import { BrowserRouter } from "react-router-dom";
import { TaskModal } from "./components/TaskModal";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <HomePage />

    </BrowserRouter>
  );
}

export default App;
