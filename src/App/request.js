export const request = (pageOrderBy, offset, sort) => {
    return fetch(`https://api.cryptokitties.co/v2/kitties?offset=${offset}&limit=12&parents=false&authenticated=false&include=sale&orderBy=${pageOrderBy}&orderDirection=${sort}&total=true`)
    .then(res => {
        if(!res.ok){
            throw new Error(`${res.status} - ${res.statusText}`)
        }
        return res.json()
    })
}
