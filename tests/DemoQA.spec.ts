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
