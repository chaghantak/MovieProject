import { useState } from "react";
//구현중
export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}