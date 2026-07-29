<template>
    <div class="flex w-[764px] flex-col gap-2.5 bg-white p-6">
        <DataTable
            :value="users"
            class="w-[716px]"
            tableStyle="width: 716px; table-layout: fixed"
            :pt="{
                thead: { class: 'text-sm' },
                headerCell: { class: 'bg-white' }
            }"
        >
            <Column
                header="Nutzer"
                headerStyle="width: 384px; padding: 10.5px 14px"
                bodyStyle="width: 384px; padding: 10.5px 14px; border-color: #e2e8f0"
            >
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar
                            :label="data.initial"
                            shape="circle"
                            class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-700"
                        />
                        <span class="text-sm">{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column
                header="Rolle"
                headerStyle="width: 224px; padding: 10.5px 14px"
                bodyStyle="width: 224px; padding: 10.5px 14px; border-color: #e2e8f0"
            >
                <template #body="{ data }">
                    <Tag
                        :value="data.role"
                        :severity="data.severity"
                        class="!text-[12.25px] !font-bold"
                    />
                </template>
            </Column>

            <Column
                header="Aktiv"
                headerStyle="width: 108px; padding: 10.5px 14px; text-align: center"
                bodyStyle="width: 108px; padding: 10.5px 14px; text-align: center; border-color: #e2e8f0"
            >
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