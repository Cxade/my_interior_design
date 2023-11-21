<template>
  <div class="blog">
    <div class="banner">
      <div class="banner__inside">
        <h2 class="banner__heading">Articles & News</h2>
        <p class="banner__text">Home / Blog</p>
      </div>
    </div>
    <section class="post">
      <div class="post__main center">
        <h2 class="post__heading">Latest Post</h2>
        <div class="post__card">
          <img
            src="../assets/img/blog_post.jpg"
            class="post__img"
            alt="latest post"
          />
          <div class="post__card-content">
            <h3 class="post__card-heading">
              Low Cost Latest Invented Interior Designing Ideas
            </h3>
            <p class="post__card-text">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief.
            </p>
            <p class="post__card-text">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
            <div class="post__card-box">
              <p class="post__card-date">26 December,2022</p>
              <a href="#" class="link-arrow">
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
                    stroke="#292f36"
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
    <section class="articles">
      <div class="articles__main center">
        <h1 class="articles__heading flex">Articles & News</h1>
        <ArticlesCardsTemplate :articlesCards="articlesCards" />
        <div class="articles__swiper-box">
          <div class="articles__swiper">
            <p class="articles__swiper-text">01</p>
          </div>
          <div class="articles__swiper">02</div>
          <div class="articles__swiper">03</div>
          <div class="articles__swiper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
            >
              <path
                d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                stroke="#292f36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArticlesCardsTemplate from "@/components/ArticlesCardsTemplate.vue";
export default {
  name: "PageBlog",
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
        card_4: {
          imgName: "design4.png",
          text: "Kitchen Design",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        card_5: {
          imgName: "design5.png",
          text: "Living Design",
          heading: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        card_6: {
          imgName: "design6.png",
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

.banner {
  background: no-repeat center 80% url("@/assets/img/blog_top.png");
  background-color: #e7e7e7;
  height: 356px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 200px;

  &__inside {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 41px 78px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
  }
  &__heading {
    color: $secondColor;
    font-size: 50px;
  }
  &__text {
    color: $textColor;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}
.post {
  margin-bottom: 150px;

  &__heading {
    color: $secondColor;
    font-size: 50px;
    letter-spacing: 1px;
    margin-bottom: 27px;
  }
  &__card {
    display: flex;
    align-items: center;
    gap: 65px;
    padding: 22px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  }
  &__img {
    border-radius: 50px;
  }
  &__card-content {
    display: flex;
    flex-direction: column;
    max-width: 489px;
    height: 375px;
  }
  &__card-heading {
    color: $secondColor;
    font-size: 25px;
    letter-spacing: 0.5px;
    margin-bottom: 22px;
  }
  &__card-text {
    color: $textColor;
    font-size: 22px;
    letter-spacing: 0.22px;
    margin-bottom: 41px;
    max-width: 469px;
  }
  &__card-box {
    display: flex;
    justify-content: space-between;
  }
  &__card-date {
    color: $textColor;
    font-size: 16px;
    letter-spacing: 0.16px;
  }
}
.articles {
  margin-bottom: 200px;
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

  &__swiper-box {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 51px;
  }
  &__swiper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    border-radius: 50px;
    border: 1px solid $mainColor;

    &:first-child {
      border: none;
      background-color: $backColor;
    }

    &-text {
      color: $secondColor;
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>
