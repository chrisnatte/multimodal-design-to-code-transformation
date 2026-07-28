<template>
    <div class="min-h-[410px] w-full bg-white p-6 font-sans text-[#34445d]">
        <DataTable
            :value="users"
            dataKey="name"
            class="w-[728px] text-sm [&_.p-datatable-table]:table-fixed [&_.p-datatable-thead>tr>th]:h-[39px] [&_.p-datatable-thead>tr>th]:border-x-0 [&_.p-datatable-thead>tr>th]:border-t-0 [&_.p-datatable-thead>tr>th]:border-b-[#e2e8f0] [&_.p-datatable-thead>tr>th]:bg-white [&_.p-datatable-thead>tr>th]:px-3.5 [&_.p-datatable-thead>tr>th]:py-2.5 [&_.p-datatable-thead>tr>th]:font-semibold [&_.p-datatable-tbody>tr>td]:h-[50px] [&_.p-datatable-tbody>tr>td]:border-x-0 [&_.p-datatable-tbody>tr>td]:border-t-0 [&_.p-datatable-tbody>tr>td]:border-b-[#e2e8f0] [&_.p-datatable-tbody>tr>td]:bg-white [&_.p-datatable-tbody>tr>td]:px-3.5 [&_.p-datatable-tbody>tr>td]:py-2.5"
        >
            <Column header="Nutzer" headerStyle="width: 256px" bodyStyle="width: 256px">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar
                            :label="data.initials"
                            shape="circle"
                            class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-[#34445d]"
                        />
                        <span>{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Status" headerStyle="width: 108px" bodyStyle="width: 108px">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="data.statusSeverity" class="!px-[7px] !py-[3px] !text-[12px] !font-bold" />
                </template>
            </Column>

            <Column header="Fortschritt" headerStyle="width: 256px" bodyStyle="width: 256px">
                <template #body="{ data }">
                    <div class="flex w-full flex-col gap-1">
                        <div class="flex items-end justify-between">
                            <span class="text-[10px] leading-3">{{ data.progressLabel }}</span>
                            <span class="text-xs leading-[15px]">{{ data.progress }} %</span>
                        </div>
                        <ProgressBar
                            :value="data.progress"
                            :showValue="false"
                            class="!h-[6px] !rounded-full !bg-[#e2e8f0]"
                            :pt="{ value: { class: '!bg-[#10b981]' } }"
                        />
                    </div>
                </template>
            </Column>

            <Column header="Aktion" headerStyle="width: 108px" bodyStyle="width: 108px">
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Button
                            v-if="data.name === 'Lisa Weber'"
                            ref="lisaActionButton"
                            icon="pi pi-ellipsis-h"
                            text
                            severity="secondary"
                            aria-label="Aktionen für Lisa Weber"
                            class="!h-7 !w-[35px] !bg-[#f1f5f9] !p-0 !text-[#34445d]"
                            @click="toggleActions"
                        />
                        <Button
                            v-else
                            icon="pi pi-ellipsis-h"
                            text
                            severity="secondary"
                            :aria-label="`Aktionen für ${data.name}`"
                            class="!h-7 !w-[35px] !p-0 !text-[#34445d]"
                            @click="selectedUser = data"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover
            ref="actionsPopover"
            :dismissable="false"
            :pt="{
                root: { class: '!w-48 !rounded-md !border !border-[#e2e8f0] !shadow-md' },
                content: { class: '!p-2.5' }
            }"
        >
            <div class="flex flex-col gap-2">
                <Button
                    label="Profil bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    class="!h-[33px] !w-full !justify-start !border-[#e2e8f0] !px-3 !text-sm !font-medium !text-[#627492]"
                    @click="closeActions"
                />
                <Button
                    label="Status ändern"
                    icon="pi pi-flag"
                    severity="secondary"
                    variant="outlined"
                    class="!h-[33px] !w-full !justify-start !border-[#e2e8f0] !px-3 !text-sm !font-medium !text-[#627492]"
                    @click="closeActions"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    class="!h-[33px] !w-full !justify-start !border-[#e2e8f0] !px-3 !text-sm !font-medium !text-[#627492]"
                    @click="closeActions"
                />
                <Button
                    label="Deaktivieren"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    class="!h-[33px] !w-full !justify-start !border-[#e2e8f0] !px-3 !text-sm !font-medium !text-[#627492]"
                    @click="closeActions"
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const actionsPopover = ref(null)
const lisaActionButton = ref(null)
const selectedUser = ref(null)

const users = [
    {
        initials: 'M',
        name: 'Max Mustermann',
        status: 'In Prüfung',
        statusSeverity: 'danger',
        progressLabel: 'Zertifizierung',
        progress: 45
    },
    {
        initials: 'A',
        name: 'Anna Schmidt',
        status: 'Aktiv',
        statusSeverity: 'success',
        progressLabel: 'Onboarding',
        progress: 87
    },
    {
        initials: 'L',
        name: 'Lisa Weber',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        progressLabel: 'Onboarding',
        progress: 4
    },
    {
        initials: 'P',
        name: 'Paul Müller',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        progressLabel: 'Onboarding',
        progress: 11
    }
]

const toggleActions = (event) => {
    selectedUser.value = users[2]
    actionsPopover.value.toggle(event)
}

const closeActions = () => {
    actionsPopover.value.hide()
}

onMounted(async () => {
    await nextTick()
    selectedUser.value = users[2]
    actionsPopover.value.show({ currentTarget: lisaActionButton.value?.$el })
})
</script>