import { TetragramInfo, tetragramInfo } from './tetragram.info'

export class Tetragram {

  name: string
  translation: string
  desc: string
  good: boolean
  rules: number[]
  exalted: number[]
  fall: number[]
  detriment: number[]
  triplicity: number[]
  phrase: string
  houseMeanings: string[]
  planet: string
  dots: number
  sign: string

  row0: number
  row1: number
  row2: number
  row3: number

  constructor(public key: number = Math.floor(Math.random() * 15)) {
    let info: TetragramInfo = tetragramInfo[key]
    this.name = info.name
    this.translation = info.translation
    this.desc = info.desc
    this.good = info.good
    this.rules = info.rules
    this.exalted = info.exalted
    this.fall = info.fall
    this.detriment = info.detriment
    this.triplicity = info.triplicity
    this.phrase = info.phrase
    this.houseMeanings = info.houseMeanings
    this.planet = info.planet
    this.dots = info.dots
    this.sign = info.sign

    this.row0 = (key >> 0) % 2
    this.row1 = (key >> 1) % 2
    this.row2 = (key >> 2) % 2
    this.row3 = (key >> 3) % 2
  }

  add(tetragram: Tetragram): Tetragram {
    let row0 = (this.row0 + tetragram.row0 + 1) % 2
    let row1 = (this.row1 + tetragram.row1 + 1) % 2
    let row2 = (this.row2 + tetragram.row2 + 1) % 2
    let row3 = (this.row3 + tetragram.row3 + 1) % 2
    let key = (row3 << 3) + (row2 << 2) + (row1 << 1) + (row0 << 0)
    return new Tetragram(key)
  }

  getHouseMeaning(houseNumber: number) {
    return this.houseMeanings[houseNumber - 1]
  }

  reversed(): Tetragram {
    // flip entire tetragram
    let row0 = this.row3
    let row1 = this.row2
    let row2 = this.row1
    let row3 = this.row0
    let key = Tetragram.generateKey(row0, row1, row2, row3)
    return new Tetragram(key)
  }

  inversed(): Tetragram {
    // flip each row
    let row0 = (this.row0 + 1) % 2
    let row1 = (this.row1 + 1) % 2
    let row2 = (this.row2 + 1) % 2
    let row3 = (this.row3 + 1) % 2
    let key = Tetragram.generateKey(row0, row1, row2, row3)
    return new Tetragram(key)
  }

  conversed(): Tetragram {
    return this.reversed().inversed()
  }

  static generateKey(num1, num2, num3, num4): number {
    let row1 = num1 ? (num1 % 2) * 1 : 0
    let row2 = num2 ? (num2 % 2) * 2 : 0
    let row3 = num3 ? (num3 % 2) * 4 : 0
    let row4 = num4 ? (num4 % 2) * 8 : 0
    let key = row1 + row2 + row3 + row4
    return key
  }

  static getAll(): Tetragram[] {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    let tetragrams = numbers.map(number => {
      return new Tetragram(number)
    })
    return tetragrams
  }
}
