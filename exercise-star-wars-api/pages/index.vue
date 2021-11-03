<template>
  	<div>
	    <header class="bg-gray-900 w-full">
			<h1 class="text-white text-center text-3xl font-bold select-none py-10">
				Star Wars Universe
			</h1>
		</header>

		<main>
			<h2 class="text-center text-2xl font-semibold uppercase select-none mt-4">
				Films
			</h2>

			<ul class="text-center text-xl mt-8">
				<li 
					v-for="item of films" :key="item.episode_id"
					class="my-3"
				>
					<nuxt-link 
						:to="`/film/${item.episode_id}`"
						class="text-gray-500 transition ease-linear duration-200 hover:text-gray-900"
					>
						{{ item.title }}
					</nuxt-link>
				</li>
			</ul>
		</main>
  	</div>
</template>

<script>
export default {
	head() {
		return {
			title: 'Star Wars | Films'
		}
	},

  	data() {
    	return {
      		films: []
    	}
  	},

	async fetch() {
		const response = await fetch("https://swapi.dev/api/films")
		const json = await response.json()
		this.films = json.results
  	}
}
</script>