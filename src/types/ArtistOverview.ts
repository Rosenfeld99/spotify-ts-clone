interface ConcertEvent {
    id: string;
    title: string;
    uri: string;
    category: string;
    date: EventDate;
    festival: boolean;
    nearUser: boolean;
    partnerLinks: PartnerLink[];
    venue: Venue;
    userLocation: Location;
    merch: Merchandise;
  }
  
  interface EventDate {
    day: number;
    hour: number;
    isoString: string;
    minute: number;
    month: number;
    precision: string;
    second: number;
    year: number;
  }
  
  interface PartnerLink {
    partnerName: string;
    url: string;
  }
  
  interface Venue {
    name: string;
    location: Location;
    coordinates: Coordinates;
  }
  
  interface Location {
    name: string;
  }
  
  interface Coordinates {
    latitude: number;
    longitude: number;
  }
  
  interface Merchandise {
    items: MerchandiseItem[];
  }
  
  interface MerchandiseItem {
    // Define properties if known; otherwise, leave it as an empty object
  }
  
  interface Goods {
    events: Events;
  }
  
  interface Events {
    concerts: ConcertEvent[];
    pagingInfo: PagingInfo;
  }
  
  interface PagingInfo {
    limit: number;
    totalCount: number;
  }
  