# Platforma 24 — demo tractări auto

Demo de prezentare pentru un client de tractări auto / asistență rutieră.
Construit ca replică rafinată a variantei Lovable de la `tractariro.lovable.app`:
aceeași structură de secțiuni, aceeași paletă dark + roșu, aceleași fonturi
(Rajdhani + Outfit), dar cu execuție curată și patru funcționalități în plus.

## Rulare

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output static în dist/
npm run preview
```

Stack: Astro 6 + Tailwind 4 (fără React island — interactivitatea e vanilla JS
în `<script>`-uri colocate). Output 100% static, se urcă direct pe Hostinger.

## Ce e diferit față de varianta Lovable

| Ei | Noi |
|---|---|
| Imagini AI cu camion roșu neon, aceeași poză repetată în două carduri | 13 fotografii reale, fiecare folosită o singură dată |
| Metrica „100% Profesionalism" | „89 lei tarif de pornire" — cifră verificabilă |
| Bullet-uri cu săgeți „→" | buline discrete |
| Tarife ca șase carduri cu preț mare | carduri de rezumat + două tabele tehnice pe greutate și pe km |
| „Zone de acoperire" ca listă de carduri cu pin | schemă radar cu inele de acoperire + tabel cu timpi pe sector |
| Formular care nu trimite nicăieri | formular care compune mesajul și deschide WhatsApp |
| Fără calculator | calculator de tarif cu breakdown |
| Fără bară mobilă | bară fixă Sună / WhatsApp pe mobil |
| Copy generic | copy cu detaliu de meserie (chingi pe jantă, rampe 3 m, troliu 12 t) |

## Ce e mock (`TODO(real)` în cod)

- **Datele firmei** — `src/data.ts`, obiectul `firma`: nume, telefon, WhatsApp,
  e-mail, adresă, CUI, anul înființării. Totul e placeholder plauzibil.
  Telefonul `0790 24 24 24` e fictiv.
- **Tarifele** — realiste, luate din media pieței RO (89–250 lei în oraș,
  2–3 lei/km în afară), dar de confirmat cu clientul.
- **Flota** — patru mașini inventate, cu specificații plauzibile.
- **Recenziile** — scrise credibil, cu context concret, dar nu sunt reale.
  La proiectul real: recenzii Google reale sau scoase de tot.
- **Fotografiile** — Unsplash și Pexels, platforme europene reale. Se înlocuiesc
  cu pozele clientului (`src/assets/`, aceleași nume de fișier și totul merge
  mai departe). Pe platforma portocalie din flotă se citește „POMOC DROGOWA"
  (Polonia) — de înlocuit prima când vin pozele clientului.
  **Atenție la cache:** dacă noua poză are exact aceleași dimensiuni ca cea
  veche, Astro generează același URL `/_image` și browserul servește versiunea
  veche. Hard refresh (Cmd+Shift+R) după înlocuire.
- **Formularul de intervenție** — deschide WhatsApp cu mesajul precompletat.
  Nu ajunge nicăieri altundeva. `src/components/Contact.astro`, marcat
  `TODO(real)`: de dublat cu o notificare către dispecerat (Resend).
- **Paginile legale** — nu există. `src/components/Footer.astro`, marcat
  `TODO(real)`.

## Ce urmează la proiectul real

1. **Datele reale** de la client: nume firmă, telefon, WhatsApp, CUI, adresă,
   zonă acoperită, tarife, fotografii proprii cu mașinile și cu echipa.
2. **SEO** — nișa e intens disputată pe local. De făcut research de keyworduri
   („tractari auto bucuresti", „tractari auto sector 3", „platforma auto ilfov",
   „asistenta rutiera non stop"), apoi pagini separate pe sector și pe oraș,
   `LocalBusiness` + `FAQPage` JSON-LD, sitemap, robots, Google Business Profile.
   Concurența (tractări.ro, alotractari.ro) are deja nav pe orașe — e pattern-ul
   care rankează în nișă.
3. **Performanță** — imaginile sunt deja optimizate de Astro (webp, dimensiuni
   explicite, lazy). De verificat PageSpeed pe mobil și de redus hero-ul.
4. **Pachet legal + credit RTR** — banner cookie/GDPR, Termeni, Confidențialitate,
   Politica de cookies, credit „made by RTR" în footer.
5. **Opțional** — notificare pe e-mail către dispecerat la fiecare cerere
   (Resend), sau un mic panou de editare a tarifelor (Keystatic, git-based,
   fără backend pe shared hosting).

## Research

`_research/` conține capturile folosite la analiză: varianta Lovable de
referință și primele site-uri RO din nișă (alotractari.ro, sostractari.ro,
nonstoptractari.ro, tractariautobucuresti-nonstop.ro, tractări.ro), plus
iterațiile de design din `_research/iteratii/`. Folderul nu intră în build.
