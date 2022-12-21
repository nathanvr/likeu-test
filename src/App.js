import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
