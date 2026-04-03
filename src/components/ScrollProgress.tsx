import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[1001]"
      style={{
        width: `${progress}%`,
        background: "var(--gradient-shine)",
        backgroundSize: "200% 100%",
        animation: "shineText 2s linear infinite",
      }}
    />
  );
}
