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

/// blog

export interface ITag {
  tag: string;
  tag_slug: string;
}

export interface IPost {
  meta: {
    title: string;
    published_at: string;
    excerpt: string;
    tag: string;
    author: string;
    author_photo: string;
    author_url: string;
    tag_slug: string;
    feature_image: string;
    feature_image_alt: string;
    featured?: boolean;
  };
  slug: string;
}
