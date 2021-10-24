var wikiOptions = "(wiki|zh|zh\\-tw|zh\\-hk|zh\\-mo|zh\\-sg|zh\\-cn|zh\\-hant|zh\\-hans)";
var wikiString = '';

function getFullHostName() {
    return 'www.wikiwand.com';
}

// Compute the required redirect page
function getRedirectUrl(requestedURL) {
    var lang = null;
    var page = null;

    function returnEmpty() {
        return {
            redirectURL: null,
            domain: null,
            autoRedirect: false,
            lang: null,
        };
    }

    function blacklistCheckerFactory(urlPart) {
        return function (token) {
            if (token.toLowerCase() === urlPart.toLowerCase()) {
                return true;
            }
            try {
                var tokenRegExp = new RegExp(token);
                return tokenRegExp.test(urlPart.toLowerCase())
            } catch (e) {
            }
            return false;
        }
    }

    // Parsing blacklist from the localStorage and check if current URl should be blacklisted
    if ('wikiwand_blacklist' in localStorage) {
        try {
            var parsedUrl = new URL(requestedURL);
            var blacklist = JSON.parse(localStorage['wikiwand_blacklist']);
            if ('domains' in blacklist && Array.isArray(blacklist.domains) && blacklist.domains.some(blacklistCheckerFactory(parsedUrl.hostname))) {
                return returnEmpty();
            }
            if ('paths' in blacklist && Array.isArray(blacklist.paths) && blacklist.paths.some(blacklistCheckerFactory(parsedUrl.pathname))) {
                return returnEmpty();
            }
        } catch (e) {
            // Ignore the error
        }
    }

    // -------------------------------------------------------------
    // REDIRECTING FROM WIKIPEDIA -> TO WIKIWAND
    // -------------------------------------------------------------
    // Test for flag get parameter not to redirect
    var wikipediaDontRedirectRegExp = new RegExp("^https?://([a-zA-Z0-9\\-_]+)\\.(?:m\\.)?wikipedia\\.(?:com|org)/" + wikiOptions + "/(.*)(?:\\?oldformat=true|\\?previous=yes)", "i");
    match = requestedURL.match(wikipediaDontRedirectRegExp);
    if (match && match.length === 4) {
        lang = match[1];
        wikiString = match[2];
        page = match[3];
        return {
            redirectURL: 'https://' + getFullHostName() + '/' + lang + '/' + page,
            domain: 'wikipedia',
            autoRedirect: false,
            lang,
        };
    }

    // Wikipedia root home page (not per language) -> redirect to our WikiWand homepage
    var wikipediaRootRegExp = new RegExp("^https?://(www)?\\.wikipedia\\.(com|org)/?$", "i");
    var match = requestedURL.match(wikipediaRootRegExp);
    if (match) {
        return {
            redirectURL: 'https://' + getFullHostName(),
            domain: 'wikipedia',
            autoRedirect: false,
            lang: 'en',
        };
    }


    //  Wikipedia article page with ?title=....
    var wikipediaLangHomeRegExp = new RegExp("^https?://([a-zA-Z0-9\\-_]+)\\.(?:m\\.)?wikipedia\\.org/\\?title=(.*)$", "i");
    match = requestedURL.match(wikipediaLangHomeRegExp);
    if (match && match.length === 3) {
        lang = match[1];
        const parsedUrl = new URL(requestedURL);
        if (parsedUrl.searchParams.has('title')) {
            const page = parsedUrl.searchParams.get('title');
            return {
                redirectURL: 'https://' + getFullHostName() + '/' + lang + '/' + page,
                domain: 'wikipedia',
                autoRedirect: true,
                lang,
            };
        }
    }

    //  Wikipedia article/home page -> redirect to the appropriate page on WikiWand
    var wikipediaLangHomeRegExp = new RegExp("^https?://([a-zA-Z0-9\\-_]+)\\.(?:m\\.)?wikipedia\\.org/" + wikiOptions + "/(.*)$", "i");
    match = requestedURL.match(wikipediaLangHomeRegExp);
    if (match && match.length === 4) {
        lang = match[1];
        wikiString = match[2];
        if (wikiString !== 'wiki') {
            lang = wikiString;
        }
        page = match[3];
        try {
            decodeURI(page);
        } catch (e) {
            return {
                redirectURL: 'https://' + getFullHostName() + '/' + lang + '/' + page,
                domain: 'wikipedia',
                autoRedirect: true,
                lang,
            };
        }

        // Detect homepage:
        // Go through all of the namespaces in all languages. For each language we have a field called 'homepage'.
        // we need to match this with the current "page", if it is indeed the homepage for this language, redirect to
        // the wikiwand homepage for that language.
        if (namespecesDict[lang]) {
            var element = namespecesDict[lang];
            if (decodeURI(page) === element['homepage']) {
                return {
                    redirectURL: 'https://' + getFullHostName() + '/' + lang + '/',
                    domain: 'wikipedia',
                    autoRedirect: false,
                    lang,
                };
            }
        }

        // Wikipedia special pages in namespaces (e.g. Talk, Portal) -> don't redirect
        var specialPagesRegexp = new RegExp("^https?://([a-zA-Z0-9\\-_]+)\\.(?:m\\.)?wikipedia\\.org/" + wikiOptions + "/([^:]*):(.*)$", "i");
        var match2 = requestedURL.match(specialPagesRegexp);
        if (match2 && match2.length === 5) {
            lang = match2[1];
            wikiString = match[2];
            var ns = decodeURI(match2[3]);
            if (namespecesDict[lang]) {
                var element = namespecesDict[lang];
                var namespacesForLang = element['namespaces'];
                for (index in namespacesForLang) {
                    if (namespacesForLang[index].replace(' ', '_') === ns) {
                        return {
                            redirectURL: null,
                            domain: 'wikipedia',
                            autoRedirect: false,
                            lang,
                        };
                    }
                }


                var element = namespecesDict['cross-lang'];
                var namespacesForLang = element['namespaces'];
                for (index in namespacesForLang) {
                    if (namespacesForLang[index].replace(' ', '_') === ns) {
                        return {
                            redirectURL: null,
                            domain: 'wikipedia',
                            autoRedirect: false,
                            lang,
                        };
                    }
                }
            }
        }


        // A page on Wikipedia but still not a homepage? -> redirect it to a WikiWand Page
        return {
            redirectURL: 'https://' + getFullHostName() + '/' + lang + '/' + page,
            domain: 'wikipedia',
            autoRedirect: true,
            lang,
        };
    }

    // -------------------------------------------------------------
    // DEFAULT: UNRECOGNIZED URL -> DON'T REDIRECT
    // -------------------------------------------------------------
    return returnEmpty();
}


// This function does the same as getRedirectUrl, only it adds a few exceptions like home page
function testAutoRedirect(requestedURL) {
    var returnVal = getRedirectUrl(requestedURL);
    if (returnVal.autoRedirect === false) {
        returnVal.redirectURL = null;
    }
    return returnVal;
}
