// @ts-check
import { faker } from '@faker-js/faker'

// Set of methods that help test development

/**
 * Generates a random name
 * @returns {string} A random full name
 */
export function generateFullName(): string {
  return faker.person.fullName()
}

/**
 * Generates a random email
 * @param {string} [emailAlias] - The alias for email
 * @returns {string} A random email address
 */
export function generateEmail(emailAlias?: string): string {
  const alias = emailAlias ?? generateFullName()

  return `${alias.toLowerCase().replace(/\s+/g, '')}@playwright-lab.com`
}

/**
 * Generates a random password
 * @returns {string} A randon password
 */
export function generatePassword(): string {
  return faker.internet.password({
    length: 12,
    // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,12}$/
    // Have between 8 and 12 characters being
    // Uppercase, lowercase, number and special
  })
}

/**
 * Generates user data to be signed up
 * @param {boolean} [isAdmin=false] - Set true to get Admin user data
 * @returns {object} An object containing fake and random User Data
 */
export function generateUserData(isAdmin = false): {
  nome: string,
  email: string,
  password: string,
  administrador: 'true' | 'false'
} {
  const fullName = generateFullName()
  return {
    nome: fullName,
    email: generateEmail(fullName),
    password: generatePassword(),
    administrador: isAdmin ? 'true' : 'false',
  }
}
