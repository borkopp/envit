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

export interface EventAddress {
  streetAddress: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Event {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  thumbnail: {
    asset: {
      url: string;
    };
  };
  startDate: string;
  endDate?: string;
  eventType: string[];
  address: EventAddress;
  description: any[];
  registrationLink?: string;
  capacity?: number;
  organizer?: string;
}
