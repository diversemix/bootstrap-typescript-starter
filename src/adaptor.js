console.log("loading...");

async function search() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 2000);
  });
}

function getMessage() {
  return window.library.doSomething();
}

function doSearch() {
  console.log("dothis");
  console.log($("#search-text")[0].value);
  $("#search-button").addClass("d-none");
  $("#spinner").removeClass("d-none");
  search().then(() => {
    $("#search-button").removeClass("d-none");
    $("#spinner").addClass("d-none");
  });
}

$("#left-list a").on("click", function(e) {
  console.log(e);
});

$(document).ready(function() {
  console.log($("#left-list"));
  $("#left-list")[0].children = [];
  console.log(getMessage());
});
