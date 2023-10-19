import chromeElements from "../elements/chrome.elements";

const ChromeElements = new chromeElements();

class chromePage {
  goToChromeBrowser() {
    cy.visit("https://www.google.com");
    ChromeElements.AceptarTodoElement().click();
  }
  searchInBrowser(text) {
    ChromeElements.SearchBox().type(text);
    ChromeElements.OptionList(text).click();
  }
  clickOnWebPage(page) {
    ChromeElements.WebPageLink(page).click();
  }
}
export default chromePage;
