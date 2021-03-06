/**
 * Contract source: https://git.io/JfefG
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

declare module '@ioc:Adonis/Core/Request' {
  interface RequestContract {
   loggedInUser?: { id: number, email: string, password: string };
  }
}
