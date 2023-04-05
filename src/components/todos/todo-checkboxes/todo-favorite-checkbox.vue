<script setup lang="ts">
  const props = defineProps<{ isFavorite: boolean }>();
</script>

<template>
  <label class="favorite-checkbox">
    <span class="visually-hidden">Set to favorite</span>
    <input
      class="favorite-checkbox__input"
      type="checkbox"
      :value="props.isFavorite"
      :checked="props.isFavorite"
      @change="$emit('favoriteChangeHandler')"
    />
    <span class="favorite-checkbox__checkmark">
      <svg
        class="favorite-checkbox__icon"
        width="26"
        height="24"
        viewBox="0 0 26 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0489 0.927052C12.3483 0.00574109 13.6517 0.00573986 13.9511 0.92705L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.776 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"
        />
      </svg>
    </span>
  </label>
</template>

<style scoped>
  .favorite-checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
    padding: 0 10px;
  }

  .favorite-checkbox:hover .favorite-checkbox__input ~ .favorite-checkbox__checkmark {
    opacity: 0.5;
  }

  .favorite-checkbox
    .favorite-checkbox__input:checked
    ~ .favorite-checkbox__checkmark
    .favorite-checkbox__icon {
    fill: #edca9c;
  }

  .favorite-checkbox__input {
    height: 0;
    width: 0;
    margin: 0;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .favorite-checkbox__checkmark {
    background-color: var(--white);
  }

  .favorite-checkbox__icon {
    display: block;
    fill: #f6efe7;
  }
</style>
