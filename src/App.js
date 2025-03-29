import { Provider } from "react-redux";
import "./index.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import appStore from "./utils/appStore";
import Browse from "./pages/Browse";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/browse' element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
