import { Asset } from "@/model";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { concatClassnames } from "@/utils/strings";
import Image from "next/image";
import placeholder from '../../public/asset-icon-placeholder.png';

type AssetCardProps = {
  asset: Asset;
  showBackground?: boolean;
}

export default function AssetCard({ asset, showBackground = true }: AssetCardProps) {
  const { id, type, name, shortDescription, lastUpdated } = asset;
  const date = lastUpdated && format(parseISO(lastUpdated), 'MM/dd/yyyy');

  return (
    <Link href={`/${type}/${id}`} scroll={false}>
      <div 
        className={concatClassnames(
          showBackground 
            ? 'bg-white border-2 border-gray-200' 
            : '',
            'flex p-4 rounded-md min-h-32'
        )}
      >
        <div className="min-w-32">
          {/* TODO: Just a placeholder for now, the background colouring isn't quite right */}
          <Image 
            src={placeholder}
            alt={asset.name}
            className={concatClassnames(
              showBackground 
                ? 'bg-gray-100' 
                : 'bg-gray-200',
                'object-scale-down rounded-md w-auto h-full'
            )}
          />
        </div>
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col align-middle justify-center mb-1">
            <p className="font-semibold text-black">{name}</p>
            <p className="text-black text-base">{shortDescription}</p>
          </div>
          { date && <div className="flex items-center align-bottom">
            <p className="text-gray-500 text-sm">{date.toLocaleString()}</p> 
          </div> }
        </div>
      </div>
    </Link>
  )
}