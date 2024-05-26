import { AssetDetailProps } from "./model";
import Image from "next/image";
import placeholder from '../../../public/asset-icon-placeholder.png';
import Tag from "../tag";
export function AssetDetailHeader({ asset }: AssetDetailProps) {
  /* TODO: Add share link */
  return (
    <div className="flex flex-col items-center">
      {/* TODO: Just a placeholder for now, the background colouring isn't quite right */}
      <div className="mb-4">
        <Image 
          src={placeholder}
          alt={asset.name}
          className='bg-gray-200 object-scale-down rounded-md min-w-16 p-2 max h-full'
        />
      </div>
      <div className="flex items-center mb-2">
        <h1 className="uppercase font-extrabold pr-2">{asset.name}</h1>
        <Tag label={asset.type} />
      </div>
      <div className="flex items-center mb-4">
        {/* TODO: This isn't defined anywhere, so just placeholder for now */}
        <p className="text-sm text-gray-400">Descriptive name of the layout</p>
      </div>
      <div className="flex items-center">
        <p className="text-sm">{asset.description}</p>
      </div>
    </div>
  )
}