// @ts-ignore
import Parse from 'parse/dist/parse.min.js';

Parse.initialize(
  import.meta.env.VITE_APPID,
  import.meta.env.VITE_JSKEY
);
Parse.serverURL = import.meta.env.VITE_PARSEURL;