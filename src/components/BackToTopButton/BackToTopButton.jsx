import  { useState, useEffect } from "react";
import styles from "./BackToTopButton.module.scss";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAboveFooter, setIsAboveFooter] = useState(true);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Check if button is above the footer
  const checkFooterPosition = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // If the footer is within the visible part of the screen
      if (footerTop <= windowHeight) {
        setIsAboveFooter(false);
      } else {
        setIsAboveFooter(true);
      }
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", checkFooterPosition);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", checkFooterPosition);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`${styles.backToTopButton} ${
            isAboveFooter ? "" : styles.aboveFooter
          }`}
          onClick={scrollToTop}
        >
        Back to Top
        </div>
      )}
    </>
  );
};

export default BackToTopButton;
