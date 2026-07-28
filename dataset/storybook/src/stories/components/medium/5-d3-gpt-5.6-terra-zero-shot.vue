<template>
    <Card class="w-[488px] overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <template #header>
            <div
                class="h-[172px] bg-[radial-gradient(circle_at_32%_18%,rgba(34,197,94,0.8),transparent_24%),radial-gradient(circle_at_78%_8%,rgba(22,163,74,0.42),transparent_28%),linear-gradient(135deg,#020617_0%,#061326_55%,#020617_100%)]"
            />
        </template>

        <template #content>
            <div class="flex flex-col gap-[7px]">
                <div class="flex items-center gap-[7px]">
                    <span class="text-[17.5px] font-medium text-slate-700">Produkt1</span>
                    <Tag
                        value="Neu"
                        rounded
                        class="!bg-emerald-100 !px-2 !py-1 !text-[12px] !font-bold !text-emerald-700"
                    />
                </div>

                <p class="m-0 text-sm leading-[23px] text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>

                <div class="flex items-center justify-end gap-2 pt-4">
                    <InputNumber
                        v-model="quantity"
                        input-id="quantity"
                        :min="1"
                        :use-grouping="false"
                        show-buttons
                        button-layout="stacked"
                        class="w-32"
                        input-class="!h-[31px] !text-sm"
                    />
                    <Button
                        label="Hinzufügen"
                        icon="pi pi-plus"
                        icon-pos="right"
                        class="!h-[33px] !bg-emerald-500 !px-3 !text-sm !font-medium !border-emerald-500 hover:!bg-emerald-600"
                    />
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputNumber from 'primevue/inputnumber';
import Tag from 'primevue/tag';

const quantity = ref(1);
</script>