<template>
  <div class="articles__box">
    <div class="articles__card" v-for="card in articlesCards" :key="card.name">
      <img
        :src="require('@/assets/img/' + card.imgName)"
        alt="design card"
        class="articles__card-img"
      />
      <p class="articles__card-text">{{ card.text }}</p>
      <h3 class="articles__card-heading">{{ card.heading }}</h3>
      <div class="articles__card-flex">
        <p class="articles__card-date">{{ card.date }}</p>
        <router-link to="/articles" class="link-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
          >
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
            <path
              d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticlesCardsTemplate",

  props: {
    articlesCards: Object,
  },
};
</script>

<style lang="scss" scoped>
.articles {
  &__box {
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
  }
  &__card {
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    max-width: 381px;
    position: relative;
    transition: all 0.3s;

    &:hover {
      background-color: #f4f0ec;
    }
    &:hover svg circle {
      transition: fill 0.3s;
      fill: #fff;
    }

    &-img {
      margin-bottom: 21px;
      border-radius: 45px 45px 0px 0px;
    }
    &-text {
      font-size: 16px;
      letter-spacing: 0.16px;
      position: absolute;
      background-color: #fff;
      border-radius: 8px 8px 8px 0px;
      padding: 4px 8px 8px 10px;
      top: 250px;
      left: 40px;
    }
    &-heading {
      font-size: 25px;
      letter-spacing: 0.5px;
      margin-bottom: 30px;
      max-width: 296px;
      height: 70px;
    }
    &-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-date {
      font-size: 16px;
      letter-spacing: 0.16px;
    }
  }
}
</style>
