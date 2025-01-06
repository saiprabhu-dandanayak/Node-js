import { URLSearchParams } from 'url';

export function UrlSearchParams(): void {
    const queryString = 'name=test&age=25';
    const params = new URLSearchParams(queryString);

    console.log(params.get('name'));
    params.append('city', 'New York');
    console.log(params.toString()); 
    params.delete('age');
    console.log(params.toString());
}
