<template>
    <div class="w-full max-w-[716px]">
        <DataTable
            :value="users"
            dataKey="name"
            tableStyle="min-width: 44.75rem; border-collapse: collapse"
            :pt="{
                thead: { class: 'border-b border-slate-200' },
                headerCell: { class: 'bg-white px-3.5 py-[10px] text-sm font-semibold text-slate-700' },
                bodyRow: { class: 'bg-white' },
                bodyCell: { class: 'border-b border-slate-200 px-3.5 py-[10px] text-sm text-slate-700' }
            }"
        >
            <Column header="Nutzer" headerStyle="width: 384px" bodyStyle="width: 384px">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar
                            :label="data.initial"
                            shape="circle"
                            class="h-7 w-7 shrink-0 bg-slate-200 text-sm text-slate-600"
                        />
                        <span>{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Rolle" headerStyle="width: 224px" bodyStyle="width: 224px">
                <template #body="{ data }">
                    <Tag :value="data.role" :severity="data.severity" class="text-xs font-bold" />
                </template>
            </Column>

            <Column
                header="Aktiv"
                headerStyle="width: 108px; text-align: center"
                bodyStyle="width: 108px; text-align: center"
            >
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Checkbox
                            v-model="data.active"
                            binary
                            style="--p-checkbox-checked-background: #10b981; --p-checkbox-checked-border-color: #10b981"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'

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
])
</script>