<template>
    <div class="relative flex h-[768px] w-[768px] items-center justify-center overflow-hidden bg-black">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            appendTo="self"
            :draggable="false"
            :closable="false"
            :showHeader="false"
            :style="{ width: '384px' }"
            contentClass="!p-0"
            pt:root:class="!m-0 !overflow-hidden !rounded-xl"
            pt:mask:class="!absolute !inset-0 !bg-black !p-0"
        >
            <div class="flex flex-col">
                <div class="flex h-[63px] items-center justify-between px-[17.5px] py-[17.5px]">
                    <span class="text-[17.5px] font-semibold">Profil bearbeiten</span>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        variant="text"
                        size="small"
                        aria-label="Dialog schließen"
                        class="!h-[28px] !w-[35px]"
                        @click="dialogVisible = false"
                    />
                </div>

                <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
                    <div class="flex flex-col gap-[7px]">
                        <label for="profile-name" class="text-sm">Name</label>
                        <InputText
                            id="profile-name"
                            v-model="profileName"
                            type="text"
                            class="!h-[33px] !w-full !rounded-md !px-[10.5px] !py-[7px] !text-sm"
                        />
                    </div>

                    <div class="flex flex-col gap-0.5">
                        <label for="profile-role" class="text-sm">Rolle</label>
                        <Select
                            id="profile-role"
                            v-model="selectedRole"
                            :options="roles"
                            placeholder="Rolle auswählen"
                            class="!h-[33px] !w-full !rounded-md !text-sm"
                            appendTo="self"
                            autofocus
                        />
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Checkbox v-model="isActive" inputId="is-active" binary class="!h-[17.5px] !w-[17.5px]" />
                        <label for="is-active" class="text-sm">Ist aktiv</label>
                    </div>
                </div>

                <div class="flex h-[50.5px] justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Button
                        label="Abbrechen"
                        severity="secondary"
                        variant="text"
                        size="small"
                        class="!h-[31px]"
                        @click="dialogVisible = false"
                    />
                    <Button
                        label="Speichern"
                        size="small"
                        class="!h-[33px]"
                        @click="dialogVisible = false"
                    />
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

const dialogVisible = ref(true);
const profileName = ref('Max Mustmann');
const selectedRole = ref('Administrator');
const isActive = ref(false);
const roles = ref(['Administator', 'Projektleiter', 'Gast']);
</script>