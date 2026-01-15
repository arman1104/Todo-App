const FilterBar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-4 text-sm text-text-muted">
      {/* Items left */}
      <span>5 items left</span>

      {/* Filters */}
      <div className="flex gap-4 font-bold">
        <button className="text-accent">All</button>

        <button className="hover:text-text-light dark:hover:text-hover-dark">
          Active
        </button>

        <button className="hover:text-text-light dark:hover:text-hover-dark">
          Completed
        </button>
      </div>

      {/* Clear completed */}
      <button className="hover:text-text-light dark:hover:text-hover-dark">
        Clear Completed
      </button>
    </div>
  );
};

export default FilterBar;
