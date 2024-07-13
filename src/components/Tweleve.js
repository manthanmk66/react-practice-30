// Image Upload


import React, { useState } from "react";

const Tweleve = () => {
  const [file, setFile] = useState(null);

  return (
    <div>
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept=".jpg"
      />
      {file && <img src={URL.createObjectURL(file)} alt="Uploaded File" />}
    </div>
  );
};

export default Tweleve;
