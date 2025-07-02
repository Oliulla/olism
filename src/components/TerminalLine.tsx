import { useState, useEffect } from "react";

export default function TerminalLine({ setIsTerminalOpen, terminalRef }) {
  const [command, setCommand] = useState("help");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      setCommand((prev) => prev + e.key);
    } else if (e.key === "Backspace") {
      setCommand((prev) => prev.slice(0, -1));
    } else if (e.key === "Enter") {
      console.log("Execute:", command);
      setIsTerminalOpen(false);
      setCommand("");
    }
  };

  // useEffect(() => {
  //   terminalRef.current?.focus();
  // }, []);

  return (
    <div
      className="terminal-line"
      tabIndex={0}
      ref={terminalRef}
      onKeyDown={handleKeyDown}
    >
      <span className="terminal-prompt">olism@olism:~$</span>
      <span className="terminal-text">{command}</span>
      <span className="terminal-cursor">█</span>
    </div>
  );
}
