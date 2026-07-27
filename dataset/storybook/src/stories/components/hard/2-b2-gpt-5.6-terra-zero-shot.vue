<template>
    <div class="flex flex-col w-[716px]">
        <DataTable
            :value="users"
            dataKey="name"
            tableStyle="width: 716px"
            :pt="{
                table: { class: 'w-full' },
                headerCell: { class: '!bg-white !px-3.5 !py-2.5 !text-sm !font-semibold' },
                bodyCell: { class: '!bg-white !px-3.5 !py-2.5 !text-sm' }
            }"
        >
            <Column header="Nutzer" headerStyle="width: 384px" bodyStyle="width: 384px">
                <template #body="slotProps">
                    <div class="flex items-center gap-3">
                        <Avatar
                            :label="slotProps.data.initial"
                            shape="circle"
                            class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-700"
                        />
                        <span>{{ slotProps.data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Rolle" headerStyle="width: 224px" bodyStyle="width: 224px">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.role" :severity="slotProps.data.severity" />
                </template>
            </Column>

            <Column
                header="Aktiv"
                headerStyle="width: 108px; text-align: center"
                bodyStyle="width: 108px; text-align: center"
            >
                <template #body="slotProps">
                    <div class="flex justify-center">
                        <Checkbox
                            v-model="slotProps.data.active"
                            binary
                            :aria-label="`${slotProps.data.name} aktiv`"
                        />
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
        name: 'Max Mustermann',
        initial: 'M',
        role: 'Administrator',
        severity: 'danger',
        active: true
    },
    {
        name: 'Anna Schmidt',
        initial: 'A',
        role: 'Projektleiter',
        severity: 'info',
        active: true
    },
    {
        name: 'Lisa Weber',
        initial: 'L',
        role: 'Gast',
        severity: 'warn',
        active: false
    },
    {
        name: 'Paul Müller',
        initial: 'P',
        role: 'Gast',
        severity: 'warn',
        active: true
    }
]);
</script>