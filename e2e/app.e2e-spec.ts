import { AngularEssencialRouterOutletPage } from './app.po';

describe('angular-essencial-router-outlet App', () => {
  let page: AngularEssencialRouterOutletPage;

  beforeEach(() => {
    page = new AngularEssencialRouterOutletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
