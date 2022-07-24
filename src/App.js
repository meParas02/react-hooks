import "./App.css";
import FatchApi from "./components/fatchData/callApi";
import PerentCom from "./components/memoCallback/perent";
import UseMemoHook from "./components/useMemoHook";
import UseReducerHook from "./components/useReducerHook";
import UseRefHook from "./components/useRefHook";
import UseRefHookTwo from "./components/useRefHookTwo";

function App() {
  return (
    <>
      <h1>Hello hooks</h1>
      <UseRefHook />
      ---------------------------------------------------------------------------------------------
      <UseRefHookTwo />
      ---------------------------------------------------------------------------------------------
      <PerentCom />
      <br />
      ---------------------------------------------------------------------------------------------
      <UseMemoHook />
      <br />
      ---------------------------------------------------------------------------------------------
      <UseReducerHook />
      <br />
      ---------------------------------------------------------------------------------------------
      {/* <FatchApi /> */}
    </>
  );
}

export default App;
