import { Affiliate } from "./affiliate";
import { BusinessQuestion } from "./business-question";
import { Calculation } from "./calculation";
import { ChartType } from "./chart";
import { KPIFilter } from "./kpi-filter";
import { Metric } from "./metric";

export type AssetType = 'kpi' | 'dataVisualization' | 'layout' | 'storyboard';

export type BaseAsset = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  lastUpdated?: string; // ISO Datetime stamp: This is in the wireframe for the Layout modal and in the featured cards, but not in the UX flow, seems sensible to have it for all Asset type though
  type: AssetType; // I don't necessarily like this, but it makes for easier filtering and searching  
}

export type KPIAsset = BaseAsset & {
  businessQuestions?: BusinessQuestion[];
  metricIds?: Metric[];
  calculation: Calculation;
  visualsAvailable: boolean; // the UX flow mentions this, but it's not clear if it's a boolean, or an array, or something else
  affiliateApplicability: number; // This property type isn't defined, so I'm going to assume it's some kind of score or weighting for now
}

/**
 * DataVisualizationAsset
 * 
 * This is thinly-defined as 'charts' in the UX flow and the user stories, but has no other reference or mention, 
 * it's also not in the segment / tab group in the wireframes, I'm _guessing_ that these will be 
 * added to Layouts, however there's no understanding of how they'll be consumed and presented etc
 * wireframes,  
 */
export type DataVisualizationAsset = BaseAsset & {
  kpiFavourites?: KPIAsset[]; // 
  assetInfoContext?: unknown; // no clue what this is yet 
  chartType: ChartType; 
} 

export type LayoutAsset = BaseAsset & {
  pages: number; // I can see this referenced in the wireframe as an informational point, but the implementation is unknown
  kpisUsed?: KPIAsset[]; // this could potentially just be a number, looking at the wireframe, but it's probably useful to have the objects
  layoutType: string; // This is in the wireframe as 'type', but not in the UX flow
}

// Neither of the properties here have any flesh on the bones, so I've assumed there would be discreet types for each,
// and added some rough shape to them
export type StoryboardAsset = BaseAsset & {
  kpiFilters?: KPIFilter[]; 
  affiliates?: Affiliate[];
}

export type Asset = KPIAsset | DataVisualizationAsset | LayoutAsset | StoryboardAsset;