import { LibraryFrontedPage } from './app.po';

describe('library-fronted App', () => {
  let page: LibraryFrontedPage;

  beforeEach(() => {
    page = new LibraryFrontedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
