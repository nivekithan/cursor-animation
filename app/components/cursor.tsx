import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLImageElement>(null);
  const [degree, setDegree] = useState(0);

  function onMouseMove(e: MouseEvent) {
    const cursorEle = cursorRef.current;
    if (!cursorEle) return;

    const svgRect = cursorEle.getBoundingClientRect();

    const centerX = svgRect.left + svgRect.width / 2;
    const centerY = svgRect.top + svgRect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const angleInRadians = Math.atan2(deltaY, deltaX);

    const angleInDegrees = angleInRadians * (180 / Math.PI);

    setDegree(angleInDegrees + 45);
  }

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <img
      src="https://designup.io/wp-content/themes/designup.io/img/up-arrow.svg"
      alt="Arrow"
      ref={cursorRef}
      style={{ transform: `rotate(${degree}deg)` }}
    />
  );
}
