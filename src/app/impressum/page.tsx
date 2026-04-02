import type { Metadata } from "next";
import {
  LegalContainer,
  LegalSection,
  LegalTitle,
  LegalParagraph,
  ScrollProgressBar,
  StickyBackButton,
  TableOfContents,
} from "@/components/legal/LegalComponents";
export const metadata: Metadata = {
  title: "Impressum | A&G Rohrreinigung",
  description: "Impressum von A&G Rohr- und Kanalreinigung & Klempner 24/7 Notdienst – Angaben gemäß § 5 TMG.",
};

const tocItems = [
  { id: "angaben", label: "Angaben gemäß § 5 TMG" },
  { id: "kontakt", label: "Kontakt" },
  { id: "umsatzsteuer", label: "Umsatzsteuer-ID" },
  { id: "berufsrecht", label: "Berufsrechtliche Angaben" },
  { id: "haftung-inhalte", label: "Haftung für Inhalte" },
  { id: "haftung-links", label: "Haftung für Links" },
  { id: "urheberrecht", label: "Urheberrecht" },
];

export default function ImpressumPage() {
  return (
    <LegalContainer>
      <ScrollProgressBar />
      <StickyBackButton />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-24 flex gap-12 items-start">
        <TableOfContents items={tocItems} />

        <main className="flex-1 min-w-0 space-y-6">
          {/* Page header */}
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full mb-4">
              Rechtliches
            </span>
            <LegalTitle level={1}>Impressum</LegalTitle>
            <LegalParagraph>Angaben gemäß § 5 TMG</LegalParagraph>
          </div>

          <LegalSection id="angaben">
            <LegalTitle level={2}>Angaben gemäß § 5 TMG</LegalTitle>
            <LegalParagraph>
              <strong className="text-white">[NAME]</strong>
              <br />
              [ADRESSE]
              <br />
              Deutschland
            </LegalParagraph>
            <LegalTitle level={3}>Vertreten durch</LegalTitle>
            <LegalParagraph>Inhaber: [NAME]</LegalParagraph>
          </LegalSection>

          <LegalSection id="kontakt">
            <LegalTitle level={2}>Kontakt</LegalTitle>
            <LegalParagraph>
              Telefon:{" "}
              <a href="tel:[TELEFON]" className="text-cyan-400 hover:underline">
                [TELEFON]
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:[EMAIL]" className="text-cyan-400 hover:underline">
                [EMAIL]
              </a>
            </LegalParagraph>
          </LegalSection>

          <LegalSection id="umsatzsteuer">
            <LegalTitle level={2}>Umsatzsteuer-ID</LegalTitle>
            <LegalParagraph>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              <span className="text-slate-300 font-medium">DE[STEUERNUMMER]</span>
            </LegalParagraph>
          </LegalSection>

          <LegalSection id="berufsrecht">
            <LegalTitle level={2}>Berufsrechtliche Angaben</LegalTitle>
            <LegalParagraph>
              Berufsbezeichnung: Klempnermeister / Installateur
              <br />
              Zuständige Handwerkskammer: Handwerkskammer für München und Oberbayern
              <br />
              Berufsrechtliche Regelungen: Handwerksordnung (HwO)
            </LegalParagraph>
            <LegalParagraph className="mt-3">
              Die berufsrechtlichen Regelungen können über die zuständige Kammer eingesehen werden.
            </LegalParagraph>
          </LegalSection>

          <LegalSection id="haftung-inhalte">
            <LegalTitle level={2}>Haftung für Inhalte</LegalTitle>
            <LegalParagraph>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </LegalParagraph>
            <LegalParagraph className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </LegalParagraph>
          </LegalSection>

          <LegalSection id="haftung-links">
            <LegalTitle level={2}>Haftung für Links</LegalTitle>
            <LegalParagraph>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </LegalParagraph>
            <LegalParagraph className="mt-3">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </LegalParagraph>
          </LegalSection>

          <LegalSection id="urheberrecht">
            <LegalTitle level={2}>Urheberrecht</LegalTitle>
            <LegalParagraph>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </LegalParagraph>
            <LegalParagraph className="mt-3">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </LegalParagraph>
          </LegalSection>

          <p className="text-slate-600 text-xs text-center pt-4">
            Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
          </p>
        </main>
      </div>
    </LegalContainer>
  );
}
