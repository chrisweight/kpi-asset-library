import { Asset, DataVisualizationAsset, KPIAsset, LayoutAsset, StoryboardAsset } from "@/model"
import { faker } from '@faker-js/faker';

/**
 * Sample Data
 * For the sake of brevity and pure convenience, here I'm just lumping some sample
 * data into an array and using a consistent seed, then just extracting a few for each of 'trending' and 'featured' areas.
 * 
 * This is, for all intents and purposes, our 'database' and doesn't represent
 * what a real-world implementation would look like
 */

faker.seed(100);

const getBasicInfo = () => ({
  name: faker.lorem.words(5),
  shortDescription: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  lastUpdated: faker.date.past().toISOString(),
})

const getBusinessQuestion = () => ({

})

const kpiAssets: KPIAsset[] = [
  {
    id: 0,
    ...getBasicInfo(),
    type: 'kpi',
    // --
    businessQuestions: [
      {
        id: 0,
        title: 'Question 1',
        description: 'The Question content goes here'
      },
      {
        id: 1,
        title: 'Question 2',
        description: 'The Question content goes here'
      },
      {
        id: 2,
        title: 'Question 3',
        description: 'The Question content goes here'
      },
      {
        id: 3,
        title: 'Question 4',
        description: 'The Question content goes here'
      },
    ],
    metricIds: [],
    calculation: {
      id: 0
    },
    visualsAvailable: false, // the UX flow mentions this, but it's not clear if it's a boolean, or an array, or something else
    affiliateApplicability: 0.5, // This property type isn't defined, so I'm going to assume it's some kind of score or weighting for now
  },
  {
    id: 1,
    ...getBasicInfo(),
    type: 'kpi',
    // --
    businessQuestions: [],
    metricIds: [],
    calculation: {
      id: 0
    },
    visualsAvailable: false, // the UX flow mentions this, but it's not clear if it's a boolean, or an array, or something else
    affiliateApplicability: 0.5, // This property type isn't defined, so I'm going to assume it's some kind of score or weighting for now
  },
  {
    id: 2,
    ...getBasicInfo(),
    type: 'kpi',
    // --
    businessQuestions: [],
    metricIds: [],
    calculation: {
      id: 0
    },
    visualsAvailable: false, // the UX flow mentions this, but it's not clear if it's a boolean, or an array, or something else
    affiliateApplicability: 0.5, // This property type isn't defined, so I'm going to assume it's some kind of score or weighting for now
  },
];

const dataVizAssets: DataVisualizationAsset[] = [
  {
    id: 3,
    ...getBasicInfo(),
    type: 'dataVisualization',
    kpiFavourites: [], 
    assetInfoContext: '',  
    chartType: 'bar', 
  },
  {
    id: 4,
    ...getBasicInfo(),
    type: 'dataVisualization',
    kpiFavourites: [], 
    assetInfoContext: '',  
    chartType: 'bar', 
  },
  {
    id: 5,
    ...getBasicInfo(),
    type: 'dataVisualization',
    kpiFavourites: [], 
    assetInfoContext: '',  
    chartType: 'pie', 
  },
];

const layoutAssets: LayoutAsset[] = [
  {
    id: 6,
    ...getBasicInfo(),
    type: 'layout',
    pages: 1,
    layoutType: 'Context Specific 1' 
  },
  {
    id: 7,
    ...getBasicInfo(),
    type: 'layout',
    pages: 6,
    layoutType: 'Context Specific 2' 
  },
  {
    id: 8,
    ...getBasicInfo(),
    type: 'layout',
    pages: 0,
    layoutType: 'Universal' 
  },
];

const storyboardAssets: StoryboardAsset[] = [
  {
    id: 9,
    ...getBasicInfo(),
    type: 'storyboard',
    kpiFilters: [],
    affiliates: [] 
  },
  {
    id: 10,
    ...getBasicInfo(),
    type: 'storyboard',
    kpiFilters: [],
    affiliates: [] 
  },
  {
    id: 11,
    ...getBasicInfo(),
    type: 'storyboard',
    kpiFilters: [],
    affiliates: [] 
  },
];

// Just expose the whole lot as a collection and then 'featured' and 'trending' specifically

export const sampleData: Asset[] = [
 ...kpiAssets, 
 ...dataVizAssets, 
 ...layoutAssets, 
 ...storyboardAssets
];

export const featured: Asset[] = [kpiAssets[0], dataVizAssets[1], layoutAssets[2], storyboardAssets[0]];
export const trending: Asset[] = [kpiAssets[2], dataVizAssets[0], layoutAssets[1], storyboardAssets[2]];