import './App.css';
import {createContext, useState} from "react";
import Header from './components/Header';
import ResultList from './components/ResultList';


//Create Context for global state i.e. using context api
export const InputContext = createContext();

function App() {

  const [inputValue, setInputValue] = useState("");

  const value = {
    inputValue, setInputValue
  }

  return (
    <>
    <InputContext.Provider value={value}>
    <div>
     <Header/>  {/* For the search bar */}
     <ResultList/>  {/* For the result of the word entered */}
    </div>
    </InputContext.Provider>

    </>
  );
}

export default App;
