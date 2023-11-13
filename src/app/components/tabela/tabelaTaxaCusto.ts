export const tabelaTaxaCusto = {
    debito: {
        masterCard: { valor: 1.07 },
        visa: { valor: 1.00 },
        outros: { valor: 1.49 },
    },
    credito: {
        masterCard: { valor: 3.30 },
        visa: { valor: 3.47 },
        outros: { valor: 3.90 },
    },
    duas: {
        masterCard: { valor: 4.64 },
        visa: { valor: 4.45 },
        outros: { valor: 4.88 },
    },
    tres: {
        masterCard: { valor: 5.40 },
        visa: { valor: 5.21 },
        outros: { valor: 5.64 },
    },
    quatro: {
        masterCard: { valor: 6.17 },
        visa: { valor: 5.98 },
        outros: { valor: 6.40 },
    },
    cinco: {
        masterCard: { valor: 6.95 },
        visa: { valor: 6.76 },
        outros: { valor: 7.18 },
    },
    seis: {
        masterCard: { valor: 7.73 },
        visa: { valor: 7.55 },
        outros: { valor: 7.96 },
    },
    sete: {
        masterCard: { valor: 8.82 },
        visa: { valor: 8.71 },
        outros: { valor: 8.94 },
    },
    oito: {
        masterCard: { valor: 9.62 },
        visa: { valor: 9.51 },
        outros: { valor: 9.74 },
    },
    nove: {
        masterCard: { valor: 10.43 },
        visa: { valor: 10.31 },
        outros: { valor: 10.54 },
    },
    dez: {
        masterCard: { valor: 11.24 },
        visa: { valor: 11.13 },
        outros: { valor: 11.36 },
    },
    onze: {
        masterCard: { valor: 12.06 },
        visa: { valor: 11.96 },
        outros: { valor: 12.18 },
    },
    doze: {
        masterCard: { valor: 12.90 },
        visa: { valor: 12.79 },
        outros: { valor: 13.01 },
    },
    treze: {
        masterCard: { valor: 0 },
        visa: { valor: 0 },
        outros: { valor: 0 },
    },
    quatorze: {
        masterCard: { valor: 0 },
        visa: { valor: 0 },
        outros: { valor: 0 },
    },
    quinze: {
        masterCard: { valor: 0 },
        visa: { valor: 0 },
        outros: { valor: 0 },
    },
    dezesseis: {
        masterCard: { valor: 0 },
        visa: { valor: 0 },
        outros: { valor: 0 },
    },
    dezessete: {
        masterCard: { valor: 0 },
        visa: { valor: 0 },
        outros: { valor: 0 },
    },
    dezoito: {
        masterCard: { valor: 0 },
        visa: { valor: 0 },
        outros: { valor: 0 },
    },
    dezenove: {
        masterCard: { valor: 0 },
        visa: { valor: 0 },
        outros: { valor: 0 },
    },
    vinte: {
        masterCard: { valor: 0 },
        visa: { valor: 0 },
        outros: { valor: 0 },
    },
    vinteUm: {
        masterCard: { valor: 0 },
        visa: { valor: 0 },
        outros: { valor: 0 },
    },
}

export const valoresArray = Object.entries(tabelaTaxaCusto).map(([chave, valor]) => ({ chave, valor }));