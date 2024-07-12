import React, { useState } from "react";

const Eleven = () => {
  const quotedata = [
    "sffea","faeffea","fqaff","ffef"
  ];

  const random = Math.floor(Math.random() * quotedata.length);
  const quote = quotedata[random];

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
};

export default Eleven;
