import {expect, type Page, test} from '@playwright/test'

interface IStep {
  name: string
  heading?: string | RegExp
  action?: {
    type: 'pagination' | 'selector'
    target: string
  }
}

const steps: IStep[] = [
  {
    name: 'Home',
    heading: /Michael\s+Any/i,
  },
  {
    name: 'About',
    action: {type: 'pagination', target: 'About'},
  },
  {
    name: 'Skills',
    action: {type: 'pagination', target: 'Skills'},
  },
  {
    name: 'Experience',
    action: {type: 'pagination', target: 'Experience'},
  },
  {
    name: 'Portfolio',
    action: {type: 'pagination', target: 'Portfolio'},
  },
  {
    name: 'MadFit',
    action: {type: 'selector', target: 'a[href="/portfolio/madfit"]'},
  },
  {
    name: 'Portfolio',
    action: {type: 'pagination', target: 'Portfolio'},
  },
  {
    name: 'Blog',
    action: {type: 'pagination', target: 'Blog'},
  },
  {
    name: 'My dreamdesk',
    heading: 'My dreamdesk | New no monitors setup',
    action: {type: 'selector', target: 'a[href="/blog/my-dreamdesk"]'},
  },
  {
    name: 'Blog',
    action: {type: 'pagination', target: 'Blog'},
  },
  {
    name: 'Contact',
    action: {type: 'pagination', target: 'Contact'},
  },
  {
    name: 'Home',
    heading: /Michael\s+Any/i,
    action: {type: 'pagination', target: 'Home'},
  },
]

const expectHeading = async (page: Page, heading: string | RegExp) => {
  await expect(page.locator('main')).toBeVisible()
  await expect(
    page.getByRole('heading', {level: 1, name: heading})
  ).toBeVisible()
}

const runStep = async (page: Page, action: IStep['action']) => {
  if (!action) return
  if (action.type === 'pagination') {
    await page
      .locator('.Pagination')
      .getByRole('link', {name: action.target})
      .click()
    return
  }
  await page.locator(action.target).click()
}

test.beforeEach(async ({page}) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('i18nextLng', 'en')
  })
})

test('🧭 Navigation flow across pages works', async ({page}) => {
  await page.goto('/')
  for (const {name, heading, action} of steps) {
    await test.step(name, async () => {
      await runStep(page, action)
      await expectHeading(page, heading ?? name)
    })
  }
})
