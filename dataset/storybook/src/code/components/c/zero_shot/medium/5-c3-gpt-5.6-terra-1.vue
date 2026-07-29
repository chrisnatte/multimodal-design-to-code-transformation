<template>
    <main class="flex min-h-screen items-start justify-center bg-white p-6">
        <Card class="w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <template #header>
                <div class="relative h-[172px] overflow-hidden bg-[#020a1e]">
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_36%_5%,rgba(51,193,83,0.72),transparent_22%),radial-gradient(circle_at_76%_0%,rgba(0,151,71,0.38),transparent_24%),linear-gradient(135deg,#05091c_0%,#020916_55%,#061126_100%)]"></div>
                    <div class="absolute inset-x-0 bottom-0 h-8 bg-[linear-gradient(rgba(23,64,87,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(23,64,87,0.22)_1px,transparent_1px)] bg-[size:20px_12px] [transform:perspective(100px)_rotateX(55deg)]"></div>

                    <div class="absolute -left-2 -top-6 flex h-[205px] w-[205px] items-center justify-center rounded-full border border-emerald-200/20 bg-[radial-gradient(circle_at_35%_20%,rgba(79,218,91,0.86),rgba(9,61,37,0.78)_43%,rgba(4,12,33,0.95)_72%)] shadow-[inset_0_-18px_22px_rgba(87,105,155,0.42)]">
                        <div class="relative flex h-24 w-20 items-center justify-center">
                            <i class="pi pi-shield relative z-10 text-[72px] text-emerald-400 drop-shadow-[0_3px_0_rgba(4,50,39,0.9)]"></i>
                            <i class="pi pi-star absolute top-4 z-20 text-lg text-slate-600"></i>
                        </div>
                    </div>

                    <div class="absolute -bottom-16 right-16 h-28 w-28 rounded-full border border-emerald-200/20 bg-[radial-gradient(circle_at_35%_20%,rgba(74,208,91,0.85),rgba(10,66,45,0.85)_47%,rgba(4,12,33,0.96)_76%)]">
                        <i class="pi pi-shield absolute left-8 top-8 text-4xl text-emerald-300"></i>
                    </div>
                </div>
            </template>

            <template #content>
                <div class="px-4 pt-5">
                    <div class="flex items-center gap-2">
                        <h1 class="text-lg font-medium leading-5 text-slate-700">Produkt1</h1>
                        <Tag value="Neu" severity="success" class="text-xs" />
                    </div>

                    <p class="mt-2 text-[15px] leading-[23px] text-slate-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </div>
            </template>

            <template #footer>
                <div class="flex items-center justify-end gap-2 px-4 pb-4 pt-5">
                    <InputNumber
                        v-model="quantity"
                        input-id="quantity"
                        :min="1"
                        show-buttons
                        class="w-[126px]"
                        input-class="!w-[94px] !py-1 !text-sm"
                    />
                    <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" class="!h-8 !px-3 !text-sm" />
                </div>
            </template>
        </Card>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const quantity = ref(1)
</script>