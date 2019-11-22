Feature('Search.js');

Scenario('test search', async I => {
    I.amOnPage('http://localhost:8080');
    I.seeElement('#search-text');
    I.seeElement('#search-button');
    I.seeNumberOfElements('.list-group-item', 10);

    I.fillField('#search-text', 'C');
    I.click('#search-button');
    I.waitForVisible('#search-button', 3);
    I.seeNumberOfElements('.list-group-item', 3);
});
