import { test, expect, selectors } from '@playwright/test';

test('accessing elements textbox', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEMOQA/);

  await page.setViewportSize({
    width: 1670,  
    height: 811,
  });

  await page.getByText('Elements').click();

  await page.getByText('Text Box').click();

  const fullname = 'Limia testing';
  const email = 'lim@test.com';
  const current_address = 'dimana mana';
  const perm_address = 'Dimana ya, entah';

  await page.getByPlaceholder('Full Name').fill(fullname);
  await page.getByPlaceholder('name@example.com').fill(email);
  await page.getByPlaceholder('Current Address').fill(current_address);

  const permanent_address = page.locator('//*[@id="permanentAddress"]');
  await permanent_address.scrollIntoViewIfNeeded();
  await permanent_address.fill(perm_address);

  await page.locator('//*[@id="submit"]').click();

  await page.getByText('Name:'+fullname).isVisible();
  await page.getByText('Email:'+email).isVisible();
  await page.getByText('Current Address :'+current_address).isVisible();
  await page.getByText('Permananet Address :'+perm_address).isVisible();

});

test('accessing elements checkbox', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEMOQA/);

  await page.setViewportSize({
    width: 1670,  
    height: 811,
  });

  await page.getByText('Elements').click();

  await page.getByText('Check Box').click();

  await page.getByText('Home').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Home' }).click();

  await page.locator('//*[@id="tree-node"]/ol/li/span/button').click();
  await page.getByText('Desktop').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Desktop' }).click();

  await page.locator('//*[@id="tree-node"]/ol/li/ol/li[1]/span/button').click()
  await page.getByText('Notes').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Notes' }).click();

  await page.getByText('Commands').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Commands' }).click();
  await page.locator('//*[@id="tree-node"]/ol/li/ol/li[1]/span/button').click()

  await page.getByText('Documents').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Documents' }).click();

  await page.locator('//*[@id="tree-node"]/ol/li/ol/li[2]/span/button').click();
  await page.getByText('WorkSpace').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'WorkSpace' }).click();
  await page.locator('//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[1]/span/button').click();

  await page.getByText('React').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'React' }).click();

  await page.getByText('Angular').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Angular' }).click();

  
  await page.getByText('Veu').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Veu' }).click();
  await page.locator('//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[1]/span/button').click();

  await page.getByText('Office').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Office' }).click();
  await page.locator('//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[2]/span/button').click();

  await page.getByText('Public').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Public' }).click();
  
  await page.getByText('Private').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Private' }).click();

  await page.getByText('Classified').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Classified' }).click();

  await page.getByText('General').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'General' }).click();

  await page.locator('//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[2]/span/button').click();
  await page.locator('//*[@id="tree-node"]/ol/li/ol/li[2]/span/button').click();

  await page.getByText('Downloads').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Downloads' }).click();

  await page.locator('//*[@id="tree-node"]/ol/li/ol/li[3]/span/button').click();
  await page.getByText('Word File.doc').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Word File.doc' }).click();

  await page.getByText('Excel File.doc').click();
  await page.locator('//*[@id="result"]').isVisible();
  await page.locator('span.rct-title', { hasText: 'Excel File.doc' }).click();
  await page.locator('//*[@id="tree-node"]/ol/li/ol/li[3]/span/button').click();

});

test('accessing elements radio button', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEMOQA/);

  await page.setViewportSize({
    width: 1670,  
    height: 811,
  });

  await page.getByText('Elements').click();

  await page.getByText('Radio Button').click();

});