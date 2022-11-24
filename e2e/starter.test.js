/* eslint-disable no-undef */
describe('Profile', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('profile'))).toBeVisible();
  });

  it('should type in the first name in the input box', async () => {
    await element(by.id('inputFirstName')).clearText();
    await element(by.id('inputFirstName')).typeText('Paul');
  });

  it('should type in the last name in the input box', async () => {
    await element(by.id('inputLastName')).clearText();
    await element(by.id('inputLastName')).typeText('Waldos');
  });

  it('should type in the email in the input box', async () => {
    await element(by.id('inputEmail')).clearText();
    await element(by.id('inputEmail')).typeText('devuser@waldos.com');
  });

  it('toggle the newsletter switch', async () => {
    await element(by.id('isNewsLetterSwitch')).tap();
  });

  it('should click the submit button', async () => {
    await element(by.id('submitButton')).tap();
  });
});
