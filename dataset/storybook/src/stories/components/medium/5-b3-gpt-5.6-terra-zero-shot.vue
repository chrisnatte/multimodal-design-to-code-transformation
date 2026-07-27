<template>
    <Card
        class="w-[488px] overflow-hidden rounded-xl"
        :pt="{
            root: { class: 'bg-white' },
            header: { class: 'p-0' },
            content: { class: 'p-0' }
        }"
    >
        <template #header>
            <div class="box-border h-[172px] w-full p-[10px]"></div>
        </template>

        <template #content>
            <div class="box-border flex h-[212px] flex-col gap-[7px] rounded-md p-[17.5px]">
                <div class="flex h-[22px] items-center gap-[7px]">
                    <span class="text-[17.5px] font-medium leading-[21px]">Produkt1</span>
                    <Tag value="Neu" severity="success" rounded class="text-[12.25px]" />
                </div>

                <div class="flex h-[92px] flex-col">
                    <span class="text-sm font-normal leading-[23px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </span>
                </div>

                <div class="box-border flex h-[49px] items-center justify-end gap-[8px] pt-4">
                    <InputNumber
                        v-model="quantity"
                        input-id="product-quantity"
                        :min="0"
                        show-buttons
                        button-layout="stacked"
                        class="w-[128px]"
                        :pt="{
                            input: { class: 'h-[31px] text-sm' },
                            incrementButton: { class: 'w-[35px]' },
                            decrementButton: { class: 'w-[35px]' }
                        }"
                    />
                    <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" class="h-[33px] text-sm" />
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