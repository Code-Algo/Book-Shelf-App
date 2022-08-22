import { apiClientNoAuth, apiClientTokenAuth } from "./client.js";

const endpoint = '/book'

    let books
    let error

    

const get = async (cancelToken) =>{
    const result = await apiClientNoAuth(cancelToken).get('/book')
    console.log(result)
    if (result.ok){
        books = result.data.books
    // }else{
    //       error = "An Unexpected Error Occurred.  Please Try again Later"  
    }
    return {
        books,
        error
    }
}
const getBook = async (id, cancelToken) =>{
    let error
    let item

    const response = await apiClientNoAuth(cancelToken).get(endpoint+'/'+id)
    if (response.ok){
        item = response.data
    }else if (response.status === 404){
        error= "Your Item was Not Found"
    }
    else{
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error,
        item
    }
}

const apiBooks={
    get,
    getBook
}

export default apiBooks
