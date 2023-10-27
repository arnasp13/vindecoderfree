interface ExampleVin {
  model: string;
  year: number;
  vin: string;
}

export interface CarMakeDetail {
  make: string;
  slug: string;
  faq?: any;
  website?: string;
  logo: string;
  description: string;
  models: string[];
  example_vins: ExampleVin[];
  about: string;
}

export interface VinResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VinResult[];
}

export interface VinResult {
  Value: string | null;
  ValueId: string | null;
  Variable: string;
  VariableId: number | string;
}
