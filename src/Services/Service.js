import axios from 'axios';

/**
 * Módulo para trabalhar com apis. Disponibiliza as rotas da api bem como o serviço com a biblioteca axios
 */



/**
 * Rota para o recurso Evento
 */
export const eventsResource = '/Evento';
/**
 * Rota para o recurso Presenças Evento
 */
export const presencesEventResource = '/PresencaEvento';
/**
 * Rota para o recurso Presenças Evento
 */
export const commentaryEventResource = '/ComentariosEvento';

/**
 * Rota para o recurso Próximos Eventos
 */
export const nextEventResource = '/Evento/ListarProximos';

/**
 * Rota para o recurso Próximos Eventos
 */
export const previousEventResource = '/Evento/ListarAnteriores';

/**
 * Rota para o recurso Tipos de Eventos
 */
export const eventsTypeResource = '/TipoEvento';
/**
 * Rota para o recurso Instituição
 */
export const institutionResource = '/Instituicao';
/**
 * Rota para o recurso Login
 */
export const loginResource = '/Login';

const apiPort = '7284';
const localApiUri = `https://localhost/:${apiPort}/api`;
const externalApiUri = `https://eventapiwebrebeca.azurewebsites.net/api`
// const externalApiUri = null;

const api = axios.create({
    baseURL: externalApiUri
});



export default api;