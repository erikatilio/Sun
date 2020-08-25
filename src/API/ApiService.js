import urlBase from '../index'

const consumesApi = (param) => {
    return fetch(`${urlBase}/json?${param}&date=today`)
        .then(res => ApiService.trataErros(res))
        .then(res => res.json())
        .then(res => res.results)
}

const ApiService = {
    getTimeSunrise: (param) => consumesApi(param),
    trataErros: res => {
        if (!res.ok) {
            throw Error(res.responseText)
        }
        return res
    }
}

export default ApiService;