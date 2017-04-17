<template>
    <div>
        <div class="Block Padding-All" v-for="item in datas">
            <h4 class="Vue">{{item.title}}</h4>
            <h6>{{item.desc}}</h6>
        </div>
    </div>
</template>

<style scoped>
    h4,h6{
        padding: 0;
        margin: 0;
    }
    h6{
        margin-top: 1em;
        color: #888;
    }
</style>

<script>
    export default {
        data(){
            let viewModel = {
                datas:[
                    {
                        title:"Steam 创意工坊 :: The spider mounts",
                        desc:"浏览Steam 新品 优惠 免费游戏 按用户标签 热门新品 热销商品 即将推出 优惠-42% ¥ 36 ¥ 21 The Secret Order 5: The Buried Kingdom 休闲, 冒险,..."
                    }
                ]
            };

            return viewModel;
        }
    }
</script>