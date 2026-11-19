# FoglioStileAssoSoftware.xsl

- **Fonte**: https://www.assosoftware.it/servizi-offerti/assoinvoice/ → «FOGLIO DI STILE ASSOSOFTWARE (aggiornato 10/03/2025)»
- **File scaricato**: https://www.assosoftware.it/wp-content/uploads/2025/03/FoglioStileAssoSoftware.zip (13 947 byte), scaricato il 2026-11-09
- **SHA-256 zip**: `091508f8d2c6b8cc63e2caa9ad69ee382d207d30868daea5bb71f3cc879c8445`
- **SHA-256 xsl**: `c5e472dee99b6795057a475ed1bfeafd1c5d2eed6f84d21aa4b41982af913601`
- **Proprietà**: AssoSoftware – Associazione Nazionale Produttori di Software Gestionale e Fiscale.
- **Licenza**: https://www.assosoftware.it/wp-content/uploads/2022/09/licenza_AssoInvoice_1.0.0.pdf — §2.2 consente la distribuzione insieme a proprie applicazioni a condizione che il file non venga modificato e che sia chiaramente indicato che è di proprietà di AssoSoftware, rilasciato gratuitamente.

## Regole per questo progetto

- Il file resta **identico** all'originale: nessuna modifica. Gli stili aggiuntivi (stampa, schermo) vengono iniettati a parte.
- Ogni fattura mostrata riporta la dicitura di attribuzione (vedi `src/viewer/render.ts`), e la pagina /about cita AssoSoftware.
- Copre fatture ordinarie v1.0, v1.1, v1.2 (FPR12/FPA12) e semplificate (FSM10, radice `FatturaElettronicaSemplificata`).

## Controllo del contenuto (2026-11-09)

- Nessun `disable-output-escaping`, nessun `<script>`, nessun `xsl:import`/`xsl:include`, nessuna risorsa esterna (immagini, CSS, JS).
- Produce un documento HTML completo con un blocco `<style>` nel `<head>` e tabelle a larghezza fissa (800 px).
- Il sito ufficiale fatturapa.gov.it (foglio «Standard SDI») non è raggiungibile dalla rete del gestore («Access Denied»): per questo si usa il foglio AssoSoftware.
