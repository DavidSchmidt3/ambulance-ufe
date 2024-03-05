import { newE2EPage } from '@stencil/core/testing';

describe('dsc-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsc-ambulance-wl-app></dsc-ambulance-wl-app>');

    const element = await page.find('dsc-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
