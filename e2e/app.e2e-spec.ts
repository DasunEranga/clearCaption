import { ClearCaptionPage } from './app.po';

describe('clear-caption App', function() {
  let page: ClearCaptionPage;

  beforeEach(() => {
    page = new ClearCaptionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
