import React, { ChangeEventHandler } from 'react';
import ValueSelect from './valueSelect';

export default function Row({
  options,
  values,
  onChange,
  row,
  visValues,
}: {
  options: number[];
  values: number[];
  onChange: ChangeEventHandler;
  row: number;
  visValues: number[];
}): JSX.Element {
  const index: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="flex justify-between w-3/5">
      {index.map((i) => {
        if (i === 3 || i === 6) {
          return (
            <React.Fragment key={`S${i}`}>
              <div className="border-r"></div>
              <ValueSelect
                value={values[i]}
                options={options}
                onChange={onChange}
                row={row}
                col={i}
                vis={visValues[i]}
              ></ValueSelect>
            </React.Fragment>
          );
        } else {
          return (
            <ValueSelect
              key={`S${i}`}
              value={values[i]}
              options={options}
              onChange={onChange}
              row={row}
              col={i}
              vis={visValues[i]}
            ></ValueSelect>
          );
        }
      })}
    </div>
  );
}
