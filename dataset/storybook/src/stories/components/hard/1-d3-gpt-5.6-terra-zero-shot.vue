<template>
    <div class="flex min-h-screen items-center justify-center bg-black">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :closable="false"
            :draggable="false"
            :dismissableMask="false"
            :style="{ width: '384px' }"
            contentClass="!p-0"
            class="overflow-visible rounded-xl"
        >
            <div class="flex flex-col bg-white">
                <div class="flex items-center justify-between px-[17.5px] py-[17.5px]">
                    <h2 class="text-[17.5px] font-semibold leading-[21px] text-slate-700">Profil bearbeiten</h2>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        text
                        aria-label="Schließen"
                        class="!h-7 !w-[35px] !p-0 !text-slate-500"
                        @click="dialogVisible = false"
                    />
                </div>

                <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
                    <div class="flex flex-col gap-[7px]">
                        <label for="name" class="text-sm leading-[21px] text-slate-700">Name</label>
                        <InputText
                            id="name"
                            v-model="name"
                            class="!h-[33px] !w-full !rounded-md !border-slate-300 !px-[10.5px] !py-[7px] !text-sm !text-slate-700"
                        />
                    </div>

                    <div class="flex flex-col gap-[2px]">
                        <label for="role" class="text-sm leading-[21px] text-slate-700">Rolle</label>
                        <Select
                            id="role"
                            v-model="role"
                            :options="roles"
                            class="pointer-events-none !h-[33px] !w-full !rounded-md !border-emerald-500 !text-sm"
                            :pt="{
                                label: { class: '!py-[7px] !pl-[10.5px] !text-sm !text-slate-700' },
                                dropdown: { class: '!w-[35px]' }
                            }"
                        />

                        <div class="z-10 flex flex-col rounded-md border border-slate-200 bg-white p-[3.5px] shadow-md">
                            <button
                                v-for="option in roles"
                                :key="option"
                                type="button"
                                class="flex h-[31px] items-center rounded-sm px-[10.5px] text-left text-sm leading-[17px] text-slate-700"
                                :class="role === option ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-slate-50'"
                                @click="role = option"
                            >
                                {{ option }}
                            </button>
                        </div>
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Checkbox v-model="active" inputId="active" binary />
                        <label for="active" class="text-sm leading-[17px] text-slate-700">Ist aktiv</label>
                    </div>
                </div>

                <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Button
                        label="Abbrechen"
                        severity="secondary"
                        text
                        class="!h-[31px] !px-[10.5px] !text-sm !text-slate-700"
                        @click="dialogVisible = false"
                    />
                    <Button
                        label="Speichern"
                        class="!h-[33px] !bg-emerald-500 !px-[11.5px] !text-sm !hover:bg-emerald-600"
                        @click="dialogVisible = false"
                    />
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const dialogVisible = ref(true)
const name = ref('Max Mustmann')
const role = ref('Administrator')
const active = ref(false)

const roles = ref(['Administrator', 'Projektleiter', 'Gast'])
</script>