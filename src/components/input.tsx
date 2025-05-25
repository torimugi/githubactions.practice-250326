import React from "react";

type Props = {
  TodoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  disabled: boolean
};

export const InputTodo: React.FC<Props> = ({ TodoText, onChange, onClick, disabled }) => {
  return (
    <div className="flex rounded-md overflow-hidden bg-teal-400 p-2 w-full max-w-md">
      <input
        type="text"
        placeholder="TODOを入力"
        className="flex-grow p-2 outline-none bg-white mr-2"
        value={TodoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button
        onClick={onClick}
        className="bg-gray-200 rounded-md px-4 py-2 hover:bg-gray-300"
        disabled={disabled}
      >
        追加
      </button>
    </div>
  );
};
