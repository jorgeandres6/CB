const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])

const flowZ1S = addKeyword(['1', 'Zona1', 'Zona 1', 'zona 1', 'zona1', 'z1', 'Z1']).addAnswer(
    [
        '🙌 Aquí tienes el link para registrar los datos del recinto en *ZONA 1* para hoy *SÁBADO 19 AGOSTO 2023*',
        'https://docs.google.com/forms/d/e/1FAIpQLSdv1wChj7Q2ecsH_0Le4c4cbFW7l9Cc-Od9mjRaMNlBPiVmfQ/viewform?usp=sf_link',
        'para regresar al inicio envia la palabra *zona*'
    ]
)

const flowZ2S = addKeyword(['2', 'Zona2', 'Zona 2', 'zona 2', 'zona2', 'z2', 'Z2']).addAnswer(
    [
        '🙌 Aquí tienes el link para registrar los datos del recinto en *ZONA 2* para hoy *SÁBADO 19 AGOSTO 2023*',
        'https://docs.google.com/forms/d/e/1FAIpQLSf8PgGIOJx2RXAkHqhQFdRJCs855b-2zxqE_rO--a3fGbbgVw/viewform?usp=sf_link',
        'para regresar al inicio envia la palabra *zona*'
    ]
)

const flowZ3S = addKeyword(['3', 'Zona3', 'Zona 3', 'zona 3', 'zona3', 'z3', 'Z3']).addAnswer(
    [
        '🙌 Aquí tienes el link para registrar los datos del recinto en *ZONA 3* para hoy *SÁBADO 19 AGOSTO 2023*',
        'https://docs.google.com/forms/d/e/1FAIpQLSeot0H6XB0EPaRra-VpbkpFdHBZ-2Ko9z5-jnUauRoKahMOOg/viewform?usp=sf_link',
        'para regresar al inicio envia la palabra *zona*'
    ]
)

const flowZ4S = addKeyword(['4', 'Zona4', 'Zona 4', 'zona 4', 'zona4', 'z4', 'Z4']).addAnswer(
    [
        '🙌 Aquí tienes el link para registrar los datos del recinto en *ZONA 4* para hoy *SÁBADO 19 AGOSTO 2023*',
        'https://docs.google.com/forms/d/e/1FAIpQLSdtAVUeHxWT7f8iacPLPpA0BmwlKfp1auXXzgbRXjUIDpThSQ/viewform?usp=sf_link',
        'para regresar al inicio envia la palabra *zona*'
    ]
)

const flowZ5S = addKeyword(['5', 'Zona5', 'Zona 5', 'zona 5', 'zona5', 'z5', 'Z5']).addAnswer(
    [
        '🙌 Aquí tienes el link para registrar los datos del recinto en *ZONA 5* para hoy *SÁBADO 19 AGOSTO 2023*',
        'https://docs.google.com/forms/d/e/1FAIpQLSfSlR_hjzkWbJtAUCuQzDJX19hGyy6dKsz9LA1v4F29UNhFOw/viewform?usp=sf_link',
        'para regresar al inicio envia la palabra *zona*'
    ]
)

const flowZ6S = addKeyword(['6', 'Zona6', 'Zona 6', 'zona 6', 'zona6', 'z6', 'Z6']).addAnswer(
    [
        '🙌 Aquí tienes el link para registrar los datos del recinto en *ZONA 6* para hoy *SÁBADO 19 AGOSTO 2023*',
        'https://docs.google.com/forms/d/e/1FAIpQLSdcxw2za-E3hb5G2yj8b8nrxE7xG8J_jVAtDDEJS4UEKG-4qg/viewform?usp=sf_link',
        'para regresar al inicio envia la palabra *zona*'
    ],
)

const flowZ7S = addKeyword(['7', 'Zona7', 'Zona 7', 'zona 7', 'zona7', 'z7', 'Z7']).addAnswer(
    [
        '🙌 Aquí tienes el link para registrar los datos del recinto en *ZONA 7* para hoy *SÁBADO 19 AGOSTO 2023*',
        'https://docs.google.com/forms/d/e/1FAIpQLSdFZw8yQhIdzjoIt7nb6AVUBGb3E11kJkTH8zOCzS3g1TP18A/viewform?usp=sf_link',
        'para regresar al inicio envia la palabra *zona*'
    ]
)

const flowZ8S = addKeyword(['8', 'Zona8', 'Zona 8', 'zona 8', 'zona8', 'z8', 'Z8']).addAnswer(
    [
        '🙌 Aquí tienes el link para registrar los datos del recinto en *ZONA 8* para hoy *SÁBADO 19 AGOSTO 2023*',
        'https://docs.google.com/forms/d/e/1FAIpQLSdZ2eKtLL_RgiGNgxDVNJSGKSpNQexTgs9ETfFH5VYLLxy_XA/viewform?usp=sf_link',
        'para regresar al inicio envia la palabra *zona*'
    ]
)

const flowZ9S = addKeyword(['9', 'Zona9', 'Zona 9', 'zona 9', 'zona9', 'z9', 'Z9']).addAnswer(
    [
        '🙌 Aquí tienes el link para registrar los datos del recinto en *ZONA 9* para hoy *SÁBADO 19 AGOSTO 2023*',
        'https://docs.google.com/forms/d/e/1FAIpQLSfooax4k6hM4lpK-rihFtKMFlvFNuAQn3LCTqyNObST6Fntug/viewform?usp=sf_link',
        'para regresar al inicio envia la palabra *zona*'
    ]
)

const flowZ1D = addKeyword(['1D', '1d']).addAnswer(
    [
        '🙌 Aquí tienes el link para registrar los datos del recinto para hoy *DOMINGO 20 DE AGOSTO 2023*',
        'https://docs.google.com/forms/d/e/1FAIpQLSeU53a665cRMQt7ANfMOgdfjo-rFn3xtF2ESsz0WXAvH3b5AQ/viewform?usp=sf_link',
        'para regresar al inicio envia la palabra *zona*'
    ]
)

const flowPrincipal = addKeyword(['zona','Zona', 'ZONA'])
    .addAnswer(
        ['🙌 Bienvenido al Sistema Integrado de Monitoreo Electoral, por favor responde con el *NÚMERO DE TU ZONA*:'],
        null,
        null,
        [flowZ1S, flowZ2S, flowZ3S, flowZ4S, flowZ5S, flowZ6S, flowZ7S, flowZ8S, flowZ9S] 
    )


    /* [flowZ1S, flowZ2S, flowZ3S, flowZ4S, flowZ5S, flowZ6S, flowZ7S, flowZ8S, flowZ9S,
            flowZ1D, flowZ2D, flowZ3D, flowZ4D, flowZ5D, flowZ6D, flowZ7D, flowZ8D, flowZ9D] */

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
