<template>
    <main class="flex min-h-screen items-start justify-center bg-white p-6">
        <Card
            class="w-full max-w-[488px] overflow-hidden rounded-xl border border-surface-200 shadow-sm"
            :pt="{
                body: { class: 'p-0 gap-0' },
                content: { class: 'p-0' }
            }"
        >
            <template #header>
                <div class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
                    <div class="absolute -left-2 -top-10 h-48 w-48 rounded-full border border-emerald-300/25 bg-gradient-to-br from-emerald-400/80 via-emerald-700/45 to-slate-950/80 shadow-[inset_0_0_28px_rgba(134,239,172,0.45)]"></div>
                    <div class="absolute -bottom-20 right-10 h-36 w-36 rounded-full border border-emerald-300/25 bg-gradient-to-br from-emerald-400/80 via-emerald-700/45 to-slate-950/80"></div>
                    <div class="absolute inset-x-0 bottom-0 h-12 bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                    <div class="absolute left-[112px] top-[48px] flex h-20 w-20 items-center justify-center rounded-[35%] bg-emerald-500/80 shadow-lg">
                        <i class="pi pi-box text-4xl text-emerald-950"></i>
                    </div>
                    <div class="absolute bottom-[-4px] right-[72px] flex h-16 w-16 items-center justify-center rounded-[35%] bg-emerald-500/80 shadow-lg">
                        <i class="pi pi-box text-2xl text-emerald-950"></i>
                    </div>
                </div>
            </template>

            <template #content>
                <div class="flex flex-col gap-[7px] p-[17.5px]">
                    <div class="flex items-center gap-[7px]">
                        <h2 class="text-[17.5px] font-medium leading-[22px] text-slate-700">Produkt1</h2>
                        <Tag
                            value="Neu"
                            rounded
                            class="!bg-emerald-100 !px-[7px] !py-[3px] !text-[12px] !font-bold !text-emerald-700"
                        />
                    </div>

                    <p class="m-0 text-sm leading-[23px] text-slate-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>

                    <div class="flex items-center justify-end gap-2 pt-4">
                        <InputNumber
                            v-model="quantity"
                            inputId="product-quantity"
                            aria-label="Menge"
                            showButtons
                            buttonLayout="vertical"
                            :min="1"
                            class="h-[31px] w-32"
                            inputClass="!h-[31px] !px-2.5 !py-1 !text-sm"
                        >
                            <template #incrementbuttonicon>
                                <span class="pi pi-angle-up text-xs"></span>
                            </template>
                            <template #decrementbuttonicon>
                                <span class="pi pi-angle-down text-xs"></span>
                            </template>
                        </InputNumber>

                        <Button
                            label="Hinzufügen"
                            icon="pi pi-plus"
                            iconPos="right"
                            size="small"
                            class="!h-[33px] !border-emerald-500 !bg-emerald-500 !px-3 !text-sm hover:!border-emerald-600 hover:!bg-emerald-600"
                        />
                    </div>
                </div>
            </template>
        </Card>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputNumber from 'primevue/inputnumber';
import Tag from 'primevue/tag';

const quantity = ref(1);
</script>