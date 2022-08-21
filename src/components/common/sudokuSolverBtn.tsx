import { MouseEventHandler } from 'react';

export default function SudokuSolverBtn({
  color,
  text,
  onClick,
}: {
  color: string;
  text: string;
  onClick: MouseEventHandler;
}): JSX.Element {
  return (
    <button
      className={`bg-${color}-500 uppercase inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-${color}-500 hover:bg-white lg:mt-0 hover:border-${color}-500`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
