import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/redux/themeSlice";
import { setFontSize } from "@/redux/userPreferencesSlice";

export default function ThemeSwitcher() {
  const theme = useSelector((state) => state.theme.value);
  const fontSize = useSelector((state) => state.userPreferences.fontSize);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  const handleFontSize = (e) => {
    dispatch(setFontSize(e.target.value));
  };

  return (
    <div className={`dark:bg-gray-800 flex items-center space-x-4 p-1`}>
      <button
        className="bg-transparent text-blue-500 dark:text-blue-400 dark:bg-gray-800 p-1 border-0 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
      <div className="flex items-center space-x-2">
        <label className="text-gray-600 dark:text-gray-400">Font Size:</label>

        <select
          value={fontSize}
          onChange={handleFontSize}
          className="border p-1 rounded dark:text-gray-100 text-gray-800 dark:bg-gray-800 cursor-pointer"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
}
