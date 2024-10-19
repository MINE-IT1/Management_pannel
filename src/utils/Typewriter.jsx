import React, { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      } else {
        // Pause for a moment before restarting
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, 1000); // Pause duration before restarting
      }
    };

    const interval = setInterval(type, speed);

    return () => clearInterval(interval);
  }, [text, index, speed]);

  return <div>{displayedText}</div>;
};

export default Typewriter;
