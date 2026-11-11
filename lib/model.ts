export type Product={id:string;name:string;price:number;category:string;style:string;color:string;sizes:string[];stock:number;preowned:boolean;image:number;condition?:string;sourceUrl?:string;sourceImages?:string[];catalogImages?:string[];catalogSource?:string;checkedOn?:string};
export const config={silver:300,gold:700,purchasePoints:100,referralBonus:50};
export const main:Product={id:'dress',name:'VELVET RUCHED MINI DRESS',price:59.9,category:'dress',style:'velvet',color:'Black',sizes:['XS','S','M','L','XL','XXL'],stock:25,preowned:false,image:0};
const names=['VELVET RUCHED MINI DRESS','LONG SLEEVE VELVET DRESS','SATIN SLIP DRESS','TAILORED SHOULDER BLAZER','SATIN HEEL SANDALS','SCULPTURAL KNIT TOP','SATIN MIDI SKIRT','MINIMAL SHOULDER BAG'];
const cats=['dress','dress','dress','jacket','shoes','top','skirt','bag'];
export const newProducts:Product[]=names.map((name,i)=>({id:`new-${i}`,name,price:[59.9,69.9,49.9,89.9,59.9,35.9,45.9,49.9][i],category:cats[i],style:i<2?'velvet':'evening',color:i===2?'Burgundy':i===5?'Ecru':'Black',sizes:i===4?['6','7','8','9']:i===7?['ONE SIZE']:['XS','S','M','L'],stock:10,preowned:false,image:i}));
export const preowned:Product[]=Array.from({length:12},(_,i)=>({...newProducts[i%8],id:`pre-${i}`,name:i===8?'VELVET MINI DRESS WITH RUCHING':i===9?'STRUCTURED VELVET MINI DRESS':newProducts[i%8].name,price:[29,32,26,39,24,18,22,25,31,28,27,35][i],sizes:[["S"],["M"],["S"],["L"],["7"],["M"],["S"],["ONE SIZE"],["M"],["L"],["XS"],["S"]][i],stock:1,preowned:true,condition:i%3===0?'Excellent':i%3===1?'Very good':'Good'}));
// A manually verified public listing snapshot; demo stock is not live availability.
preowned[0]={...preowned[0],name:'ZARA BLACK TEXTURED MINI DRESS WITH RHINESTONE BUTTONS',price:30,style:'textured',condition:'Like new',catalogSource:'https://poshmark.com/listing/Zara-Eyelash-Metallic-Tweed-Knit-Jewel-Button-Classic-Blogger-Mini-Dress-S-63f2a207fed51f6a2cd2ccae',catalogImages:['https://di2ponv0v5otw.cloudfront.net/posts/2023/02/19/63f2a207fed51f6a2cd2ccae/m_63f2a24c04166dd721ec504c.jpg','https://di2ponv0v5otw.cloudfront.net/posts/2023/02/19/63f2a207fed51f6a2cd2ccae/m_63f2a24e87a2f53ee083b5c6.jpg'],sourceUrl:'https://www.zara.com/us/en/preowned-resell/product-detail/2427385',checkedOn:'8 November 2026',sourceImages:['https://static.zara.net/assets/public/7a11/d162/a1a94b1b96eb/a6b6bdd047bc/image/image.jpg?ts=1788029805409&w=1030','https://static.zara.net/assets/public/e9f3/c844/1f194e8aa63a/960ed85d3f43/image/image.jpg?ts=1788029804755&w=1030']};
export const products=[main,...newProducts,...preowned];
export function recommend(context:Product,size?:string,sold:string[]=[]){return preowned.filter(p=>p.stock>0&&!sold.includes(p.id)&&p.id!==context.id).map(p=>({product:p,score:(p.sourceUrl&&p.category===context.category?40:0)+(p.category===context.category?50:0)+(p.style===context.style?25:0)+(p.color===context.color?15:0)+(size&&p.sizes.includes(size)?10:0)})).sort((a,b)=>b.score-a.score||a.product.id.localeCompare(b.product.id)).map(x=>x.product);}
export const tier=(points:number)=>points>=config.gold?2:points>=config.silver?1:0;
export const tiers=['MEMBER','SILVER','GOLD'];
export const partnerCatalog = [
  {name: 'UpCircle', region: 'Europe', market: 'UK', focus: 'Upcycled skincare', reward: 'Skincare credit', photo: "upcircle", product: "Hydrating Face Oil with Coffee Extract", productUrl: "https://us.upcirclebeauty.com/products/organic-face-oil-with-coffee"},
  {name: 'Auraskin', region: 'Europe', market: 'Greece', focus: 'Coffee-ground skincare', reward: 'Skincare credit', photo: "auraskin", product: "Coffee Lip Scrub in use", productUrl: "https://auraskin.gr/en/"},
  {name: 'smol', region: 'Europe', market: 'UK', focus: 'Plastic-free laundry & cleaning', reward: 'Laundry & cleaning credit', photo: "smol", product: "Laundry capsules", productUrl: "https://smol.com/uk"},
  {name: '900.care', region: 'Europe', market: 'France', focus: 'Refillable personal care', reward: 'Personal care credit', photo: "900care", product: "Pack Essentiels refillable care kit", productUrl: "https://900.care/lp/pack-essentiels"},
  {name: 'Blueland', region: 'North America', market: 'United States', focus: 'Refillable cleaning & hand soap', reward: 'Cleaning & hand soap credit', photo: "blueland", product: "Foaming Hand Soap Starter Set", productUrl: "https://www.blueland.com/products/hand-soap-sets?plan=one-time"},
  {name: 'Plaine Products', region: 'North America', market: 'United States', focus: 'Refillable hair & body care', reward: 'Hair & body care credit', photo: "plaine-products", product: "Rosemary Mint Vanilla Shampoo", productUrl: "https://plaineproducts.com/products/shampoo"},
  {name: 'Back Market', region: 'North America', market: 'US / EU', focus: 'Refurbished electronics', reward: 'Refurbished electronics credit', photo: "back-market-front", product: "Refurbished iPhone 13", productUrl: "https://www.backmarket.com/en-us/p/iphone-13"},
  {name: 'TOUN28', region: 'Asia', market: 'South Korea', focus: 'Solid hair & face bars', reward: 'Hair & face bar credit', photo: "toun28", product: "Hyaluron Peptide Wave Defining Shampoo Bar", productUrl: "https://global.toun28.com/products/toun28-hyaluron-peptide-wave-defining-shampoo-bar"},
  {name: 'Donggubat', region: 'Asia', market: 'South Korea', focus: 'Solid soaps · Social enterprise', reward: 'Solid soap credit', photo: "donggubat", product: "Lemongrass Face & Body Bar", productUrl: "https://jp.donggubat.co.kr/"},
  {name: 'AROMATICA', region: 'Asia', market: 'South Korea', focus: 'Refillable vegan hair & body care', reward: 'Hair & body care credit', photo: "aromatica", product: "Rosemary Scalp Scaling Shampoo Refill", productUrl: "https://global.aromatica.co/collections/refill/products/rosemary-scalp-scaling-shampoo-refill-500ml"},
  {name: 'HADAYOI', region: 'Asia', market: 'Japan', focus: 'Sake-lees skincare', reward: 'Skincare credit', photo: "hadayoi", product: "Sake-lees skincare lotion", productUrl: "https://store-dma.jp/Form/Product/ProductDetail.aspx?pid=dma0042&shop=0"},
];

