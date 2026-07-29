<template>
    <main class="p-6">
        <DataTable :value="users" tableStyle="width: 100%">
            <Column header="Nutzer" style="width: 54%">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar :label="data.initials" shape="circle" />
                        <span>{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Rolle" style="width: 36%">
                <template #body="{ data }">
                    <Tag :value="data.role" :severity="data.severity" />
                </template>
            </Column>

            <Column header="Aktiv" style="width: 10%">
                <template #body="{ data }">
                    <Checkbox v-model="data.active" :binary="true" />
                </template>
            </Column>
        </DataTable>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Tag from 'primevue/tag';

const users = ref([
    {
        initials: 'M',
        name: 'Max Mustermann',
        role: 'Administrator',
        severity: 'danger',
        active: true
    },
    {
        initials: 'A',
        name: 'Anna Schmidt',
        role: 'Projektleiter',
        severity: 'info',
        active: true
    },
    {
        initials: 'L',
        name: 'Lisa Weber',
        role: 'Gast',
        severity: 'warn',
        active: false
    },
    {
        initials: 'P',
        name: 'Paul Müller',
        role: 'Gast',
        severity: 'warn',
        active: true
    }
]);
</script>