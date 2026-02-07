
export interface PriceItem {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  isAvailable: boolean; // Nowe pole informujące czy opcja jest aktywna
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
}
