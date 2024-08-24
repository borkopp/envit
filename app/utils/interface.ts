export interface Post {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt: string;
  body: any;
  _id: string;
  thumbnail?: {
    asset: {
      url: string;
    };
  };
  author?: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  images?: {
    asset: {
      url: string;
    };
  }[];
}
