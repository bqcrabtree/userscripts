// ==UserScript==
// @name     wikipedia_ipareader_links
// @namespace https://github.com/bqcrabtree/userscripts
// @description Modifies wikipedia IPA links to - instead of pointing to the "help" document - point to the ipa-reader website. That's all it does. I chose to use the "Justin" voice because I think he's the cutest sounding one. :P
// @version  0.1
// @grant    none
// @match    https://*.wikipedia.org/wiki/*
// ==/UserScript==

window.addEventListener("load", () => [...document.getElementsByClassName("IPA")]
    .map(e => ({
        element: e,
        content: e.textContent
            .slice(1, -1)
            .split(",")[0]
    }))
    .forEach(e => {
        if (e.element.firstChild.tagName == "A") {
            e.element.firstChild.href = `http://ipa-reader.xyz/?text=${encodeURIComponent(e.content)}&voice=Justin`;
            e.element.firstChild.target = "_blank";
            e.element.firstChild.title = `IPA Reader: /${e.content}/`;
        }
    }));