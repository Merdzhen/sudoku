function solveEasy(boardString) {
  const raws = [];
  for (let i = 0; i < 81; i += 9) {
    raws.push(boardString.slice(i, i + 9).split(''));
  }

  const columns = [];
  for (let i = 0; i < raws[0].length; i += 1) {
    const columnsItem = [];
    for (let j = 0; j < raws.length; j += 1) {
      columnsItem.push(raws[j][i]);
    }
    columns.push(columnsItem);
  }

  const blocks = [];
  for (let j = 0; j < 81; j += 27) {
    for (let i = j; i < (j + 7); i += 3) {
      const blockItem = [];
      blockItem.push(boardString[i], boardString[i + 1], boardString[i + 2], boardString[i + 9], boardString[i + 10], boardString[i + 11], boardString[i + 18], boardString[i + 19], boardString[i + 20]);
      blocks.push(blockItem);
    }
  }
  // заполняем пустые ячейки "шагая" по блокам
  // i - индекс "строки" в массиве raws
  // j - индекс элемента в "строке"

  // blocks[0]
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      // console.log(raws[i][j]);

      if (raws[i][j] === '-') {
        const possibleNumbers = [];
        for (let x = 1; x < 10; x += 1) {
          if (!raws[i].includes(`${x}`) && !columns[j].includes(`${x}`) && !blocks[0].includes(`${x}`)) {
            possibleNumbers.push(`${x}`);
          }
        }

        // если у ячейки только одно возможное решение, записываем его в ячейку
        if (possibleNumbers.length === 1) {
          raws[i][j] = possibleNumbers[0];
        }
      }
    }
  }

  // blocks[1]
  for (let i = 0; i < 3; i += 1) {
    for (let j = 3; j < 6; j += 1) {
      // console.log(raws[i][j]);

      if (raws[i][j] === '-') {
        const possibleNumbers = [];
        for (let x = 1; x < 10; x += 1) {
          if (!raws[i].includes(`${x}`) && !columns[j].includes(`${x}`) && !blocks[1].includes(`${x}`)) {
            possibleNumbers.push(`${x}`);
          }
        }

        // если у ячейки только одно возможное решение, записываем его в ячейку
        if (possibleNumbers.length === 1) {
          raws[i][j] = possibleNumbers[0];
        }
      }
    }
  }

  // blocks[2]
  for (let i = 0; i < 3; i += 1) {
    for (let j = 6; j < 9; j += 1) {
      // console.log(raws[i][j]);

      if (raws[i][j] === '-') {
        const possibleNumbers = [];
        for (let x = 1; x < 10; x += 1) {
          if (!raws[i].includes(`${x}`) && !columns[j].includes(`${x}`) && !blocks[2].includes(`${x}`)) {
            possibleNumbers.push(`${x}`);
          }
        }

        // если у ячейки только одно возможное решение, записываем его в ячейку
        if (possibleNumbers.length === 1) {
          raws[i][j] = possibleNumbers[0];
        }
      }
    }
  }

  // blocks[3]
  for (let i = 3; i < 6; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      // console.log(raws[i][j]);

      if (raws[i][j] === '-') {
        const possibleNumbers = [];
        for (let x = 1; x < 10; x += 1) {
          if (!raws[i].includes(`${x}`) && !columns[j].includes(`${x}`) && !blocks[3].includes(`${x}`)) {
            possibleNumbers.push(`${x}`);
          }
        }

        // если у ячейки только одно возможное решение, записываем его в ячейку
        if (possibleNumbers.length === 1) {
          raws[i][j] = possibleNumbers[0];
        }
      }
    }
  }

  // blocks[4]
  for (let i = 3; i < 6; i += 1) {
    for (let j = 3; j < 6; j += 1) {
      // console.log(raws[i][j]);

      if (raws[i][j] === '-') {
        const possibleNumbers = [];
        for (let x = 1; x < 10; x += 1) {
          if (!raws[i].includes(`${x}`) && !columns[j].includes(`${x}`) && !blocks[4].includes(`${x}`)) {
            possibleNumbers.push(`${x}`);
          }
        }

        // если у ячейки только одно возможное решение, записываем его в ячейку
        if (possibleNumbers.length === 1) {
          raws[i][j] = possibleNumbers[0];
        }
      }
    }
  }

  // blocks[5]
  for (let i = 3; i < 6; i += 1) {
    for (let j = 6; j < 9; j += 1) {
      // console.log(raws[i][j]);

      if (raws[i][j] === '-') {
        const possibleNumbers = [];
        for (let x = 1; x < 10; x += 1) {
          if (!raws[i].includes(`${x}`) && !columns[j].includes(`${x}`) && !blocks[5].includes(`${x}`)) {
            possibleNumbers.push(`${x}`);
          }
        }

        // если у ячейки только одно возможное решение, записываем его в ячейку
        if (possibleNumbers.length === 1) {
          raws[i][j] = possibleNumbers[0];
        }
      }
    }
  }

  // blocks[6]
  for (let i = 6; i < 9; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      // console.log(raws[i][j]);

      if (raws[i][j] === '-') {
        const possibleNumbers = [];
        for (let x = 1; x < 10; x += 1) {
          if (!raws[i].includes(`${x}`) && !columns[j].includes(`${x}`) && !blocks[6].includes(`${x}`)) {
            possibleNumbers.push(`${x}`);
          }
        }

        // если у ячейки только одно возможное решение, записываем его в ячейку
        if (possibleNumbers.length === 1) {
          raws[i][j] = possibleNumbers[0];
        }
      }
    }
  }

  // blocks[7]
  for (let i = 6; i < 9; i += 1) {
    for (let j = 3; j < 6; j += 1) {
      // console.log(raws[i][j]);

      if (raws[i][j] === '-') {
        const possibleNumbers = [];
        for (let x = 1; x < 10; x += 1) {
          if (!raws[i].includes(`${x}`) && !columns[j].includes(`${x}`) && !blocks[7].includes(`${x}`)) {
            possibleNumbers.push(`${x}`);
          }
        }

        // если у ячейки только одно возможное решение, записываем его в ячейку
        if (possibleNumbers.length === 1) {
          raws[i][j] = possibleNumbers[0];
        }
      }
    }
  }

  // blocks[8]
  for (let i = 6; i < 9; i += 1) {
    for (let j = 6; j < 9; j += 1) {
      // console.log(raws[i][j]);

      if (raws[i][j] === '-') {
        const possibleNumbers = [];
        for (let x = 1; x < 10; x += 1) {
          if (!raws[i].includes(`${x}`) && !columns[j].includes(`${x}`) && !blocks[8].includes(`${x}`)) {
            possibleNumbers.push(`${x}`);
          }
        }

        // если у ячейки только одно возможное решение, записываем его в ячейку
        if (possibleNumbers.length === 1) {
          raws[i][j] = possibleNumbers[0];
        }
      }
    }
  }

  const newBoardString = raws.map((el) => el.join('')).join('');
  try {
    return (newBoardString.split('').includes('-')) ? solveEasy(newBoardString) : newBoardString;
  } catch (err) {
    return `Oooops, I can't solve it, too difficult :( \nError: ${err}`;
  }

  // идем по массиву raws, ищем пустую ячейку
  // для пустой ячейки ищем возможные значения
  // подставляем первое, идем на следующую пустую ячейку
  // если получается ошибка - нет возможных значений, возвращаемся на ячейку назад
}

module.exports = solveEasy;
