<template>
    <main class="min-h-screen bg-white px-4 pt-5 font-sans text-slate-700">
        <section class="flex items-center gap-4">
            <Button
                aria-label="Zurück"
                icon="pi pi-arrow-circle-left"
                rounded
                text
                severity="secondary"
                class="!h-[50px] !w-[50px] !bg-slate-100 !text-slate-500"
            />
            <div class="flex flex-col gap-1">
                <h1 class="m-0 text-[32px] font-bold leading-none text-slate-700">Projektaufgaben</h1>
                <p class="m-0 text-base text-slate-500">
                    Hier werden alle Aufgaben des Projekts <strong class="font-semibold">Projekt 1</strong> aufgelistet.
                </p>
            </div>
        </section>

        <section class="ml-[66px] mt-5 w-[1472px]">
            <Breadcrumb :home="home" :model="breadcrumbItems" class="!border-0 !bg-transparent !p-0" />

            <div class="mt-7 flex items-start gap-4">
                <div class="flex w-[216px] flex-col gap-2">
                    <label for="search" class="text-sm text-slate-700">Suche</label>
                    <span class="relative">
                        <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400" />
                        <InputText
                            id="search"
                            v-model="search"
                            placeholder="Suche..."
                            class="h-[33px] w-full !pl-9 !text-sm"
                        />
                    </span>
                </div>

                <div class="flex w-[216px] flex-col gap-2">
                    <label for="status" class="text-sm text-slate-700">Status</label>
                    <Select
                        ref="statusSelect"
                        input-id="status"
                        v-model="selectedStatus"
                        :options="statusOptions"
                        placeholder="Status auswählen"
                        append-to="self"
                        class="h-[33px] w-full !text-sm"
                    />
                </div>
            </div>

            <DataTable
                :value="tasks"
                class="mt-4 w-full"
                table-class="w-full"
                :table-style="{ minWidth: '1472px' }"
            >
                <Column :header-style="{ width: '72px' }" :body-style="{ width: '72px' }">
                    <template #header>
                        <Checkbox v-model="selectAll" binary aria-label="Alle Aufgaben auswählen" />
                    </template>
                    <template #body="{ data }">
                        <div class="flex justify-center">
                            <Checkbox v-model="data.selected" binary :aria-label="`${data.task} auswählen`" />
                        </div>
                    </template>
                </Column>

                <Column field="task" header="Aufgabe" :header-style="{ width: '512px' }" :body-style="{ width: '512px' }" />

                <Column header="Verantwortlicher" :header-style="{ width: '256px' }" :body-style="{ width: '256px' }">
                    <template #body="{ data }">
                        <div class="flex items-center gap-3">
                            <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
                            <span>{{ data.assignee }}</span>
                        </div>
                    </template>
                </Column>

                <Column header="Status" :header-style="{ width: '256px' }" :body-style="{ width: '256px' }">
                    <template #body="{ data }">
                        <div class="flex items-center gap-3">
                            <ProgressBar :value="data.progress" :show-value="false" class="h-[6px] flex-1" />
                            <span class="w-[34px] text-xs">{{ data.progress }} %</span>
                        </div>
                    </template>
                </Column>

                <Column header="Status" :header-style="{ width: '160px' }" :body-style="{ width: '160px' }">
                    <template #body="{ data }">
                        <Tag :value="data.status" :severity="data.severity" class="!px-2 !py-1 !text-xs" />
                    </template>
                </Column>

                <Column header="Fällig" :header-style="{ width: '124px' }" :body-style="{ width: '124px' }">
                    <template #body="{ data }">
                        <span :class="{ 'text-red-500': data.overdue }">{{ data.due }}</span>
                    </template>
                </Column>

                <Column header="Aktionen" :header-style="{ width: '92px' }" :body-style="{ width: '92px' }">
                    <template #body="{ index }">
                        <div class="flex justify-center">
                            <Button
                                :ref="(element) => setActionRef(element, index)"
                                aria-label="Aktionen"
                                icon="pi pi-ellipsis-h"
                                text
                                severity="secondary"
                                class="!h-7 !w-[35px]"
                                @click="toggleActions($event)"
                            />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </section>

        <Popover ref="actionsPopover" class="!w-[200px]">
            <div class="flex flex-col gap-2 p-1">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pen-to-square"
                    severity="secondary"
                    variant="outlined"
                    fluid
                    class="!h-[33px] !justify-start !text-sm"
                />
                <Button
                    label="Status aktualisieren"
                    icon="pi pi-list-check"
                    severity="secondary"
                    variant="outlined"
                    fluid
                    class="!h-[33px] !justify-start !text-sm"
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    fluid
                    class="!h-[33px] !justify-start !text-sm"
                />
            </div>
        </Popover>
    </main>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const selectedStatus = ref(null)
const selectAll = ref(false)
const statusSelect = ref()
const actionsPopover = ref()
const actionRefs = ref([])

const home = { icon: 'pi pi-home' }
const breadcrumbItems = [
    { label: 'Projekte' },
    { label: 'Projekt 1' },
    { label: 'Aufgaben' }
]

const statusOptions = ['Offen', 'In Arbeit', 'Blockiert', 'Fertig']

const tasks = ref([
    {
        task: 'Webseite Relaunch',
        initials: 'M',
        assignee: 'Max Mustermann',
        progress: 100,
        status: 'Fertig',
        severity: 'success',
        due: '03.06.2026',
        overdue: false,
        selected: true
    },
    {
        task: 'Mobile App',
        initials: 'A',
        assignee: 'Anna Schmidt',
        progress: 45,
        status: 'In Arbeit',
        severity: 'warn',
        due: '10.06.2026',
        overdue: false,
        selected: false
    },
    {
        task: 'Marketing Kampagne',
        initials: 'L',
        assignee: 'Lisa Weber',
        progress: 0,
        status: 'Offen',
        severity: 'info',
        due: '18.05.2026',
        overdue: false,
        selected: false
    },
    {
        task: 'API Migration',
        initials: 'P',
        assignee: 'Paul Müller',
        progress: 72,
        status: 'Blockiert',
        severity: 'danger',
        due: '12.05.2026',
        overdue: true,
        selected: false
    }
])

const setActionRef = (element, index) => {
    if (element) {
        actionRefs.value[index] = element.$el || element
    }
}

const toggleActions = (event) => {
    actionsPopover.value.toggle(event)
}

onMounted(async () => {
    await nextTick()

    if (statusSelect.value?.show) {
        statusSelect.value.show()
    }

    if (actionsPopover.value && actionRefs.value[2]) {
        actionsPopover.value.show({ currentTarget: actionRefs.value[2] })
    }
})
</script>