import { GsTodoPage } from './app.po';

describe('gs-todo App', () => {
  let page: GsTodoPage;

  beforeEach(() => {
    page = new GsTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
