import { useEffect, useState } from "react";

function Loader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 700);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 1300);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`loader ${hidden ? "loader-hidden" : ""}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loader-ring"></div>

      <div className="loader-label">Loading</div>
    </div>
  );
}

export default Loader;
