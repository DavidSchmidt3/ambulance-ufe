import { newSpecPage } from '@stencil/core/testing';
import { DscAmbulanceWlApp } from '../dsc-ambulance-wl-app';

describe('dsc-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [DscAmbulanceWlApp],
      html: `<dsc-ambulance-wl-app base-path="/"></dsc-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("dsc-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [DscAmbulanceWlApp],
      html: `<dsc-ambulance-wl-app base-path="/ambulance-wl/"></dsc-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("dsc-ambulance-wl-list");
  });
});
