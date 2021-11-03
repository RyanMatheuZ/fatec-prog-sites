<template>
	<div>	
	    <header class="bg-gray-700 w-full">
			<h1 class="text-white text-center text-3xl font-bold select-none py-10">
				{{ details.title }}	  
			</h1>
		</header>

		<main>
			<div class="px-10 mt-10 mb-5">
				<nuxt-link 
					to="/"
					class="bg-gray-400 text-gray-900 text-center font-semibold w-32 rounded-md cursor-pointer p-3"
				>
					Voltar
				</nuxt-link>
			</div>

			<div class="pt-5 px-10">
				<span class="block text-lg">
					<strong class="text-gray-800">
						Director:
					</strong>

					<span class="text-gray-900">
						{{ details.director }}
					</span>
				</span>

				<span class="block text-lg">
					<strong class="text-gray-800">
						Producer:
					</strong>

					<span class="text-gray-900">
						{{ details.producer }}
					</span>
				</span>

				<span class="block text-lg">
					<strong class="text-gray-800">
						Release date:
					</strong>

					<span class="text-gray-900">
						{{ details.release_date }}
					</span>
				</span>
			</div>

			<div class="pt-5 px-10">
				<h2 class="text-2xl font-semibold uppercase select-none my-4">
					Opening
				</h2>

				<p class="text-gray-900 text-lg">
					{{ details.opening_crawl }}
				</p>
			</div>

			<div class="pt-5 px-10">
				<h2 class="text-2xl font-semibold uppercase select-none my-4">
					Characters
				</h2>

				<ul class="text-lg mb-7">
					<li 
						v-for="(item, index) in details.characters"
						:key="index"
						class="text-gray-900"
					>
						{{ item }}
					</li>
				</ul>
			</div>
		</main>
	</div>
</template>

<script>
export default {
	head(){
		return {
			title: `${this.details.title}`
		}
	},

	async asyncData({ params }) {
		const id = +params.id
		const response = await fetch('https://swapi.dev/api/films')
		const json = await response.json()
		const films = json.results
		
		const details = films.find(x => x.episode_id === id)

		return { details }
	}
}
</script>