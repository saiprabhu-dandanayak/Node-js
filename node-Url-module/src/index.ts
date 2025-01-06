import { parse, format, resolve } from 'url';

const parsedUrl = parse('https://example.com:8080/path?name=test#fragment');
console.log(parsedUrl.pathname); 

parsedUrl.pathname = '/new-path';
parsedUrl.query = 'name=updated&age=30';
parsedUrl.search = null; 

const formattedUrl = format(parsedUrl);
console.log(formattedUrl); 

const resolvedUrl = resolve(formattedUrl, '../another-path');
console.log(resolvedUrl);

