import { urlService } from "./dataUrl";

export const GET = ( ref) => {
    return fetch(urlService + ref, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
}