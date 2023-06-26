import React, { useState, useEffect } from "react";
import * as S from "./style";
import Arrow from "../../images/arrow.png";

const PageComponent = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const headerHeight = 300;

      if (scrollHeight > headerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToHeader = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showButton && (
        <S.Container onClick={handleScrollToHeader} show={showButton}>
          <S.Image src={Arrow} alt="Arrow" />
        </S.Container>
      )}
    </div>
  );
};

export default PageComponent;
