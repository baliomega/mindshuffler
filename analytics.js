const GA_TRACKING_ID = 'G-761P87QH0D';

function sendAnalytics(eventCategory, eventAction, eventLabel) {
    fetch(`https://www.google-analytics.com/collect?v=1&t=event&tid=${GA_TRACKING_ID}&cid=555&ec=${eventCategory}&ea=${eventAction}&el=${eventLabel}`, {
        method: 'POST'
    });
}
