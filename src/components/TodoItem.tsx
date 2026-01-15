import iconCross from "../assets/images/icon-cross.svg";

const TodoItem = () => {
  return (
    <div className="flex items-center gap-4 px-5 py-4 border-b border-border-light dark:border-border-dark">
      {/* Checkbox */}
      <div className="h-5 w-5 sm:h-5 sm:w-5 rounded-full border border-border-light dark:border-border-dark" />

      {/* Todo text */}
      <p className="flex-1 text-[15px] sm:text-[18px] text-text-light dark:text-text-dark">
        Complete online JavaScript course
      </p>

      {/* Delete icon */}
      <button>
        <img
          src={iconCross}
          alt="delete"
          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
        />
      </button>
    </div>
  );
};

export default TodoItem;
