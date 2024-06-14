// @ts-check

// Set of methods that help test development

import { faker } from '@faker-js/faker';

export class Utils {
  /**
   * Method to generate a random name
   * @returns {string} A random full name
  */
  public static setFullName(): string {
    return faker.person.fullName()
  }

  /**
   * Method to generate a random email
   * @param {string} [alias] - Optional alias for generating email
   * @returns {string} A random email address
   */
  public static setEmail(alias?: string): string {
    if (!alias) {
      alias = this.setFullName()
    }
    return `${alias.toLowerCase().replace(/\s+/g, '')}@pwlab-feijo.com`
  }

  /**
   * Method to generate a random password
   * @returns {string} A randon password
   */
  public static setPassword(): string {
    return faker.internet.password({
      length: 12
      // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,12}$/
        // Have between 8 and 12 characters being
        // Uppercase, lowercase, number and special
    })
  }
}

export default Utils
