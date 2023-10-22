interface ExampleVin {
  model: string;
  year: number;
  vin: string;
}

export interface CarMakeDetail {
  make: string;
  slug: string;
  website?: string;
  logo: string;
  description: string;
  models: string[];
  example_vins: ExampleVin[];
  about: string;
}
