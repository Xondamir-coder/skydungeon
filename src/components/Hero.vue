<template>
	<section class="hero">
		<div class="hero__banner"></div>
		<div class="card"></div>
		<h1 class="hero__title">
			<span v-for="word in words" :key="word" v-html="word"></span>
		</h1>
	</section>
</template>

<script setup>
const word = 'Going deeper into the dungeon we conquer the sky';
const words = word.split('');
</script>

<style lang="scss" scoped>
@keyframes scale-in {
	from {
		opacity: 0;
		transform: scale(1.15);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes scale-out {
	from {
		transform: scale(0.75);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
}
.card {
	animation: scale-out 1s backwards;
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	width: clamp(200px, 20vw, 300px);
	height: clamp(400px, 40vw, 600px);
	aspect-ratio: 3/6;
	border: 4px solid #c29c7b;
	border-radius: clamp(20px, 3vw, 40px);
	overflow: hidden;
	background: url('@/assets/images/phone.webp') center/cover no-repeat;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.hero {
	display: flex;
	position: relative;
	min-height: 100vh;
	&__banner {
		animation: scale-in 1.5s;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			url('@/assets/images/banner.webp');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	&__title {
		z-index: 1;
		text-shadow: 2px 2px 4px #00000040;
		font-weight: 400;
		font-size: clamp(70px, 7vw, 96px);
		line-height: 1;
		text-transform: uppercase;
		align-self: flex-end;
		padding-left: 3%;
		padding-bottom: 5%;
		max-width: 30ch;

		/* 1) transparent fill */
		color: transparent;
		-webkit-text-fill-color: transparent; /* for WebKit */

		/* 2) background-clip into text */
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			url('@/assets/images/banner.webp');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-clip: text;
		-webkit-background-clip: text;

		/* 3) outline/stroke */
		/* tweak width & color to taste */
		-webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
		span {
			animation: scale-in 0.5s backwards;
			@for $i from 1 through 100 {
				&:nth-child(#{$i}) {
					animation-delay: $i * 0.03s;
				}
			}
		}
	}
}
</style>
