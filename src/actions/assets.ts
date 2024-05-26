/**
 * A simple set of placeholder api actions for now
 */

import { AssetType } from "@/model";
import { featured, sampleData, trending } from "@/data/sample-data";

export async function getAssetsByType(type: AssetType) {
  return sampleData.filter(asset => asset.type === type);
}

export async function getAssetById(id: number) {
  const asset = sampleData.find(asset => asset.id === id);

  if (!asset) {
    throw new Error('No asset with that ID available');
  }

  return asset;
}

export async function getFeaturedAssets() {
  return featured;
}


export async function getTrendingAssets() {
  return trending;
}