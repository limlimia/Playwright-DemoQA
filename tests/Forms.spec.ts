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

  await page.getByText('Practice Form').click();

  const firstname = 'Limia';
  const lastname = 'Testing';
  const email = 'lim@test.com';
  const gender = 'Female';
  const mobile_number = '1234567890';
  const date_birth = '2026-04-28';
  const date_birth_text = '28 April,2026'
  const subject = 'Computer Science';
  const hobbies = '1'; //1=Sports, 2=Reading, 3=Music
  const hobbies_text = 'Sports'
  const picture = 'C:/Users/Limia/Downloads/downloadFile_testing.jpg'; 
  const current_address = 'dimana mana';
  const state = 'NCR';
  const city = 'Gurgaon'

  await page.getByPlaceholder('First Name').fill(firstname);
  await page.getByPlaceholder('Last Name').fill(lastname);
  await page.getByPlaceholder('name@example.com').fill(email);

  await page.locator('input[name="gender"][value="Female"]').check();
  await page.getByPlaceholder('Mobile Number').fill(mobile_number);
  await page.locator('//*[@id="dateOfBirthInput"]').fill(date_birth);
  await page.locator('//*[@id="dateOfBirthInput"]').press('Enter');
  await page.locator('//*[@id="subjectsInput"]').fill(subject);
  await page.locator('//*[@id="subjectsInput"]').press('Enter');
  await page.locator(`//*[@id="hobbies-checkbox-${hobbies}"]`).click();

  await page.setInputFiles('#uploadPicture', picture);
  await page.getByPlaceholder('Current Address').fill(current_address);



  await page.locator('//*[@id="state"]').click();
  await page.getByText(state).click();

  await page.locator('//*[@id="city"]').click();
  await page.getByText(city).click();

  await page.locator('//*[@id="submit"]').click();

  await page.getByText(`${firstname} ${lastname}`).isVisible();
  await page.getByText(email).isVisible();
  await expect(page.locator(`//td[text()="${gender}"]`)).toBeVisible();
  await page.getByText(mobile_number).isVisible();
  
  await page.getByText(date_birth_text).isVisible();

  await expect(page.locator(`//td[text()="${subject}"]`)).toBeVisible();
  await expect(page.locator(`//td[text()="${hobbies_text}"]`)).toBeVisible();
  await page.getByText('downloadFile_testing.jpg').isVisible();
  await page.getByText(current_address).isVisible();
  await page.getByText(`${state} ${city}`).isVisible();

  await page.locator('//*[@id="closeLargeModal"]').click();
  await page.keyboard.press('Escape');
  
});