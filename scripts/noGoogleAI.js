(function() {
    function removeAIResponses() {
        let aiBoxes = document.querySelectorAll("div[data-md='771']");
        aiBoxes.forEach(box => box.remove());
    }

    const observer = new MutationObserver(removeAIResponses);
    observer.observe(document.body, { childList: true, subtree: true });

    removeAIResponses(); // Run immediately
})();
