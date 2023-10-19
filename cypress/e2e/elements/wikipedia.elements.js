class wikipediaElements {
  textInPage() {
    return cy.get("div[class=mw-parser-output]");
  }
}

export default wikipediaElements;
