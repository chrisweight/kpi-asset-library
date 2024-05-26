import { AssetDetailProps } from "./model";
import { AssetDetailHeader } from "./asset-detail-header";
import { AssetDetailFooter } from "./asset-detail-footer";
import { LayoutAsset } from "@/model";
import { format, parseISO } from "date-fns";

export default function LayoutAssetDetail({ asset }: AssetDetailProps) {
  const a = asset as LayoutAsset;
  const date = a.lastUpdated && format(parseISO(a.lastUpdated), 'MM/dd/yyyy');
  
  return (
    <div className="flex flex-col items-center">
      <AssetDetailHeader asset={asset} />
      <div className="w-full mb-8 mt-4 p-4 px-8">
        <ul className="inline-flex w-full justify-between text-center">
          <li className="flex-grow border-e-2">
            <p className="font-semibold">{a.kpisUsed?.length ?? 0}</p>
            <p className="text-gray-500">Used <i></i></p>
          </li>
          <li className="flex-grow border-e-2">
            <p className="font-semibold">{a.layoutType}</p>
            <p className="text-gray-500">Type</p>
          </li>
          <li className="flex-grow border-e-2">
            <p className="font-semibold">{a.pages}</p>
            <p className="text-gray-500">Pages No.</p>
          </li>
          <li className="flex-grow">
            <p className="font-semibold">{date}</p>
            <p className="text-gray-500">Last Updated</p>
          </li>
        </ul>
      </div>
      <div className="w-full rounded-md bg-gray-100 min-h-56 mb-8 flex align-middle justify-center items-center">
        <h1>TODO: Layout Preview</h1>
      </div>
      { /* 
          TODO: In the wireframes, the layout modal has business questions around here, 
          however, in the UX flow, business questions belong under the KPI modal
          so we need to clear up which (if either?) is the correct source of truth here 
        */ }
      <AssetDetailFooter asset={asset} />
    </div>
  );
}