<template>
    <Card class="w-[488px] overflow-hidden rounded-xl border border-surface-200 shadow-sm">
        <template #header>
            <div class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
                <div class="absolute -left-10 -top-16 h-64 w-64 rounded-full border border-emerald-300/30 bg-gradient-to-br from-emerald-400/80 via-emerald-600/40 to-slate-950 shadow-[inset_-20px_-20px_35px_rgba(0,0,0,0.6)]"></div>
                <div class="absolute -bottom-24 right-12 h-44 w-44 rounded-full border border-emerald-300/30 bg-gradient-to-br from-emerald-400/80 via-emerald-600/40 to-slate-950 shadow-[inset_-16px_-16px_28px_rgba(0,0,0,0.6)]"></div>
                <div class="absolute inset-x-0 bottom-0 h-8 bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div class="absolute left-[112px] top-[43px] h-20 w-16 rotate-[-8deg] rounded-[45%_45%_38%_38%] bg-emerald-500 shadow-[inset_-8px_-9px_0_rgba(6,78,59,0.75)]">
                    <div class="absolute -left-3 top-1 h-10 w-8 rotate-[-22deg] bg-emerald-400 [clip-path:polygon(50%_0,100%_35%,80%_100%,0_78%,0_25%)]"></div>
                    <div class="absolute -right-3 top-1 h-10 w-8 rotate-[22deg] bg-emerald-400 [clip-path:polygon(50%_0,100%_25%,100%_78%,20%_100%,0_35%)]"></div>
                    <div class="absolute -left-1 -top-5 h-7 w-[68px] bg-slate-500 [clip-path:polygon(0_35%,25%_10%,42%_32%,57%_0,100%_30%,84%_100%,17%_100%)]"></div>
                    <div class="absolute left-3 top-7 h-2 w-2 rounded-full bg-slate-950"></div>
                    <div class="absolute right-3 top-7 h-2 w-2 rounded-full bg-slate-950"></div>
                </div>
            </div>
        </template>

        <template #content>
            <div class="flex flex-col gap-[7px]">
                <div class="flex items-center gap-[7px]">
                    <span class="text-[17.5px] font-medium leading-[22px] text-slate-700">Produkt1</span>
                    <Tag
                        value="Neu"
                        rounded
                        class="!bg-emerald-100 !px-[7px] !py-[3px] !text-[12.25px] !font-bold !text-emerald-700"
                    />
                </div>

                <p class="m-0 text-sm leading-[23px] text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </div>
        </template>

        <template #footer>
            <div class="flex items-center justify-end gap-2 pt-4">
                <InputNumber
                    v-model="quantity"
                    inputId="quantity"
                    showButtons
                    buttonLayout="vertical"
                    :min="1"
                    :useGrouping="false"
                    class="w-32"
                    inputClass="!h-[31px] !text-sm"
                    aria-label="Menge"
                >
                    <template #incrementbuttonicon>
                        <span class="pi pi-angle-up text-xs" />
                    </template>
                    <template #decrementbuttonicon>
                        <span class="pi pi-angle-down text-xs" />
                    </template>
                </InputNumber>
                <Button
                    label="Hinzufügen"
                    icon="pi pi-plus"
                    iconPos="right"
                    class="!h-[33px] !border-emerald-500 !bg-emerald-500 !px-3 !text-sm hover:!border-emerald-600 hover:!bg-emerald-600"
                />
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