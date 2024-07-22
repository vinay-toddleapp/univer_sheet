import { useRef } from "react";
import Univer_Sheet from "./components/Univer_Sheet/Univer_Sheet";

const App = () => {
  const univerRef = useRef();

  return <Univer_Sheet style={{ flex: 1 }} ref={univerRef} />;
};

export default App;
