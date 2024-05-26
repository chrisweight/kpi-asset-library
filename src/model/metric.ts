/**
 * Metric
 * 
 * Mentioned in the UX Flow, but not given any obvious definition in
 * either the user journeys or the wireframes.
 * 
 * I've added some arbitrary properties that might reflect the requirement of the type, but
 * this is all just stipulation currently
 */
export type Metric = {
  id: number;
  name: string;
  description?: string;
  value: string | number | boolean;
}
