import bgDesktopDark from "./assets/images/bg-desktop-dark.jpg";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// import bgDesktopLight from "./assets/images/bg-desktop-light.jpg"
// import bgMobileDark from "./assets/images/bg-mobile-dark.jpg"
// import bgMobileLight from "./assets/images/bg-mobile-light.jpg"

const App = () => {
  return (
    <div className="min-h-screen bg-[#181824]">
      {/* Background Section */}
      <div className="relative h-[300px] w-full">
        <img
          src={bgDesktopDark}
          alt="bg-desktop-dark"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Header overlay */}
        <div className="relative z-50">
          <Header />
          {/* Todo Input inside background */}
          <div className="mt-10">
            <TodoInput />
          </div>
          <div className="mt-12">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
