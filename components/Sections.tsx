
import React, { useState } from 'react';
import { 
  Menu, X, Check, Phone, Mail, 
  Monitor, Laptop, Calendar, Video, Sparkles, Heart, ArrowRight
} from 'lucide-react';
import { 
  NAVIGATION, COLORS, PRICES, FAQS, TESTIMONIALS, FEATURES, 
  CONTACT_INFO, ABOUT_ME, BRAND_NAME, SPECIALIZATIONS 
} from '../constants';

// --- Komponenty Współdzielone ---

const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'disabled';
  className?: string;
  onClick?: () => void;
  asAnchor?: boolean;
  href?: string;
}> = ({ children, variant = 'primary', className = '', onClick, asAnchor, href }) => {
  const base = "px-7 py-2.5 rounded-full font-medium transition-all duration-500 transform active:scale-95 text-center inline-block cursor-pointer text-sm md:text-base";
  const styles = {
    primary: `${COLORS.primary} text-white hover:opacity-90 shadow-lg shadow-[#B2C2B2]/20`,
    secondary: `${COLORS.secondary} text-[#2D3436] hover:opacity-90`,
    outline: "border-2 border-[#B2C2B2] text-[#B2C2B2] hover:bg-[#B2C2B2] hover:text-white",
    disabled: "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
  };

  const fullClassName = `${base} ${styles[variant]} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} className={fullClassName} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={variant !== 'disabled' ? onClick : undefined} className={fullClassName}>
      {children}
    </button>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle?: string; center?: boolean }> = ({ title, subtitle, center }) => (
  <div className={`mb-6 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-[#2D3436]">{title}</h2>
    {subtitle && <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    <div className={`h-1 w-12 bg-[#B2C2B2] mt-3 ${center ? 'mx-auto' : ''}`} />
  </div>
);

// --- Sekcje Strony ---

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center py-2">
          <div className="flex items-center">
            <a href="/" className="group flex items-center gap-2.5 transition-all duration-300">
              <div className="w-8 h-8 rounded-xl bg-[#B2C2B2] flex items-center justify-center shadow-sm group-hover:shadow-[#B2C2B2]/30 group-hover:-rotate-6 transition-all">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg serif font-semibold text-[#2D3436] tracking-tight">{BRAND_NAME}</span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {NAVIGATION.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-gray-400 hover:text-[#B2C2B2] transition-colors font-semibold text-[10px] uppercase tracking-[0.2em]"
              >
                {item.name}
              </a>
            ))}
            <Button asAnchor href="#kontakt" variant="primary" className="!px-5 !py-1.5 !text-[10px] uppercase tracking-widest font-bold">Konsultacja</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4">
          {NAVIGATION.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="block text-lg text-gray-700 hover:text-[#B2C2B2] font-medium"
            >
              {item.name}
            </a>
          ))}
          <Button asAnchor href="#kontakt" variant="primary" className="w-full py-3" onClick={() => setIsOpen(false)}>Zacznij terapię</Button>
        </div>
      )}
    </nav>
  );
};

