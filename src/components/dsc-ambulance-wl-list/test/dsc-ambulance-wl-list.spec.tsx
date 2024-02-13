import { newSpecPage } from '@stencil/core/testing';
import { DscAmbulanceWlList } from '../dsc-ambulance-wl-list';

describe('dsc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DscAmbulanceWlList],
      html: `<dsc-ambulance-wl-list></dsc-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <dsc-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsc-ambulance-wl-list>
    `);
  });
});
