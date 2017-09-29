  (function() {
    // Parse height from query string
    var match = /[?&]height=([0-9]+)/i.exec(window.location.href);
    if (!match) return;
    var height = parseInt(match[1]);
    // Pass height to the resizePostings global function if it is defined
    // in the page including the postings iframe
    var resizePostings = window.parent.parent.resizePostings;
    if (typeof resizePostings === 'function') {
      resizePostings(height);
    }
  })();