import { useRef, useState } from "react";
import UniverSheet from "./components/UniverSheet";
import { DEFAULT_WORKBOOK_DATA } from "./helper/constant";

function App() {
  const [data] = useState(DEFAULT_WORKBOOK_DATA);
  const univerRef = useRef();

  return (
    <div id="root">
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <UniverSheet style={{ flex: 1 }} ref={univerRef} data={data} />
      </div>
    </div>
  );
}

export default App;
