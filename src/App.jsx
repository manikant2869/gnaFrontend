import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import GlobalContext from "./context/GlobalContext";
import './index.css'
function App() {
  return (
    <BrowserRouter>
    <GlobalContext>
        <AllRoutes />
    </GlobalContext>
    </BrowserRouter>
  );
}

export default App;