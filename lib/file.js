import { promises as fs } from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'products.json')

export async function readProducts() {
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

export async function writeProducts(data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2))
}
