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
 * @param {string} [alias] - Optional alias for email
 * @returns {string} A random email address
 */
export function generateEmail(givenAlias?: string): string {
  const alias = givenAlias ?? generateFullName()

  return `${alias.toLowerCase().replace(/\s+/g, '')}@pwlab-feijo.com`
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
