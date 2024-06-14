import animate from './animate.js'
import chalk from 'chalk'

export function loading(length) {
  const size = length
  const frames = Array()

  for (let i = 0; i <= length; i++) {
    let percentage = ((i / length) * 100).toFixed(0)
    let line = chalk.white('|')
    line += chalk.green('#').repeat(i)
    line += ' '.repeat(length - i)
    line += chalk.white('|')
    line += ` ${percentage}%`

    frames.push(line)
  }
  animate(frames, 0.5)
}

loading(8)
