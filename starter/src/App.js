import "./App.css";
import { Routes, Route, } from 'react-router-dom';
import SearchInputPage from "./SearchInputPage";
import MainPage from "./MainPage";


function App() {
  return (
    <Routes>
      <Route
        path="/SearchPage"
        element={
          <SearchInputPage /> 
        }
      />
      <Route 
        exact path="/"
        element={
          <MainPage />
        }
      />
    </Routes>
  ); 
}

export default App;
