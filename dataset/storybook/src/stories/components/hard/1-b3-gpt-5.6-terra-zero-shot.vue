<template>
    <div class="flex h-[768px] w-full items-center justify-center bg-black p-[280px]">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '384px' }"
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
                    <InputText id="name" v-model="name" fluid />
                </div>

                <div class="flex flex-col gap-[7px]">
                    <label for="role" class="text-sm">Rolle</label>
                    <Select
                        id="role"
                        v-model="role"
                        :options="roles"
                        placeholder="Rolle auswählen"
                        fluid
                        appendTo="self"
                    />
                </div>

                <div class="flex items-center gap-[7px]">
                    <Checkbox v-model="active" inputId="active" binary />
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
                    <Button label="Speichern" @click="dialogVisible = false" />
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
const active = ref(false)

const roles = ref(['Administator', 'Projektleiter', 'Gast'])
</script>