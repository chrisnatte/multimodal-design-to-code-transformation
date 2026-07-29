<template>
    <div class="w-[764px] bg-white p-6">
        <DataTable
            :value="users"
            class="w-full"
            tableStyle="width: 100%; table-layout: fixed"
            :pt="{
                thead: { class: 'border-b border-[#e2e8f0]' },
                headerRow: { class: 'h-[39px]' },
                bodyRow: { class: 'h-[50px] border-b border-[#e2e8f0]' }
            }"
        >
            <Column
                header="Nutzer"
                headerStyle="width: 53.63%; padding: 10.5px 14px;"
                bodyStyle="padding: 10.5px 14px;"
            >
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar
                            :label="data.initial"
                            shape="circle"
                            class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-slate-600"
                        />
                        <span class="text-sm text-slate-700">{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column
                header="Rolle"
                headerStyle="width: 31.28%; padding: 10.5px 14px;"
                bodyStyle="padding: 10.5px 14px;"
            >
                <template #body="{ data }">
                    <Tag :value="data.role" :severity="data.severity" class="!text-[12.25px]" />
                </template>
            </Column>

            <Column
                header="Aktiv"
                headerStyle="width: 15.09%; padding: 10.5px 14px; text-align: center;"
                bodyStyle="padding: 10.5px 14px; text-align: center;"
            >
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Checkbox v-model="data.active" :binary="true" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
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
        initial: 'M',
        name: 'Max Mustermann',
        role: 'Administrator',
        severity: 'danger',
        active: true
    },
    {
        initial: 'A',
        name: 'Anna Schmidt',
        role: 'Projektleiter',
        severity: 'info',
        active: true
    },
    {
        initial: 'L',
        name: 'Lisa Weber',
        role: 'Gast',
        severity: 'warn',
        active: false
    },
    {
        initial: 'P',
        name: 'Paul Müller',
        role: 'Gast',
        severity: 'warn',
        active: true
    }
]);
</script>