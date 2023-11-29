export const tabelaTaxaCusto = {
    debito: {
        masterCard: 1.07,
        visa: 1.00,
        outros: 1.49,
    },
    credito: {
        masterCard: 3.25,
        visa: 3.44,
        outros: 3.81,
    },
    duas: {
        masterCard: 4.70,
        visa: 4.44,
        outros: 5.01,
    },
    tres: {
        masterCard: 5.46,
        visa: 5.20,
        outros: 5.77,
    },
    quatro: {
        masterCard: 6.23,
        visa: 5.97,
        outros: 6.54,
    },
    cinco: {
        masterCard: 7.01,
        visa: 6.75,
        outros: 7.31,
    },
    seis: {
        masterCard: 7.79,
        visa: 7.54,
        outros: 8.09,
    },
    sete: {
        masterCard: 8.99,
        visa: 8.76,
        outros: 9.05,
    },
    oito: {
        masterCard: 9.79,
        visa: 9.56,
        outros: 9.85,
    },
    nove: {
        masterCard: 10.59,
        visa: 10.37,
        outros: 10.66,
    },
    dez: {
        masterCard: 11.40,
        visa: 11.19,
        outros: 11.47,
    },
    onze: {
        masterCard: 12.23,
        visa: 12.01,
        outros: 12.29,
    },
    doze: {
        masterCard: 13.06,
        visa: 12.84,
        outros: 13.12,
    },
    treze: {
        masterCard: 0,
        visa: 0,
        outros: 0,
    },
    quatorze: {
        masterCard: 0,
        visa: 0,
        outros: 0,
    },
    quinze: {
        masterCard: 0,
        visa: 0,
        outros: 0,
    },
    dezesseis: {
        masterCard: 0,
        visa: 0,
        outros: 0,
    },
    dezessete: {
        masterCard: 0,
        visa: 0,
        outros: 0,
    },
    dezoito: {
        masterCard: 0,
        visa: 0,
        outros: 0,
    },
    dezenove: {
        masterCard: 0,
        visa: 0,
        outros: 0,
    },
    vinte: {
        masterCard: 0,
        visa: 0,
        outros: 0,
    },
    vinteUm: {
        masterCard: 0,
        visa: 0,
        outros: 0,
    },
}

export const valoresArray = Object.entries(tabelaTaxaCusto).map(([chave, valor]) => ({ chave, valor }));