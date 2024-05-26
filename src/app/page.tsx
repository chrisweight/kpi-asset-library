/** 
 * The default page will be the 'featured' content
 * 
 * TODO: 
 * 
 * 'Request' has some general outline of functionality throughout, but beyond the concept of asking for access for something,
 * we'd need to think it through - have implemented a placeholder for now as a guide
 * 
 * in the UX flow, there area ctions that have no visual reference in the wireframes:
 *  - 'scroll to asset'
 *  - 'show more of asset'
 * 
 *  Questions/Assertions: 
 *    - how would 'scroll to asset' look? There doesn't seem to be any intuitive way to add this - TBC
 *    - no visual references for the 'expanded assets' section, 
 *      there is an implication that we'd have some kind of related assets functionalit within this: 
 *      there are a lot of ways this could be implemented, it's worth having a chat with a designer and product owner
 *      first and better defining this so we're not wasting time building something that doesn't fit the bill
 **/

import { getFeaturedAssets, getTrendingAssets } from '@/actions/assets';
import HomePage from '@/components/pages/home-page';

export default async function Page() {
  const featured = await getFeaturedAssets();
  const trending = await getTrendingAssets();

  return (<HomePage featured={featured} trending={trending} />)
}
