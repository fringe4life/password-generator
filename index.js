import { form, symbols, length, lowercase, uppercase, numbers, passwordEls } from './elements.js'

import { generatePassword } from './elementFunctions.js'





form.addEventListener('submit', (event) => {
  event.preventDefault()
  const includeNumbers = numbers.checked;
  const includeSymbols = symbols.checked;
  const includeLowercase = lowercase.checked;
  const includeUppercase = uppercase.checked;
  const passwordLength = Number.parseInt(length.value)

  // Generate a random password
  const passwords = [generatePassword(includeLowercase, includeUppercase, includeSymbols, includeNumbers, passwordLength), generatePassword(includeLowercase, includeUppercase, includeSymbols, includeNumbers, passwordLength)]

  Array.from(passwordEls).forEach((passwordEl, index) => passwordEl.textContent = passwords[index])
})