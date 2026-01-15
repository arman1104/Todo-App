const FilterBar = () => {
  return (
    <>
      {/* Footer inside todo card */}
      <div className="flex items-center justify-between px-5 py-4 text-sm text-text-muted border-t border-border-light dark:border-border-dark">
        <span>5 items left</span>

        {/* Filters (desktop only) */}
        <div className="hidden gap-4 font-bold sm:flex">
          <button className="text-accent">All</button>
          <button className="hover:text-text-light dark:hover:text-hover-dark">
            Active
          </button>
          <button className="hover:text-text-light dark:hover:text-hover-dark">
            Completed
          </button>
        </div>

        <button className="hover:text-text-light dark:hover:text-hover-dark">
          Clear Completed
        </button>
      </div>

      {/* Filters pill (mobile only) */}
      <div className="mx-auto mt-3 max-w-xl px-6 sm:hidden">
        <div className="flex justify-center gap-6 rounded-md bg-white py-3 text-sm font-bold text-text-muted shadow-md dark:bg-card-dark">
          <button className="text-accent">All</button>
          <button className="hover:text-text-light dark:hover:text-hover-dark">
            Active
          </button>
          <button className="hover:text-text-light dark:hover:text-hover-dark">
            Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
