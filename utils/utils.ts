// @ts-check

// Set of methods that help test development

import { faker } from '@faker-js/faker';

class Utils {
  /**
   * Method to generate a random name using faker
   * @returns {string} A random full name
  */
  public static setRandomName(): string {
    return faker.person.fullName()
  }

  /**
   * Method to generate a random email using faker
   * @param {string} [alias] - Optional alias for generating email
   * @returns {string} A random email address
   */
  public static setRandomEmail(alias?: string): string {
    if (!alias) {
      alias = this.setRandomName()
    }
    return `${alias.toLowerCase().replace(/\s+/g, '')}@pwlab-feijo.com`
  }
}

export default Utils
