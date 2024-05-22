import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function getNamesList(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: JSON.stringify(['TESTE1', 'TESTE2', 'TESTE3', 'TESTE4']), headers: {
        'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Request-Headers': 'X-Custom-Header'

    } };
};

app.http('getNamesList', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: getNamesList
});
