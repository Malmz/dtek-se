<script lang="ts">
	const committees = [
		{
			name: 'D-Styret',
			slug: 'd-styret',
			homepage: 'https://wiki.dtek.se/wiki/Styret',
			imageUrl: 'https://wiki.dtek.se/images/7/79/Styretlogga.png',
			description: 'Tells people what to do',
			mask: true
		},
		{
			name: 'DLude',
			slug: 'dlude',
			description: 'Provides the devision with boardgame of all kinds. Come and play!',
			homepage: 'https://wiki.dtek.se/wiki/DLude',
			imageUrl: 'images/committees/dlude.png'
		},
		{
			name: 'DNS',
			slug: 'dns',
			description: 'Helps you study',
			homepage: 'https://wiki.dtek.se/wiki/DNS',
			imageUrl: 'https://wiki.dtek.se/images/thumb/d/dd/DNS21.png/600px-DNS21.png'
		},
		{
			name: 'D6',
			slug: 'd6',
			description: 'Here to party',
			homepage: 'https://wiki.dtek.se/wiki/D6',
			imageUrl: 'https://wiki.dtek.se/images/thumb/b/bd/D621-grad.png/600px-D621-grad.png'
		},
		{
			name: 'DNollK',
			slug: 'dnollk',
			description: 'Gives you a warm welcome',
			homepage: 'https://wiki.dtek.se/wiki/DNollK',
			imageUrl:
				'https://dnollk.se/cdn/storage/images/gjnmFQLEZ3BCtZGHL/original/gjnmFQLEZ3BCtZGHL.png'
		},
		{
			name: 'dHack',
			slug: 'dhack',
			description: 'Your local DevOps team',
			homepage: 'https://wiki.dtek.se/wiki/dHack',
			imageUrl: '/images/committees/dhack.svg'
		}
	];

	const logos = [
		'd6.png',
		'dag.png',
		'dbrus.jpg',
		'dbus.png',
		'delta.png',
		'dfoto.png',
		'dhack.svg',
		'dkock.png',
		'dlirium.png',
		'dlude.png',
		'dmnolk.jpg',
		'dnolk.png',
		'dns.png',
		'drust.png',
		'idrott.png',
		'jamnstalld.png',
		'stat.png',
		'styret.png'
	].map((url) => `/images/committees/${url}`);
</script>

<div class="max-w-3xl mx-auto p-4">
	<h2 class="text-center text-3xl font-bold mb-4">Möt kommittérna</h2>
	<p>
		Lär känna alla underbara studentstyrda kommittéer som hjälper till att förbättra kvaliteten på
		din utbildning när du studerar och tillför mycket roligt när du inte gör det det.
	</p>
</div>
<div class="flex gap-12 p-8 max-w-5xl mx-auto flex-wrap">
	{#each committees as committee}
		<a href={committee.homepage} class="flex items-center gap-2 flex-grow">
			<img class="h-9 rounded-2xl" src={committee.imageUrl} alt="Committee Logo" />
			<span class="font-bold text-xl">{committee.name}</span>
		</a>
	{/each}
</div>
