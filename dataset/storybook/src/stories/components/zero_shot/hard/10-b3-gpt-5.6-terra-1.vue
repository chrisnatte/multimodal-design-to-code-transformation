<template>
    <div class="relative h-[410px] w-[897px] bg-white p-6">
        <DataTable
            :value="users"
            dataKey="name"
            showGridlines
            class="w-[728px]"
            tableClass="w-[728px]"
            tableStyle="table-layout: fixed"
        >
            <Column header="Nutzer" headerClass="!w-[256px] !px-3.5 !py-2.5 !text-sm !font-semibold" bodyClass="!w-[256px] !p-0">
                <template #body="{ data }">
                    <div class="flex h-[50px] items-center gap-3 px-3.5 py-[10.5px]">
                        <Avatar :label="data.initial" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-700" />
                        <span class="text-sm">{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Status" headerClass="!w-[108px] !px-3.5 !py-2.5 !text-sm !font-semibold" bodyClass="!w-[108px] !p-0">
                <template #body="{ data }">
                    <div class="flex h-[50px] items-center px-3.5 py-[10.5px]">
                        <Tag :value="data.status" :severity="data.severity" class="!text-[12px] !font-bold" />
                    </div>
                </template>
            </Column>

            <Column header="Fortschritt" headerClass="!w-[256px] !px-3.5 !py-2.5 !text-sm !font-semibold" bodyClass="!w-[256px] !p-0">
                <template #body="{ data }">
                    <div class="flex h-[50px] items-center px-3.5 py-[10.5px]">
                        <div class="flex w-full flex-col gap-1">
                            <div class="flex items-end justify-between">
                                <span class="text-[10px] leading-3">{{ data.progressLabel }}</span>
                                <span class="text-xs leading-[15px]">{{ data.progress }} %</span>
                            </div>
                            <ProgressBar :value="50" :showValue="false" class="!h-1.5 !w-full" />
                        </div>
                    </div>
                </template>
            </Column>

            <Column header="Aktionen" headerClass="!w-[108px] !px-3.5 !py-2.5 !text-center !text-sm !font-semibold" bodyClass="!w-[108px] !p-0">
                <template #body="{ data }">
                    <div class="flex h-[50px] items-center justify-center px-3.5 py-[10.5px]">
                        <Button
                            ref="actionButtons"
                            type="button"
                            icon="pi pi-ellipsis-h"
                            text
                            severity="secondary"
                            size="small"
                            aria-label="Aktionen anzeigen"
                            class="!h-7 !w-[35px]"
                            @click="toggleActions($event, data)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionPopover" appendTo="self" class="!w-48">
            <div class="flex flex-col gap-2 p-[10.5px]">
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
import { nextTick, onMounted, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

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

const activeUser = ref(users.value[2])
const actionPopover = ref()
const actionButtons = ref([])

const toggleActions = (event, user) => {
    activeUser.value = user
    actionPopover.value?.toggle(event)
}

onMounted(async () => {
    await nextTick()

    const lisaActionButton = actionButtons.value[2]

    if (lisaActionButton) {
        actionPopover.value?.show({ currentTarget: lisaActionButton })
    }
})
</script>