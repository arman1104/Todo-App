const FilterBar = ({
  itemsLeft,
  filter,
  onFilterChange,
  onClearCompleted,
}: any) => {
  return (
    <>
      <div className="flex items-center justify-between px-5 py-4 text-sm text-text-muted border-t border-border-light dark:border-border-dark">
        <span>{itemsLeft} items left</span>

        <div className="hidden gap-4 font-bold sm:flex">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className={filter === f ? "text-accent" : ""}
            >
              {f[0].toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <button onClick={onClearCompleted}>Clear Completed</button>
      </div>

      <div className="mx-auto mt-4 max-w-xl px-6 sm:hidden">
        <div className="flex justify-center gap-6 rounded-md bg-white py-3 font-bold text-text-muted shadow-md dark:bg-card-dark">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className={filter === f ? "text-accent" : ""}
            >
              {f[0].toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterBar;
