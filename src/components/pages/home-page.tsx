'use client';

import AssetCard from '../asset-card';
import { Asset } from '@/model';
import { useSearchStore } from '@/providers/search-store.provider';
import { searchAssetsFilter } from '@/utils/assets';

type HomePageProps = {
  featured: Asset[];
  trending: Asset[];
}

export default function HomePage({featured, trending}: HomePageProps) {

  const currentSearch = useSearchStore((state) => state.currentSearch);
  const filteredFeaturedAssets = featured?.filter((asset) => searchAssetsFilter(asset, currentSearch));
  const filteredTrendingAssets = trending?.filter((asset) => searchAssetsFilter(asset, currentSearch));

  return (<>
  <div id="featured" className="mb-8">
    <h2 className="text-4xl font-semibold mb-2">Featured</h2>
    <p className="text-gray-500 text-lg mb-8">Curated top picks from this week</p>
    <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
      { 
        filteredFeaturedAssets
          .map(item => <AssetCard asset={item} key={item.id} />)
      }
    </div>
  </div>
  <div id="trending">
    <h2 className="text-4xl font-semibold mb-2">Trending</h2>
    <p className="text-gray-500 text-lg mb-8">Most popular by community</p>
    <div className="p-3 grid gap-4 grid-cols-1 md:grid-cols-2 ">
      {
       filteredTrendingAssets
          .map(item => <AssetCard asset={item} key={item.id} showBackground={false} />)
      }
    </div>
  </div>
</>);
}