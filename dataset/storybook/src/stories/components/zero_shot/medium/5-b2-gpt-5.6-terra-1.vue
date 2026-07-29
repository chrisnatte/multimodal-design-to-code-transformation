<template>
    <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
        <Card
            class="w-[488px] overflow-hidden rounded-xl"
            :pt="{
                root: { class: 'flex flex-col gap-[7px]' },
                body: { class: '!p-0 !gap-0' },
                content: { class: '!p-0' }
            }"
        >
            <template #header>
                <div class="h-[172px] w-full p-2.5"></div>
            </template>

            <template #content>
                <div class="flex h-[212px] w-full flex-col gap-[7px] rounded-md p-[17.5px]">
                    <div class="flex h-[22px] items-center gap-[7px]">
                        <span class="text-[17.5px] font-medium leading-[21px]">Produkt1</span>
                        <Tag value="Neu" rounded />
                    </div>

                    <div class="flex h-[92px] flex-col">
                        <span class="text-sm font-normal leading-[23px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </span>
                    </div>

                    <div class="flex h-[49px] items-center justify-end gap-2 pt-4">
                        <InputNumber
                            v-model="quantity"
                            inputId="product-quantity"
                            aria-label="Produktmenge"
                            showButtons
                            buttonLayout="vertical"
                            :min="1"
                            class="h-[31px] w-32"
                            inputClass="!h-[31px] !py-[7px] !px-[10.5px] text-sm"
                        >
                            <template #incrementbuttonicon>
                                <span class="pi pi-angle-up text-sm"></span>
                            </template>
                            <template #decrementbuttonicon>
                                <span class="pi pi-angle-down text-sm"></span>
                            </template>
                        </InputNumber>

                        <Button
                            label="Hinzufügen"
                            icon="pi pi-plus"
                            iconPos="right"
                            class="!h-[33px] !px-[11.5px] !py-2 text-sm"
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