console.log('loading...');

function search(searchText) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 2000);
    });
}

function renderItems(items) {
    console.log('rendering items...');
    items.forEach(item => {
        $('#item-list').append(window.library.itemController.renderItemForList(item));
    });
}

function doSearch() {
    // TODO: Search the list of items
    const searchText = $('#search-text')[0].value;
    console.log(searchText);
    $('#search-button').addClass('d-none');
    $('#spinner').removeClass('d-none');

    window.library.itemController.getItems(searchText).then(items => {
        $('#search-button').removeClass('d-none');
        $('#spinner').addClass('d-none');
        // Clear list
        const list = $('#item-list')[0];
        let child = list.lastElementChild;
        while (child) {
            list.removeChild(child);
            child = list.lastElementChild;
        }
        // Add items
        renderItems(items);
    });
}

/*
$('#item-list a').on('click', function(e) {
    // TODO: Update results section
});
*/

$(document).ready(() => {
    console.log('getting items...');
    window.library.itemController.getAllItems().then(items => {
        renderItems(items);
    });
});
