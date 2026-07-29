<template>
    <div class="flex min-h-screen items-start bg-white p-6">
        <div class="flex w-64 flex-col gap-6">
            <Textarea
                id="feedback"
                v-model="feedback"
                placeholder="Feedback eingeben..."
                rows="4"
                fluid
                class="resize-none"
                aria-label="Feedback eingeben"
            />

            <div class="flex items-center gap-2">
                <Checkbox v-model="anonymous" inputId="anonymous" binary />
                <label for="anonymous" class="text-sm text-surface-700">Anonym senden</label>
            </div>

            <Button label="Absenden" icon="pi pi-check" iconPos="right" class="self-start" />
        </div>
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