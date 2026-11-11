import {test,expect} from '@playwright/test';
import path from 'node:path';
test('membership exposes progress, tiers, reward eligibility and brand brief',async({page},info)=>{
 await page.goto('/?demo=1#view=rewards&product=dress');
 await expect(page.getByRole('heading',{name:'YOUR MEMBERSHIP',exact:true})).toBeVisible();
 await expect(page.getByRole('progressbar',{name:'Membership progress'})).toHaveAttribute('aria-valuenow','0');
 await expect(page.locator('.tier-grid>div')).toHaveCount(3);
 await page.getByRole('link',{name:'THE TIERS',exact:true}).click();
 await expect(page).toHaveURL(/view=rewards/);
 await expect(page.getByRole('heading',{name:'THE MEMBERSHIP TIERS',exact:true})).toBeVisible();
 await expect(page.locator('.partner').first()).toContainText('100 MORE POINTS NEEDED');
 const about=page.locator('.brand-about').first();
 await about.click();
 await expect(about).toHaveAttribute('aria-expanded','true');
 await expect(page.locator('.brand-expanded')).toContainText('Upcycled skincare');
 await page.screenshot({path:path.join('screenshots',`${info.project.name}-brand-brief.jpg`)});
 if(info.project.name==='desktop'){
  await page.locator('.partner').first().hover();
  await expect(page.locator('.brand-preview').first()).toHaveCSS('opacity','1');
 }
 await page.getByRole('button',{name:'GOLD',exact:true}).click();
 await page.locator('.partner').filter({has:page.getByRole('heading',{name:'UpCircle',exact:true})}).getByRole('button',{name:'Skincare credit AVAILABLE TO REDEEM 100 PTS ↗',exact:true}).click();
 await expect(page.locator('.redemption-brand')).toContainText('Upcycled skincare');
 await expect(page.locator('.redemption-brand')).toContainText('POTENTIAL PARTNER');
 await page.screenshot({path:path.join('screenshots',`${info.project.name}-reward-brand-details.jpg`)});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
