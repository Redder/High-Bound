  $('.footable-first-visible').click(function(e){
      console.log(e);
      console.log(e.target.nextSibling.innerText);
      openInNewTab('school.html?code=' + e.target.nextSibling.innerText);
    });

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}