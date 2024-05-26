import { getAssetById } from "@/actions/assets";
import { assetDetailViewMap } from "@/components/assets";
import { Button } from "@/components/button";
import Link from "next/link";

type Params = {
  params: {
    id: string,
    assetType: string;
  }
}

/**
 * TODO: This view hasn't been defined at all outside of the modal context, so this is very rough and
 * needs further consideration. I've added a 'back' button so the user has a clear way of getting back to the listings view 
 * for a given asset type
 */

export default async function Page({ params }: Params) {
  const asset = await getAssetById(+params.id);
  const View = asset && assetDetailViewMap[asset.type]

  return (<>
    <div className="mb-8">
      <Link href={`/${asset.type}`}>
        <Button text={"Back"}></Button>
      </Link>
    </div>
    <div className="bg-white rounded-md p-8">
      { View && <View asset={asset} /> }
    </div>
  </>);
}