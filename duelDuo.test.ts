
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Checks that cklicking the draw button displays the div with id of choices', async() => {
    const drawBtn = await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)

    const choicesDiv = await driver.findElement(By.xpath('//div[contains(text(), "")]')).click()
    await driver.sleep(2000)
    const isShown = choicesDiv.isDisplayed()
    expect(isShown).toBe(true)
})

test('Check that clicking an “Add to Duo” button displays the div with id = “player-duo”', async () => {
    const drawBtn = await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)

    const addBotBtn = await driver.findElement(By.css
})