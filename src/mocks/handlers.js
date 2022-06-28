import { rest } from "msw";
import { endpoint } from "../paths/endpoint";
const urlAPI = process.env.REACT_APP_API_URL;
const urlAPIlocal = process.env.REACT_APP_LOCAL_API_URL;

const fishes = [
  {
    id: 1,
    "file-name": "bitterling",
    name: {
      "name-USen": "bitterling",
      "name-EUen": "bitterling",
      "name-EUde": "Bitterling",
      "name-EUes": "amarguillo",
      "name-USes": "amarguillo",
      "name-EUfr": "bouvière",
      "name-USfr": "bouvière",
      "name-EUit": "rodeo",
      "name-EUnl": "bittervoorn",
      "name-CNzh": "红目鲫",
      "name-TWzh": "紅目鯽",
      "name-JPja": "タナゴ",
      "name-KRko": "납줄개",
      "name-EUru": "горчак",
    },
    availability: {
      "month-northern": "11-3",
      "month-southern": "5-9",
      time: "",
      isAllDay: true,
      isAllYear: false,
      location: "River",
      rarity: "Common",
      "month-array-northern": [11, 12, 1, 2, 3],
      "month-array-southern": [5, 6, 7, 8, 9],
      "time-array": [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
      ],
    },
    shadow: "Smallest (1)",
    price: 900,
    "price-cj": 1350,
    "catch-phrase": "I caught a bitterling! It's mad at me, but only a little.",
    "museum-phrase":
      "Bitterlings hide their eggs inside large bivalves—like clams—where the young can stay safe until grown. The bitterling isn't being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It's a wonderful bit of evolutionary deal making, don't you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?",
    image_uri: "https://acnhapi.com/v1/images/fish/1",
    icon_uri: "https://acnhapi.com/v1/icons/fish/1",
  },
  {
    id: 2,
    "file-name": "pale_chub",
    name: {
      "name-USen": "pale chub",
      "name-EUen": "pale chub",
      "name-EUde": "Döbel",
      "name-EUes": "cacho",
      "name-USes": "cacho",
      "name-EUfr": "chevaine",
      "name-USfr": "chevaine",
      "name-EUit": "zacco",
      "name-EUnl": "Japanse drakenvis",
      "name-CNzh": "溪哥",
      "name-TWzh": "溪哥",
      "name-JPja": "オイカワ",
      "name-KRko": "피라미",
      "name-EUru": "светлый закко",
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "9am - 4pm",
      isAllDay: false,
      isAllYear: true,
      location: "River",
      rarity: "Common",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "time-array": [9, 10, 11, 12, 13, 14, 15],
    },
    shadow: "Smallest (1)",
    price: 200,
    "price-cj": 300,
    "catch-phrase": "I caught a pale chub! That name seems a bit judgy...",
    "museum-phrase":
      "The pale chub is a river fish with simple back-and-silver coloring. Interestingly, the males' coloring becomes most vibrant when he's trying to attract a mate! Though normally plain, these fellows really know how to look stylish when they want to. Perhaps I could learn a thing or two from the pale chub...",
    image_uri: "https://acnhapi.com/v1/images/fish/2",
    icon_uri: "https://acnhapi.com/v1/icons/fish/2",
  },
];

const fish = [
  {
    id: 29,
    "file-name": "golden_trout",
    name: {
      "name-USen": "golden trout",
      "name-EUen": "golden trout",
      "name-EUde": "Goldforelle",
      "name-EUes": "trucha dorada",
      "name-USes": "trucha dorada",
      "name-EUfr": "truite dorée",
      "name-USfr": "truite dorée",
      "name-EUit": "trota dorata",
      "name-EUnl": "goudforel",
      "name-CNzh": "金鳟",
      "name-TWzh": "金鱒",
      "name-JPja": "ゴールデントラウト",
      "name-KRko": "금송어",
      "name-EUru": "золотая форель",
    },
    availability: {
      "month-northern": "3-5 & 9-11",
      "month-southern": "3-5 & 9-11",
      time: "4pm - 9am",
      isAllDay: false,
      isAllYear: false,
      location: "River (Clifftop)",
      rarity: "Ultra-rare",
      "month-array-northern": [3, 4, 5, 9, 10, 11],
      "month-array-southern": [3, 4, 5, 9, 10, 11],
      "time-array": [16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    shadow: "Medium (3)",
    price: 15000,
    "price-cj": 22500,
    "catch-phrase":
      "I caught a golden trout! But the real treasure? Friendship.",
    "museum-phrase":
      "The golden trout is a beautifully colored fish that can only live in very clean waters. They are difficult to come across since they are found only in high mountain streams. As a side note, I find it much easier to appreciate fish that aren't such prima donnas about everything.",
    image_uri: "https://acnhapi.com/v1/images/fish/29",
    icon_uri: "https://acnhapi.com/v1/icons/fish/29",
  },
];

export const handlers = [
  rest.get(`${urlAPI}${endpoint.fish}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(fishes))
  ),
  rest.get(`${urlAPIlocal}${endpoint.fish}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(fishes))
  ),
  rest.post(`${urlAPIlocal}${endpoint.fish}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(fish))
  ),
];
