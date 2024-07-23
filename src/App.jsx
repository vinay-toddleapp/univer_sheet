import { useRef, useState } from "react";
import BasicGrid from "./components/BasicGrid";
import { DEFAULT_WORKBOOK_DATA } from "./helper/constant";

function App() {
  const [data] = useState(DEFAULT_WORKBOOK_DATA);
  const univerRef = useRef();
  const demoExamples = [
    {
      name: "Basic Grid",
      value: "basicGrid",
      component: <BasicGrid ref={univerRef} data={data} />,
    },
  ];

  const defaultOption = demoExamples[demoExamples.length - 1].value;

  return (
    <div
      id="root"
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <select
        name="demo"
        id="demo"
        defaultValue={defaultOption}
        style={{ width: "fit-content" }}
      >
        {demoExamples.map((demo, index) => {
          return (
            <option key={index} value={demo.value}>
              {demo.name}
            </option>
          );
        })}
      </select>
      <BasicGrid style={{ flex: 1 }} ref={univerRef} data={data} />
    </div>
  );
}

export default App;
