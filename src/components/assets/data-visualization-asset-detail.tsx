import { AssetDetailProps } from "./model";
import { AssetDetailHeader } from "./asset-detail-header";
import { AssetDetailFooter } from "./asset-detail-footer";
import { Button } from "../button";

export default function DataVisualizationAssetDetail({ asset }: AssetDetailProps) {
  return (
    <div className="flex flex-col items-center">
      <AssetDetailHeader asset={asset} />
      <div className="w-full mb-4 mt-4 p-4 rounded-md border-2 border-gray-100">
        <h1 className='font-semibold'>TODO</h1>
        <ul>

        </ul>
      </div>
      <AssetDetailFooter asset={asset}>
        <Button 
          text="Interact with Chart" 
          block={true}
        />
      </AssetDetailFooter>
    </div>
  );
}