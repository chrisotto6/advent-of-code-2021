const fs = require("fs");

const path = "day2/input.txt";

const input = fs.readFileSync(path, 'utf8').split('\n')

const calculateOne = (input) => {
  const reducer = (acc, curr) => acc + curr;
  const forward = input.filter(item => item.startsWith('forward')).map(item => parseInt(item.slice(-1))).reduce(reducer)
  const up = input.filter(item => item.startsWith('up')).map(item => parseInt(item.slice(-1))).reduce(reducer)
  const down = input.filter(item => item.startsWith('down')).map(item => parseInt(item.slice(-1))).reduce(reducer)

  return (down - up) * forward;
}
console.log(`The answer to question one is: ${calculateOne(input)}`)

const calculateTwo = (input) => {
  const commands = input.map(item => {
    const singleCommand = item.split(' ');
    return { direction: singleCommand[0], value: +singleCommand[1] }
  })

  let horizontal = 0
  let depth = 0
  let aim = 0

  commands.forEach(command =>  {
    switch (command.direction) {
      case 'forward':
        horizontal += command.value
        depth += command.value * aim
        break;
      case 'down':
        aim += command.value
        break;
      case 'up':
        aim -= command.value
        break;
    }
  })

  return horizontal * depth;
}

console.log(`The answer to question two is: ${calculateTwo(input)}`)