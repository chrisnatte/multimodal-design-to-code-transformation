<template>
    <main class="min-h-screen bg-white p-6">
        <Card class="w-full max-w-[30.5rem] overflow-hidden">
            <template #header>
                <div class="relative h-43 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950">
                    <div class="absolute -top-12 left-15 flex h-51 w-51 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-emerald-700 to-slate-900 shadow-2xl">
                        <div class="flex h-27 w-27 items-center justify-center rounded-full bg-slate-950/30">
                            <i class="pi pi-shield text-6xl text-emerald-300"></i>
                        </div>
                    </div>
                    <div class="absolute -bottom-17 right-13 flex h-35 w-35 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 via-emerald-700 to-slate-900">
                        <i class="pi pi-shield text-4xl text-emerald-200"></i>
                    </div>
                    <div class="absolute inset-x-0 bottom-0 h-8 border-t border-emerald-400/10 bg-[linear-gradient(rgba(34,197,94,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.08)_1px,transparent_1px)] bg-size-[24px_16px]"></div>
                </div>
            </template>

            <template #content>
                <div class="flex items-center gap-2">
                    <h2 class="text-lg font-medium text-slate-700">Produkt1</h2>
                    <Tag value="Neu" severity="success" class="text-xs"></Tag>
                </div>
                <p class="mt-2 text-[15px] leading-6 text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </template>

            <template #footer>
                <div class="flex items-center justify-end gap-2">
                    <InputNumber
                        v-model="quantity"
                        inputId="quantity"
                        :min="1"
                        size="small"
                        showButtons
                        buttonLayout="horizontal"
                        class="w-32"
                        aria-label="Menge"
                    >
                        <template #incrementbuttonicon>
                            <span class="pi pi-plus"></span>
                        </template>
                        <template #decrementbuttonicon>
                            <span class="pi pi-minus"></span>
                        </template>
                    </InputNumber>
                    <Button label="Hinzufügen" icon="pi pi-plus" size="small" />
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