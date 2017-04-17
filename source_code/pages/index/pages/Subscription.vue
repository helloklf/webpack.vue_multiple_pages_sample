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
                        title:"为了变美，女人有多丧心病狂",
                        desc:"江湖上流传的亚洲“四大邪术”，虽流派不同，却有一致功效——化腐朽为神奇，化神奇为惊天地鬼神泣。从古至今，总有女人始终恪守“生命诚可贵，爱情价更高。若为颜值故，两者皆可抛”的真理。"
                    }
                ]
            };

            return viewModel;
        }
    }
</script>