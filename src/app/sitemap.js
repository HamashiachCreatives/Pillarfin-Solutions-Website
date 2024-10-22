export default async function sitemap(){
    const url = 'https://pillarfinsolutions.com/'
    return[
        {
            url:url
        },
        {
            url:`${url}/services`
        },
        {
            url:`${url}/about`
        },
        {
            url:`${url}/values`
        },
        {
            url:`${url}/talk`
        },
        {
            url:`${url}/story`
        }
    ]
}