import { AngularAvancadoRouterOutletPage } from './app.po';

describe('angular-avancado-router-outlet App', () => {
  let page: AngularAvancadoRouterOutletPage;

  beforeEach(() => {
    page = new AngularAvancadoRouterOutletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
