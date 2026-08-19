import { useEffect, useState } from "react";

export function useTypewriterLoop(words, typeSpeed = 70, deleteSpeed = 40, pause = 1500) {
  const [index, setIndex] = useState(0);   
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let timer;

    if (!deleting && displayed === current) {

      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed === "") {
      
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      
      timer = setTimeout(() => {
        setDisplayed((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayed, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return displayed;
}