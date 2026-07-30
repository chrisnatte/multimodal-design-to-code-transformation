<template>
    <div class="flex min-h-screen items-center justify-center bg-black">
        <Dialog
            v-model:visible="profileVisible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '32rem' }"
            :breakpoints="{ '575px': '94vw' }"
            contentClass="!p-0"
            headerClass="!px-[17.5px] !py-[17.5px]"
            footerClass="!px-[17.5px] !pt-0 !pb-[17.5px]"
            class="!rounded-xl !border-slate-200"
        >
            <template #header>
                <div class="flex w-full items-center justify-between">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="M"
                            shape="circle"
                            aria-label="Max Mustermann"
                            class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600"
                        />
                        <div class="flex flex-col">
                            <span class="text-sm font-normal text-slate-700">Max Mustermann</span>
                            <span class="text-[10px] font-light text-slate-500">Manager</span>
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <Tag
                            value="Aktiv"
                            class="!bg-emerald-100 !px-2 !py-1 !text-xs !font-bold !text-emerald-600"
                        />
                        <Button
                            icon="pi pi-times"
                            variant="text"
                            severity="secondary"
                            aria-label="Schließen"
                            class="!h-7 !w-7 !p-0"
                            @click="profileVisible = false"
                        />
                    </div>
                </div>
            </template>

            <div class="px-[17.5px] pb-0">
                <Tabs v-model:value="activeTab">
                    <TabList class="!border-slate-200">
                        <Tab value="personal" class="!px-4 !py-[13px] !text-sm">
                            Persönliche Daten
                        </Tab>
                        <Tab value="settings" class="!px-4 !py-[13px] !text-sm">
                            Einstellungen
                        </Tab>
                    </TabList>

                    <TabPanels class="!px-1 !pt-3 !pb-4">
                        <TabPanel value="personal" class="!p-0">
                            <div class="flex flex-col gap-4">
                                <div class="flex flex-col gap-[7px]">
                                    <label for="profile-name" class="text-sm text-slate-600">Name</label>
                                    <InputText
                                        id="profile-name"
                                        v-model="name"
                                        class="!h-[33px] !w-full !rounded-md !border-slate-300 !px-[10.5px] !py-[7px] !text-sm"
                                    />
                                </div>

                                <div class="flex flex-col gap-[7px]">
                                    <label for="profile-email" class="text-sm text-slate-600">E-Mail</label>
                                    <InputText
                                        id="profile-email"
                                        v-model="email"
                                        type="email"
                                        class="!h-[33px] !w-full !rounded-md !border-slate-300 !px-[10.5px] !py-[7px] !text-sm"
                                    />
                                </div>

                                <div class="flex flex-col gap-[7px]">
                                    <label for="profile-role" class="text-sm text-slate-600">Rolle</label>
                                    <Select
                                        ref="roleSelect"
                                        id="profile-role"
                                        v-model="role"
                                        :options="roles"
                                        optionLabel="label"
                                        optionValue="value"
                                        appendTo="self"
                                        class="!h-[33px] !w-full !rounded-md !border-emerald-500 !text-sm"
                                        :pt="{
                                            label: { class: '!px-[10.5px] !py-[7px] !text-sm' },
                                            dropdown: { class: '!w-[35px]' },
                                            overlay: { class: '!rounded-md !border-slate-200 !shadow-md' },
                                            list: { class: '!p-[3.5px]' },
                                            option: { class: '!min-h-[31px] !px-[10.5px] !py-[7px] !text-sm' }
                                        }"
                                    />
                                </div>

                                <div class="flex items-center gap-[7px] pt-0.5">
                                    <Checkbox
                                        v-model="isActive"
                                        inputId="is-active"
                                        binary
                                        class="!h-[17.5px] !w-[17.5px]"
                                    />
                                    <label for="is-active" class="text-sm text-slate-600">Ist aktiv</label>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel value="settings" class="!p-0">
                            <div class="min-h-[228px]"></div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>

            <template #footer>
                <div class="flex justify-end gap-[7px]">
                    <Button
                        label="Abbrechen"
                        severity="secondary"
                        class="!h-[33px] !bg-slate-100 !px-[11.5px] !py-[7px] !text-sm !text-slate-600"
                        @click="profileVisible = false"
                    />
                    <Button
                        label="Speichern"
                        class="!h-[33px] !border-emerald-500 !bg-emerald-500 !px-[11.5px] !py-[7px] !text-sm hover:!border-emerald-600 hover:!bg-emerald-600"
                        @click="profileVisible = false"
                    />
                </div>
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import Tag from 'primevue/tag';

const profileVisible = ref(true);
const activeTab = ref('personal');
const name = ref('Max Mustmann');
const email = ref('max@example.com');
const role = ref('Manager');
const isActive = ref(true);
const roleSelect = ref();

const roles = ref([
    { label: 'Manager', value: 'Manager' },
    { label: 'Mitarbeiter', value: 'Mitarbeiter' },
    { label: 'Kunde', value: 'Kunde' }
]);

onMounted(() => {
    window.setTimeout(() => {
        roleSelect.value?.show?.();
    }, 250);
});
</script>