module.exports = {
	personal: {
		description: "Personal",
		options: {
			freshChrome: "site",
		},
		urls: [
			"https://sidelight.kerjo.com/",
			"https://www.kerjo.com/",
			"https://jordan.hofker.org/"
		]
	},
	client: {
		description: "Client",
		options: {
			// if the sites don’t share assets on the same domain, we can reset
			// chrome with each run instead of each site in every run (it’s faster)
			freshChrome: "run"
		},
		urls: [
			"https://www.camerashq.com/",
			"https://www.greatharvestbreadomaha.com/",
			"https://www.hofkerautomotive.com/",
			"https://www.mollymarketing.com/",
			"https://www.wenninghoff.com/"
		]
	}
};
