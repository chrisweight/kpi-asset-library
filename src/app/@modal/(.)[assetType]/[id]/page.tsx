import Modal from "@/components/modal";
import { getAssetById } from "@/actions/assets";
import { assetDetailViewMap } from "@/components/assets";

type Params = {
  params: {
    id: string,
    assetType: string;
  }
}

export default async function Page({ params }: Params) {
  const asset = await getAssetById(+params.id);
  const View = asset && assetDetailViewMap[asset.type]
  
  return (
    <Modal>
      { View && <View asset={asset} /> }
    </Modal>
  )
 }