<template>
    <Dialog
        v-model:visible="visible"
        modal
        :closable="false"
        :draggable="false"
        :style="{ width: '24rem' }"
        contentClass="!pt-2 !pb-4"
        pt:mask:class="!bg-black/40"
    >
        <template #header>
            <div class="flex w-full items-center justify-between">
                <h2 class="text-lg font-semibold text-slate-700">Profil bearbeiten</h2>
                <Button
                    icon="pi pi-times"
                    variant="text"
                    severity="secondary"
                    rounded
                    size="small"
                    aria-label="Schließen"
                    @click="visible = false"
                />
            </div>
        </template>

        <div class="flex flex-col gap-4 text-slate-700">
            <div class="flex flex-col gap-2">
                <label for="name" class="text-sm">Name</label>
                <InputText id="name" v-model="name" fluid />
            </div>

            <div class="relative flex flex-col gap-2">
                <label for="role" class="text-sm">Rolle</label>
                <Select
                    id="role"
                    v-model="role"
                    :options="roles"
                    optionLabel="label"
                    class="w-full !border-emerald-500"
                    @click="showRoleMenu = !showRoleMenu"
                />

                <div
                    v-if="showRoleMenu"
                    class="absolute left-0 right-0 top-[62px] z-10 flex flex-col overflow-hidden rounded-md border border-slate-200 bg-white py-1 shadow-md"
                >
                    <Button
                        v-for="option in roles"
                        :key="option.label"
                        :label="option.label"
                        variant="text"
                        severity="secondary"
                        fluid
                        class="!justify-start !rounded-none !px-3 !py-2 !font-normal"
                        :class="role.label === option.label ? '!bg-emerald-50 !text-emerald-600' : '!text-slate-600'"
                        @click="role = option; showRoleMenu = false"
                    />
                </div>
            </div>

            <div class="mt-24 flex items-center gap-2">
                <Checkbox v-model="active" inputId="active" binary />
                <label for="active" class="text-sm">Ist aktiv</label>
            </div>

            <div class="flex items-center justify-end gap-3">
                <Button
                    label="Abbrechen"
                    variant="text"
                    severity="secondary"
                    @click="visible = false"
                />
                <Button
                    label="Speichern"
                    class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600"
                    @click="visible = false"
                />
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

const visible = ref(true);
const name = ref('Max Mustmann');
const active = ref(false);
const showRoleMenu = ref(true);

const roles = ref([
    { label: 'Administrator' },
    { label: 'Projektleiter' },
    { label: 'Gast' }
]);

const role = ref(roles.value[0]);
</script>