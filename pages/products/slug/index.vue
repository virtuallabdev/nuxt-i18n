<template>
    <div>

        <h1>Products page</h1>
		<h2>{{ $t('app.searchEngine') }}</h2><br/><br/>
     	
		<nuxt-link :to="switchLocalePath('en')" class="mr-8">EN</nuxt-link>
        <nuxt-link :to="switchLocalePath('bg')" class="mr-8">BG</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')" class="mr-8">RU</nuxt-link>
		
    </div>
</template>

<script>
export default {
    

    async asyncData({store, payload}){
		if (payload) {
			console.log('static');
			// payload staff
		} else {
			console.log('dynamic');
			// vuex store staff
		}
	}
}
</script>