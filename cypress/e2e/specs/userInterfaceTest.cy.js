import chromePage from "../pages/chromePage";

const toSearch = "automatización";
const textToAssert =
  " en 1785, convirtiéndose en el primer proceso industrial completamente automatizado.";
const wikiLink = "https://es.wikipedia.org";
const ChromePage = new chromePage();

describe("Automation", () => {
  it("Search the first automation process", () => {
    ChromePage.goToChromeBrowser();
    ChromePage.searchInBrowser(toSearch);
    ChromePage.clickOnWebPage("Wikipedia");
    cy.origin(wikiLink, { args: { textToAssert } }, ({ textToAssert }) => {
      const wikipediaPage = Cypress.require("../pages/wikipediaPage");
      const WikipediaPage = new wikipediaPage();
      WikipediaPage.getWindowScreenshotByText(
        textToAssert,
        "first automation process"
      );
      WikipediaPage.getFullScreenshot("full page");
    });
  });
});
