import React from "react";
export default function Options() {
  return (
    <div className="border border-black flex justify-between mx-44">
      <div>
        <select id="dropdown" name="dropdown">
          <option value="Ariel">Ariel</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Helix">Helix</option>
        </select>
      </div>
      <div>
        <select name="" id="">
          <option value="10px">10px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
        </select>
      </div>
      <div className="flex space-x-6">
        <button className="border border-black">Bold</button>
        <button className="border border-black">Italic</button>
        <button className="border border-black">Underline</button>
      </div>
    </div>

  );
}
