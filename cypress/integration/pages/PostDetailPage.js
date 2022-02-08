class PostDetailPage {
  deletePost() {
    cy.findByText(/delete post>/i).click();
    cy.visit("http://localhost:3000/");
  }
}

export const postDetailPage = new PostDetailPage();
