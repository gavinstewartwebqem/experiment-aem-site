async function getRandomeJokes() {
    const response = await fetch("https://official-joke-api.appspot.com/random_ten");
    const jokes = await response.json();
    return jokes
}


async function renderJokes(){
    const jokeDiv = document.createElement('div');
    jokeDiv.className = 'jokes-wrapper'
    const data = await getRandomeJokes()
    data.map((joke)=>{
        const jokeWrapperDiv = document.createElement('div');
        jokeWrapperDiv.className='jokes-joke-wrapper'
        //set up
        const setupDiv = document.createElement('div');
        setupDiv.innerHTML = `<b>${joke.setup}<b>`
        setupDiv.className='jokes-joke-setup'
        jokeWrapperDiv.appendChild(setupDiv)
        //punchline
        const punchlineDiv = document.createElement('div');
        punchlineDiv.className='jokes-joke-punchline'
        punchlineDiv.innerHTML = `<i>${joke.punchline}</i>`
        jokeWrapperDiv.appendChild(punchlineDiv)
        jokeDiv.appendChild(jokeWrapperDiv)
    })
    
    return jokeDiv
}


export default async function decorate(block){
    const moreJokes = 'Get different jokes!'
    const loadingJokes = 'Fetching ..'
    const header = 'Some Random Jokes'


    // jokes
    const decoratedJokes = await renderJokes()
    block.appendChild(decoratedJokes)
    
    
    // //reset button
    const resetButtonDiv = document.createElement('div');
    const resetButton = document.createElement('button');
    resetButton.innerHTML = moreJokes
    resetButtonDiv.appendChild(resetButton)
    block.appendChild(resetButtonDiv)

    resetButton.addEventListener("click", async function() {
        resetButton.innerHTML = loadingJokes
        const decoratedJokes = await renderJokes()
        console.log(decoratedJokes)
        const blockDiv = block.querySelector('div:first-child')
        console.log(blockDiv)
        blockDiv.innerHTML = ''
        blockDiv.appendChild(decoratedJokes)
        resetButton.innerHTML = moreJokes
     }, false);
}