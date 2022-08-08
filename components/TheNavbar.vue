<template>
  <nav class="navbar">
    <ul>
      <li>
        <NuxtLink active-class="active" to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink active-class="active" to="/characters/1">Walter White</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>

  nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    min-height: 50px;
    background-color: var(--primary-background-035);

    ul {
      display: flex;
      list-style: none;
      margin-left: auto;
      padding-left: 0;

      li {
        margin-right: 0.5em;
      }
    }
    
    a {
      color: #fff;
      text-decoration: none;
      padding: 0.5rem 1.5rem;

      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }

      &.active {
        background-color: #fff;
        color: #000;
        cursor: default;
      }
    }
  }

  @media (max-width: 576px) {
    nav {
      position: inherit;
      padding: 0.15rem 1rem;
      background-color: var(--secondary-background);

      a {
        padding: 0.3rem 1rem;
      }
    }
  }

</style>