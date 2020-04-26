import '../demo/my-element.js';

import { expect, fixture, html } from '../index.js';

describe('my-element', () => {
  it('renders correctly', async () => {
    const element = await fixture(html` <my-element message="hello world!"></my-element> `);
    // @ts-ignore
    await element.updateComplete;

    expect(element).shadowDom.to.equalSnapshot();
  });
});
