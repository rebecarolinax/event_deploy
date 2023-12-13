import axios from "axios";

export const eventResource = "/Evento";

export const nextEventResource = "/Evento/ListarProximos";

export const previousEventResource = "/Evento/ListarAnteriores";

export const eventsTypeResource = "/TiposEvento";

export const loginResource = "/Login";

export const myEventsResource = "/PresencaEvento/ListarMinhas";

export const presenceEventResource = "/PresencaEvento";

export const commentaryEventResource = "/ComentariosEvento";

export const commentaryEventUserIdResource =
  "/ComentariosEvento/BuscarPorIdUsuario";

// const apiPort = '7118'
// const localApiUrl = `https://localhost:${apiPort}/api`
const externaApiUrl = `https://eventapiwebrebeca.azurewebsites.net/api`;

const api = axios.create({
  baseURL: externaApiUrl,
});

export default api;
