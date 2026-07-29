<template>
    <div class="flex min-h-screen items-center justify-center bg-white">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '384px' }"
            contentClass="!p-0"
        >
            <div class="flex flex-col text-[#34445f]">
                <div class="flex h-[63px] items-center justify-between px-[17.5px] py-[17.5px]">
                    <h2 class="text-[17.5px] font-semibold leading-[21px]">Profil bearbeiten</h2>
                    <Button
                        icon="pi pi-times"
                        text
                        severity="secondary"
                        aria-label="Dialog schließen"
                        class="!h-7 !w-[35px] !p-0 !text-[#64748b]"
                        @click="dialogVisible = false"
                    />
                </div>

                <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
                    <div class="flex flex-col gap-[7px]">
                        <label for="profile-name" class="text-sm leading-[21px]">Name</label>
                        <InputText
                            id="profile-name"
                            v-model="name"
                            class="!h-[34px] !w-full !border-[#cbd5e1] !px-[10.5px] !py-[7px] !text-sm !text-[#34445f]"
                        />
                    </div>

                    <div class="relative flex h-[169px] flex-col gap-0.5">
                        <label for="profile-role" class="text-sm leading-[21px]">Rolle</label>
                        <Select
                            id="profile-role"
                            v-model="role"
                            :options="roles"
                            optionLabel="label"
                            optionValue="value"
                            class="!h-[34px] !w-full !border-emerald-500 !text-sm"
                            inputClass="!px-[10.5px] !py-[7px] !text-sm !text-[#34445f]"
                            dropdownIcon="pi pi-chevron-down"
                            @change="selectOpen = false"
                        />

                        <div
                            v-if="selectOpen"
                            class="absolute top-[63px] z-10 w-full rounded-md border border-[#e2e8f0] bg-white p-[3.5px] shadow-md"
                        >
                            <div class="flex flex-col gap-0.5">
                                <div
                                    class="flex h-[31px] cursor-pointer items-center rounded-sm bg-[#ecfdf5] px-[10.5px] text-sm text-[#059669]"
                                    @click="role = 'Administrator'; selectOpen = false"
                                >
                                    Administrator
                                </div>
                                <div
                                    class="flex h-[31px] cursor-pointer items-center rounded-sm px-[10.5px] text-sm text-[#34445f]"
                                    @click="role = 'Projektleiter'; selectOpen = false"
                                >
                                    Projektleiter
                                </div>
                                <div
                                    class="flex h-[31px] cursor-pointer items-center rounded-sm px-[10.5px] text-sm text-[#34445f]"
                                    @click="role = 'Gast'; selectOpen = false"
                                >
                                    Gast
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Checkbox v-model="active" inputId="active" binary class="!h-[17.5px] !w-[17.5px]" />
                        <label for="active" class="text-sm leading-[17px]">Ist aktiv</label>
                    </div>
                </div>

                <div class="flex h-[50.5px] items-start justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Button
                        label="Abbrechen"
                        text
                        severity="secondary"
                        class="!h-[31px] !px-[10.5px] !py-[7px] !text-sm !font-medium !text-[#34445f]"
                        @click="dialogVisible = false"
                    />
                    <Button
                        label="Speichern"
                        class="!h-[33px] !border-[#10b981] !bg-[#10b981] !px-[10.5px] !py-[7px] !text-sm !font-medium"
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
const selectOpen = ref(true)

const roles = ref([
    { label: 'Administrator', value: 'Administrator' },
    { label: 'Projektleiter', value: 'Projektleiter' },
    { label: 'Gast', value: 'Gast' }
])
</script>