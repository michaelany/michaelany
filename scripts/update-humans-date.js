import {readFile, writeFile} from 'node:fs/promises'
import {join} from 'node:path'

const humansPath = join(process.cwd(), 'dist', 'humans.txt')
const content = await readFile(humansPath, 'utf8')
const date = formatDate(new Date())
const nextContent = content.replace(/^(\s*Last update:\s*).*$/m, `$1${date}`)

await writeFile(humansPath, nextContent)

function formatDate(date) {
  const parts = new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: '2-digit',
    timeZone: 'Pacific/Auckland',
    year: 'numeric',
  }).formatToParts(date)
  const values = Object.fromEntries(parts.map(({type, value}) => [type, value]))
  return `${values.year}-${values.month}-${values.day}`
}
