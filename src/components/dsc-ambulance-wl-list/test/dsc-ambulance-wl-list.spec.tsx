import { newSpecPage } from '@stencil/core/testing';
import { DscAmbulanceWlList } from '../dsc-ambulance-wl-list';

describe('dsc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DscAmbulanceWlList],
      html: `<dsc-ambulance-wl-list></dsc-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as DscAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
