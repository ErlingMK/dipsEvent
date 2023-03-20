/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }){
	const res = await fetch(`https://erlingmk.github.io/events.json`);
	const item = await res.json();
	console.log(item);
	return {item};
  }