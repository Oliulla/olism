import TerminalLine from "./TerminalLine";

export default function SlidingTerminal({ isTerminalOpen, setIsTerminalOpen }) {
  return (
    <div className={`sliding-terminal ${isTerminalOpen ? "open" : ""}`}>
      <div className="sliding-header">
        <span>Terminal</span>
        <button onClick={() => setIsTerminalOpen(false)}>✖</button>
      </div>
      <div className="sliding-body">
        <TerminalLine setIsTerminalOpen={setIsTerminalOpen} />
      </div>
    </div>
  );
}
