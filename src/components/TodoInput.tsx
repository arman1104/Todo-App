const TodoInput = () => {
  return (
    <div className="mx-auto mt-6 max-w-xl px-6">
      {/* <div className="flex items-center gap-4 rounded-md bg-white px-5 py-3 shadow-md dark:bg-[#25273c]"> */}
      <div className="flex items-center gap-4 rounded-md bg-white px-5 py-3 shadow-md dark:bg-card-dark">
        {/* Circle */}
        {/* <div className="h-5 w-5 rounded-full border border-gray-300 dark:border-gray-600" /> */}
        <div className="h-5 w-5 rounded-full border border-border-light dark:border-border-dark" />

        {/* Input */}
        <input
          type="text"
          placeholder="Create a new todo…"
          className="flex-1 bg-transparent text-[15px] sm:text-[18px] text-gray-700 placeholder-gray-400 outline-none dark:text-text-dark dark:placeholder-text-muted"
        />
      </div>
    </div>
  );
};

export default TodoInput;
