import iconSun from "../assets/images/icon-sun.svg";
// import iconMoon from "../assets/images/icon-moon.svg";
const Header = () => {
  return (
    <header className="mx-auto flex max-w-xl items-center justify-between px-6 pt-16">
      <h1 className="text-3xl font-bold tracking-[0.4em] text-white">TODO</h1>

      <button aria-label="Toggle theme">
        <img src={iconSun} alt="icon-sun" className="h-6 w-6" />
      </button>
    </header>
  );
};

export default Header;
