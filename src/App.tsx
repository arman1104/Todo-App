import { useEffect, useState } from "react";
import bgDesktopDark from "./assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
// import bgMobileDark from "./assets/images/bg-mobile-dark.jpg"
// import bgMobileLight from "./assets/images/bg-mobile-light.jpg"

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  // Toggle dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    // console.log("dark mode:", isDark);

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      {/* <div className="min-h-screen bg-[#fafafa] dark:bg-[#181824]"> */}
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
        {/* Background Section */}
        <div className="relative h-[300px] w-full">
          <img
            src={isDark ? bgDesktopDark : bgDesktopLight}
            alt="background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay content */}
          <div className="relative z-50">
            <Header
              isDark={isDark}
              onToggleTheme={() => setIsDark((prev) => !prev)}
            />

            <div className="mt-10">
              <TodoInput />
            </div>

            <div className="mt-12">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
