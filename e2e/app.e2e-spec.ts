import { DocViewerPage } from './app.po';

describe('doc-viewer App', () => {
  let page: DocViewerPage;

  beforeEach(() => {
    page = new DocViewerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
