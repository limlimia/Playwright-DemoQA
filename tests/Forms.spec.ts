import { test, expect, selectors } from '@playwright/test';
import fs from 'fs';

test('accessing forms pratice form', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/demosite/);

  await page.setViewportSize({
    width: 1670,  
    height: 811,
  });

  await page.getByText('Forms').click();

  await page.getByText('Pracice Form').click();

  const firstname = 'Limia';
  const lastname = 'Testing';
  const email = 'lim@test.com';
  const gender = 'Female';
  const mobile_number = '1234567890';
  const date_birth = '2026-04-28';
  const subject = 'Computer Science';
  const hobbies = '1'; //1=Sports, 2=Reading, 3=Music
  const picture = 'C:/Users/XXX/Downloads/downloadFile_testing.jpg'; 
  const current_address = 'dimana mana';
  const state = 'NCR';
  const city = 'Gurgaon'

  //to be continue

  await page.getByPlaceholder('First Name').fill(firstname);
  await page.getByPlaceholder('Last Name').fill(lastname);
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