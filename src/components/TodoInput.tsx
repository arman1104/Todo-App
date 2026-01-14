const TodoInput = () => {
  return (
    <div className="mx-auto mt-6 max-w-xl px-6">
      <div className="flex items-center gap-4 rounded-md bg-white px-5 py-3 shadow-md dark:bg-[#25273c]">
        {/* Circle */}
        <div className="h-5 w-5 rounded-full border border-gray-300 dark:border-gray-600" />

        {/* Input */}
        <input
          type="text"
          placeholder="Create a new todo…"
          className="flex-1 bg-transparent text-[18px] text-gray-700 placeholder-gray-400 outline-none dark:text-gray-200 dark:placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default TodoInput;
