import { resolve } from 'url';

export function ResolveUrl(): void {
    const baseUrl = 'https://example.com/path/';
    const relativeUrl = '../other-path';

    const resolvedUrl = resolve(baseUrl, relativeUrl);
    console.log(resolvedUrl); 
}