export const Hero: React.FC = () => (
  <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 bg-[#FAFAF8] overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40">
      <div className="absolute top-1/2 right-[-5%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#B2C2B2]/20 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute top-[20%] right-[15%] w-[180px] h-[180px] bg-[#EDE7DE] rounded-full blur-[60px]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        <div className="md:w-3/5 text-center md:text-left">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#B2C2B2]/15 text-[#B2C2B2] text-[10px] font-bold uppercase tracking-[0.15em] mb-6 animate-in fade-in slide-in-from-bottom-2">
            <Heart className="w-3 h-3" /> mgr Katarzyna Organ — Psychoterapeuta CBT
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#2D3436] leading-[1.2] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            "{ABOUT_ME.motto}"
          </h1>
          <p className="text-sm md:text-base text-gray-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed opacity-80 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Profesjonalna pomoc psychologiczna online. Skutecznie, poufnie i z pełnym szacunkiem do Twojego czasu oraz emocji.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Button asAnchor href="#kontakt" variant="primary" className="group shadow-2xl !px-8">
              Umów pierwszą wizytę <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button asAnchor href="#specjalizacja" variant="outline" className="!px-8">W czym mogę pomóc?</Button>
          </div>
        </div>
        
        <div className="md:w-2/5 flex justify-center items-center relative py-6">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 border-2 border-[#B2C2B2]/30 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-5 border border-[#2D3436]/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center z-20">
               <div className="w-28 h-28 rounded-full bg-[#B2C2B2]/10 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-8 h-8 text-[#B2C2B2]" />
               </div>
            </div>
            
            <div className="absolute -top-2 -right-10 bg-white px-3 py-1.5 rounded-xl shadow-lg border border-gray-50 flex items-center gap-1.5 z-30 animate-bounce duration-[3000ms]">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Poufność</span>
            </div>
            <div className="absolute bottom-10 -left-12 bg-white px-3 py-1.5 rounded-xl shadow-lg border border-gray-50 flex items-center gap-1.5 z-30 animate-bounce delay-700">
              <Check className="w-2.5 h-2.5 text-[#B2C2B2]" />
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Bezpieczeństwo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const About: React.FC = () => (
  <section id="o-mnie" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-5/12">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#EDE7DE]/50 rounded-[2.5rem] -z-10 group-hover:scale-105 transition-transform duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
              alt={ABOUT_ME.name} 
              className="rounded-[2rem] shadow-2xl w-full grayscale-[15%] hover:grayscale-0 transition-all duration-700 border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#B2C2B2] text-white p-5 rounded-2xl shadow-xl hidden md:block">
              <span className="block text-2xl font-bold">+1000</span>
              <span className="text-[9px] uppercase tracking-widest font-medium">godz. praktyki</span>
            </div>
          </div>
        </div>
        <div className="md:w-7/12">
          <div className="mb-6">
            <h4 className="text-[#B2C2B2] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Poznajmy się</h4>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2D3436] mb-4">{ABOUT_ME.name}</h2>
            <p className="text-xs font-medium text-[#B2C2B2] mb-4 uppercase tracking-widest">{ABOUT_ME.role}</p>
          </div>
          <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed italic">
            {ABOUT_ME.description1}
          </p>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            {ABOUT_ME.description2}
          </p>
          
          <div className="space-y-3">
             <h4 className="font-bold text-[#2D3436] text-[10px] uppercase tracking-[0.2em] mb-3">Wybrane Kwalifikacje:</h4>
             <div className="grid grid-cols-1 gap-2">
                {ABOUT_ME.qualifications.slice(0, 6).map((q, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 bg-[#FAFAF8] rounded-xl border border-gray-50 hover:border-[#B2C2B2]/30 transition-all">
                    <Check className="w-3.5 h-3.5 text-[#B2C2B2] mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-600 font-medium">{q}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ForWhom: React.FC = () => (
  <section id="specjalizacja" className="py-16 bg-[#FAFAF8]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        title="W czym mogę Ci pomóc?" 
        subtitle="Specjalizuję się w pracy z osobami dorosłymi, skupiając się na trwałej zmianie." 
        center 
      />
      
      <div className="mb-12 mt-8">
        <h4 className="text-center font-bold text-[#B2C2B2] text-[9px] uppercase tracking-[0.4em] mb-6">Główna Specjalizacja</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SPECIALIZATIONS.main.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl text-center border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-10 h-10 bg-[#B2C2B2]/5 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-[#B2C2B2] transition-colors">
                <Check className="text-[#B2C2B2] group-hover:text-white w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[#2D3436]">{item}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h4 className="text-center font-bold text-[#B2C2B2] text-[9px] uppercase tracking-[0.4em] mb-6">Możliwe obszary wsparcia</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {SPECIALIZATIONS.others.map((item, i) => (
            <span key={i} className="bg-white px-4 py-2 rounded-full border border-gray-100 text-[11px] text-gray-500 font-medium shadow-sm hover:border-[#B2C2B2] hover:text-[#B2C2B2] transition-all cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const HowIWork: React.FC = () => (
  <section id="jak-pracuje" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <SectionHeading title="Twoja droga do zmiany" subtitle="Terapia online to wygodna i skuteczna forma pracy nad sobą." />
          <div className="space-y-4 mt-8">
            {[
              { icon: <Calendar className="w-4 h-4" />, title: 'Umówienie terminu', text: 'Zadzwoń lub napisz. Pierwsza konsultacja pozwoli nam określić cele naszej pracy.' },
              { icon: <Monitor className="w-4 h-4" />, title: 'Instrukcja techniczna', text: 'Otrzymasz link do bezpiecznego pokoju wideo. Nie musisz niczego instalować.' },
              { icon: <Video className="w-4 h-4" />, title: 'Sesja terapeutyczna', text: 'Rozmawiamy 50 minut w Twoim bezpiecznym zaciszu, pracując metodami CBT.' }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 p-4 bg-[#FAFAF8] rounded-2xl border border-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#B2C2B2] shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xs mb-1 text-[#2D3436] uppercase tracking-wider">{step.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 bg-[#2D3436] p-10 md:p-12 rounded-[3rem] text-white shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B2C2B2]/10 rounded-full blur-2xl -mt-16 -mr-16 transition-all group-hover:bg-[#B2C2B2]/30 duration-700" />
          <h3 className="text-2xl serif mb-6">Dlaczego Terapia Online?</h3>
          <p className="text-sm opacity-70 mb-8 leading-relaxed">
            Eliminujemy bariery geograficzne i stres związany z dojazdami. Badania potwierdzają, że CBT online jest tak samo skuteczne jak tradycyjne spotkania.
          </p>
          <ul className="space-y-4">
            {['Prywatność i 100% poufność', 'Komfort własnego domu', 'Zgodność z RODO i etyką zawodu'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 font-medium text-xs">
                <div className="w-5 h-5 bg-[#B2C2B2] rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export const Offer: React.FC = () => (
  <section id="oferta" className="py-16 bg-[#FAFAF8]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Cennik wsparcia" center subtitle="Każda sesja to inwestycja w Twoje lepsze samopoczucie." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {PRICES.map((item, i) => (
          <div key={i} className={`p-8 rounded-[2.5rem] border transition-all duration-700 flex flex-col ${item.isAvailable ? 'bg-white border-[#B2C2B2]/50 shadow-xl hover:-translate-y-2' : 'bg-gray-100 border-gray-200 opacity-60'}`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-[#2D3436]">{item.title}</h3>
              {item.isAvailable && (
                <span className="bg-[#B2C2B2]/10 text-[#B2C2B2] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold">Dostępna</span>
              )}
            </div>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-bold text-[#B2C2B2]">{item.price}</span>
              {item.price.includes('PLN') && <span className="text-gray-400 text-xs">/ {item.duration}</span>}
            </div>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">{item.description}</p>
            <ul className="space-y-3 mb-8 flex-grow">
              {item.features.map((feat, j) => (
                <li key={j} className="flex items-center gap-2.5 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B2C2B2]" /> {feat}
                </li>
              ))}
            </ul>
            <Button asAnchor href="#kontakt" variant={item.isAvailable ? 'primary' : 'disabled'} className="w-full py-3.5 text-[10px] font-bold uppercase tracking-widest">
              {item.isAvailable ? 'Zarezerwuj sesję' : 'Wkrótce dostępne'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Trust: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#EDE7DE]/30 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/30 rounded-full blur-[60px] -mb-24 -mr-24" />
        <SectionHeading title="Co mnie wyróżnia?" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {FEATURES.map((item, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-[#B2C2B2] group-hover:scale-110 group-hover:bg-[#B2C2B2] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold mb-3 text-[#2D3436]">{item.title}</h4>
              <p className="text-gray-500 text-xs max-w-xs mx-auto leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const Testimonials: React.FC = () => (
  <section className="py-16 bg-[#FAFAF8]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Głosy moich pacjentów" center />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
        {TESTIMONIALS.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] italic border border-gray-100 shadow-lg relative group">
            <div className="absolute top-8 left-4 text-5xl text-[#EDE7DE] font-serif leading-none select-none">“</div>
            <p className="text-gray-600 text-[13px] mb-6 leading-relaxed relative z-10 pl-4">{item.text}</p>
            <div className="flex items-center gap-3 relative z-10 pl-4">
              <div className="w-8 h-8 rounded-full bg-[#B2C2B2]/10 flex items-center justify-center font-bold text-[#B2C2B2] text-[10px]">
                {item.author.charAt(0)}
              </div>
              <span className="text-[#B2C2B2] font-bold not-italic text-[10px] uppercase tracking-widest">{item.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FirstVisit: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-[#B2C2B2] p-10 md:p-16 rounded-[3rem] text-white shadow-3xl relative overflow-hidden group">
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-[60px]" />
        <h2 className="text-2xl md:text-4xl serif mb-4">Rozpocznijmy tę drogę razem.</h2>
        <p className="text-sm md:text-base opacity-90 mb-8 leading-relaxed max-w-xl mx-auto">
          Nie musisz być sam ze swoimi wyzwaniami. Razem możemy przyjrzeć się temu, co trudne i znaleźć drogę do spokoju.
        </p>
        <Button asAnchor href="#kontakt" variant="primary" className="!bg-white !text-[#B2C2B2] hover:!bg-[#2D3436] hover:!text-white !px-10 !py-4 shadow-2xl uppercase tracking-widest text-[10px] font-bold">
          Umów pierwszą konsultację
        </Button>
      </div>
    </div>
  </section>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Najczęstsze pytania" center />
        <div className="space-y-3 mt-10">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 text-left flex justify-between items-center group"
              >
                <span className="font-bold text-xs md:text-sm text-[#2D3436] group-hover:text-[#B2C2B2] transition-colors">{faq.question}</span>
                <div className={`w-7 h-7 rounded-full border border-gray-100 flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#B2C2B2] border-[#B2C2B2] rotate-45' : ''}`}>
                   {openIndex === i ? <X className="w-3 h-3 text-white" /> : <ArrowRight className="w-3 h-3 text-gray-300" />}
                </div>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-500 text-[11px] leading-relaxed animate-in fade-in slide-in-from-top-1">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact: React.FC = () => (
  <section id="kontakt" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <SectionHeading title="Skontaktuj się ze mną" subtitle="Napisz lub zadzwoń. Odpowiem najszybciej jak to możliwe." />
          <div className="space-y-6 mt-10">
            <div className="flex gap-4 items-center p-5 rounded-2xl border border-gray-50 hover:bg-[#FAFAF8] transition-colors duration-500">
              <div className="w-12 h-12 bg-[#EDE7DE]/50 rounded-xl flex items-center justify-center text-[#B2C2B2] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] text-[#2D3436] uppercase tracking-widest mb-0.5">Telefon</h4>
                <p className="text-gray-500 text-sm">{CONTACT_INFO.phone}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-5 rounded-2xl border border-gray-50 hover:bg-[#FAFAF8] transition-colors duration-500">
              <div className="w-12 h-12 bg-[#EDE7DE]/50 rounded-xl flex items-center justify-center text-[#B2C2B2] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] text-[#2D3436] uppercase tracking-widest mb-0.5">E-mail</h4>
                <p className="text-gray-500 text-sm">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form className="bg-[#FAFAF8] p-8 md:p-12 rounded-[3rem] space-y-4 border border-gray-100 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Imię i Nazwisko</label>
                <input type="text" placeholder="Np. Jan Kowalski" className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#B2C2B2]/40 transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Twój E-mail</label>
                <input type="email" placeholder="email@przyklad.pl" className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#B2C2B2]/40 transition-all" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Wiadomość</label>
              <textarea rows={3} placeholder="Opisz krótko, w czym mogę pomóc..." className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#B2C2B2]/40 transition-all resize-none"></textarea>
            </div>
            <Button variant="primary" className="w-full py-4 uppercase tracking-[0.2em] text-[10px] font-bold mt-2">Wyślij wiadomość</Button>
            <p className="text-[9px] text-gray-400 text-center leading-relaxed mt-2">
              Twoje dane są poufne i chronione zgodnie z RODO.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export const Footer: React.FC = () => (
  <footer className="bg-[#2D3436] text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <a href="/" className="text-3xl serif font-semibold text-[#B2C2B2] mb-6 block hover:opacity-80 transition-opacity">
            {BRAND_NAME}
          </a>
          <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
            Profesjonalna psychoterapia CBT online. Wierzę, że partnerska relacja i akceptacja są kluczem do trwałej zmiany. Wspieram osoby dorosłe w ich drodze do zdrowia psychicznego.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-[10px] uppercase tracking-[0.3em] text-white/30">Nawigacja</h4>
          <ul className="space-y-3 text-gray-400 text-xs">
            {NAVIGATION.map(item => (
              <li key={item.name}><a href={item.href} className="hover:text-[#B2C2B2] transition-colors">{item.name}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-[10px] uppercase tracking-[0.3em] text-white/30">Kontakt</h4>
          <p className="text-gray-400 text-[11px] mb-2">{ABOUT_ME.name}</p>
          <p className="text-white font-bold text-base mb-6">{CONTACT_INFO.phone}</p>
          <p className="text-gray-400 text-[9px] leading-relaxed uppercase tracking-wider">
            Online: Zoom / Google Meet / WhatsApp
          </p>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center text-gray-600 text-[9px] uppercase tracking-[0.4em]">
        <p>&copy; {new Date().getFullYear()} {BRAND_NAME} — {ABOUT_ME.name}. Psychologia i Terapia.</p>
      </div>
    </div>
  </footer>
);
