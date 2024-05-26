'use client';

import { Asset } from "@/model";
import { Button } from "../button";
import { BookmarkOutlineIcon } from "../icons";
import { useState } from "react";

type AssetDetailFooterProps = {
  asset: Asset,
  children?: React.ReactNode
}

export function AssetDetailFooter({ asset, children }: AssetDetailFooterProps) {
  // TODO: Just mocking out the toggle here for now, this would need to be built out properly
  let [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="w-full grid grid-cols-1 gap-2">
      <Button 
        text="Favorite item" 
        /** TODO: This icon toggle isn't right, but it's just a quick mock up */
        icon={isFavourite ? <BookmarkOutlineIcon className="bg-white"/>: <BookmarkOutlineIcon />}
        onClick={() => setIsFavourite(!isFavourite)} 
        block={true}
        type='secondary'
      />
      {children}
    </div>
  );
}