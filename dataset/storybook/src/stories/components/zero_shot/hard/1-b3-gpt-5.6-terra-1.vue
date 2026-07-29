<template>
    <div class="relative flex h-[768px] w-[768px] items-center justify-center overflow-hidden bg-black">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :closable="false"
            :draggable="false"
            :dismissableMask="false"
            appendTo="self"
            class="w-[384px]"
            contentClass="!p-0"
        >
            <template #header>
                <div class="flex w-full items-center justify-between px-[17.5px] py-[17.5px]">
                    <span class="text-[17.5px] font-semibold">Profil bearbeiten</span>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        variant="text"
                        aria-label="Dialog schließen"
                        class="!h-7 !w-[35px]"
                        @click="dialogVisible = false"
                    />
                </div>
            </template>

            <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
                <div class="flex flex-col gap-[7px]">
                    <label for="name" class="text-sm">Name</label>
                    <InputText
                        id="name"
                        v-model="name"
                        class="w-full"
                        aria-label="Name"
                    />
                </div>

                <div class="flex flex-col gap-0.5">
                    <label for="role" class="text-sm">Rolle</label>
                    <Select
                        id="role"
                        v-model="role"
                        :options="roles"
                        class="w-full"
                        aria-label="Rolle"
                    />

                    <div class="flex flex-col rounded-md border border-surface-200 bg-white p-[3.5px]">
                        <button
                            v-for="option in roles"
                            :key="option"
                            type="button"
                            class="h-[31px] rounded-[3px] px-[10.5px] text-left text-sm"
                            :class="option === role ? 'bg-emerald-50' : ''"
                            @click="role = option"
                        >
                            {{ option }}
                        </button>
                    </div>
                </div>

                <div class="flex items-center gap-[7px]">
                    <Checkbox
                        v-model="isActive"
                        inputId="active"
                        binary
                    />
                    <label for="active" class="text-sm">Ist aktiv</label>
                </div>
            </div>

            <template #footer>
                <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Button
                        label="Abbrechen"
                        severity="secondary"
                        variant="text"
                        @click="dialogVisible = false"
                    />
                    <Button
                        label="Speichern"
                        @click="dialogVisible = false"
                    />
                </div>
            </template>
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
const isActive = ref(false)

const roles = ref(['Administrator', 'Projektleiter', 'Gast'])
</script>