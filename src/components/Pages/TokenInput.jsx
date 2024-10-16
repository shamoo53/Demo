import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const TokenInput = () => {
  const [tokens, setTokens] = useState(['', '', '', '', '']);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e, index) => {
    const newTokens = [...tokens];
    newTokens[index] = e.target.value;
    setTokens(newTokens);

    // Move to the next input
    if (e.target.value && index < tokens.length - 1) {
      document.getElementById(`token-${index + 1}`).focus();
    }

    // Check if all inputs are filled
    if (newTokens.every(token => token !== '')) {
      navigate('/');  // Navigate to home page
    }
  };

  return (
    <div className="flex flex-col items-center mt-20" data-aos="fade-down-right">
      <h2 className="text-xl font-semibold mb-6">Enter token</h2>
      <div className="flex space-x-2 mb-2">
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
      <p className="text-sm leading-4 font-normal mt-8">Please insert the 5 Digit Token sent to your mail</p>
    </div>
  );
};

export default TokenInput;
