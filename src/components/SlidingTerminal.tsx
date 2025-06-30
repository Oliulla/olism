export default function SlidingTerminal({ isTerminalOpen, setIsTerminalOpen }) {
  return (
    <div className={`sliding-terminal ${isTerminalOpen ? "open" : ""}`}>
      <div className="sliding-header">
        <span>Terminal</span>
        <button onClick={() => setIsTerminalOpen(false)}>✖</button>
      </div>
      <div className="sliding-body">
        <p>oli@localhost:~$ whoami</p>
        <p>I'm a backend dev with class and command line sass 😎</p>
      </div>
    </div>
  );
}
