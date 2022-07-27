<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

const isShowMobileNav = ref(false);
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

onClickOutside(navbarMenuRef, (event) => {
    if (isShowMobileNav.value) {
        isShowMobileNav.value = false;
    }
}, {
    ignore: [navbarBurgerRef]
})
</script>

<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                    :class="{ 'is-active': isShowMobileNav }" @click.prevent="isShowMobileNav = !isShowMobileNav"
                    data-target="navbarBasicExample" ref="navbarBurgerRef">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isShowMobileNav }"
                ref="navbarMenuRef">

                <div class="navbar-end">
                    <RouterLink to="/" class="navbar-item" active-class="is-active" @click="isShowMobileNav = false">
                        Notes</RouterLink>
                    <RouterLink to="/stats" class="navbar-item" active-class="is-active"
                        @click="isShowMobileNav = false">Stats</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<style>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>