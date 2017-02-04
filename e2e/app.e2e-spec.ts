import { NewSheferMobilePage } from './app.po';

describe('new-shefer-mobile App', function() {
  let page: NewSheferMobilePage;

  beforeEach(() => {
    page = new NewSheferMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
