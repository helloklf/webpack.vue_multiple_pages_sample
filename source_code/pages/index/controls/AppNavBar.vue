<template>
    <div class="AppNavBar">
        <span class="AppNavBarItem"
              v-bind:class="{ Active:page.Selected }"
              v-for="page in pages"
              v-bind:page-key="page.Key"
              v-on:click="nav">
                            <span class="symbol">{{page.Icon}}</span>
        <label>{{page.Title}}</label>
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

<style>
@import "../Styles/AppNavBar.css";
</style>