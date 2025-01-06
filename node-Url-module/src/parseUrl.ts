import {parse} from 'url'

export const Parsedurl = () : void =>{
    const url = 'https://www.example.com/search?q=typescript&sort=desc&page=2';
    const parsed = parse(url, true);
    console.log(">>>> ",parsed);
}