export const brandCounts = [3, 6, partnerCatalog.length];
export const rewards = partnerCatalog.flatMap((partner, index) =>
  ['', ' · Plus', ' · Premium'].map((suffix, variant) => ({
    id: `reward-${index}-${variant}`,
    brand: partner.name,
    partner: index,
    name: partner.reward + suffix,
    cost: 100 + variant * 75,
    minTier: Math.max(index < brandCounts[0] ? 0 : index < brandCounts[1] ? 1 : 2, variant),
  }))
);
export type BagItem={id:string;size:string;qty:number};
export type Order={id:string;items:BagItem[];points:number;total:number};
export type Redemption={id:string;rewardId:string;name:string;cost:number};
export type State={bag:BagItem[];qualifying:number;spendable:number;orders:Order[];redemptions:Redemption[];sold:string[];referral:{generated:boolean;invited:boolean;qualified:boolean;friendQualifying:number;friendSpendable:number}};
export const initial=():State=>({bag:[],qualifying:0,spendable:0,orders:[],redemptions:[],sold:[],referral:{generated:false,invited:false,qualified:false,friendQualifying:0,friendSpendable:0}});
export function addToBag(s:State,id:string,size:string):State{const p=products.find(x=>x.id===id);if(!p||!p.sizes.includes(size)||s.sold.includes(id)||!p.stock)return s;const existing=s.bag.find(x=>x.id===id&&x.size===size);const count=s.bag.filter(x=>x.id===id).reduce((a,b)=>a+b.qty,0);if(count>=p.stock)return s;return {...s,bag:existing?s.bag.map(x=>x===existing?{...x,qty:x.qty+1}:x):[...s.bag,{id,size,qty:1}]};}
export function checkout(s:State,orderId:string):State{if(!s.bag.length||s.orders.some(x=>x.id===orderId))return s;const valid=s.bag.every(x=>{const p=products.find(p=>p.id===x.id);return p&&p.sizes.includes(x.size)&&x.qty>0&&!s.sold.includes(x.id)&&s.bag.filter(y=>y.id===x.id).reduce((a,b)=>a+b.qty,0)<=p.stock});if(!valid)return s;const points=s.bag.reduce((a,x)=>a+(products.find(p=>p.id===x.id)!.preowned?config.purchasePoints*x.qty:0),0);const total=s.bag.reduce((a,x)=>a+products.find(p=>p.id===x.id)!.price*x.qty,0);return {...s,bag:[],qualifying:s.qualifying+points,spendable:s.spendable+points,sold:[...s.sold,...s.bag.filter(x=>products.find(p=>p.id===x.id)!.preowned).map(x=>x.id)],orders:[{id:orderId,items:s.bag,points,total},...s.orders]};}
export function redeem(s:State,rewardId:string,id:string):State{const r=rewards.find(x=>x.id===rewardId);if(!r||r.minTier>tier(s.qualifying)||r.cost>s.spendable||s.redemptions.some(x=>x.id===id))return s;return {...s,spendable:s.spendable-r.cost,redemptions:[{id,rewardId,name:`${r.brand} — ${r.name}`,cost:r.cost},...s.redemptions]};}
export function qualifyFriend(s:State):State{if(!s.referral.generated||!s.referral.invited||s.referral.qualified)return s;return {...s,qualifying:s.qualifying+config.referralBonus,spendable:s.spendable+config.referralBonus,referral:{...s.referral,qualified:true,friendQualifying:config.purchasePoints+config.referralBonus,friendSpendable:config.purchasePoints+config.referralBonus}};}
