const { test, expect } = require('@playwright/test');
const { email, pass } = require('../user');

test('Successful authorization through the Netology form', async ({ page }) => {
  await page.goto('https://netology.ru');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(pass);
  await page.getByTestId('login-submit-btn').click();
  // await page.pause();
  await expect(page).toHaveTitle('Моё обучение');
})

test('Unsuccessful authorization through the Netology form', async ({ page }) => {
  await page.goto('https://netology.ru');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('genaTurbina@koshka.ru');
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(345676);
  await page.getByTestId('login-submit-btn').click();
  // await page.pause();
  await expect(page.getByText('Вы ввели неправильно логин или пароль')).toBeVisible();
})