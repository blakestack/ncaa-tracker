const cfbd = require('cfb.js');

const key = process.env.CFBD_API_KEY

const API_URL = "api.collegefootballdata.com/";

const defaultClient = cfbd.ApiClient.instance;

const ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = `${key}`;
ApiKeyAuth.apiKeyPrefix["Authorization"] = "Bearer";

var api = new cfbd.GamesApi();

let year = 2020;
const games = await api.getGames(year);

console.table(games);

export { };
