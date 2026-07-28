<template>
    <main class="min-h-screen bg-white p-6">
        <Card class="w-[488px] overflow-hidden border border-surface-200 shadow-sm">
            <template #header>
                <div class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
                    <div class="absolute -left-5 -top-8 h-48 w-48 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-800 to-slate-950 opacity-90 shadow-2xl"></div>
                    <div class="absolute left-16 top-10 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/30 text-emerald-300 shadow-xl">
                        <i class="pi pi-shield text-5xl"></i>
                    </div>
                    <div class="absolute -bottom-20 right-10 h-36 w-36 rounded-full bg-gradient-to-br from-emerald-300 via-emerald-700 to-slate-950 opacity-90"></div>
                    <div class="absolute inset-x-0 bottom-0 h-8 border-t border-emerald-600/10 bg-[linear-gradient(rgba(16,185,129,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.12)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                </div>
            </template>

            <template #content>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                        <h1 class="m-0 text-lg font-semibold text-surface-700">Produkt1</h1>
                        <Tag value="Neu" severity="success" class="text-xs" />
                    </div>

                    <p class="m-0 text-[15px] leading-[1.5] text-surface-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </div>
            </template>

            <template #footer>
                <div class="mt-3 flex items-center justify-end gap-2">
                    <InputNumber
                        v-model="quantity"
                        inputId="quantity"
                        :min="1"
                        showButtons
                        buttonLayout="stacked"
                        class="w-[106px]"
                        inputClass="w-[72px]"
                        aria-label="Menge"
                    />
                    <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="success" size="small" />
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