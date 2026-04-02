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
  title: "Datenschutz | A&G Rohrreinigung",
  description: "Datenschutzerklärung von A&G Rohr- und Kanalreinigung & Klempner 24/7 Notdienst – DSGVO-konform.",
};

const tocItems = [
  { id: "verantwortlicher", label: "Verantwortlicher" },
  { id: "hosting", label: "Hosting" },
  { id: "server-logs", label: "Server-Logfiles" },
  { id: "kontakt", label: "Kontaktaufnahme" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "ssl", label: "SSL-Verschlüsselung" },
  { id: "ihre-rechte", label: "Ihre Rechte" },
  { id: "beschwerderecht", label: "Beschwerderecht" },
];

export default function DatenschutzPage() {
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
              Datenschutz
            </span>
            <LegalTitle level={1}>Datenschutzerklärung</LegalTitle>
            <LegalParagraph>
              Der Schutz Ihrer Daten ist uns wichtig. Diese Erklärung informiert Sie darüber, welche Daten beim Besuch unserer Website erfasst werden und wie wir damit umgehen.
            </LegalParagraph>
          </div>

          <LegalSection id="verantwortlicher">
            <LegalTitle level={2}>Verantwortlicher</LegalTitle>
            <LegalParagraph>
              <strong className="text-white">[NAME]</strong>
              <br />
              [ADRESSE]
              <br />
              Deutschland
              <br />
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

          <LegalSection id="hosting">
            <LegalTitle level={2}>Hosting</LegalTitle>
            <LegalParagraph>
              Diese Website wird bei einem externen Hosting-Anbieter betrieben. Die Verarbeitung der dabei anfallenden Daten (z. B. Server-Logfiles) erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO im Rahmen eines Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO.
            </LegalParagraph>
          </LegalSection>

          <LegalSection id="server-logs">
            <LegalTitle level={2}>Server-Logfiles</LegalTitle>
            <LegalParagraph>
              Beim Aufruf unserer Website werden vom Hosting-Anbieter automatisch folgende Daten erfasst:
            </LegalParagraph>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-400 list-none">
              {[
                "IP-Adresse (anonymisiert)",
                "Browsertyp und -version",
                "Verwendetes Betriebssystem",
                "Referrer-URL",
                "Datum und Uhrzeit der Anfrage",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <LegalParagraph className="mt-4">
              Diese Daten dienen ausschließlich der technischen Stabilität und Sicherheit des Betriebs. Eine Zusammenführung mit anderen Datenquellen oder eine persönliche Profilbildung findet nicht statt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </LegalParagraph>
          </LegalSection>

          <LegalSection id="kontakt">
            <LegalTitle level={2}>Kontaktaufnahme per Telefon oder E-Mail</LegalTitle>
            <LegalParagraph>
              Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht. Die Daten werden nach abgeschlossener Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </LegalParagraph>
            <LegalParagraph className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </LegalParagraph>
          </LegalSection>

          <LegalSection id="whatsapp">
            <LegalTitle level={2}>Kontakt via WhatsApp</LegalTitle>
            <LegalParagraph>
              Für die schnelle Kontaktaufnahme bieten wir auch WhatsApp an. WhatsApp ist ein Dienst der Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
            </LegalParagraph>
            <LegalParagraph className="mt-3">
              Wenn Sie uns über WhatsApp schreiben, werden Ihre Nachricht und Ihre Telefonnummer an WhatsApp übermittelt und dort verarbeitet. Auf diese Verarbeitung haben wir keinen Einfluss. Indem Sie den WhatsApp-Link verwenden, erklären Sie sich mit der Datenverarbeitung durch WhatsApp einverstanden.
            </LegalParagraph>
            <LegalParagraph className="mt-3">
              Weitere Informationen entnehmen Sie der Datenschutzrichtlinie von WhatsApp:{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                whatsapp.com/legal/privacy-policy
              </a>
            </LegalParagraph>
          </LegalSection>

          <LegalSection id="ssl">
            <LegalTitle level={2}>SSL-Verschlüsselung</LegalTitle>
            <LegalParagraph>
              Diese Website nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an dem Schloss-Symbol in der Adressleiste Ihres Browsers sowie am Präfix <span className="text-cyan-400 font-medium">https://</span>. Daten, die Sie an uns übermitteln, können so nicht von Dritten mitgelesen werden.
            </LegalParagraph>
          </LegalSection>

          <LegalSection id="ihre-rechte">
            <LegalTitle level={2}>Ihre Rechte</LegalTitle>
            <LegalParagraph>
              Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
            </LegalParagraph>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { right: "Auskunft", art: "Art. 15 DSGVO" },
                { right: "Berichtigung", art: "Art. 16 DSGVO" },
                { right: "Löschung", art: "Art. 17 DSGVO" },
                { right: "Einschränkung", art: "Art. 18 DSGVO" },
              ].map(({ right, art }) => (
                <div key={right} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <div>
                    <p className="text-slate-200 text-sm font-medium">{right}</p>
                    <p className="text-slate-500 text-xs">{art}</p>
                  </div>
                </div>
              ))}
            </div>
            <LegalParagraph className="mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich an die oben genannte Kontaktadresse.
            </LegalParagraph>
          </LegalSection>

          <LegalSection id="beschwerderecht">
            <LegalTitle level={2}>Beschwerderecht</LegalTitle>
            <LegalParagraph>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist die Behörde des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.
            </LegalParagraph>
            <LegalParagraph className="mt-3">
              Für Bayern: Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 27, 91522 Ansbach –{" "}
              <a
                href="https://www.lda.bayern.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                lda.bayern.de
              </a>
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
