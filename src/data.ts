// TODO(real): datele firmei — de înlocuit cu cele reale primite de la client.
export const firma = {
  nume: "Platforma 24",
  numeScurt: "Platforma",
  cifra: "24",
  tagline: "Tractări auto și asistență rutieră",
  telefon: "0790 24 24 24",
  telefonHref: "tel:+40790242424",
  whatsapp: "40790242424",
  email: "dispecerat@platforma24.ro",
  adresa: "Șos. Fundeni 254, Sector 2, București",
  zona: "București și Ilfov",
  program: "Non-stop, inclusiv sărbători",
  cui: "RO 41 872 305",
  anInfiintare: 2014,
};

export const nav = [
  { eticheta: "Servicii", href: "#servicii" },
  { eticheta: "Tarife", href: "#tarife" },
  { eticheta: "Calculator", href: "#calculator" },
  { eticheta: "Flotă", href: "#flota" },
  { eticheta: "Zone", href: "#zone" },
  { eticheta: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* Servicii                                                            */
/* ------------------------------------------------------------------ */
export type Serviciu = {
  slug: string;
  titlu: string;
  descriere: string;
  puncte: string[];
  imagine: string;
};

export const servicii: Serviciu[] = [
  {
    slug: "tractari",
    titlu: "Tractări auto non-stop",
    descriere:
      "Autoturisme, SUV-uri și utilitare până în 3.500 kg, ridicate pe platformă cu rampe hidraulice. Mașina urcă pe platou, nu se tractează pe roți.",
    puncte: [
      "Ridicare pe platformă, fără tractare pe roți",
      "Chingi pe jantă, nu pe caroserie",
      "Preluare și din parcări subterane",
      "Preț comunicat la telefon, înainte de plecare",
    ],
    imagine: "serv-tractari",
  },
  {
    slug: "asistenta",
    titlu: "Asistență rutieră pe loc",
    descriere:
      "Multe intervenții se rezolvă în 20 de minute, fără să mai fie nevoie de tractare. Vine mașina de service cu scule și robot de pornire.",
    puncte: [
      "Pornire cu robot 12V / 24V",
      "Schimb roată cu roata de rezervă",
      "Alimentare cu combustibil (5 sau 10 litri)",
      "Deblocare portiere fără deteriorarea broaștei",
    ],
    imagine: "serv-asistenta",
  },
  {
    slug: "platforma",
    titlu: "Transport pe platformă",
    descriere:
      "Pentru mașini de colecție, sport sau cu garda joasă. Rampe lungi, pene de roată și chingi cu cârlig pe jantă, ca la transportul de competiție.",
    puncte: [
      "Rampe prelungite pentru gardă sub 110 mm",
      "Fixare în patru puncte, pe jantă",
      "Asigurare CMR pe toată durata transportului",
      "Transport intern și internațional",
    ],
    imagine: "serv-platforma",
  },
  {
    slug: "avariate",
    titlu: "Ridicare mașini avariate",
    descriere:
      "Preluare de la locul accidentului și transport la service-ul sau parcul auto pe care îl indicați. Lucrăm și cu dosare de daună.",
    puncte: [
      "Intervenție direct din trafic, cu semnalizare",
      "Transport la service-ul ales de dumneavoastră",
      "Documente pentru dosarul de daună",
      "Ridicare mașini fără roți sau fără direcție",
    ],
    imagine: "serv-avariate",
  },
  {
    slug: "recuperare",
    titlu: "Recuperare din șanț și teren greu",
    descriere:
      "Troliu de 5 tone și 30 m de cablu. Scoatem mașina din șanț, din noroi sau din zăpadă prinsă de punctele de remorcare din fabrică, nu de bara de protecție.",
    puncte: [
      "Troliu hidraulic 5 t, cablu 30 m",
      "Prindere în cârligul de remorcare, nu în bară",
      "Chingi late, fără urme pe caroserie",
      "Intervenții și pe timp de noapte",
    ],
    imagine: "serv-recuperare",
  },
  {
    slug: "utilaje",
    titlu: "Transport utilaje mici",
    descriere:
      "Miniexcavatoare, bobcat, generatoare, motostivuitoare. Platformă cu rampe și puncte de ancorare pentru încărcături până la 5 tone.",
    puncte: [
      "Rampe hidraulice, încărcare pe loc",
      "Ancorare în patru puncte fixe",
      "Transport între șantiere",
      "Programare pe oră fixă",
    ],
    imagine: "serv-utilaje",
  },
  {
    slug: "moto",
    titlu: "Tractare moto, ATV și UTV",
    descriere:
      "Remorcă închisă cu rampă și suport de roată față. Motocicleta stă în picioare tot drumul, nu culcată pe platformă.",
    puncte: [
      "Suport de roată față (wheel chock)",
      "Chingi cu buclă moale pe ghidon",
      "Remorcă închisă, ferită de ploaie",
      "Transport ATV, UTV și scutere",
    ],
    imagine: "serv-moto",
  },
  {
    slug: "flote",
    titlu: "Contracte pentru flote",
    descriere:
      "Pentru firme de leasing, rent-a-car și flote de la 10 mașini în sus: tarif fix negociat, prioritate la dispecerat și o singură factură la sfârșit de lună.",
    puncte: [
      "Tarif fix, indiferent de oră",
      "Prioritate la dispecerat",
      "Facturare lunară, un singur document",
      "Raport lunar cu toate intervențiile",
    ],
    imagine: "serv-flote",
  },
];

/* ------------------------------------------------------------------ */
/* Tarife                                                              */
/* ------------------------------------------------------------------ */
export const tarifeOras = [
  { greutate: "până la 1.000 kg", exemplu: "Logan, Polo, Corsa", pret: "89" },
  { greutate: "1.000 – 1.500 kg", exemplu: "Golf, Focus, Astra", pret: "130" },
  { greutate: "1.500 – 2.000 kg", exemplu: "Passat, Insignia, Octavia", pret: "180" },
  { greutate: "2.000 – 3.500 kg", exemplu: "Sprinter, Transit, X5", pret: "250" },
];

export const tarifeKm = [
  { greutate: "până la 1.000 kg", pret: "2,00" },
  { greutate: "1.000 – 1.500 kg", pret: "2,20" },
  { greutate: "1.500 – 2.000 kg", pret: "2,50" },
  { greutate: "peste 2.000 kg", pret: "3,00" },
];

export const tarifeSuplimentare = [
  { denumire: "Asistență pe loc, fără tractare", pret: "80 – 150 lei" },
  { denumire: "Recuperare cu troliu din șanț", pret: "de la 300 lei" },
  { denumire: "Acces în parcare subterană", pret: "+ 50 lei" },
  { denumire: "Mașină blocată / fără roți", pret: "+ 80 lei" },
  { denumire: "Timp de lucru peste 30 min", pret: "50 lei / oră" },
];

/* ------------------------------------------------------------------ */
/* Calculator — date folosite de UI-ul interactiv                       */
/* ------------------------------------------------------------------ */
export const categoriiVehicul = [
  { id: "mic", eticheta: "Până la 1.000 kg", exemplu: "Logan, Polo, Corsa", oras: 89, km: 2.0 },
  { id: "mediu", eticheta: "1.000 – 1.500 kg", exemplu: "Golf, Focus, Astra", oras: 130, km: 2.2 },
  { id: "mare", eticheta: "1.500 – 2.000 kg", exemplu: "Passat, Insignia, Octavia", oras: 180, km: 2.5 },
  { id: "utilitara", eticheta: "2.000 – 3.500 kg", exemplu: "Sprinter, Transit, X5", oras: 250, km: 3.0 },
];

export const extraCalculator = [
  { id: "subteran", eticheta: "Mașina e în parcare subterană", pret: 50 },
  { id: "blocat", eticheta: "Roți blocate sau mașina nu se poate împinge", pret: 80 },
  { id: "sant", eticheta: "Trebuie scoasă din șanț sau din noroi", pret: 220 },
];

/* ------------------------------------------------------------------ */
/* Flotă                                                               */
/* ------------------------------------------------------------------ */
export const flota = [
  {
    titlu: "Platformă auto 3,5 t",
    descriere:
      "Mașina care pleacă la majoritatea intervențiilor din oraș. Platou de 5,5 m cu rampe hidraulice și troliu de 3,5 t pentru mașinile care nu mai merg.",
    imagine: "flota-platforma",
    specificatii: [
      { eticheta: "Sarcină utilă", valoare: "3.500 kg" },
      { eticheta: "Platou", valoare: "5,5 m" },
      { eticheta: "Troliu", valoare: "3,5 t" },
      { eticheta: "An", valoare: "2021" },
    ],
  },
  {
    titlu: "Autospecială cu braț și troliu",
    descriere:
      "Braț hidraulic pentru mașinile din care nu se poate ieși pe rampă: parcări înguste, mașini pe trotuar, mașini fără roți. Ridică din lateral, fără să deschidă circulația pe două benzi.",
    imagine: "flota-troliu",
    specificatii: [
      { eticheta: "Braț", valoare: "3,2 t" },
      { eticheta: "Troliu", valoare: "5 t" },
      { eticheta: "Rază", valoare: "5,5 m" },
      { eticheta: "An", valoare: "2019" },
    ],
  },
  {
    titlu: "Platformă transport greu",
    descriere:
      "Platou de 7 m pentru utilitare, microbuze și utilaje mici. Rampe lungi de 3 m, pentru încărcare fără să atingă pragul. Girofar și semnalizare pentru intervenții în trafic.",
    imagine: "flota-greu",
    specificatii: [
      { eticheta: "Sarcină utilă", valoare: "5.000 kg" },
      { eticheta: "Platou", valoare: "7,0 m" },
      { eticheta: "Rampe", valoare: "3,0 m" },
      { eticheta: "An", valoare: "2022" },
    ],
  },
  {
    titlu: "Remorcă închisă moto",
    descriere:
      "Remorcă acoperită cu suport de roată față. Motocicleta stă în picioare, fixată cu chingi cu buclă moale, ferită de ploaie și de praf.",
    imagine: "flota-moto",
    specificatii: [
      { eticheta: "Sarcină utilă", valoare: "800 kg" },
      { eticheta: "Tip", valoare: "închisă" },
      { eticheta: "Fixare", valoare: "suport roată" },
      { eticheta: "An", valoare: "2023" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Zone de acoperire + timpi estimați                                  */
/* ------------------------------------------------------------------ */
export type Zona = {
  nume: string;
  timp: string;
  detaliu: string;
  grup: "bucuresti" | "ilfov" | "drumuri";
};

export const zone: Zona[] = [
  { nume: "Sector 1", timp: "15 – 25", detaliu: "Băneasa, Aviației, Dorobanți", grup: "bucuresti" },
  { nume: "Sector 2", timp: "15 – 20", detaliu: "Colentina, Pantelimon, Obor", grup: "bucuresti" },
  { nume: "Sector 3", timp: "20 – 30", detaliu: "Titan, Dristor, Vitan", grup: "bucuresti" },
  { nume: "Sector 4", timp: "20 – 30", detaliu: "Berceni, Tineretului, Giurgiului", grup: "bucuresti" },
  { nume: "Sector 5", timp: "25 – 35", detaliu: "Rahova, Ferentari, Cotroceni", grup: "bucuresti" },
  { nume: "Sector 6", timp: "20 – 30", detaliu: "Militari, Drumul Taberei, Crângași", grup: "bucuresti" },
  { nume: "Ilfov nord", timp: "25 – 40", detaliu: "Otopeni, Voluntari, Balotești", grup: "ilfov" },
  { nume: "Ilfov sud", timp: "30 – 45", detaliu: "Popești-Leordeni, Berceni, Jilava", grup: "ilfov" },
  { nume: "A1 / A2 / A3", timp: "30 – 50", detaliu: "primii 60 km de la centură", grup: "drumuri" },
  { nume: "DN1 / DN2 / DN4", timp: "30 – 50", detaliu: "până la Ploiești, Urziceni, Oltenița", grup: "drumuri" },
];

/* ------------------------------------------------------------------ */
/* Cum decurge intervenția                                             */
/* ------------------------------------------------------------------ */
export const etape = [
  {
    numar: "01",
    titlu: "Sunați la dispecerat",
    text: "Ne spuneți unde sunteți, ce mașină aveți și ce s-a întâmplat. Dacă nu știți exact strada, ne trimiteți locația pe WhatsApp.",
  },
  {
    numar: "02",
    titlu: "Primiți prețul pe loc",
    text: "Vă spunem la telefon cât costă, înainte să plece mașina. Prețul din telefon e prețul final, dacă situația e cea descrisă.",
  },
  {
    numar: "03",
    titlu: "Pleacă platforma cea mai apropiată",
    text: "Dispecerul trimite mașina cea mai apropiată de dumneavoastră și vă dă numărul șoferului, ca să îl puteți suna direct.",
  },
  {
    numar: "04",
    titlu: "Încărcare și transport",
    text: "Mașina urcă pe platformă, se fixează cu chingi pe jantă și pleacă spre destinația indicată. Plata: numerar, card sau factură.",
  },
];

/* ------------------------------------------------------------------ */
/* Recenzii                                                            */
/* ------------------------------------------------------------------ */
export const recenzii = [
  {
    text: "Am rămas cu ambreiajul pe centură, la 11 noaptea. Am sunat, mi-au spus 130 de lei și au ajuns în 22 de minute. Atât am și plătit, fără discuții la fața locului.",
    nume: "Andrei M.",
    context: "Golf VI, Centura de Nord",
  },
  {
    text: "Mașina era în parcarea subterană de la birou, cu bateria moartă. Au coborât cu mașina mică de asistență, au pornit-o pe loc și nu a mai fost nevoie de tractare.",
    nume: "Ioana R.",
    context: "Sector 1, parcare subterană",
  },
  {
    text: "Lucrez la o firmă de rent-a-car, avem contract cu ei de doi ani. Ce apreciez: răspund la telefon din primul apel și primim o singură factură la sfârșit de lună.",
    nume: "Cristian D.",
    context: "flotă 34 de mașini",
  },
  {
    text: "Am intrat cu mașina în șanț pe un drum de țară în Ilfov, pe ploaie. Au venit cu 4x4-ul și au scos-o cu troliul, fără nicio zgârietură pe bară.",
    nume: "Marius P.",
    context: "Ilfov, recuperare cu troliu",
  },
  {
    text: "Aveam de dus o motocicletă la service, în Pipera. Au venit cu remorcă închisă și suport de roată, nu culcată pe platformă cum îmi era teamă.",
    nume: "Vlad T.",
    context: "transport moto",
  },
  {
    text: "După accident, poliția a cerut ridicarea mașinii din intersecție. Au venit în 18 minute, au semnalizat și au dus-o la service-ul meu, nu la parcul lor auto.",
    nume: "Elena S.",
    context: "Piața Muncii, mașină avariată",
  },
];

/* ------------------------------------------------------------------ */
/* Întrebări frecvente                                                 */
/* ------------------------------------------------------------------ */
export const intrebari = [
  {
    intrebare: "În cât timp ajungeți?",
    raspuns:
      "În București, între 15 și 35 de minute, în funcție de sector și de trafic. În Ilfov și pe autostrăzi, între 30 și 50 de minute. Dispecerul vă spune la telefon un interval realist, nu unul de reclamă.",
  },
  {
    intrebare: "Cât costă o tractare în București?",
    raspuns:
      "De la 89 de lei pentru mașini până la 1.000 kg și până la 250 de lei pentru utilitare de 3,5 tone. În afara orașului se calculează pe kilometru, de la 2 lei/km. Prețul vi-l spunem la telefon, înainte să plece mașina.",
  },
  {
    intrebare: "Intrați în parcări subterane?",
    raspuns:
      "Da. Avem o mașină de asistență joasă care intră în parcări cu gabarit de 1,90 m. Dacă mașina trebuie scoasă la suprafață, o tragem cu troliu de mână până la rampă și de acolo urcă pe platformă. Costul suplimentar e de 50 de lei.",
  },
  {
    intrebare: "Tractați mașini neînmatriculate sau fără cheie?",
    raspuns:
      "Da. Pe platformă nu contează dacă mașina e înmatriculată, dacă pornește sau dacă are cheie. Avem nevoie doar de dovada că sunteți proprietar sau împuternicit: talon, contract de vânzare-cumpărare sau o împuternicire.",
  },
  {
    intrebare: "Se poate rezolva pe loc, fără tractare?",
    raspuns:
      "De multe ori, da. Pornirea cu robot, schimbul de roată, alimentarea cu combustibil și deblocarea portierelor se rezolvă la fața locului, în 15-20 de minute, și costă între 80 și 150 de lei. Spuneți-i dispecerului exact ce s-a întâmplat și vă trimite mașina potrivită.",
  },
  {
    intrebare: "Ce se întâmplă dacă mașina e avariată după accident?",
    raspuns:
      "Venim cu platformă și cu semnalizare, eliberăm banda și ducem mașina la service-ul pe care îl alegeți dumneavoastră, nu la parcul nostru. Vă dăm documentele de transport de care aveți nevoie la dosarul de daună.",
  },
  {
    intrebare: "Cum se plătește?",
    raspuns:
      "Numerar sau card, la șofer, la finalul intervenției. Pentru firme emitem factură; dacă aveți contract de flotă, se adună toate intervențiile într-o singură factură lunară.",
  },
  {
    intrebare: "Lucrați și noaptea, și în weekend?",
    raspuns:
      "Dispeceratul răspunde 24 de ore din 24, inclusiv noaptea, în weekend și de sărbători. Nu percepem tarif dublu noaptea, tariful e același ca ziua.",
  },
];
