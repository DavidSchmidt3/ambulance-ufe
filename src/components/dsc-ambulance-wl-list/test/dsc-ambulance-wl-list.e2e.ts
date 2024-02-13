import { newE2EPage } from '@stencil/core/testing';

describe('dsc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsc-ambulance-wl-list></dsc-ambulance-wl-list>');

    const element = await page.find('dsc-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
