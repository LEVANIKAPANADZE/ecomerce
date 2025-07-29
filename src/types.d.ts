export type ProductType = {
  id: number;
  slug: string;
  name: string;
  image: ImageSet;
  category: string;
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeItem[];
  gallery: {
    first: ImageSet;
    second: ImageSet;
    third: ImageSet;
  };
  others: OtherProduct[];
};

type ImageSet = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type IncludeItem = {
  quantity: number;
  item: string;
};

type OtherProduct = {
  slug: string;
  name: string;
  image: ImageSet;
};

interface FormValues {
  username: string;
  email: string;
  password: string;
}

interface FormErrors {
  Firstname: boolean;
  LastName: boolean;
  Email: boolean;
  Password: boolean;
}

type User = {
  id: number;
  username: string;
  email: string;
};
