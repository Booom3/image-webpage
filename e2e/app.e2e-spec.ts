import { ImageWebpagePage } from './app.po';

describe('image-webpage App', () => {
  let page: ImageWebpagePage;

  beforeEach(() => {
    page = new ImageWebpagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
