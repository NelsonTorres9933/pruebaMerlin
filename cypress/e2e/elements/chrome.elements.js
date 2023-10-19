class chromeElements {
  AceptarTodoElement() {
    return cy.get("button").should("be.visible").contains("Aceptar todo");
  }
  SearchBox() {
    return cy.get("textarea").eq(0).should("be.visible");
  }
  OptionList(option) {
    return cy
      .get("li")
      .should("be.visible")
      .contains(new RegExp("^" + option + "$", "g"));
  }
  WebPageLink(link) {
    return cy
      .get("span")
      .children("a")
      .contains(new RegExp("^" + link + "$", "g"));
  }
}
export default chromeElements;
