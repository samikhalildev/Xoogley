
'use strict'

document.removeChild(document.documentElement);

setTimeout(function(){
    document.write(`
    <html>
        <head>
            <title> Google </title>
        </head>
        
        <body>
            <div class="overlay">
                <div class="row row-search">
                    <form id="form" action="/search" method="GET" name="f" class="col s12">
                      
                        <div class="input-field center">
                            <input class="input-search" id="search-input" name="q" autocomplete="off" type="text" title="Search" placeholder="🕵️‍️"/>
                        </div>
                        
                        <div id="auto-complete"/>
                    </form>
                </div>
            </div>
        </body>
    </html>
    `);

    let file = 'images/bg.jpg';
    let image = chrome.extension.getURL(file);
    document.body.style.background = `#222222 url(${image}) no-repeat center fixed`;
    document.body.style.backgroundSize = 'cover';
    window.stop();

    let inputBox = document.getElementById('search-input');
    let list = document.getElementById('auto-complete');

    inputBox.addEventListener('keydown', function () {

        let inputEncoded = encodeURIComponent(inputBox.value);
        var searchapi = `https://www.google.com/complete/search?client=chrome&q=${inputEncoded}`;

        fetch(searchapi, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {

                // Return results that does not contain any urls
                let filteredResults = data[1].filter(result => !result.includes('http://') && !result.includes('https://'));

                // Get the first 10 results
                let results = filteredResults.slice(0, 10);

                list.textContent = '';
                list.className = '';

                results.forEach(result => {
                    let item = document.createElement('a');

                    item.setAttribute('class', 'collection-item pink-text text-darken-2');
                    item.textContent = result;

                    item.setAttribute('href', `https://www.google.com/search?q=${item.textContent}`);
                    list.className = 'collection';

                    list.appendChild(item);
                });

            })
            .catch(err => console.log("ERROR: " + err));

    }, false);

},500);
