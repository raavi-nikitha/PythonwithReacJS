
import React from 'react';
function Header() {
    return (
        <header>
            <div class="ma__brand-banner ma__brand-banner--c-primary-alt-bg-light">
  <button
    class="ma__brand-banner-container"
    aria-controls="ma__brand-banner-content"
    aria-expanded="false"
  >
    <img
      class="ma__brand-banner-logo"
      src="https://unpkg.com/@massds/mayflower-assets@14.0.0/static/images/logo/stateseal.png"
      alt="Massachusetts State Seal"
    />
    <span class="ma__brand-banner-text">
      <span>An official website of the Commonwealth of Massachusetts</span>
      <span>   </span>
      <span
        class="ma__brand-banner-button ma__button-icon ma__icon-small ma__button-icon--quaternary ma__button-icon--c-primary-alt"
      >
        <span>Here&#x27;s how you know</span>
        <svg
          aria-hidden="true"
          width="1em"
          height="1em"
          viewBox="0 0 59 38"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.414 37.657L.344 8.586 8.828.102l20.586 20.584L50 .1l8.484 8.485-29.07 29.072"
          ></path>
        </svg>
      </span>
    </span>
  </button>
  <ul class="ma__brand-banner-expansion" id="ma__brand-banner-content">
    <li class="ma__brand-banner-expansion-item">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 16 16"
        fill="#14558F"
      >
        <path
          d="M8.73 1.592V0H7.27v1.592c-2.06.364-3.63 2.239-3.63 4.503h8.72c0-2.264-1.57-4.14-3.63-4.503zm6.54 9.837h-2.18V8.38c0-.42-.32-.762-.73-.762H3.64c-.41 0-.73.341-.73.762v3.048H.73c-.4 0-.73.34-.73.761v3.048c0 .421.33.762.73.762h14.54c.4 0 .73-.34.73-.762v-3.047c0-.421-.33-.762-.73-.762zM2.91 14.476H1.45v-1.524h1.46zm2.91 0H4.36v-1.524h1.46zm0-3.81H4.36V9.144h1.46zm2.91 3.81H7.27v-1.524h1.46zm0-3.81H7.27V9.144h1.46zm2.91 3.81h-1.46v-1.524h1.46zm0-3.81h-1.46V9.144h1.46zm2.91 3.81h-1.46v-1.524h1.46z"
        ></path>
      </svg>
      <div class="ma__brand-banner-expansion-item-content">
        <p>Official websites use .mass.gov</p>
        <p>
          A .mass.gov website belongs to an official government organization in
          Massachusetts.
        </p>
      </div>
    </li>
    <li class="ma__brand-banner-expansion-item">
      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21 25"
        aria-hidden="true"
        fill="#388557"
      >
        <path
          d="M10.399 0a6.491 6.491 0 016.487 6.258l.004.233-.001 3.853h2.077c.952 0 1.724.773 1.724 1.725v11.207c0 .952-.772 1.724-1.724 1.724H1.724A1.724 1.724 0 010 23.276V12.069c0-.952.772-1.724 1.724-1.724l2.184-.001V6.491l.004-.233A6.491 6.491 0 0110.4 0zm0 1.517A4.974 4.974 0 005.43 6.275l-.005.216v3.853h9.947V6.491l-.004-.216a4.974 4.974 0 00-4.97-4.758z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <div class="ma__brand-banner-expansion-item-content">
        <p>Secure websites use HTTPS certificate</p>
        <p>
          A lock icon (
          <svg
            width="12"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 25"
            aria-hidden="true"
          >
            <path
              d="M10.399 0a6.491 6.491 0 016.487 6.258l.004.233-.001 3.853h2.077c.952 0 1.724.773 1.724 1.725v11.207c0 .952-.772 1.724-1.724 1.724H1.724A1.724 1.724 0 010 23.276V12.069c0-.952.772-1.724 1.724-1.724l2.184-.001V6.491l.004-.233A6.491 6.491 0 0110.4 0zm0 1.517A4.974 4.974 0 005.43 6.275l-.005.216v3.853h9.947V6.491l-.004-.216a4.974 4.974 0 00-4.97-4.758z"
              fill-rule="evenodd"
            ></path>
          </svg>
          ) or https:// means you’ve safely connected to the official website.
          Share sensitive information only on official, secure websites.
        </p>
      </div>
    </li>
  </ul>
</div>
           <div class="ma__header_slim">
  <div class="ma__header_slim__utility">
    <div class="ma__header_slim__utility-container ma__container"></div>
  </div>
  <header class="ma__header_slim__header" id="header">
    <div class="ma__header_slim__header-container ma__container">
      <div class="ma__header_slim__logo">
        <div class="ma__site-logo">
          <a href="https://www.mass.gov/" title="Mass.gov homepage">
            <img
              class="ma__image"
              src="https://unpkg.com/@massds/mayflower-assets@14.0.0/static/images/logo/stateseal.png"
              alt="Massachusetts state seal"
              width="45"
              height="45"
            />
            <span>Mass.gov</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</div>
</header>

    );
}

export default Header