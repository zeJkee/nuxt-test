<template>
  <div class="spinner">
    Loading ...
  </div>
</template>

<style scoped lang="scss">

.spinner {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border: 1em solid rgba(204, 204, 204, 0.40);
  border-left: 1.1em solid var(--secondary-background);
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>