<template>
    <div class="w-[716px]">
        <DataTable
            :value="users"
            dataKey="name"
            tableStyle="width: 716px; table-layout: fixed"
            :pt="{
                table: { class: 'w-full' },
                headerCell: { class: 'px-3.5 py-2.5 text-sm font-semibold' },
                bodyCell: { class: 'border-x-0 px-3.5 py-[10.5px] text-sm' }
            }"
        >
            <Column header="Nutzer" style="width: 384px">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar :label="data.initial" shape="circle" class="h-7 w-7 !bg-slate-200 !text-sm !text-slate-600" />
                        <span>{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Rolle" style="width: 224px">
                <template #body="{ data }">
                    <Tag :value="data.role" :severity="data.severity" />
                </template>
            </Column>

            <Column header="Aktiv" style="width: 108px" headerClass="text-center">
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Checkbox v-model="data.active" binary />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';

const users = ref([
    { initial: 'M', name: 'Max Mustermann', role: 'Administrator', severity: 'danger', active: true },
    { initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', severity: 'info', active: true },
    { initial: 'L', name: 'Lisa Weber', role: 'Gast', severity: 'warn', active: false },
    { initial: 'P', name: 'Paul Müller', role: 'Gast', severity: 'warn', active: true }
]);
</script>