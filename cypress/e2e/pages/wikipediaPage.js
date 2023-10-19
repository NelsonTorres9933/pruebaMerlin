import wikipediaElements from "../elements/wikipedia.elements";

const WikipediaElements = new wikipediaElements();

class wikipediaPage {
  getWindowScreenshotByText(text, name) {
    WikipediaElements.textInPage()
      .contains(text)
      .scrollIntoView()
      .screenshot(name, { overwrite: true });
  }
  getFullScreenshot(name) {
    cy.screenshot(name, { overwrite: true });
  }
}
export default wikipediaPage;
