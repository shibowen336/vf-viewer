import"./chunk-O2XFH626.js";var i=`<?xml version="1.0" encoding="UTF-8"?>
<!-- Fattura di esempio: tutti i dati sono fittizi (nomi, partite IVA, indirizzi, IBAN). Usata dal pulsante
     \xABProva con una fattura di esempio\xBB: viene letta nel browser come un file scelto dall'utente. -->
<p:FatturaElettronica versione="FPR12" xmlns:p="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <FatturaElettronicaHeader>
    <DatiTrasmissione>
      <IdTrasmittente><IdPaese>IT</IdPaese><IdCodice>01234567890</IdCodice></IdTrasmittente>
      <ProgressivoInvio>ES001</ProgressivoInvio>
      <FormatoTrasmissione>FPR12</FormatoTrasmissione>
      <CodiceDestinatario>0000000</CodiceDestinatario>
    </DatiTrasmissione>
    <CedentePrestatore>
      <DatiAnagrafici>
        <IdFiscaleIVA><IdPaese>IT</IdPaese><IdCodice>01234567890</IdCodice></IdFiscaleIVA>
        <Anagrafica><Denominazione>Studio Grafico Esempio Srl</Denominazione></Anagrafica>
        <RegimeFiscale>RF01</RegimeFiscale>
      </DatiAnagrafici>
      <Sede><Indirizzo>Via dell'Esempio 12</Indirizzo><CAP>40121</CAP><Comune>Bologna</Comune><Provincia>BO</Provincia><Nazione>IT</Nazione></Sede>
    </CedentePrestatore>
    <CessionarioCommittente>
      <DatiAnagrafici>
        <IdFiscaleIVA><IdPaese>IT</IdPaese><IdCodice>09876543210</IdCodice></IdFiscaleIVA>
        <Anagrafica><Denominazione>Cliente di Prova Snc</Denominazione></Anagrafica>
      </DatiAnagrafici>
      <Sede><Indirizzo>Piazza Immaginaria 3</Indirizzo><CAP>50122</CAP><Comune>Firenze</Comune><Provincia>FI</Provincia><Nazione>IT</Nazione></Sede>
    </CessionarioCommittente>
  </FatturaElettronicaHeader>
  <FatturaElettronicaBody>
    <DatiGenerali>
      <DatiGeneraliDocumento>
        <TipoDocumento>TD01</TipoDocumento>
        <Divisa>EUR</Divisa>
        <Data>2026-11-03</Data>
        <Numero>ES-001/2026</Numero>
        <ImportoTotaleDocumento>982.80</ImportoTotaleDocumento>
        <Causale>Fattura di esempio con dati fittizi, senza valore fiscale</Causale>
      </DatiGeneraliDocumento>
    </DatiGenerali>
    <DatiBeniServizi>
      <DettaglioLinee><NumeroLinea>1</NumeroLinea><Descrizione>Progettazione del logo aziendale</Descrizione><Quantita>1.00</Quantita><PrezzoUnitario>450.00</PrezzoUnitario><PrezzoTotale>450.00</PrezzoTotale><AliquotaIVA>22.00</AliquotaIVA></DettaglioLinee>
      <DettaglioLinee><NumeroLinea>2</NumeroLinea><Descrizione>Stampa biglietti da visita, confezione da 500</Descrizione><Quantita>2.00</Quantita><UnitaMisura>conf.</UnitaMisura><PrezzoUnitario>45.00</PrezzoUnitario><PrezzoTotale>90.00</PrezzoTotale><AliquotaIVA>22.00</AliquotaIVA></DettaglioLinee>
      <DettaglioLinee><NumeroLinea>3</NumeroLinea><Descrizione>Consulenza per il sito web</Descrizione><Quantita>4.00</Quantita><UnitaMisura>ore</UnitaMisura><PrezzoUnitario>60.00</PrezzoUnitario><PrezzoTotale>240.00</PrezzoTotale><AliquotaIVA>22.00</AliquotaIVA></DettaglioLinee>
      <DettaglioLinee><NumeroLinea>4</NumeroLinea><Descrizione>Manuale di tipografia (libro)</Descrizione><Quantita>1.00</Quantita><PrezzoUnitario>30.00</PrezzoUnitario><PrezzoTotale>30.00</PrezzoTotale><AliquotaIVA>4.00</AliquotaIVA></DettaglioLinee>
      <DatiRiepilogo><AliquotaIVA>22.00</AliquotaIVA><ImponibileImporto>780.00</ImponibileImporto><Imposta>171.60</Imposta><EsigibilitaIVA>I</EsigibilitaIVA></DatiRiepilogo>
      <DatiRiepilogo><AliquotaIVA>4.00</AliquotaIVA><ImponibileImporto>30.00</ImponibileImporto><Imposta>1.20</Imposta><EsigibilitaIVA>I</EsigibilitaIVA></DatiRiepilogo>
    </DatiBeniServizi>
    <DatiPagamento>
      <CondizioniPagamento>TP02</CondizioniPagamento>
      <DettaglioPagamento>
        <ModalitaPagamento>MP05</ModalitaPagamento>
        <DataScadenzaPagamento>2026-12-03</DataScadenzaPagamento>
        <ImportoPagamento>982.80</ImportoPagamento>
        <IstitutoFinanziario>Banca di Esempio</IstitutoFinanziario>
        <IBAN>IT60X0542811101000000123456</IBAN>
      </DettaglioPagamento>
    </DatiPagamento>
  </FatturaElettronicaBody>
</p:FatturaElettronica>
`;export{i as default};
