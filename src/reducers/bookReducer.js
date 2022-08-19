const bookActions={
    addToBooks: 'addToBooks',
    removeFromBooks: 'removeFromBooks',
    emptyBooks: 'emptyBooks',
    removeAllFromBooks: 'removeAllFromBooks',
    addBulkToCart: 'addBulkToBooks'
}


function bookReducer(books=[], {type, item}){
    switch(type){
        case bookActions.addToBooks:
            return [...books, item]
        case bookActions.addBulkToBooks:
            return [...books, ...item]
        case bookActions.removeFromBooks:
            let newBooks=books.slice()
            for (let bookItem of newBooks){
                if(bookItem.id === books.id){
                    newBooks.splice(newBooks.indexOf(bookItem),1)
                    return newBooks
                }
            }
            return newBooks
        case bookActions.removeAllFromBooks:
            return books.filter((bookItem)=>item.id!== bookItem.id)

        case bookActions.emptyBooks:
            return []

        default:
            throw new Error('I am not a Teapot')
    }
}

export {
    bookReducer,
    bookActions
}