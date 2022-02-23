import axios from 'axios'

const getNewsList = async(key='javascript') => {
    const res = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${key}&tags=story`)

    return res
}

export {
    getNewsList,
}
