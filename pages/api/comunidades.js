import { SiteClient } from 'datocms-client';

export default async function recebedorDaRequests(request, response) {

    if (request.method === 'POST') {
        const TOKEN = '476c76051091412f95fa66c91e9c27';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "975947", // model ID criado pelo Dato
            ...request.body
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}