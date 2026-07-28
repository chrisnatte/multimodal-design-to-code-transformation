<template>
    <div class="flex flex-col gap-2">
        <label for="searchInput" class="text-surface-700 dark:text-surface-100 text-sm">Suche</label>
        <div class="flex items-center gap-2">
            <IconField>
                <InputIcon class="pi pi-search" />
                <InputText id="searchInput" v-model="searchQuery" placeholder="Nach Namen suchen" class="w-64" />
            </IconField>
            <Button icon="pi pi-check" severity="success" aria-label="Confirm" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const searchQuery = ref('');
</script>