<template>
    <div class="flex flex-col gap-6 p-6">
        <Textarea
            v-model="feedback"
            placeholder="Feedback eingeben..."
            variant="filled"
            rows="3"
            class="h-[84px] w-64 resize-none text-sm"
            aria-label="Feedback eingeben"
        />

        <div class="flex items-center gap-2">
            <Checkbox v-model="anonymous" inputId="anonymous" binary />
            <label for="anonymous" class="text-sm text-surface-700">Anonym senden</label>
        </div>

        <Button label="Absenden" icon="pi pi-check" iconPos="right" severity="success" class="w-fit" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';

const feedback = ref('');
const anonymous = ref(false);
</script>