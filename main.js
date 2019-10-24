window.addEventListener("DOMContentLoaded", event => {    
    elButton = document.getElementById("FullScreenButton");
    elButton.addEventListener("click", () => {
        elDialog = document.getElementById("TermsDialog");
        elHolder = document.getElementById("TermsHolder");
        elContents = document.getElementById("TermsContents");
        elHolder.appendChild(elContents.cloneNode(true));
        elDialog.showModal();
    });

  });

  function onScroll(timestamp) {
    console.log(timestamp)
    elTerms.scrollTop = elTerms.scrollTop + 4;
    window.requestAnimationFrame(onScroll);
  }

