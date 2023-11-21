<template>
  <div class="home">
    <section class="welcome">
      <div class="welcome__main center">
        <div class="welcome__content">
          <h1 class="welcome__title">Let Your Home Be Unique</h1>
          <p class="welcome__text">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
          <button class="welcome__button">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M1 8.43536L14.7232 8.29851M9.61818 1.91132L16.1412 8.4343L9.48677 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
    <section class="projects">
      <div class="projects__main center">
        <div class="projects__top-box">
          <h1 class="projects__title">Follow Our Projects</h1>
          <p class="projects__text">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div class="projects__kitchen-box">
          <div
            class="projects__kitchen"
            v-for="card in projectKitchenCardsName"
            :key="card.key"
          >
            <img
              :src="require('@/assets/img/' + card)"
              alt="kitchen"
              class="projects__kitchen-img"
            />
            <div class="projects__kitchen-content">
              <div>
                <h3 class="projects__kitchen-heading">Modern Kitchen</h3>
                <p class="projects__kitchen-text">Decor / Artchitecture</p>
              </div>
              <a href="#" class="link-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                  <path
                    d="M32 44L40 35L32 26"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="experience">
      <div class="experience__main center">
        <div class="experience__box">
          <p class="experience__heading">12</p>
          <p class="experience__text">Years Of Experiance</p>
        </div>
        <div class="experience__line"></div>
        <div class="experience__box">
          <p class="experience__heading">85</p>
          <p class="experience__text">Success Project</p>
        </div>
        <div class="experience__line"></div>
        <div class="experience__box">
          <p class="experience__heading">15</p>
          <p class="experience__text">Active Project</p>
        </div>
        <div class="experience__line"></div>
        <div class="experience__box">
          <p class="experience__heading">95</p>
          <p class="experience__text">Happy CUstomers</p>
        </div>
      </div>
    </div>
    <section class="articles">
      <div class="articles__main center">
        <h2 class="articles__heading">Articles & News</h2>
        <p class="articles__text">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
        <ArticlesCardsTemplate
          :articlesCards="articlesCards"
          :slides-per-view="3"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ArticlesCardsTemplate from "@/components/ArticlesCardsTemplate.vue";

export default {
  name: "PageHome",
  components: {
    ArticlesCardsTemplate,
  },
  data() {
    return {
      projectKitchenCardsName: {
        name_1: "kitchen1.png",
        name_2: "kitchen2.png",
        name_3: "kitchen3.png",
        name_4: "kitchen4.png",
      },
      articlesCards: {
        card_1: {
          imgName: "design1.png",
          text: "Kitchen Design",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        card_2: {
          imgName: "design2.png",
          text: "Living Design",
          heading: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        card_3: {
          imgName: "design3.png",
          text: "Interior Design",
          heading: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.welcome {
  &__main {
    background-image: url(@/assets/img/main_img.png);
    padding: 208px 0 208px 52px;
    border-radius: 50px;
    background-size: cover;
    margin-bottom: 96px;
  }
  &__content {
    max-width: 434px;
  }
  &__title {
    font-size: 65px;
    margin-bottom: 18px;
  }
  &__text {
    font-size: 22px;
    letter-spacing: 0.22px;
    margin-bottom: 21px;
  }
  &__button {
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
    padding: 26px 48px;
    border-radius: 18px;
    background-color: $secondColor;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.1s;

    &:hover {
      cursor: pointer;
      // outline: 3px solid #cda274;
      background-color: $mainColor;
    }
    &:hover svg path {
      stroke: $secondColor;
    }
  }
}
.projects {
  &__top-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__title {
    color: $secondColor;
    text-align: center;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }
  &__text {
    color: $textColor;
    text-align: center;
    font-size: 22px;
    letter-spacing: 0.22px;
    margin-bottom: 93px;
    max-width: 738px;
  }
  &__kitchen-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 96px;
  }
  &__kitchen-box &__kitchen:nth-child(4n-3) img {
    border-radius: 0 80px 0 0;
  }
  &__kitchen-box &__kitchen:nth-child(4n-2) img {
    border-radius: 80px 0 0 0;
  }
  &__kitchen-box &__kitchen:nth-child(4n-1) img {
    border-radius: 0 0 80px 0;
  }
  &__kitchen-box &__kitchen:nth-child(4n) img {
    border-radius: 0 0 0 80px;
  }

  &__kitchen {
    max-width: 548px;
    margin-bottom: 56px;
  }
  &__kitchen-img {
    margin-bottom: 24px;
  }
  &__kitchen-content {
    display: flex;
    justify-content: space-between;
  }
  &__kitchen-heading {
    color: $secondColor;
    font-size: 25px;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
  }
  &__kitchen-text {
    color: $textColor;
    font-size: 22px;
    letter-spacing: 0.22px;
  }
}

.experience {
  background-color: $backColor;
  margin-bottom: 96px;

  &__main {
    padding: 150px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 76px;
  }

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__heading {
    color: $mainColor;
    font-size: 85px;
    letter-spacing: 1.7px;
  }

  &__text {
    color: $textColor;
    font-size: 22px;
    letter-spacing: 0.22px;
  }

  &__line {
    background-color: $mainColor;
    width: 1px;
    height: 130px;
  }
}

.articles {
  margin-bottom: 96px;
  &__heading {
    color: $secondColor;
    text-align: center;
    font-size: 50px;
    letter-spacing: 1px;
    margin-bottom: 12px;
  }
  &__text {
    color: $textColor;
    text-align: center;
    font-size: 22px;
    letter-spacing: 0.22px;
    margin-bottom: 52px;
  }
}
</style>
