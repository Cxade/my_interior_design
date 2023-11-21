<template>
  <div id="app">
    <header class="header">
      <div class="header__main center">
        <router-link to="/" class="header__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
              fill="#CDA274"
            />
          </svg>
          <h2 class="header__logo-text">Interno</h2>
          <!-- <a href="index.html" class="header__logo-text">Interno</a> -->
        </router-link>
        <nav class="navigation__header">
          <router-link to="/" class="navigation__link">Home</router-link>
          <router-link to="/" class="navigation__link">Project</router-link>
          <router-link to="/blog" class="navigation__link">Blog</router-link>
        </nav>
      </div>
    </header>
    <router-view />
    <footer class="footer">
      <div class="footer__main center">
        <div class="footer__left">
          <router-link to="/" class="header__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                fill="#CDA274"
              />
            </svg>
            <h2 to="/" class="header__logo-text">Interno</h2>
          </router-link>
          <p class="footer__left-text">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div class="footer__left-social">
            <a href="#"
              ><img
                src="./assets/img/x-twitter.svg"
                alt="twitter icon"
                height="22px"
            /></a>
            <a href="#"
              ><img
                src="./assets/img/linkedin-in.svg"
                alt="linkedin-in icon"
                height="22px"
            /></a>
          </div>
        </div>
        <div class="footer__mid">
          <h3 class="footer__mid-heading">Pages</h3>
          <nav class="navigation__footer">
            <router-link to="/" class="navigation__link">Home </router-link>
            <router-link to="/" class="navigation__link">Project</router-link>
            <router-link to="/blog" class="navigation__link">Blog</router-link>
          </nav>
        </div>
        <div class="footer__right">
          <h3 class="footer__right-title">Contact</h3>
          <p class="footer__right-text">
            55 East Birchwood Ave. Brooklyn, New York 11201
          </p>
          <p class="footer__right-text footer__right-mail">
            contact@interno.com
          </p>
          <p class="footer__right-text">(123) 456 - 7890</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.navigation {
  &__link {
    color: $secondColor;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 300%;
    transition: color 0.1s;

    &:hover {
      color: $mainColor;
    }
  }
  &__header {
    display: flex;
    gap: 50px;
  }
  &__footer {
    display: flex;
    flex-direction: column;
  }
}
.header {
  &__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 53px 0 57px 0;
  }

  &__logo {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  &__logo-text {
    color: $secondColor;
    font-size: 40px;
    line-height: 125%;
  }
}
.footer {
  &__main {
    display: flex;
    margin-bottom: 134px;
  }
  &__left {
    max-width: 394px;
    margin-right: 101px;

    &-text {
      color: $textColor;
      font-size: 22px;
      letter-spacing: 0.22px;
      margin-top: 18px;
      margin-bottom: 30px;
    }
    &-social {
      display: flex;
      gap: 54px;
    }
  }

  &__mid {
    display: flex;
    flex-direction: column;
    max-width: 125px;
    margin-right: 322px;

    &-heading {
      color: $secondColor;
      font-size: 25px;
      margin-bottom: 9px;
    }
  }

  &__right {
    max-width: 258px;
    &-title {
      color: $secondColor;
      font-size: 25px;
      margin-bottom: 26px;
    }

    &-text {
      color: $textColor;
      font-size: 22px;
      letter-spacing: 0.22px;
    }

    &-mail {
      line-height: 300%;
    }
  }
}
</style>
