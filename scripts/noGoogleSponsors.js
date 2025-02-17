(function() {
    function removeSponsored() {
        document.querySelectorAll("span, div").forEach(element => {
            if (element.textContent.includes("Sponsored") || element.textContent.includes("Ad")) {
                element.closest("div")?.remove();
            }
        });
    }

    const observer = new MutationObserver(removeSponsored);
    observer.observe(document.body, { childList: true, subtree: true });

    removeSponsored(); // Run immediately
})();
