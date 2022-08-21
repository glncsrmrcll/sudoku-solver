import React, { BaseSyntheticEvent, Component } from 'react';
import { WithTranslation } from 'react-i18next';
import Row from './common/row';
import SudokuSolverBtn from './common/sudokuSolverBtn';

export default class SudokuSolver extends Component<
  WithTranslation,
  { valueMatrix: number[][]; visibilityMatrix: number[][] }
> {
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  nullMatrix: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  constructor(props: WithTranslation) {
    super(props);
    const storedState = window.localStorage.getItem('storedState');

    if (storedState) {
      this.state = JSON.parse(storedState);
    } else {
      this.state = {
        valueMatrix: this.nullMatrix,
        visibilityMatrix: this.nullMatrix,
      };
    }

    this.handleChange = this.handleChange.bind(this);
  }

  onReset: () => void = (): void => {
    const valueMatrix = this.nullMatrix;
    const visibilityMatrix = this.nullMatrix;

    this.setState({ valueMatrix, visibilityMatrix }, () => {
      this.storeState();
    });
  };

  onSolve: () => void = (): void => {
    const { t } = this.props;

    if (this.validateInput()) {
      let solution = this.solve(this.state.valueMatrix);

      if (solution) {
        this.setState({ valueMatrix: solution }, () => {
          this.storeState();
        });
      } else {
        alert(t('invalid'));
      }
    } else {
      alert(t('minError'));
    }
  };

  validateInput(): boolean {
    let count = 0;
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (this.state.valueMatrix[y][x] !== 0) count++;
      }
    }

    // sudoku rules state:
    // number of values given must be at least 17
    return count > 16;
  }

  possible(board: number[][], y: number, x: number, n: number): boolean {
    //row and column check
    for (let i = 0; i < 9; i++) {
      if (board[y][i] === n || board[i][x] === n) {
        return false;
      }
    }

    //division check
    const xSquare = Math.floor(x / 3) * 3;
    const ySquare = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[ySquare + i][xSquare + j] === n) {
          return false;
        }
      }
    }

    return true;
  }

  solve(board: number[][]): number[][] | false {
    // try the first possible number and backtrack if stuck
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (board[y][x] === 0) {
          for (let n = 1; n <= 9; n++) {
            if (this.possible(board, y, x, n)) {
              board[y][x] = n;

              if (this.solve(board)) return board;
            }
          }

          board[y][x] = 0;
          return false;
        }
      }
    }

    return board;
  }

  handleChange(event: BaseSyntheticEvent): void {
    const { id, value } = event.target;

    let valueMatrix = [...this.state.valueMatrix];
    valueMatrix[id[0]][id[2]] = parseInt(value);

    let visibilityMatrix = [...this.state.visibilityMatrix];
    if (value === '0') {
      visibilityMatrix[id[0]][id[2]] = 0;
    } else {
      visibilityMatrix[id[0]][id[2]] = 1;
    }

    this.setState({ valueMatrix, visibilityMatrix }, () => {
      this.storeState();
    });
  }

  storeState(): void {
    window.localStorage.setItem('storedState', JSON.stringify(this.state));
  }

  render(): JSX.Element {
    const { valueMatrix, visibilityMatrix } = this.state;
    const { t } = this.props;

    return (
      <React.Fragment>
        <h1 className="my-6 text-3xl">{t('help')}</h1>
        <div className="w-full flex justify-center flex-wrap">
          {valueMatrix.map((row, index) => {
            if (index === 3 || index === 6) {
              return (
                <React.Fragment key={`R${index}`}>
                  <div className="border-b w-3/5"></div>
                  <Row
                    values={row}
                    visValues={visibilityMatrix[index]}
                    row={index}
                    options={this.options}
                    onChange={this.handleChange}
                  ></Row>
                </React.Fragment>
              );
            } else {
              return (
                <Row
                  key={`R${index}`}
                  row={index}
                  values={row}
                  visValues={visibilityMatrix[index]}
                  options={this.options}
                  onChange={this.handleChange}
                ></Row>
              );
            }
          })}
        </div>
        <div>
          <SudokuSolverBtn
            color={'teal'}
            text={t('solve')}
            onClick={this.onSolve}
          ></SudokuSolverBtn>
          <SudokuSolverBtn
            color={'red'}
            text={t('reset')}
            onClick={this.onReset}
          ></SudokuSolverBtn>
        </div>
      </React.Fragment>
    );
  }
}
