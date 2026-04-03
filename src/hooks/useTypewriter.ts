import { useEffect, useState } from "react";

export const useTypewriter = (
  text: string,
  speed: number = 100,
  delay: number = 0,
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout1: ReturnType<typeof setTimeout>;
    let timeout2: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      if (currentIndex < text.length) {
        timeout2 = setTimeout(() => {
          const nextIndex = currentIndex + 1;
          setDisplayText(text.slice(0, nextIndex));
          setCurrentIndex(nextIndex);
        }, speed);
      } else {
        setIsComplete(true);
      }
    };

    if (delay === 0) {
      startTyping();
    } else {
      timeout1 = setTimeout(startTyping, delay);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [currentIndex, text, speed, delay]);

  return { displayText, isComplete };
};
