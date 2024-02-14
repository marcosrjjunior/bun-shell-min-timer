import { $, argv } from 'bun'

let timeout
clearTimeout(timeout)

const TYPES = {
  work: {
    message: 'Take a break... 🧘',
    timer: (+argv[3] || 25) * 60 * 1000,
    sound: 'Funky'
  },
  rest: {
    message: 'Get back to work 🎧',
    timer: (+argv[3] || 10) * 60 * 1000,
    sound: 'Breeze'
  }
}

const type = argv[2] as keyof typeof TYPES

const notify = async ({ message = '', sound = 'Funky' }) => {
  await $`terminal-notifier -title '⏳' -sender com.apple.Terminal -activate com.apple.Terminal -message ${message} -sound ${sound}`
}

const selectedType = TYPES[type]

timeout = setTimeout(() => {
  notify({ message: selectedType.message, sound: selectedType.message })
}, selectedType.timer)

// &
