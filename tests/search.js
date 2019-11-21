Feature('Search.js');

Scenario('test something', I => {
    I.amOnPage('http://localhost:8080');
    I.seeElement('#search-button');
});
