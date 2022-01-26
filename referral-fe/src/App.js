import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { Signup } from './pages/Signup';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />}>
        <Route path=":ref" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
