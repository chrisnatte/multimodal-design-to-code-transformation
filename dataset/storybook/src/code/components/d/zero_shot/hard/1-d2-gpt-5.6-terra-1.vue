<template>
    <div class="h-[768px] w-[768px] bg-white">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :draggable="false"
            :style="{ width: '384px' }"
            contentClass="!p-[17.5px]"
            :pt="{
                root: { class: '!rounded-xl !border-surface-200' },
                header: { class: '!px-[17.5px] !pt-[17.5px] !pb-[17.5px]' },
                title: { class: '!text-[17.5px] !font-semibold' },
                headerActions: { class: '!gap-0' },
                footer: { class: '!px-[17.5px] !pt-0 !pb-[17.5px]' }
            }"
            :closeButtonProps="{ severity: 'secondary', variant: 'text', 'aria-label': 'Schließen' }"
        >
            <template #header>
                <span class="text-[17.5px] font-semibold">Profil bearbeiten</span>
            </template>

            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <label for="name" class="text-sm">Name</label>
                    <InputText id="name" v-model="name" fluid />
                </div>

                <div class="relative h-[169px]">
                    <div class="flex flex-col gap-2">
                        <label for="role" class="text-sm">Rolle</label>
                        <Select
                            ref="roleSelect"
                            v-model="role"
                            inputId="role"
                            :options="roles"
                            optionLabel="label"
                            optionValue="value"
                            appendTo="self"
                            fluid
                            class="!border-emerald-500"
                            :pt="{
                                overlay: { class: '!mt-0 !border-surface-200 !shadow-md' },
                                list: { class: '!p-1' },
                                option: { class: '!min-h-[31px] !px-3 !py-[7px] !text-sm' }
                            }"
                        />
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <Checkbox v-model="isActive" inputId="active" binary />
                    <label for="active" class="text-sm">Ist aktiv</label>
                </div>
            </div>

            <template #footer>
                <div class="flex justify-end gap-[7px]">
                    <Button label="Abbrechen" variant="text" severity="secondary" @click="dialogVisible = false" />
                    <Button label="Speichern" class="!bg-emerald-500 !border-emerald-500" @click="dialogVisible = false" />
                </div>
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

const dialogVisible = ref(true);
const name = ref('Max Mustmann');
const role = ref('Administrator');
const isActive = ref(false);
const roleSelect = ref();

const roles = ref([
    { label: 'Administrator', value: 'Administrator' },
    { label: 'Projektleiter', value: 'Projektleiter' },
    { label: 'Gast', value: 'Gast' }
]);

onMounted(async () => {
    await nextTick();
    roleSelect.value?.show?.();
});
</script>