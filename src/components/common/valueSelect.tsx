import { ChangeEventHandler } from 'react';

export default function ValueSelect({
  options,
  value,
  onChange,
  row,
  col,
  vis,
}: {
  options: number[];
  value: number;
  onChange: ChangeEventHandler;
  row: number;
  col: number;
  vis: number;
}): JSX.Element {
  return (
    <select
      className={`block appearance-none w-full bg-white border border-teal-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline m-4 ${
        vis === 0 ? 'bg-white' : 'bg-teal-200'
      }`}
      value={value}
      onChange={onChange}
      id={row + ' ' + col}
    >
      {options.map((option) => (
        <option value={option} key={'O' + option}>
          {option === 0 ? '-' : option}
        </option>
      ))}
    </select>
  );
}
