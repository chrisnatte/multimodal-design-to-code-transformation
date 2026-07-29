<template>
    <div class="p-8 flex items-center justify-center font-sans">
        <Breadcrumb :home="home" :model="items" class="bg-transparent border-none p-0">
            <template #item="{ item, props }">
                <template v-if="!item.isMenu">
                    <a v-bind="props.action" class="flex items-center gap-2 text-slate-500 hover:text-slate-700 cursor-pointer px-1">
                        <span v-if="item.icon" :class="item.icon"></span>
                        <span v-if="item.label">{{ item.label }}</span>
                    </a>
                </template>
                <template v-else>
                    <Button 
                        type="button" 
                        :label="item.label" 
                        @click="toggle" 
                        aria-haspopup="true" 
                        aria-controls="overlay_menu"
                        class="bg-slate-100 text-slate-600 border-none hover:bg-slate-200 px-3 py-1.5 rounded-md font-normal shadow-none"
                    />
                </template>
            </template>
            <template #separator>
                <i class="pi pi-angle-right text-slate-400 text-sm mx-1"></i>
            </template>
        </Breadcrumb>
        
        <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="w-48 mt-1" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const home = ref({ icon: 'pi pi-home' });

const items = ref([
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-th-large' },
    { label: 'Dashboard anzeigen', isMenu: true }
]);

const menu = ref();

const menuItems = ref([
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>