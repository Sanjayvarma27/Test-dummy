import { test, expect } from '@playwright/test';

test('check the dropdown in hyr tutiorials', async ({ page }) => {

  await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');
  await page.screenshot({ path: '../screenshot/screenshot.png' });

  //Course Name
  await page.selectOption('#course', { index: 4 });
  await page.selectOption('#course', { value: 'java' });
  await page.selectOption('#course', { label: 'Python' })

  //IDE Name:

  await page.selectOption('#ide', { index: 3 });
  await page.selectOption('#ide', { value: 'ec' });
  await page.selectOption('#ide', { label: 'NetBeans' });

  console.log('dropdown is selected');
  await page.close();

});