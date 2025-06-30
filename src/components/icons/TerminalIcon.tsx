import { IoTerminal } from "react-icons/io5";

export default function TerminalIcon({ onClick }) {
  return (
    <div className="terminal-icon" onClick={onClick} title="Open Terminal">
      <IoTerminal size={24} color="#0f0" />
    </div>
  );
}
