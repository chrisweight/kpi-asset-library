import { AssetDetailProps } from "./model";
import { AssetDetailHeader } from "./asset-detail-header";
import { RequestIcon } from "../icons";
import { Button } from "../button";
import { AssetDetailFooter } from "./asset-detail-footer";

export default function StoryboardAssetDetail({ asset }: AssetDetailProps) {
  return (
    <div className="flex flex-col items-center">
      <AssetDetailHeader asset={asset} />
      <div className="w-full mb-4 mt-4 p-4 rounded-md border-2 border-gray-100">
        <h1 className='font-semibold'>TODO</h1>
        <ul>
          <li>Coupled KPIs/Filters</li>
          <li>Applicable Affiliates</li>
        </ul>
      </div>
      <AssetDetailFooter asset={asset}>
        {/* TODO: Should this behave in the same way as the 'global' request action? */}
        <Button 
          text="Request Access" 
          block={true}
          icon={<RequestIcon />}
        />
      </AssetDetailFooter>
    </div>
  );
}