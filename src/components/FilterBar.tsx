const FilterBar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-4 text-sm text-gray-500 dark:text-gray-400">
      {/* Items left */}
      <span>5 items left</span>

      {/* Filters */}
      <div className="flex gap-4 font-bold">
        <button className="text-blue-500">All</button>
        <button className="hover:text-gray-700 dark:hover:text-gray-200">
          Active
        </button>
        <button className="hover:text-gray-700 dark:hover:text-gray-200">
          Completed
        </button>
      </div>

      {/* Clear completed */}
      <button className="hover:text-gray-700 dark:hover:text-gray-200">
        Clear Completed
      </button>
    </div>
  );
};

export default FilterBar;
