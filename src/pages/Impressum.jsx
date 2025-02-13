import Header from '../components/Header';

function Impressum() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow container mx-auto px-4 py-8 max-w-4xl mt-24'>
        <article className='prose prose-lg max-w-none'>
          <h1 className='text-3xl font-bold mb-8'>Impressum</h1>

          <h2 className='text-2xl font-bold mt-8 mb-4'>
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            Abdirahman Farah
            <br />
            IME REISEN
            <br />
            Carl-Reuther-Str. 3
            <br />
            68305 Mannheim
          </p>

          <h2 className='text-2xl font-bold mt-8 mb-4'>Kontakt</h2>
          <p>E-Mail: support@umra-hadsch.de</p>

          <h2 className='text-2xl font-bold mt-8 mb-4'>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
          </p>

          <h2 className='text-2xl font-bold mt-8 mb-4'>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href='https://ec.europa.eu/consumers/odr'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#C6A866] hover:underline'
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

          <h2 className='text-2xl font-bold mt-8 mb-4'>
            Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeiligungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <h2 className='text-2xl font-bold mt-8 mb-4'>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>

          <h2 className='text-2xl font-bold mt-8 mb-4'>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>

          <h2 className='text-2xl font-bold mt-8 mb-4'>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <p className='mt-8 text-sm text-gray-600'>Quelle: e-recht24.de</p>
        </article>
      </main>
    </div>
  );
}

export default Impressum;
