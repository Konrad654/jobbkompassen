# Jobbkompassen

Jobbsökning med statisk HTML, CSS och JavaScript. Ingen installation krävs. För att testa lokalt kan du öppna index.html eller köra en enkel statisk HTTP-server från repots rot.

## Sökning

- Platsbanken hämtas från JobSearch och omfattar även utlandsannonser som publicerats där.
- JobAd Links visar en delmängd av uppgifterna från Arbetsförmedlingens partnerflöde och länkar till originalannonsen.
- EURES, Bundesagentur für Arbeit, France Travail, NAV och LinkedIn Jobs öppnas som externa söktjänster. Deras egna annonser importeras inte.
- Svenska, engelska och tyska gränssnitt. För ett urval yrkesord matchas även vanliga synonymer på svenska, engelska, tyska, franska och spanska. Själva annonserna behåller originalspråket.
- Utbildning och behörighet filtreras bland hämtade annonser utifrån strukturerade krav. Lönefiltret matchar uttryckliga månadsbelopp i SEK, och jämför den lägsta summan om annonsen anger ett intervall.
- Nuvarande land visas tillsammans med jobblandet. EU-filtret avser jobbets geografi. Your Europe beskriver villkoren för att arbeta utomlands.

## GitHub Pages

Öppna **Settings → Pages → Deploy from a branch** och välj **main → /(root) → Save**.
