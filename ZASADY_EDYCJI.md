
# Jak edytować swoją stronę?

Twoja strona została zaprojektowana tak, abyś mogła zmieniać jej treść bez pomocy programisty.

### 1. Gdzie są teksty?
Wszystkie napisy, ceny, opinie i dane kontaktowe znajdują się w pliku: `constants.tsx`.

### 2. Jak zmienić tekst?
1. Otwórz plik `constants.tsx`.
2. Znajdź odpowiednią sekcję, np. `CONTACT_INFO` (dane kontaktowe) lub `PRICES` (cennik).
3. Zmień tekst wewnątrz cudzysłowów. 
   - Przykład: zmiana `price: '180 PLN'` na `price: '200 PLN'`.
4. Zapisz plik.

### 3. Jak zmienić zdjęcia?
Zdjęcia są pobierane z darmowego serwisu Unsplash. Aby je zmienić:
1. Znajdź w pliku `components/Sections.tsx` linki zaczynające się od `https://images.unsplash.com/...`.
2. Podmień link na własny (np. po wgraniu zdjęcia na serwer lub do galerii WordPress).

### 4. Jak wgrać na hosting z Wordpresem?
1. Zbuduj projekt (jeśli używasz Node.js: `npm run build`).
2. Folder `dist` wgraj przez FTP do nowego folderu na serwerze (np. `/kontakt`).
3. Strona będzie działać pod adresem `twojadomena.pl/kontakt`.
