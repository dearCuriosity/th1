/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
    {
        quote: 'Women will have achieved true equality when men share with them the responsibility of bringing up the next generation.**',
        source: 'Ruth Bader Ginsburg',
        citation: '',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: ''
    },
    {
        quote: 'When a thoughtless or unkind word is spoken, best tune out. Reacting in anger or annoyance will not advance one’s ability to persuade.',
        source: 'Ruth Bader Ginsburg',
        citation: 'La Google',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: '2016'
    },
    {
        quote: 'Women will have achieved true equality when men share with them the responsibility of bringing up the next generation.',
        source: 'Ruth Bader Ginsburg',
        citation: 'El Google',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: '2001'
    },
    {
        quote: 'If there was one decision I would overrule, it would be Citizens United. I think the notion that we have all the democracy that money can buy strays so far from what our democracy is supposed to be.',
        source: 'Ruth Bader Ginsburg',
        citation: 'La Google',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: '2014'
    },
    {
        quote: 'Fight for the things that you care about, but do it in a way that will lead others to join you.',
        source: 'Ruth Bader Ginsburg',
        citation: 'Le Google',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: '2015'
    },
    {
        quote: 'If you want to be a true professional, do something outside yourself.',
        source: 'Ruth Bader Ginsburg',
        citation: '',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: ''
    },
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    let quotesCount = quotes.length;
    const randomQuote = Math.floor(Math.random() * quotesCount);
    return quotes[randomQuote];
}

/***
 * `printQuote` function
***/

function printQuote() {
    
    currentQuote = getRandomQuote();

    // Build HTML
    let html = `<p class="quote">${currentQuote.quote}</p> 
              <p class="source">${currentQuote.source}`;

    if (currentQuote.citation != '') {
        if (currentQuote.url != '') {
            html += `<span class="citation"><a href="https://${currentQuote.url}">${currentQuote.citation}</a></span>`;
        }
    }
    else {
        html += `<span class="citation">Source Unknown</span>`;
    }
    if (currentQuote.year >= 0 && currentQuote.year != '') {
        html += `<span class="year">${currentQuote.year}</span></p>`;
    }
    else {
        html += `</p>`;
    }

    // Write HTML
    document.getElementById('quote-box').innerHTML = html;
}

// fill empty div on initial page load
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);