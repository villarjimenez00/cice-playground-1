/**
 * @param {string} string
 * @returns {number}
 */
export function calculator(string) {
  let result = string.split(' ')
  result.map(char => {
    if (!parseInt(char)) {
      return char
    }
    return parseInt(char)
  })

  let operador
  result.reduce((a, b, c) => {
    if ((c + 1) % 2 != 0) {
      operador = b
      return a
    } else {
      switch (operador) {
        case '+':
          return a + b
          break
        case '-':
          return a - b
          break
      }
    }
  })
}
