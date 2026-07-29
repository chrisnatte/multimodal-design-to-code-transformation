<template>
    <div class="p-8 bg-white w-full max-w-5xl font-sans">
        <DataTable :value="users" class="w-full text-sm">
            <Column field="name" header="Nutzer" headerClass="text-slate-600 font-semibold pb-4 border-b border-slate-100" bodyClass="py-4 border-b border-slate-100">
                <template #body="{ data }">
                    <div class="flex items-center gap-4">
                        <Avatar :label="data.initials" shape="circle" class="!bg-slate-100 !text-slate-600 font-medium w-8 h-8 text-sm" />
                        <span class="text-slate-700">{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column field="status" header="Status" headerClass="text-slate-600 font-semibold pb-4 border-b border-slate-100" bodyClass="py-4 border-b border-slate-100">
                <template #body="{ data }">
                    <Tag :value="data.status" :class="[
                        '!px-2.5 !py-1 !text-xs !font-bold !rounded-md border-none',
                        {
                            '!bg-red-100 !text-red-800': data.status === 'In Prüfung',
                            '!bg-green-100 !text-green-800': data.status === 'Aktiv',
                            '!bg-orange-100 !text-orange-800': data.status === 'Inaktiv'
                        }
                    ]" />
                </template>
            </Column>

            <Column field="progressValue" header="Fortschritt" headerClass="text-slate-600 font-semibold pb-4 border-b border-slate-100" bodyClass="py-4 border-b border-slate-100">
                <template #body="{ data }">
                    <div class="flex flex-col w-56 gap-1.5">
                        <div class="flex justify-between text-xs text-slate-500">
                            <span>{{ data.progressLabel }}</span>
                            <span>{{ data.progressValue }} %</span>
                        </div>
                        <ProgressBar :value="data.progressValue" :showValue="false" style="height: 6px" class="!bg-slate-100 [&>div]:!bg-[#10B981] border-none" />
                    </div>
                </template>
            </Column>

            <Column header="Aktion" headerClass="text-slate-600 font-semibold pb-4 border-b border-slate-100" bodyClass="py-4 border-b border-slate-100">
                <template #body="{ data, event }">
                    <Button icon="pi pi-ellipsis-h" text rounded aria-haspopup="true" aria-controls="overlay_menu" @click="toggleMenu($event, data)" class="!text-slate-500 hover:!bg-slate-100 !w-8 !h-8 !p-0" />
                </template>
            </Column>
        </DataTable>

        <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="w-56 p-2 border-none shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] rounded-xl bg-white">
            <template #item="{ item, props }">
                <a v-bind="props.action" class="flex items-center gap-3 px-3 py-2.5 mb-1.5 last:mb-0 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium transition-colors cursor-pointer">
                    <span :class="item.icon" class="text-slate-400 text-lg"></span>
                    <span>{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const users = ref([
    { id: 1, initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', progressLabel: 'Zertifizierung', progressValue: 45 },
    { id: 2, initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', progressLabel: 'Onboarding', progressValue: 87 },
    { id: 3, initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', progressLabel: 'Onboarding', progressValue: 4 },
    { id: 4, initials: 'P', name: 'Paul Müller', status: 'Inaktiv', progressLabel: 'Onboarding', progressValue: 11 }
]);

const menu = ref();
const selectedUser = ref(null);

const menuItems = ref([
    { label: 'Profil bearbeiten', icon: 'pi pi-file-edit' },
    { label: 'Status ändern', icon: 'pi pi-flag' },
    { label: 'Duplizieren', icon: 'pi pi-copy' },
    { label: 'Deaktiveren', icon: 'pi pi-trash' }
]);

const toggleMenu = (event, user) => {
    selectedUser.value = user;
    menu.value.toggle(event);
};
</script>