import { PublisherClearingHousePage } from './app.po';

describe('publisher-clearing-house App', () => {
  let page: PublisherClearingHousePage;

  beforeEach(() => {
    page = new PublisherClearingHousePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
