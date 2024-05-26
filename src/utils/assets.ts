import { Asset } from "@/model";

/**
 * This is a quick and dirty filter, just to highlight functionality 
 */
export const searchAssetsFilter = (item: Asset, searchTerm?: string) => {
  if (!searchTerm) {
    return true;
  }

  const st = searchTerm.toLowerCase();
  const { name, type, shortDescription, description } = item;

  const matched = description.toLowerCase().includes(st) || 
    shortDescription.toLowerCase().includes(st) ||
    name.toLowerCase().includes(st) || 
    type.toLowerCase().includes(st);

  return matched;
}