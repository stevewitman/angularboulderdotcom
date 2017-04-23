import { AngularboulderdotcomPage } from './app.po';

describe('angularboulderdotcom App', () => {
  let page: AngularboulderdotcomPage;

  beforeEach(() => {
    page = new AngularboulderdotcomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
