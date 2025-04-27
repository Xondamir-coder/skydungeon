<template>
	<section class="soon">
		<div class="soon__content">
			<h2 class="soon__title" ref="titleRef">THE GAME IS COMING SOON FOR MOBILE</h2>
			<form class="soon__form" @submit.prevent="submitForm" ref="formRef">
				<input
					type="email"
					name="email"
					id="email"
					class="soon__input"
					v-model="email"
					required
					placeholder="Enter your email to be a beta tester" />
				<button
					type="submit"
					class="soon__button"
					style="opacity: 0.5; cursor: not-allowed"
					disabled>
					{{ submitStatus }}
				</button>
				<div class="soon__row">
					<input
						type="checkbox"
						name="news"
						id="news"
						class="soon__checkbox"
						v-model="gettingEmails" />
					<label for="news" class="soon__row-text">
						I consent to receive news and promotional content from Brainstorming Films
						in my email and confirm that I am 16 years of age or older.
					</label>
				</div>
				<div class="soon__row">
					<input
						type="checkbox"
						name="news"
						id="policy"
						class="soon__checkbox"
						required
						v-model="hasReadPolicy" />
					<label for="policy" class="soon__row-text">
						I have read and accepted the Terms and Conditions and the Privacy Policy
					</label>
				</div>
			</form>
		</div>
		<div class="soon__bottom" ref="bottomRef">
			<div class="soon__message">
				<h2 class="soon__title">CONQUER THE SKY</h2>
				<p class="soon__message-text">
					Subscribe to SKY DUNGEON newsletter and receive game update alerts, the latest
					news and exclusive promotions delivered to your email.
				</p>
			</div>
			<div class="soon__socials">
				<a
					href="https://discord.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="soon__icon">
					<img src="@/assets/images/discord_social.png" alt="discord" />
				</a>
				<a
					href="https://youtube.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="soon__icon">
					<img src="@/assets/images/youtube_logo.png" alt="youtube" />
				</a>
				<a
					href="https://twitter.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="soon__icon">
					<img src="@/assets/images/twitter_logo.png" alt="twitter" />
				</a>
			</div>
			<p class="soon__madeby">
				MADE BY
				<a href="https://spacelabs.studio" target="_blank" rel="noopener noreferrer">
					SPACE LABS
				</a>
			</p>
		</div>
	</section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const email = ref('');
const gettingEmails = ref(false);
const hasReadPolicy = ref(false);
const submitStatus = ref('submit');
const titleRef = ref(null);
const formRef = ref(null);
const bottomRef = ref(null);

const submitForm = () => {
	console.log(email.value);
	console.log(gettingEmails.value);
	console.log(hasReadPolicy.value);
};

onMounted(() => {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate');
				} else {
					entry.target.classList.remove('animate');
				}
			});
		},
		{ threshold: 0.5 }
	);

	observer.observe(titleRef.value);
	observer.observe(formRef.value);
	observer.observe(bottomRef.value);
});
</script>

<style lang="scss" scoped>
@mixin animated {
	&:not(.animate) {
		opacity: 0;
		transform: translateY(15%);
	}
	transition: opacity 0.6s, transform 0.6s;
}
.soon {
	display: flex;
	flex-direction: column;
	gap: clamp(40px, 12vw, 170px);
	padding-inline: clamp(20px, 3vw, 51px);
	padding-bottom: clamp(16px, 1.6vw, 30px);
	padding-top: 13vw;
	&__content {
		align-self: center;
		display: flex;
		align-items: center;
		gap: clamp(20px, 6vw, 78px);
		flex-direction: column;
		h2 {
			@include animated;
			text-align: center;
		}
	}
	&__button {
		text-transform: uppercase;
		background-color: #fff;
		color: #000;
		font-weight: 700;
		font-size: clamp(20px, 1.8vw, 32px);
		padding-block: clamp(16px, 1.5vw, 26px);
		border-radius: 8px;
		transition: 0.3s;
		&:hover {
			background-color: rgba(#fff, 0.1);
			color: #fff;
		}
	}
	&__madeby {
		font-weight: 400;
		font-size: max(1.2vw, 16px);
		color: rgba(#fff, 0.77);
		@media only screen and (max-width: $bp-lg) {
			align-self: center;
		}
		@media only screen and (min-width: $bp-lg) {
			margin-left: auto;
			align-self: flex-end;
		}
	}
	&__input {
		padding-left: clamp(16px, 1.5vw, 26px);
		background: transparent;
		border: 1px solid #ffffff;
		border-radius: 8px;
		font-weight: 400;
		font-size: clamp(16px, 1.5vw, 30px);
		padding-block: clamp(16px, 1.6vw, 30px);
		position: relative;
		&::placeholder {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	&__checkbox {
		appearance: none;
		width: 22px;
		height: 22px;
		border: 1px solid;
		background: #1e1e1e;
		border-radius: 2px;
		border: 1px solid rgba(255, 255, 255, 0.35);
		position: relative;
		transition: background-color 0.3s;
		&::after {
			content: url('@/assets/icons/tick.svg');
			position: absolute;
			top: 50%;
			left: 50%;
			translate: -50% -50%;
			transition: transform 0.3s;
		}
		&:checked {
			background-color: #fff;
		}
		&:not(:checked)::after {
			transform: scale(0);
		}
	}
	&__row {
		display: grid;
		grid-template-columns: max-content 1fr;
		font-family: $font-alt, sans-serif;
		align-items: center;
		font-weight: 400;
		font-size: 10px;
		line-height: 1.2;
		gap: clamp(10px, 0.8vw, 15px);
		& > * {
			cursor: pointer;
		}
	}
	&__form {
		@include animated;
		max-width: 418px;
		display: flex;
		gap: clamp(20px, 1.4vw, 24px);
		flex-direction: column;
	}
	&__title {
		font-weight: 400;
		font-size: clamp(50px, 5vw, 70px);
		line-height: 1;
		color: transparent;
		background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.5) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	&__bottom {
		@include animated;
		display: flex;
		row-gap: 20px;
		@media only screen and (max-width: $bp-lg) {
			flex-direction: column;
		}
	}
	&__message {
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 2vw, 36px);
		&-text {
			max-width: 83ch;
			font-weight: 700;
			font-size: max(1.2vw, 16px);
			color: transparent;
			background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.5) 100%);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
	&__socials {
		align-self: center;
		display: flex;
		align-items: center;
		gap: 10px;
		@media only screen and (min-width: $bp-lg) {
			margin-left: 10%;
		}
	}
	&__icon {
		width: 30px;
		height: 30px;
	}
}
</style>
