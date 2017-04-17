<template>
    <div class="AppNavBar">
        <span class="AppNavBarItem"
              v-bind:class="{ Active:menu.Selected }"
              v-for="menu in menus"
              v-bind:page-key="menu.Key"
              v-on:click="nav">
                        <span class="symbol">{{menu.Icon}}</span>
        <label>{{menu.Title}}</label>
        </span>
    </div>
</template>

<script>
import NavConfig from "../scripts/navconfig.js";

export default {
    data() {
        let viewModel = NavConfig;
        viewModel.nav = function (e) {
            viewModel.PageToggle(e.currentTarget.getAttribute("page-key"));
        };
        return viewModel;
    }
};
</script>