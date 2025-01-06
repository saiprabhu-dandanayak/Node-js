import { format } from 'url';

export function FormatUrl(): void {
    const urlObject = {
        protocol: 'https:',
        hostname: 'example.com',
        pathname: '/path',
        search: '?name=test',
    };

    const formattedUrl = format(urlObject);
    console.log(formattedUrl); 
}
