import {test,expect} from '@playwright/test';
import path from 'node:path';
test('recommendation metadata stays aligned at narrow and zoom-equivalent widths',async({page},info)=>{
 for(const width of [760,1024,1280,1440]){
  await page.setViewportSize({width,height:1000});
  await page.goto('/?demo=1');
  const track=page.locator('.rec-track');
  await track.scrollIntoViewIfNeeded();
  const cards=track.locator('.rec-card');
  await expect(cards).toHaveCount(4);
  for(const part of ['.eyebrow','.card-name','.card-price','.card-condition']){
   const a=await cards.nth(0).locator(part).boundingBox();
   const b=await cards.nth(1).locator(part).boundingBox();
   expect(Math.abs(a!.y-b!.y),`${part} at ${width}px`).toBeLessThan(1);
  }
  await expect(cards.nth(0).locator('.eyebrow')).toHaveText('PRE-OWNED');
  const metrics=await page.locator('.rec-tabs').evaluate(el=>({client:el.clientWidth,scroll:el.scrollWidth}));
  expect(metrics.scroll).toBeLessThanOrEqual(metrics.client+1);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  const nav=await page.locator('.utilities').boundingBox();
  expect(nav!.y+nav!.height).toBeLessThan(70);
  expect((await page.locator('.compact-rewards').boundingBox())!.height).toBeLessThan(65);
  if(width===1024)await page.screenshot({path:path.join('screenshots',`${info.project.name}-formatting-1024.jpg`)});
 }
});
