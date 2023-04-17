import { useState } from "react";
import { Button, Input, Space, Typography } from "antd";
const { TextArea } = Input;
const { Title } = Typography;
import "./App.css";

function App() {
  const [loc, setLoc] = useState("");
  const [src, setSrc] = useState("");
  const [res, setRes] = useState("");

  const defaultString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};':,./<>?`~|";

  const handleCheck = () => {
    const sourceWithoutSpaces = src.replace(/ /g, "") + defaultString;

    // remove spaces from string
    const stringWithoutSpaces = loc.replace(/ /g, "");

    // Find unique characters in string
    const unique = stringWithoutSpaces
      .split("")
      .filter((item, index, arr) => arr.indexOf(item) === index)
      .join("");

    // Check if source contains all unique characters and return missing characters
    let missing = "";
    unique.split("").forEach((item) => {
      if (!sourceWithoutSpaces.includes(item)) {
        missing += item;
      }
    });

    console.log(missing);
    setRes(missing);
  };

  const handleLoc = (e) => {
    setLoc(e.target.value);
  };

  const handleSrc = (e) => {
    setSrc(e.target.value);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Title>Character checker</Title>
        <TextArea rows={4} placeholder="Localization string!" onChange={handleLoc} value={loc} />
        <br />
        <br />
        <TextArea rows={4} placeholder="Current source" onChange={handleSrc} value={src} />
        <Button type="primary" onClick={handleCheck}>
          Check
        </Button>
        <TextArea rows={4} placeholder="Result" value={res} />
      </Space>
    </>
  );
}

export default App;
