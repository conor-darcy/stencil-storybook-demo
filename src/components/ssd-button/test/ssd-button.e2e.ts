import { newE2EPage } from '@stencil/core/testing';

describe('ssd-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ssd-button></ssd-button>');

    const element = await page.find('ssd-button');
    expect(element).toHaveClass('hydrated');
  });
});
