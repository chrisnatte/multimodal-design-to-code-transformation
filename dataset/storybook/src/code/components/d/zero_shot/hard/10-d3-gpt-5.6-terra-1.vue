<template>
    <div class="min-h-[410px] w-full bg-white p-6 font-sans text-slate-700">
        <DataTable
            :value="users"
            dataKey="id"
            class="w-[728px] text-sm"
            tableClass="w-full"
            :pt="{
                table: { class: 'border-collapse' },
                headerCell: { class: '!border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-3.5 !py-2.5 !text-sm !font-semibold !text-slate-700' },
                bodyCell: { class: '!border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-3.5 !py-[10px]' }
            }"
        >
            <Column header="Nutzer" headerStyle="width: 256px" bodyStyle="width: 256px">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar
                            :label="data.initials"
                            shape="circle"
                            class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600"
                        />
                        <span>{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Status" headerStyle="width: 108px" bodyStyle="width: 108px">
                <template #body="{ data }">
                    <Tag
                        :value="data.status"
                        :severity="data.severity"
                        class="!px-[7px] !py-[3px] !text-[12px] !font-bold"
                    />
                </template>
            </Column>

            <Column header="Fortschritt" headerStyle="width: 256px" bodyStyle="width: 256px">
                <template #body="{ data }">
                    <div class="flex w-full flex-col gap-1">
                        <div class="flex items-end justify-between">
                            <span class="text-[10px] leading-3 text-slate-600">{{ data.course }}</span>
                            <span class="text-xs leading-[15px] text-slate-600">{{ data.progress }} %</span>
                        </div>
                        <ProgressBar
                            :value="data.progress"
                            :showValue="false"
                            class="!h-1.5 !rounded-full"
                        />
                    </div>
                </template>
            </Column>

            <Column header="Aktion" headerStyle="width: 108px" bodyStyle="width: 108px">
                <template #body="{ data, index }">
                    <div class="flex justify-center">
                        <Button
                            :ref="index === 2 ? 'menuTrigger' : undefined"
                            icon="pi pi-ellipsis-h"
                            text
                            plain
                            aria-label="Aktionen anzeigen"
                            class="!h-7 !w-[35px] !p-0"
                            :class="{ '!bg-slate-100': activeAction === index }"
                            @click="toggleMenu($event, index)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionPopover" class="!w-48" @hide="activeAction = null">
            <div class="flex flex-col gap-2 p-2.5">
                <Button
                    label="Profil bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    fluid
                    class="!h-[33px] !justify-start !px-3 !text-sm"
                />
                <Button
                    label="Status ändern"
                    icon="pi pi-flag"
                    severity="secondary"
                    variant="outlined"
                    fluid
                    class="!h-[33px] !justify-start !px-3 !text-sm"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    fluid
                    class="!h-[33px] !justify-start !px-3 !text-sm"
                />
                <Button
                    label="Deaktivieren"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    fluid
                    class="!h-[33px] !justify-start !px-3 !text-sm"
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

const actionPopover = ref()
const menuTrigger = ref()
const activeAction = ref(2)

const users = ref([
    {
        id: 1,
        initials: 'M',
        name: 'Max Mustermann',
        status: 'In Prüfung',
        severity: 'danger',
        course: 'Zertifizierung',
        progress: 45
    },
    {
        id: 2,
        initials: 'A',
        name: 'Anna Schmidt',
        status: 'Aktiv',
        severity: 'success',
        course: 'Onboarding',
        progress: 87
    },
    {
        id: 3,
        initials: 'L',
        name: 'Lisa Weber',
        status: 'Inaktiv',
        severity: 'warn',
        course: 'Onboarding',
        progress: 4
    },
    {
        id: 4,
        initials: 'P',
        name: 'Paul Müller',
        status: 'Inaktiv',
        severity: 'warn',
        course: 'Onboarding',
        progress: 11
    }
])

const toggleMenu = (event, index) => {
    activeAction.value = index
    actionPopover.value.toggle(event)
}

onMounted(async () => {
    await nextTick()

    if (menuTrigger.value?.$el) {
        actionPopover.value.show({ currentTarget: menuTrigger.value.$el })
    }
})
</script>