<template>
    <Dialog v-model:visible="visible" header="Profil bearbeiten" :style="{ width: '28rem' }" modal :closable="true">
        <div class="flex flex-col gap-5 py-2">
            <div class="flex flex-col gap-2">
                <label for="name" class="text-sm text-surface-700 dark:text-surface-300">Name</label>
                <InputText id="name" v-model="name" />
            </div>

            <div class="flex flex-col gap-2">
                <label for="role" class="text-sm text-surface-700 dark:text-surface-300">Rolle</label>
                <Select id="role" v-model="selectedRole" :options="roles" optionLabel="label" class="w-full" />
            </div>

            <div class="flex items-center gap-2 mt-1">
                <Checkbox inputId="isActive" v-model="isActive" binary />
                <label for="isActive" class="text-sm text-surface-700 dark:text-surface-300">Ist aktiv</label>
            </div>
        </div>

        <template #footer>
            <div class="flex justify-end gap-3 pt-4">
                <Button label="Abbrechen" variant="text" severity="secondary" @click="visible = false" />
                <Button label="Speichern" class="!bg-[#10b981] !border-[#10b981] hover:!bg-[#059669] hover:!border-[#059669] text-white" @click="visible = false" />
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const visible = ref(true);
const name = ref('Max Mustmann');
const selectedRole = ref({ label: 'Administrator', value: 'admin' });
const roles = ref([
    { label: 'Administrator', value: 'admin' },
    { label: 'Projektleiter', value: 'pm' },
    { label: 'Gast', value: 'guest' }
]);
const isActive = ref(false);
</script>