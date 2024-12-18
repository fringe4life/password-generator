
import { lowercase, uppercase, numbers, symbols } from "./data.js"



// Generate a random password
function generatePassword(includeLowercase, includeUppercase, includeSymbols, includeNumbers, passwordLength) {
  const characters = []
  if (includeLowercase) characters.push(...lowercase)
  if (includeUppercase) characters.push(...uppercase)
  if (includeSymbols) characters.push(...symbols)
  if (includeNumbers) characters.push(...numbers)

  if (!characters.length) alert('Please choose something')  // No characters selected, return an empty password

  const password = []

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    password.push(characters[randomIndex])
  }

  return password.join('')
}

export { generatePassword }