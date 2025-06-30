import Typewriter from "typewriter-effect";

export default function TypeWritterSection() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Welcome to Olism 💻")
          .pauseFor(1000)
          .typeString("\n> Skills: NestJS, Next.js, MongoDB")
          .pauseFor(800)
          .typeString("\n> Projects: 🚀 Coming soon...")
          .pauseFor(800)
          .typeString("\n> Contact: oli@example.com")
          .start();
      }}
      options={{
        delay: 50,
        autoStart: true,
      }}
    />
  );
}
