import { AssetType } from './../../model/asset';
import DataVisualizationAssetDetail from "./data-visualization-asset-detail";
import KPIAssetDetail from "./kpi-asset-detail";
import LayoutAssetDetail from "./layout-asset-detail";

import StoryboardAssetDetail from "./storyboard-asset-detail";

// TODO: Better return type here and a better mechanic for 
// deciding on which view we want based on asset type
export const assetDetailViewMap: { [key in AssetType]: any } = {
  'kpi': KPIAssetDetail,
  'dataVisualization': DataVisualizationAssetDetail,
  'layout': LayoutAssetDetail,
  'storyboard': StoryboardAssetDetail,
}