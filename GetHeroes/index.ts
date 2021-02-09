import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const heroes = (req.query.heroes || (req.body && req.body.heroes));
    const responseHeroes = ['Homem de Ferro', 'Capitão América', 'Hulk', 'Viúva Negra', 'Thor'];

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseHeroes
    };

};

export default httpTrigger;