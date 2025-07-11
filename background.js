chrome.webRequest.onBeforeRequest.addListener(
function (details){
	let url = new URL(details.url);
	let query = url.searchParams.get("q");

	if (query && !query.includes("-ai")) {
		query += "+-ai";
		url.searchParams.set("q", query);
		return { redirectUrl: url.toString() };
	}
},
{
	urls: ["*://www.google.com/search*"] }
	["blocking"]
);
