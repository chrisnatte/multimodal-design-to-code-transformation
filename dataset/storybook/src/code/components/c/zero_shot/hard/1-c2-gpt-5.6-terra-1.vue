<template>
    <Dialog
        v-model:visible="visible"
        modal
        header="Profil bearbeiten"
        :style="{ width: '24rem' }"
        :draggable="false"
        :closable="true"
        pt:root:class="!rounded-xl"
        pt:mask:class="!bg-black/40"
        pt:header:class="!px-[18px] !pt-5 !pb-4"
        pt:content:class="!px-[18px] !pt-1 !pb-0"
        pt:footer:class="!px-[18px] !pt-4 !pb-[18px]"
    >
        <div class="flex flex-col">
            <div class="flex flex-col gap-2">
                <label for="profile-name" class="text-sm text-surface-700">Name</label>
                <InputText id="profile-name" v-model="name" fluid />
            </div>

            <div class="mt-4 flex flex-col gap-2">
                <label for="profile-role" class="text-sm text-surface-700">Rolle</label>
                <Select
                    ref="roleSelect"
                    v-model="selectedRole"
                    inputId="profile-role"
                    :options="roles"
                    optionLabel="label"
                    optionValue="value"
                    fluid
                />
            </div>

            <div class="mt-28 flex items-center gap-2">
                <Checkbox v-model="active" inputId="active" binary />
                <label for="active" class="text-sm text-surface-700">Ist aktiv</label>
            </div>
        </div>

        <template #footer>
            <div class="flex items-center justify-end gap-2">
                <Button label="Abbrechen" severity="secondary" variant="text" size="small" @click="visible = false" />
                <Button label="Speichern" size="small" @click="visible = false" />
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

const visible = ref(true);
const name = ref('Max Mustmann');
const selectedRole = ref('Administrator');
const active = ref(false);
const roleSelect = ref();

const roles = ref([
    { label: 'Administrator', value: 'Administrator' },
    { label: 'Projektleiter', value: 'Projektleiter' },
    { label: 'Gast', value: 'Gast' }
]);

onMounted(() => {
    nextTick(() => {
        roleSelect.value?.show?.();
    });
});
</script>