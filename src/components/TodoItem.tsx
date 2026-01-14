import iconCross from "../assets/images/icon-cross.svg";

const TodoItem = () => {
  return (
    <div className="flex items-center gap-4 px-5 py-4 border-b border-gray-200 dark:border-[#393a4c]">
      {/* Checkbox */}
      <div className="h-5 w-5 rounded-full border border-gray-300 dark:border-gray-600" />

      {/* Todo text */}
      <p className="flex-1 text-[18px] text-gray-700 dark:text-gray-200">
        Complete online JavaScript course
      </p>

      {/* Delete icon */}
      <button>
        <img src={iconCross} alt="delete" className="h-4 w-4" />
      </button>
    </div>
  );
};

export default TodoItem;
