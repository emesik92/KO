
import React from 'react';
import { PriceItem, FaqItem, TestimonialItem } from './types';
import { Heart, ShieldCheck, Zap } from 'lucide-react';

/** 
 * ============================================================
 * SEKCJA EDYCJI TREŚCI - DANE MGR KATARZYNY ORGAN
 * ============================================================
 */

export const BRAND_NAME = "Harmonia";

export const CONTACT_INFO = {
  phone: "+48 123 456 789",
  email: "kontakt@katarzyna-organ.pl",
  address: "Konsultacje Online",
  hours: "Poniedziałek - Piątek: 09:00 - 20:00",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com"
  }
};

export const ABOUT_ME = {
  name: "mgr Katarzyna Organ",
  role: "Psycholog, psychoterapeuta w trakcie szkolenia",
  motto: "Twoje doświadczenia mają znaczenie – każde uczucie i myśl jest ważna. Razem przyglądamy się wyzwaniom i znajdujemy drogi, które mogą Ci pomóc.",
  description1: "Jestem psychologiem i psychoterapeutą w trakcie akredytowanego szkolenia z terapii poznawczo-behawioralnej (Crescentia).",
  description2: "W pracy stawiam na bezpieczną, partnerską relację, pomagając osobom dorosłym doświadczającym lęku, depresji, trudności w relacjach, regulacji emocji czy ADHD. Doświadczenie zdobywałam w szpitalach psychiatrycznych, DPS-ach i organizacjach wspierających osoby z trudnościami psychicznymi, a także w pracy z biznesem.",
  qualifications: [
    "Tytuł magistra psychologii (Krakowska Akademia im. Andrzeja Frycza-Modrzewskiego, 2017)",
    "4-letnia Szkoła Terapii Poznawczo-Behawioralnej Crescentia w Katowicach (w trakcie)",
    "Ponad 1000 godzin praktyki zawodowej",
    "Racjonalna Terapia Zachowania - poziom podstawowy, 2024",
    "Szkolenie - Interwencja Kryzysowa (Szkoła Psychoterapii Dialog, 2024)",
    "Coaching (Grupa SET, 2024)",
    "Nadwrażliwości dźwiękowe (mizofonia, fonofobia, hiperakuzja) - diagnoza i terapia",
    "Pierwszy kontakt z pacjentem (PsychoStart, 2023)"
  ],
  experience: [
    "Praca z lękiem, depresją i regulacją emocji",
    "Wsparcie osób z ADHD",
    "Doświadczenie kliniczne (Szpitale, DPS)",
    "Współpraca z sektorem biznesowym (HR Support)"
  ]
};

export const SPECIALIZATIONS = {
  main: ["Depresja", "Zaburzenia lękowe", "Stres", "Smutek"],
  others: [
    "Strach", "Złość", "Samoocena", "Związki", "Prokrastynacja", 
    "Samotność", "Syndrom wypalenia", "Żal, cierpienie", 
    "Zaburzenia osobowości", "ADHD", "Trauma", "Psychosomatyka", 
    "Motywacja", "Zmiany życiowe", "Praca z osobami LGBT+", "Wsparcie HR"
  ]
};

export const PRICES: PriceItem[] = [
  {
    title: 'Konsultacja Psychoterapeutyczna Online',
    price: '169 PLN',
    duration: '50 min',
    description: 'Profesjonalne wsparcie w nurcie CBT. Bezpieczna i poufna rozmowa wideo.',
    features: [
      'Podejście poznawczo-behawioralne', 
      'Praca z osobami dorosłymi', 
      'Szyfrowane połączenie wideo',
      'Atmosfera akceptacji'
    ],
    isAvailable: true,
  },
  {
    title: 'Wsparcie dla Biznesu / HR',
    price: 'Indywidualna',
    duration: '60 min',
    description: 'Konsultacje i wsparcie psychologiczne dla pracowników i kadry zarządzającej.',
    features: [
      'Prewencja wypalenia', 
      'Zarządzanie stresem', 
      'Interwencje kryzysowe'
    ],
    isAvailable: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Jak wygląda pierwsze spotkanie?',
    answer: 'Pierwsza sesja to konsultacja, podczas której rozmawiamy o Twoich trudnościach, potrzebach i oczekiwaniach. To czas na wzajemne poznanie się i ustalenie, jak możemy wspólnie pracować.',
  },
  {
    question: 'Czym jest nurt poznawczo-behawioralny (CBT)?',
    answer: 'To nurt terapeutyczny o udowodnionej naukowo skuteczności. Skupia się na powiązaniach między naszymi myślami, emocjami i zachowaniami, pomagając wypracować zdrowsze mechanizmy funkcjonowania.',
  },
  {
    question: 'Czy pracujesz z osobami z diagnozą ADHD?',
    answer: 'Tak, pomagam osobom dorosłym z ADHD w lepszym rozumieniu siebie, regulacji emocji oraz wypracowywaniu strategii radzenia sobie w codziennych wyzwaniach.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    text: "Pani Katarzyna tworzy niesamowitą atmosferę bezpieczeństwa. Dzięki terapii CBT zaczynam inaczej patrzeć na swoje lęki.",
    author: "Marta, 29 lat",
  },
  {
    text: "Bardzo cenię sobie profesjonalizm i konkretne narzędzia, które dostaję na sesjach. Praca online jest dla mnie ogromnym ułatwieniem.",
    author: "Tomasz, 35 lat",
  },
];

export const COLORS = {
  primary: 'bg-[#B2C2B2]',
  secondary: 'bg-[#EDE7DE]',
  text: 'text-[#2D3436]',
};

export const NAVIGATION = [
  { name: 'O mnie', href: '#o-mnie' },
  { name: 'Specjalizacja', href: '#specjalizacja' },
  { name: 'Oferta', href: '#oferta' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#kontakt' },
];

export const FEATURES = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Partnerska relacja',
    description: 'Wierzę w terapię opartą na autentyczności, szacunku i wspólnym szukaniu dróg do zmiany.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Nurt CBT',
    description: 'Pracuję w oparciu o metody naukowo potwierdzone, stale podnosząc swoje kwalifikacje.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Pełna akceptacja',
    description: 'Zapewniam bezpieczną przestrzeń dla każdego, niezależnie od doświadczeń czy tożsamości.'
  }
];
