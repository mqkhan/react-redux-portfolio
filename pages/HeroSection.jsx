import { useSelector } from "react-redux";
export default function HeroSection() {
  const fontSize = useSelector((state) => state.userPreferences.fontSize);
  const theme = useSelector((state) => state.theme.value);

  const fontSizeStyles = {
    small: "text-2xl",
    medium: "text-4xl",
    large: "text-6xl",
  };
  // const textColorClass = state.theme === "dark" ? "dark:text-white" : "";
  return (
    <section
      className={`${theme === "light" ? "white" : "dark:bg-gray-800 "} p-4 ${
        fontSizeStyles[fontSize]
      }`}
    >
      {/* ${textColorClass} */}
      <h1 className={`font-bold dark:text-gray-100 `}>My Portfolio</h1>
      <p className="text-lg mt-4 dark:text-gray-200 ">
        I am passionately looking for web development job opportunity in a
        company where I can apply my skills and education as well as learn new
        technologies. I really enjoy problem solving, finding bugs, reading
        code, understanding logic and I am always ready to face challenges.
      </p>
    </section>
  );
}
