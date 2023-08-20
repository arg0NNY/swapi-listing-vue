<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink :to="{ name: 'people-list' }">People</RouterLink></li>
        <li><RouterLink :to="{ name: 'people-favorites' }">Favorites</RouterLink></li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>
