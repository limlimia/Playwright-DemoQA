import { test, expect, selectors } from '@playwright/test';
import fs from 'fs';

test('accessing elements textbox', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/demosite/);

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
  await expect(page).toHaveTitle(/demosite/);

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
  await expect(page).toHaveTitle(/demosite/);

  await page.setViewportSize({
    width: 1670,  
    height: 811,
  });

  await page.getByText('Elements').click();

  await page.getByText('Radio Button').click();

  await page.getByText('Yes').click();
  await page.getByText('You have selected Yes').isVisible();

  await page.getByText('Impressive').click();
  await page.getByText('You have selected Impressive').isVisible();

});

test('accessing elements web tables', async ({ page }) => {

await page.goto('https://demoqa.com/');

// Expect a title "to contain" a substring.
await expect(page).toHaveTitle(/demosite/);

await page.setViewportSize({
  width: 1670,  
  height: 811,
});

await page.getByText('Elements').click();

await page.getByText('Web Tables').click();

//Add data

const firstname = 'Limia';
const lastname = 'Plawright';
const email2 = 'lim@test.com';
const age = '25';
const salary = '1000000';
const department = 'Quality Assurance';

const buttonAdd = page.locator('#addNewRecordButton');
await buttonAdd.click();

// await page.getByText('Add').click();

await page.getByPlaceholder('First Name').fill(firstname);
await page.getByPlaceholder('Last Name').fill(lastname);
await page.getByPlaceholder('name@example.com').fill(email2);
await page.getByPlaceholder('Age').fill(age);
await page.getByPlaceholder('Salary').fill(salary);
await page.getByPlaceholder('Department').fill(department);

await page.getByText('Submit').click();

await page.getByText(firstname).isVisible();
await page.getByText(lastname).isVisible();
await page.getByText(email2).isVisible();
await page.getByText(age).isVisible();
await page.getByText(salary).isVisible();
await page.getByText(department).isVisible();

//Edit data

await page.locator('//*[@id="edit-record-4"]').click();

const firstname_edit = 'Lim';
const lastname_edit = 'Testing';
const email2_edit = 'lim@testing.com';
const age_edit = '24';
const salary_edit = '10000';
const department_edit = 'Testing playwright';

await page.locator('//*[@id="firstName"]').fill(firstname_edit);
await page.locator('//*[@id="lastName"]').fill(lastname_edit);
await page.locator('//*[@id="userEmail"]').fill(email2_edit);
await page.locator('//*[@id="age"]').fill(age_edit);
await page.locator('//*[@id="salary"]').fill(salary_edit);
await page.locator('//*[@id="department"]').fill(department_edit);

await page.getByText('Submit').click();

//Delete data

await page.locator('//*[@id="delete-record-4"]').click();

const deletetext = page.getByText(firstname_edit);

if(await deletetext.isHidden()){
  console.log("Successfully deleted");
}else{
  console.log("Delete is failed");
}

//Search Data

const search_keyword = 'Alden';
const searchKeyword = page.getByText(search_keyword, { exact: true });

await page.locator('//*[@id="searchBox"]').fill(search_keyword);

if(await searchKeyword.isVisible()){
  console.log("Data is found");
}else{
  console.log("Data not found");
}

});

test('accessing elements buttons', async ({ page }) => {

await page.goto('https://demoqa.com/');

// Expect a title "to contain" a substring.
await expect(page).toHaveTitle(/demosite/);

await page.setViewportSize({
  width: 1670,  
  height: 811,
});

await page.getByText('Elements').click();

await page.getByText('Buttons').click();

//Click buttons

const doubleclick_text = 'You have done a double click';
const rightclick_text = 'You have done a right click';
const clickme_text = 'You have done a dynamic click';

await page.locator('//*[@id="doubleClickBtn"]').dblclick();
await page.locator('//*[@id="rightClickBtn"]').click({ button: 'right' });
await page.getByText('Click Me', { exact: true }).click();

if(await page.getByText(doubleclick_text).isVisible()){
  console.log("Double click done");
}else if (await page.getByText(rightclick_text).isVisible()){
  console.log("Right click done");
}else if (await page.getByText(clickme_text).isVisible()){
  console.log("Click me done");
}else{
  console.log("No button clicked");
}

});

