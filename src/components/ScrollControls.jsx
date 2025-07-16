import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollControls = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition"
        title="Scroll to Top"
      >
        <FaArrowUp />
      </button>
      <button
        onClick={scrollToBottom}
        className="p-3 rounded-full bg-green-600 text-white shadow hover:bg-green-700 transition"
        title="Scroll to Bottom"
      >
        <FaArrowDown />
      </button>
    </div>
  );
};

export default ScrollControls;
