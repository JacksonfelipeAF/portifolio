import { useEffect, useState } from "react";

export const useScrollSnap = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setCurrentSection(index);
        }
      });
    };

    const snapToSection = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          const snapPosition = sectionTop;
          window.scrollTo({
            top: snapPosition,
            behavior: "smooth",
          });
        }
      });
    };

    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        snapToSection();
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return currentSection;
};
