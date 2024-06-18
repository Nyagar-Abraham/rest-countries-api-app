export async function getAllCountries(region) {
	let query;

	if (region && region !== 'all')
		query = fetch(
			`https://restcountries.com/v3.1/region/${region}?fields=name,capital,population,region,currencies,flags`
		);
	if (!region || region === 'all')
		query = fetch(
			'https://restcountries.com/v3.1/all?fields=name,capital,population,region,currencies,flags'
		);
	const res = await query;

	const data = await res.json();

	return data;
}

function isCountryCode(input) {
	const alpha2Regex = /^[A-Z]{2}$/;
	const alpha3Regex = /^[A-Z]{3}$/;
	return alpha2Regex.test(input) || alpha3Regex.test(input);
}

export async function getCountry(name) {
	console.log(name);
	let query;
	if (isCountryCode(name))
		query = fetch(`https://restcountries.com/v3.1/alpha/${name}`);

	if (!isCountryCode(name))
		query = fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

	const res = await query;

	if (!res.ok) throw new Error('cant fetch');

	const country = await res.json();

	return country;
}
