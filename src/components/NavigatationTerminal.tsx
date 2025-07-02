"use client";

import { useState, useEffect } from "react";
import TypeWritterSection from "./TypeWritterSection";
import TerminalIcon from "./icons/TerminalIcon";
import SlidingTerminal from "./SlidingTerminal";
import "../styles/terminal.sass";

export default function NavigatationTerminal() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // useEffect(() => {
  //   setIsTerminalOpen(true);
  // }, []);

  const onClick = () => {
    setIsTerminalOpen((prev) => !prev);
  };

  return (
    <div className="terminal-wrapper">
      <section className="terminal">
        <TypeWritterSection />
      </section>

      <TerminalIcon onClick={onClick} />

      <SlidingTerminal
        isTerminalOpen={isTerminalOpen}
        setIsTerminalOpen={setIsTerminalOpen}
      />
    </div>
  );
}
