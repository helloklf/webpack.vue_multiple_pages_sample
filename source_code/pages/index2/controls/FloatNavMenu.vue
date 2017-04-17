<template>
    <div>
        <div class="FloatMenuBtn" id="FloatMenuBtn" v-on:click="ToggleDisplayClick"></div>
        <div class="FloatMenu">
            <div class="FloatMenuItem" v-on:click="PageClick" v-for="menu in menus" v-bind:page-key="menu.Key" v-bind:href="menu.Url">
                <span class="Icon Symbol">{{menu.Icon}}</span>
                <span class="Text">{{menu.Title}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import NavConfig from "../scripts/navconfig.js";

    export default {
        data() {
            let viewModel = NavConfig;

            viewModel.PageClick = function (e) {
                let pageKey = e.currentTarget.getAttribute("page-key");
                viewModel.PageToggle(pageKey);
                viewModel.ToggleDisplayClick();
            },

            viewModel.ToggleDisplayClick = function (e) {
                let floatMenuBtn = document.getElementById("FloatMenuBtn");

                if (!floatMenuBtn.classList.contains("Active"))
                    floatMenuBtn.classList.add('Active');
                else
                    floatMenuBtn.classList.remove('Active');
            };

            return viewModel;
        }
    };

</script>


<style scoped>
    @import "../Styles/FloatNavMenu.css";
</style>