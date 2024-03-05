import { newSpecPage } from '@stencil/core/testing';
import { DscAmbulanceWlEditor } from '../dsc-ambulance-wl-editor';

describe('dsc-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [DscAmbulanceWlEditor],
      html: `<dsc-ambulance-wl-editor entry-id="@new"></dsc-ambulance-wl-editor>`,
    });
    let items: any = page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});
