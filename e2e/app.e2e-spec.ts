import { FaceCodeFrontendPage } from './app.po';

describe('face-code-frontend App', () => {
  let page: FaceCodeFrontendPage;

  beforeEach(() => {
    page = new FaceCodeFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
