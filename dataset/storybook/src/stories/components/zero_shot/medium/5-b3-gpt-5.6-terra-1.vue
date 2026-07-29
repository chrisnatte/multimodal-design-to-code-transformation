<template>
    <div class="flex h-[439px] w-[536px] flex-col gap-2.5 bg-white p-6">
        <Card
            class="h-[391px] w-full !rounded-xl !shadow-none"
            :pt="{
                body: { class: '!p-0' },
                content: { class: '!p-0' }
            }"
        >
            <template #header>
                <div class="flex h-[172px] w-full flex-col gap-2.5 p-2.5" aria-hidden="true"></div>
            </template>

            <template #content>
                <div class="flex h-[212px] w-full flex-col gap-[7px] rounded-md p-[17.5px]">
                    <div class="flex h-[22px] items-center gap-[7px]">
                        <span class="text-[17.5px] font-medium leading-[21px]">Produkt1</span>
                        <Tag value="Neu" rounded class="!bg-[#d1fae5] !text-[12.25px] !font-bold !text-[#059669]" />
                    </div>

                    <div class="flex h-[92px] flex-col">
                        <p class="m-0 text-sm font-normal leading-[23px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </div>

                    <div class="flex h-[49px] items-center gap-2 pt-4">
                        <InputNumber
                            v-model="quantity"
                            input-id="product-quantity"
                            :min="0"
                            show-buttons
                            button-layout="stacked"
                            class="ml-auto w-32"
                            input-class="!h-[31px] !text-sm"
                            :pt="{
                                incrementButton: { class: '!h-[16px] !w-[35px]' },
                                decrementButton: { class: '!h-[16px] !w-[35px]' }
                            }"
                            aria-label="Produktmenge"
                        />

                        <Button
                            label="Hinzufügen"
                            icon="pi pi-plus"
                            icon-pos="right"
                            class="!h-[33px] !bg-[#10b981] !border-[#10b981] !px-[11.5px] !text-sm"
                        />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputNumber from 'primevue/inputnumber';
import Tag from 'primevue/tag';

const quantity = ref(1);
</script>