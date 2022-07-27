// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

let i = 1

data.forEach(version => {
  test.describe(version + i, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator')
    })

    test(`&{i}. Add 2 and 3 results in 5`, async ({ page }) => {;
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  ;

    test('2. Subtract 2 from 3 results in -1', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
    });
  
    test('3. Multiply 2 and 3 results in 6', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('6');
    });

    test('4. Divide 3 from 2 results in 1.5', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('3');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1.5');
    });

    test('5. Concatenate a and b results in ab', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('b');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('ab');
    });

    test('6. Division by zero results in error message', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#errorMsgField')).toHaveText('Divide by zero error!');
    });

    test('7. Empty fields results in 0 ', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });

    test('8. "Clear" button results in empty answers field', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('0');
      await page.locator('#calculateButton').click();
      await page.locator('#clearButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    test('9. Add 2 and 3.5 intigers only results in 5', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#integerSelect').click();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });

    test('10. Typing letter in first field results in error message', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('2');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
    });
  });
});
