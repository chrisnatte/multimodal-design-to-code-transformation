<template>
    <div class="flex min-h-screen items-center justify-center bg-white">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            header="Profil bearbeiten"
            :draggable="false"
            :dismissableMask="false"
            :style="{ width: '384px' }"
            pt:mask:class="!bg-black/35"
            pt:root:class="!rounded-xl !border-surface-200 !shadow-xl"
            pt:header:class="!px-[17.5px] !py-[17.5px]"
            pt:title:class="!text-[17.5px] !font-semibold !text-surface-700"
            pt:headerActions:class="!ml-0"
            pt:content:class="!p-0"
            pt:footer:class="!px-[17.5px] !pb-[17.5px] !pt-0"
            :closeButtonProps="{
                severity: 'secondary',
                variant: 'text',
                size: 'small',
                'aria-label': 'Schließen'
            }"
        >
            <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
                <div class="flex flex-col gap-[7px]">
                    <label for="profile-name" class="text-sm text-surface-700">Name</label>
                    <InputText
                        id="profile-name"
                        v-model="profileName"
                        class="!h-[33px] !w-full !rounded-md !px-[10.5px] !py-[7px] !text-sm"
                        aria-label="Name"
                    />
                </div>

                <div class="flex flex-col gap-[2px]">
                    <label for="profile-role" class="mb-[5px] text-sm text-surface-700">Rolle</label>
                    <Select
                        ref="roleSelect"
                        v-model="selectedRole"
                        inputId="profile-role"
                        :options="roles"
                        optionLabel="label"
                        optionValue="value"
                        appendTo="self"
                        class="!h-[33px] !w-full !rounded-md !border-emerald-500 !text-sm"
                        panelClass="!mt-[2px] !rounded-md !border-surface-200 !shadow-md"
                        aria-label="Rolle"
                    />
                </div>

                <div class="flex items-center gap-[7px]">
                    <Checkbox v-model="isActive" inputId="is-active" binary />
                    <label for="is-active" class="text-sm text-surface-700">Ist aktiv</label>
                </div>
            </div>

            <template #footer>
                <div class="flex items-center justify-end gap-[7px]">
                    <Button
                        label="Abbrechen"
                        variant="text"
                        severity="secondary"
                        class="!h-[31px] !px-[10.5px] !py-[7px] !text-sm"
                        @click="dialogVisible = false"
                    />
                    <Button
                        label="Speichern"
                        class="!h-[33px] !bg-emerald-500 !px-[10.5px] !py-[7px] !text-sm !border-emerald-500"
                        @click="dialogVisible = false"
                    />
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
const profileName = ref('Max Mustmann');
const selectedRole = ref('Administrator');
const isActive = ref(false);
const roleSelect = ref(null);

const roles = ref([
    { label: 'Administrator', value: 'Administrator' },
    { label: 'Projektleiter', value: 'Projektleiter' },
    { label: 'Gast', value: 'Gast' }
]);

onMounted(async () => {
    await nextTick();
    roleSelect.value?.$el?.click();
});
</script>