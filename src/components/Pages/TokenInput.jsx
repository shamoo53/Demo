import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TokenInput = () => {
  const [tokens, setTokens] = useState(['', '', '', '', '']);

  const handleChange = (e, index) => {
    const newTokens = [...tokens];
    newTokens[index] = e.target.value;
    setTokens(newTokens);

    // Move to the next input
    if (e.target.value && index < tokens.length - 1) {
      document.getElementById(`token-${index + 1}`).focus();
    }
  };

  return (
    <div className="flex flex-col items-center mt-20"
    data-aos="fade-down-right"
    >
      <h2 className="text-xl font-semibold mb-6">Enter token</h2>
      <div className="flex space-x-2 mb-4">
        {tokens.map((token, index) => (
          <input
            key={index}
            id={`token-${index}`}
            type="text"
            maxLength="1"
            value={token}
            onChange={(e) => handleChange(e, index)}
            className="w-10 h-10 text-center text-lg border border-gray-300 rounded"
          />
        ))}
      </div>
     
    </div>
  );
};

export default TokenInput;