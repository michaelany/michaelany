import {readFile, writeFile} from 'node:fs/promises'
import {join} from 'node:path'

const timeZone = process.env.HUMANS_TXT_TIME_ZONE ?? 'Pacific/Auckland'
const date = process.env.HUMANS_TXT_DATE ?? formatDate(new Date(), timeZone)
const humansPath = join(process.cwd(), 'dist', 'humans.txt')

const content = await readFile(humansPath, 'utf8')
const nextContent = content.replace(/^(\s*Last update:\s*).*$/m, `$1${date}`)

if (nextContent === content) {
  throw new Error(`Could not find "Last update:" in ${humansPath}`)
}

await writeFile(humansPath, nextContent)

function formatDate(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: '2-digit',
    timeZone,
    year: 'numeric',
  }).formatToParts(date)
  const values = Object.fromEntries(parts.map(({type, value}) => [type, value]))
  return `${values.year}-${values.month}-${values.day}`
}
