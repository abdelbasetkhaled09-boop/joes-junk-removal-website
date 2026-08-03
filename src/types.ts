export interface ServiceItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'specialty';
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  typicalItems: string[];
  startingPrice: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  description: string;
  preferredDate: string;
  preferredTime: string;
  estimatedVolume?: string;
  attachedPhotos?: string[];
}

export interface EstimateSelection {
  loadSize: 'single' | 'quarter' | 'half' | 'three-quarter' | 'full';
  itemsSelected: string[];
  estimatedMinPrice: number;
  estimatedMaxPrice: number;
}
