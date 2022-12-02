import { newSpecPage } from '@stencil/core/testing';
import { SsdButton } from '../ssd-button';

describe('ssd-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SsdButton],
      html: `<ssd-button></ssd-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ssd-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ssd-button>
    `);
  });
});
