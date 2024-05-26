

import { getAssetsByType } from "@/actions/assets";
import ListingPage from "@/components/pages/listing-page";
import { AssetType } from "@/model";

type PageParams = {
  params: {
    assetType: AssetType;
  }
}

export default async function Page({ params }: PageParams ) {
  const data = await getAssetsByType(params.assetType);

  return (
    <ListingPage assets={data} />
  );
}