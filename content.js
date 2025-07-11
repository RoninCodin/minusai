const url = new URL(window.location.href);
const params = url.searchParams;
let query = params.get("q");

if (query && !query.includes("-ai")) {
  query += " -ai";
  params.set("q", query);
  window.location.href = url.toString(); // redirect to updated query
}
