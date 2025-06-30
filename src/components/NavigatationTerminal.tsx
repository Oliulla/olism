"use client";

import TypeWritterSection from "./TypeWritterSection";
import "../styles/terminal.sass";

export default function NavigatationTerminal() {
  return (
    <div className="terminal-wrapper">
      <section className="terminal">
        <TypeWritterSection />
      </section>
    </div>
  );
}
