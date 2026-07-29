<template>
    <main class="w-[536px] bg-white p-6">
        <Card class="overflow-hidden !rounded-xl border border-slate-100 shadow-sm" :pt="{ content: { class: '!p-0' } }">
            <template #header>
                <div class="relative h-[172px] overflow-hidden bg-[#02091d]">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#02071a] via-[#06152a] to-[#001c19]"></div>
                    <div class="absolute -left-12 -top-16 h-64 w-64 rounded-full border border-emerald-300/20 bg-gradient-to-b from-emerald-400/70 via-emerald-700/35 to-slate-950/90 shadow-[inset_0_0_45px_rgba(74,222,128,0.55)]"></div>
                    <div class="absolute -bottom-24 right-10 h-40 w-40 rounded-full border border-emerald-300/20 bg-gradient-to-b from-emerald-400/70 via-emerald-700/35 to-slate-950/90"></div>
                    <div class="absolute left-28 top-11 flex h-24 w-20 items-center justify-center rounded-[45%] bg-emerald-500/70 shadow-lg">
                        <span class="pi pi-box text-5xl text-slate-800"></span>
                    </div>
                    <div class="absolute bottom-0 left-0 h-8 w-full bg-[linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                </div>
            </template>

            <template #content>
                <div class="flex flex-col gap-[7px] p-[17.5px]">
                    <div class="flex items-center gap-[7px]">
                        <span class="text-[17.5px] font-medium leading-[22px] text-slate-700">Produkt1</span>
                        <Tag value="Neu" severity="success" rounded class="!px-2 !py-1 !text-[12px]" />
                    </div>

                    <p class="m-0 text-sm leading-[23px] text-slate-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>

                    <div class="flex items-center justify-end gap-2 pt-4">
                        <InputNumber
                            v-model="quantity"
                            :min="1"
                            showButtons
                            buttonLayout="stacked"
                            incrementButtonIcon="pi pi-angle-up"
                            decrementButtonIcon="pi pi-angle-down"
                            class="w-32"
                            inputClass="!h-8 !px-2.5 !py-1.5 !text-sm"
                            :pt="{
                                incrementButton: { class: '!h-4 !w-9 !p-0' },
                                decrementButton: { class: '!h-4 !w-9 !p-0' }
                            }"
                        />
                        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" size="small" class="!h-[33px] !bg-emerald-500 !border-emerald-500" />
                    </div>
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