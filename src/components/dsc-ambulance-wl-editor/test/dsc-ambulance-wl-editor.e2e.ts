import { newE2EPage } from '@stencil/core/testing';

describe('dsc-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsc-ambulance-wl-editor></dsc-ambulance-wl-editor>');

    const element = await page.find('dsc-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
