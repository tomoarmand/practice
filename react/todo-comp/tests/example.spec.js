// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5175/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Vite + React");
});


test('has text', async ({ page }) => { 
  await page.goto('http://localhost:5175/');

  await page.getByPlaceholder('Type your task here').fill("Laundry");

  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByRole('listitem').first()).toContainText("Laundry")
});

test('has features', async ({ page }) => {
  await page.goto('http://localhost:5175/');

  // Click the get started link.
  await page.getByRole('button', { name: 'Add' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();

  await expect(page.getByRole('checkbox')).toBeVisible();

  await expect(page.getByRole('listitem')).toBeVisible();

});



