import { useEffect, useRef } from "react";
import TerminalLine from "./TerminalLine";

export default function SlidingTerminal({ isTerminalOpen, setIsTerminalOpen }) {
  const terminalRef = useRef(null);

  useEffect(() => {
    if (isTerminalOpen) {
      terminalRef.current?.focus();
    }
  }, [isTerminalOpen]);

  return (
    <div className={`sliding-terminal ${isTerminalOpen ? "open" : ""}`}>
      <div className="sliding-header">
        <span>Terminal</span>
        <button onClick={() => setIsTerminalOpen(false)}>✖</button>
      </div>
      <div className="sliding-body">
        <TerminalLine
          setIsTerminalOpen={setIsTerminalOpen}
          terminalRef={terminalRef}
        />
      </div>
    </div>
  );
}
