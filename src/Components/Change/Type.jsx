import { TypeAnimation } from "react-type-animation";

export default function Type({ text, color, size }) {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        text || "something",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className={`text-xl text-bold lg:${size || "text-xl"}`}
      style={{
        display: "inline-block",
        color: color || "black",
      }}
      repeat={Infinity}
    />
  );
}
