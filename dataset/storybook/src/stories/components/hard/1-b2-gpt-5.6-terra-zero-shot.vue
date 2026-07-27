<template>
    <div class="flex min-h-screen items-center justify-center bg-black px-4 py-[280px]">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '384px' }"
            pt:root:class="!overflow-visible !rounded-xl !border !border-[#e2e8f0]"
            pt:content:class="!overflow-visible !p-0"
            pt:mask:class="!bg-black"
        >
            <div class="flex flex-col bg-white">
                <div class="flex h-[63px] items-center justify-between px-[17.5px] py-[17.5px]">
                    <span class="text-[17.5px] font-semibold text-surface-900">Profil bearbeiten</span>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        variant="text"
                        aria-label="Dialog schließen"
                        class="!h-[28px] !w-[35px] !p-0"
                        @click="dialogVisible = false"
                    />
                </div>

                <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
                    <div class="flex flex-col gap-[7px]">
                        <label for="profile-name" class="text-sm font-normal text-surface-900">Name</label>
                        <InputText
                            id="profile-name"
                            v-model="name"
                            class="!h-[33px] !w-full !rounded-md !border-[#cbd5e1] !px-[10.5px] !py-[7px] !text-sm"
                        />
                    </div>

                    <div class="flex flex-col gap-[2px]">
                        <div class="flex flex-col gap-[7px]">
                            <label for="profile-role" class="text-sm font-normal text-surface-900">Rolle</label>
                            <Select
                                id="profile-role"
                                v-model="selectedRole"
                                :options="roleOptions"
                                class="!h-[33px] !w-full !rounded-md !border-[#10b981] !text-sm"
                                aria-label="Rolle"
                            />
                        </div>

                        <div v-if="roleMenuVisible" class="rounded-md border border-[#e2e8f0] bg-white p-[3.5px]">
                            <Button
                                label="Administator"
                                variant="text"
                                plain
                                fluid
                                class="!h-[31px] !justify-start !rounded-[3px] !bg-[#ecfdf5] !px-[10.5px] !py-[7px] !text-left !text-sm !font-normal"
                                @click="selectedRole = 'Administrator'; roleMenuVisible = false"
                            />
                            <Button
                                label="Projektleiter"
                                variant="text"
                                plain
                                fluid
                                class="!h-[31px] !justify-start !rounded-[3px] !px-[10.5px] !py-[7px] !text-left !text-sm !font-normal"
                                @click="selectedRole = 'Projektleiter'; roleMenuVisible = false"
                            />
                            <Button
                                label="Gast"
                                variant="text"
                                plain
                                fluid
                                class="!h-[31px] !justify-start !rounded-[3px] !px-[10.5px] !py-[7px] !text-left !text-sm !font-normal"
                                @click="selectedRole = 'Gast'; roleMenuVisible = false"
                            />
                        </div>
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Checkbox v-model="isActive" inputId="is-active" binary />
                        <label for="is-active" class="text-sm font-normal text-surface-900">Ist aktiv</label>
                    </div>
                </div>

                <div class="flex h-[50.5px] justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Button
                        label="Abbrechen"
                        variant="text"
                        plain
                        class="!h-[31px] !px-[10.5px] !py-[7px] !text-sm"
                        @click="dialogVisible = false"
                    />
                    <Button
                        label="Speichern"
                        class="!h-[33px] !border-[#10b981] !bg-[#10b981] !px-[10.5px] !py-[7px] !text-sm hover:!border-[#059669] hover:!bg-[#059669]"
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
const name = ref('Max Mustmann');
const selectedRole = ref('Administrator');
const isActive = ref(false);
const roleMenuVisible = ref(true);
const roleOptions = ref(['Administrator', 'Projektleiter', 'Gast']);
</script>