export default function decorate(block){
    // quote
    const quoteDiv = block.querySelector(':scope > div > div > p')
    const blockQuote = document.createElement('blockquote')
    blockQuote.innerHTML = `"${quoteDiv.innerHTML}"`
    quoteDiv.parentElement.parentElement.replaceWith(blockQuote)
    console.log(block)
    //author
    const authorDiv = block.querySelector(':scope > div > div > p')
    const autherP = document.createElement('p')
    autherP.innerHTML = `<em>- ${authorDiv.innerHTML} </em>`
    authorDiv.parentElement.parentElement.replaceWith(autherP)
    console.log(block)
}