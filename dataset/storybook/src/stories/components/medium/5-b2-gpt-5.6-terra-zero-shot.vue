<template>
    <div class="flex h-[391px] w-[488px] flex-col gap-[7px] overflow-hidden rounded-xl bg-white">
        <div class="h-[172px] shrink-0 p-[10px]"></div>

        <div class="flex h-[212px] flex-col gap-[7px] rounded-md p-[17.5px]">
            <div class="flex h-[22px] items-center gap-[7px]">
                <span class="text-[17.5px] font-medium">Produkt1</span>
                <Tag value="Neu" rounded class="!bg-[#d1fae5] !text-[#047857]" />
            </div>

            <div class="h-[92px] text-sm font-normal leading-[18.4px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </div>

            <div class="flex h-[49px] items-center justify-end gap-2 pt-4">
                <InputNumber
                    v-model="quantity"
                    inputId="product-quantity"
                    aria-label="Produktmenge"
                    showButtons
                    buttonLayout="vertical"
                    :min="0"
                    class="h-[31px] w-[128px]"
                    inputClass="h-[31px] !py-0"
                >
                    <template #incrementbuttonicon>
                        <span class="pi pi-angle-up" />
                    </template>
                    <template #decrementbuttonicon>
                        <span class="pi pi-angle-down" />
                    </template>
                </InputNumber>

                <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" class="h-[33px]" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import Tag from 'primevue/tag';

const quantity = ref(1);
</script>