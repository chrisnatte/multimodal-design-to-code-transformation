<template>
    <div class="min-h-[410px] w-[897px] bg-white p-6">
        <DataTable
            :value="users"
            dataKey="name"
            class="w-[728px]"
            tableStyle="width: 728px; table-layout: fixed"
            :pt="{
                table: { class: 'table-fixed' },
                thead: { class: 'border-b border-slate-200' },
                headerCell: { class: 'bg-white px-[14px] py-[10px] text-left text-sm font-semibold text-slate-900' },
                bodyRow: { class: 'bg-white' },
                bodyCell: { class: 'border-b border-slate-200 px-[14px] py-[10px]' }
            }"
        >
            <Column header="Nutzer" headerStyle="width: 256px" bodyStyle="width: 256px">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar
                            :label="data.initial"
                            shape="circle"
                            class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-700"
                        />
                        <span class="text-sm text-slate-900">{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Status" headerStyle="width: 108px" bodyStyle="width: 108px">
                <template #body="{ data }">
                    <Tag
                        :value="data.status"
                        :severity="data.severity"
                        class="!text-[12px] !font-bold"
                    />
                </template>
            </Column>

            <Column header="Fortschritt" headerStyle="width: 256px" bodyStyle="width: 256px">
                <template #body="{ data }">
                    <div class="flex w-full flex-col gap-1">
                        <div class="flex items-end justify-between">
                            <span class="text-[10px] leading-none text-slate-700">{{ data.progressLabel }}</span>
                            <span class="text-xs leading-none text-slate-800">{{ data.progress }} %</span>
                        </div>
                        <ProgressBar
                            :value="data.progress"
                            :showValue="false"
                            class="!h-1.5"
                            :pt="{
                                root: { class: '!h-1.5 !bg-slate-200' },
                                value: { class: '!bg-emerald-500' }
                            }"
                        />
                    </div>
                </template>
            </Column>

            <Column header="Aktionen" headerStyle="width: 108px; text-align: center" bodyStyle="width: 108px">
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Button
                            type="button"
                            icon="pi pi-ellipsis-h"
                            text
                            severity="secondary"
                            aria-label="Aktionen anzeigen"
                            class="!h-7 !w-[35px] !p-0"
                            @click="toggleActions($event, data)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionMenu">
            <div class="flex w-[169px] flex-col gap-2">
                <Button
                    label="Profil bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    outlined
                    size="small"
                    fluid
                    class="!justify-start"
                />
                <Button
                    label="Status ändern"
                    icon="pi pi-flag"
                    severity="secondary"
                    outlined
                    size="small"
                    fluid
                    class="!justify-start"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    outlined
                    size="small"
                    fluid
                    class="!justify-start"
                />
                <Button
                    label="Deaktiveren"
                    icon="pi pi-trash"
                    severity="secondary"
                    outlined
                    size="small"
                    fluid
                    class="!justify-start"
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const actionMenu = ref()
const selectedUser = ref(null)

const users = ref([
    {
        initial: 'M',
        name: 'Max Mustermann',
        status: 'In Prüfung',
        severity: 'danger',
        progressLabel: 'Zertifizierung',
        progress: 45
    },
    {
        initial: 'A',
        name: 'Anna Schmidt',
        status: 'Aktiv',
        severity: 'success',
        progressLabel: 'Onboarding',
        progress: 87
    },
    {
        initial: 'L',
        name: 'Lisa Weber',
        status: 'Inaktiv',
        severity: 'warn',
        progressLabel: 'Onboarding',
        progress: 4
    },
    {
        initial: 'P',
        name: 'Paul Müller',
        status: 'Inaktiv',
        severity: 'warn',
        progressLabel: 'Onboarding',
        progress: 11
    }
])

const toggleActions = (event, user) => {
    selectedUser.value = user
    actionMenu.value.toggle(event)
}
</script>