import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Polityka prywatności | Filip Dziopa",
    description: "Zasady przetwarzania danych osobowych i wykorzystywania plików cookies w serwisie filipdziopa.tech.",
};

const sections = [
    { id: "administrator", label: "Administrator danych osobowych" },
    { id: "cele", label: "Zakres i cele przetwarzania danych" },
    { id: "okres", label: "Podanie danych i okres przechowywania" },
    { id: "odbiorcy", label: "Odbiorcy danych i hosting" },
    { id: "eog", label: "Przekazywanie danych poza EOG" },
    { id: "prawa", label: "Prawa osób, których dane dotyczą" },
    { id: "profilowanie", label: "Zautomatyzowane decyzje i profilowanie" },
    { id: "cookies", label: "Pliki cookies i podobne technologie" },
    { id: "bezpieczenstwo", label: "Bezpieczeństwo danych" },
    { id: "zmiany", label: "Zmiany Polityki prywatności" },
];

export default function PrivacyPolicyPage() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12 animate-fade-in-up">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gradient">Polityka prywatności</span>
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6" />
                    <p className="text-gray-400">Data ostatniej aktualizacji: 21 października 2026 r.</p>
                </div>

                <nav aria-label="Spis treści" className="card-blur rounded-2xl p-6 md:p-8 mb-10">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                        Spis treści
                    </h2>
                    <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm list-decimal list-inside text-gray-400">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <a href={`#${section.id}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                    {section.label}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                <article className="card-blur rounded-2xl p-8 md:p-12 policy">
                    <p className="!mt-0">
                        Niniejsza Polityka prywatności określa zasady przetwarzania danych osobowych oraz
                        wykorzystywania plików cookies i podobnych technologii w serwisie internetowym dostępnym pod
                        adresem{" "}
                        <a href="https://www.filipdziopa.tech/" target="_blank" rel="noopener noreferrer">
                            https://www.filipdziopa.tech/
                        </a>
                        .
                    </p>

                    <p>
                        Dokument dotyczy w szczególności osób odwiedzających stronę, kontaktujących się z
                        administratorem za pośrednictwem formularza kontaktowego lub poczty elektronicznej oraz
                        korzystających z odnośników do zewnętrznych serwisów.
                    </p>

                    <h2 id="administrator">1. Administrator danych osobowych</h2>

                    <p>Administratorem danych osobowych jest Filip Dziopa.</p>

                    <ul>
                        <li>
                            <strong>Adres strony:</strong>{" "}
                            <a href="https://www.filipdziopa.tech/" target="_blank" rel="noopener noreferrer">
                                https://www.filipdziopa.tech/
                            </a>
                        </li>
                        <li>
                            <strong>Adres e-mail:</strong>{" "}
                            <a href="mailto:filip.dziopa@gmail.com">filip.dziopa@gmail.com</a>
                        </li>
                    </ul>

                    <p>
                        W sprawach związanych z przetwarzaniem danych osobowych można kontaktować się z administratorem
                        za pośrednictwem wskazanego adresu e-mail.
                    </p>

                    <h2 id="cele">2. Zakres i cele przetwarzania danych</h2>

                    <h3>2.1. Kontakt za pośrednictwem formularza lub poczty elektronicznej</h3>

                    <p>
                        W przypadku kontaktu z administratorem mogą być przetwarzane dane podane dobrowolnie przez
                        użytkownika, w szczególności imię, adres e-mail oraz treść wiadomości. Zakres danych zależy od
                        informacji przekazanych przez użytkownika.
                    </p>

                    <p>Dane te są przetwarzane w celu:</p>

                    <ul>
                        <li>odczytania i obsługi otrzymanego zapytania;</li>
                        <li>udzielenia odpowiedzi;</li>
                        <li>prowadzenia dalszej korespondencji związanej z zapytaniem, jeżeli jest to uzasadnione.</li>
                    </ul>

                    <p>
                        Podstawą prawną przetwarzania może być art. 6 ust. 1 lit. f RODO, czyli prawnie uzasadniony
                        interes administratora polegający na prowadzeniu korespondencji i obsłudze zapytań. Jeżeli
                        kontakt dotyczy podjęcia działań przed zawarciem umowy, zastosowanie może mieć art. 6 ust. 1
                        lit. b RODO. Właściwa podstawa zależy od charakteru konkretnego zapytania.
                    </p>

                    <h3>2.2. Dane techniczne i logi serwera</h3>

                    <p>
                        Podczas korzystania ze strony mogą być automatycznie rejestrowane informacje techniczne
                        związane z połączeniem, o ile są gromadzone przez zastosowaną infrastrukturę. Mogą one
                        obejmować adres IP, datę i godzinę żądania, adres żądanego zasobu, informacje o przeglądarce
                        oraz dane dotyczące błędów i bezpieczeństwa.
                    </p>

                    <p>
                        Dane techniczne mogą być wykorzystywane do zapewnienia prawidłowego działania strony,
                        diagnozowania błędów oraz ochrony przed nadużyciami i zagrożeniami bezpieczeństwa.
                    </p>

                    <p>
                        Podstawą prawną takiego przetwarzania może być art. 6 ust. 1 lit. f RODO, czyli prawnie
                        uzasadniony interes administratora polegający na utrzymaniu i zabezpieczeniu serwisu.
                    </p>

                    <h3>2.3. Odnośniki do zewnętrznych serwisów</h3>

                    <p>
                        Na stronie mogą znajdować się odnośniki do zewnętrznych serwisów, w szczególności GitHub i
                        LinkedIn. Kliknięcie takiego odnośnika powoduje przejście do serwisu zewnętrznego, który może
                        przetwarzać dane użytkownika zgodnie z własnymi zasadami.
                    </p>

                    <p>
                        Samo zamieszczenie odnośnika nie oznacza, że administrator automatycznie otrzymuje dane o
                        aktywności użytkownika w serwisie zewnętrznym. Zasady przetwarzania danych po przejściu na
                        taką stronę określa jej operator.
                    </p>

                    <h2 id="okres">3. Podanie danych i okres ich przechowywania</h2>

                    <p>
                        Podanie danych w korespondencji jest dobrowolne. Brak danych niezbędnych do udzielenia
                        odpowiedzi może jednak uniemożliwić obsługę zapytania.
                    </p>

                    <p>
                        Dane z korespondencji będą przechowywane przez okres niezbędny do obsługi zapytania i
                        prowadzenia związanych z nim działań. Po zakończeniu korespondencji mogą być przechowywane
                        przez okres potrzebny do ustalenia, dochodzenia lub obrony ewentualnych roszczeń, jeżeli
                        istnieje taka potrzeba i odpowiednia podstawa prawna.
                    </p>

                    <p>
                        Dane zawarte w logach technicznych przechowywane są przez okres wynikający z przyjętych zasad
                        bezpieczeństwa, konfiguracji infrastruktury oraz uzasadnionych potrzeb diagnostycznych, nie
                        dłużej niż jest to niezbędne do realizacji tych celów.
                    </p>

                    <h2 id="odbiorcy">4. Odbiorcy danych i hosting</h2>

                    <p>
                        Serwis jest hostowany z wykorzystaniem usług OVH. W związku z utrzymaniem strony dostawca
                        hostingu może przetwarzać dane techniczne i inne informacje w zakresie niezbędnym do
                        świadczenia usług.
                    </p>

                    <p>
                        Dostęp do danych mogą mieć również inni dostawcy usług technicznych, jeżeli ich udział jest
                        rzeczywiście niezbędny do działania strony lub obsługi korespondencji.
                    </p>

                    <p>
                        Dane mogą być udostępniane organom publicznym, jeżeli obowiązek taki wynika z obowiązujących
                        przepisów prawa.
                    </p>

                    <h2 id="eog">5. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>

                    <p>
                        Przekazywanie danych do państw spoza Europejskiego Obszaru Gospodarczego nie wynika z samego
                        funkcjonowania serwisu. Jeżeli takie przekazanie wystąpi w związku z rzeczywiście
                        wykorzystywanymi dostawcami usług lub lokalizacją przetwarzania, zostanie ono uwzględnione w
                        aktualnej wersji niniejszej Polityki, wraz z informacją o odpowiednich zabezpieczeniach,
                        jeżeli będą one wymagane.
                    </p>

                    <h2 id="prawa">6. Prawa osób, których dane dotyczą</h2>

                    <p>
                        W zakresie wynikającym z RODO osobom, których dane dotyczą, przysługują następujące prawa:
                    </p>

                    <ul>
                        <li>prawo dostępu do danych osobowych;</li>
                        <li>prawo żądania sprostowania danych;</li>
                        <li>prawo żądania usunięcia danych;</li>
                        <li>prawo żądania ograniczenia przetwarzania;</li>
                        <li>prawo do przenoszenia danych, jeżeli ma zastosowanie;</li>
                        <li>
                            prawo wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie
                            administratora;
                        </li>
                        <li>prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
                    </ul>

                    <p>
                        Jeżeli przetwarzanie odbywa się na podstawie zgody, osobie przysługuje również prawo jej
                        wycofania w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed
                        jej wycofaniem.
                    </p>

                    <p>
                        Aby skorzystać ze swoich praw, można skontaktować się z administratorem pod adresem:{" "}
                        <a href="mailto:filip.dziopa@gmail.com">filip.dziopa@gmail.com</a>.
                    </p>

                    <p>
                        Skargę można wnieść do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
                        Informacje o organie nadzorczym są dostępne na stronie{" "}
                        <a href="https://uodo.gov.pl/" target="_blank" rel="noopener noreferrer">
                            https://uodo.gov.pl/
                        </a>
                        .
                    </p>

                    <h2 id="profilowanie">7. Zautomatyzowane podejmowanie decyzji i profilowanie</h2>

                    <p>
                        Serwis służy prezentacji portfolio programistycznego i kontaktowi z administratorem. Nie
                        przewiduje się podejmowania wobec użytkowników decyzji wywołujących skutki prawne lub podobnie
                        istotne skutki wyłącznie w sposób zautomatyzowany ani profilowania w tym celu.
                    </p>

                    <h2 id="cookies">8. Pliki cookies i podobne technologie</h2>

                    <p>
                        Pliki cookies to niewielkie informacje zapisywane na urządzeniu użytkownika przez stronę
                        internetową. Mogą służyć między innymi do zapewnienia działania serwisu, zapamiętywania
                        ustawień lub realizacji funkcji zewnętrznych.
                    </p>

                    <p>
                        Rzeczywisty zakres wykorzystywania plików cookies i podobnych technologii zależy od
                        konfiguracji strony oraz używanych usług. Niniejszy dokument nie stanowi zatem deklaracji, że
                        serwis nie zapisuje żadnych plików cookies.
                    </p>

                    <p>
                        Technologie, które nie są niezbędne do świadczenia usługi żądanej przez użytkownika, mogą być
                        stosowane wyłącznie z zachowaniem wymogów dotyczących zgody, jeżeli zgoda jest wymagana przez
                        obowiązujące przepisy. W takim przypadku użytkownik otrzymuje informację o celu tych
                        technologii oraz możliwość dokonania wyboru i wycofania zgody w sposób zgodny z obowiązującymi
                        przepisami.
                    </p>

                    <p>
                        Ustawienia przeglądarki internetowej umożliwiają zarządzanie plikami cookies, w tym ich
                        usuwanie lub blokowanie. Zablokowanie niektórych plików może wpłynąć na działanie wybranych
                        funkcji serwisu. Samo ustawienie przeglądarki nie zastępuje jednak wymaganej zgody na
                        technologie, dla których zgoda jest konieczna.
                    </p>

                    <h2 id="bezpieczenstwo">9. Bezpieczeństwo danych</h2>

                    <p>
                        Administrator podejmuje odpowiednie działania organizacyjne i techniczne mające na celu ochronę
                        danych przed nieuprawnionym dostępem, utratą, zniszczeniem lub nieuprawnioną modyfikacją, z
                        uwzględnieniem charakteru danych i ryzyka związanego z ich przetwarzaniem.
                    </p>

                    <p>
                        Miejsca wprowadzania danych osobowych są chronione w warstwie transmisji dzięki certyfikatowi
                        SSL. Istotnym elementem ochrony danych jest również regularna aktualizacja oprogramowania i
                        komponentów programistycznych wykorzystywanych przez administratora.
                    </p>

                    <h2 id="zmiany">10. Zmiany Polityki prywatności</h2>

                    <p>
                        Polityka prywatności może być aktualizowana w przypadku zmian w funkcjonowaniu strony,
                        wykorzystywanych usług lub przepisów prawa. Aktualna wersja dokumentu jest publikowana na
                        stronie internetowej serwisu.
                    </p>
                </article>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                        <svg
                            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                        Wróć na stronę główną
                    </Link>

                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:scale-105 transition-transform duration-200"
                    >
                        Napisz do mnie
                    </Link>
                </div>
            </div>
        </section>
    );
}
