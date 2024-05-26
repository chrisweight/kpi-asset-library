import { KPIAsset } from "./asset";

/**
 * KPIFilter
 * 
 * Mentioned in the UX Flow, but not given any obvious definition in
 * either the user journeys or the wireframes.
 * 
 * Not clear what this should look like yet, but given the naming, 
 * we'll assume it needs a KPI and a filter of an as-yet unknown type
 */
export type KPIFilter = {
  kpi: KPIAsset;
  filter: unknown;
}