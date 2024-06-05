import { useEffect, useRef, useState } from "react";

const MAXIMUM_DISTANCE = 200;

export function ProxmityCursor() {
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

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    console.log(distance);

    if (distance > MAXIMUM_DISTANCE) {
      setDegree(0);
      return;
    }

    const angleInRadians = Math.atan2(deltaY, deltaX);

    const angleInDegrees = angleInRadians * (180 / Math.PI);

    setDegree(angleInDegrees + 90);
  }

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <img
      src="https://www.svgrepo.com/download/110692/horizontal-line.svg"
      alt="Arrow"
      ref={cursorRef}
      style={{
        transform: `rotate(${degree}deg)`,
        width: "24px",
        height: "24px",
      }}
    />
  );
}
