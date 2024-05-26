'use client';

import { Asset } from "@/model";
import AssetCard from "../asset-card";
import { useSearchStore } from "@/providers/search-store.provider";
import { searchAssetsFilter } from "@/utils/assets";
import { useState } from "react";

type ListingsPageProps = {
  assets: Asset[];
}

export default function ListingPage({ assets }: ListingsPageProps) {
  const currentSearch = useSearchStore((state) => state.currentSearch);
  const filteredAssets = assets?.filter((asset) => searchAssetsFilter(asset, currentSearch))

  return (
    <div className="p-3 grid gap-4 grid-cols-1 md:grid-cols-2">
    {
      filteredAssets
        .map(asset => <AssetCard asset={asset} key={asset.id} /> )
    }
    </div>
  );
}