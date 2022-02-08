class HomePage {
  navigateToHomePage() {
    cy.visit("http://localhost:3000/");
  }
  navigateToAddPage() {
    cy.findByRole("link", { name: /new post/i }).click();
  }

  getBlogPost(post) {
    return cy.findByRole("link", { name: post.title });
  }

  navigateToPostDetail(post) {
    cy.findByRole("link", { name: post.title }).click();
  }
}

export const homePage = new HomePage();
