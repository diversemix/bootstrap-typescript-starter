console.log('loading...');

function search() {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 2000);
    });
}

function doSearch() {
    // TODO: Search the list of items
    console.log('dothis');
    console.log($('#search-text')[0].value);
    $('#search-button').addClass('d-none');
    $('#spinner').removeClass('d-none');
    search().then(() => {
        $('#search-button').removeClass('d-none');
        $('#spinner').addClass('d-none');
    });
}

$('#item-list a').on('click', function(e) {
    // TODO: Update results section
});

$(document).ready(function() {
    console.log('getting items...');
    window.library.getItems().then(items => {
        console.log('rendering items...');
        items.forEach(item => {
            $('#item-list').append(window.library.renderItem(item));
        });
    });
});