test('accessing elements links', async ({ browser }) => {

const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://demoqa.com/');

// Expect a title "to contain" a substring.
await expect(page).toHaveTitle(/demosite/);

await page.setViewportSize({
  width: 1670,  
  height: 811,
});

await page.getByText('Elements').click();

await page.getByText('Links', { exact: true }).click();

const created_text = 'Link has responded with staus 201 and status text Created';
const nocontent_text = 'Link has responded with staus 204 and status text No Content';
const moved_text = 'Link has responded with staus 301 and status text Moved Permanently';
const badreq_text = 'Link has responded with staus 400 and status text Bad Request';
const unauth_text = 'Link has responded with staus 401 and status text Unauthorized';
const forbidden_text = 'Link has responded with staus 403 and status text Forbidden';
const notfound_text = 'Link has responded with staus 404 and status text Not Found';

await page.locator('//*[@id="simpleLink"]').click();

if(await page.goto('https://demoqa.com/')){
  console.log("Home link has been clicked");
  await page.bringToFront();

  await page.getByText('Elements').click();
  await page.getByText('Links', { exact: true }).click();
}else{
  console.log("Home link is not clicked");
}

await page.locator('//*[@id="dynamicLink"]').click();

if(await page.goto('https://demoqa.com/')){
  console.log("Home link has been clicked");
  await page.bringToFront();

  await page.getByText('Elements').click();
  await page.getByText('Links', { exact: true }).click();
}else{
  console.log("Home link is not clicked");
}

await page.getByText('Created', { exact: true }).click();
await page.getByText('No Content', { exact: true }).click();
await page.getByText('Moved', { exact: true }).click();
await page.getByText('Bad Request', { exact: true }).click();
await page.getByText('Unauthorized', { exact: true }).click();
await page.getByText('Forbidden', { exact: true }).click();
await page.getByText('Not Found', { exact: true }).click();

if(await page.getByText(created_text).isVisible()){
  console.log("Created link click done");
}else if (await page.getByText(nocontent_text).isVisible()){
  console.log("No Content link click done");
}else if (await page.getByText(moved_text).isVisible()){
  console.log("Moved link click done");
}else if (await page.getByText(badreq_text).isVisible()){
  console.log("Bad Request link click done");
}else if (await page.getByText(unauth_text).isVisible()){
  console.log("Unauthorized link click done");
}else if (await page.getByText(forbidden_text).isVisible()){
  console.log("Forbidden link click done");
}else if (await page.getByText(notfound_text).isVisible()){
  console.log("Not Found link click done");
}else{
  console.log("No link clicked");
}

});

test('accessing elements broken links - images', async ({ page }) => {

await page.goto('https://demoqa.com/');

// Expect a title "to contain" a substring.
await expect(page).toHaveTitle(/demosite/);

await page.setViewportSize({
  width: 1670,  
  height: 811,
});

await page.getByText('Elements').click();

await page.getByText('Broken Links - Images').click();

if(await page.getByText('Valid image').isVisible()){
  console.log("Valid image is there and broken");
}else if (await page.getByText('Broken image').isVisible()){
  console.log("Broken image is there and broken");
}

await page.getByText('Click Here for Valid Link').click()
if(await page.goto('https://demoqa.com/')){
  console.log("Successfully click on the valid link");
  await page.getByText('Elements').click();
  await page.getByText('Broken Links - Images').click();
}else{
  console.log("Valid link is not valid");
}

await page.getByText('Click Here for Broken Link').click();
if(await page.goto('https://the-internet.herokuapp.com/status_codes/500')){
  console.log("Successfully click on the broken link");
}else{
  console.log("Broken link is not valid");
}

});

test('accessing elements upload and download', async ({ page }) => {

await page.goto('https://demoqa.com/');

// Expect a title "to contain" a substring.
await expect(page).toHaveTitle(/demosite/);

await page.setViewportSize({
  width: 1670,  
  height: 811,
});

await page.getByText('Elements').click();

await page.getByText('Upload and Download').click();

if (!fs.existsSync('downloads')) {
  fs.mkdirSync('downloads');
}

const [ download ] = await Promise.all([
  page.waitForEvent('download'),
  page.locator('#downloadButton').click()
]);

// Save the file to a path, XXX = the user name
const filePath = 'C:/Users/XXX/Downloads/downloadFile_testing.jpg';
await download.saveAs(filePath);
console.log('File is successfully downloaded');

await page.setInputFiles('#uploadFile', filePath);

// Verify upload result
await expect(page.locator('#uploadedFilePath')).toContainText('downloadFile_testing.jpg');
console.log('File uploaded successfully');

});

test('accessing elements dynamic properties', async ({ page }) => {

  await page.goto('https://demoqa.com/');

// Expect a title "to contain" a substring.
await expect(page).toHaveTitle(/demosite/);

await page.setViewportSize({
  width: 1670,  
  height: 811,
});

await page.getByText('Elements').click();

await page.getByText('Dynamic Properties').click();

const button = page.locator('#colorChange');

await page.locator('#visibleAfter').waitFor({ state: 'visible' });
await expect(button).toHaveCSS('color', 'rgb(220, 53, 69)');

});