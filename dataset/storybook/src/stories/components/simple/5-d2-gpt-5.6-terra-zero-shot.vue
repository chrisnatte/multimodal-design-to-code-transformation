<template>
    <div class="flex w-64 flex-col gap-6">
        <Textarea
            id="feedback"
            v-model="feedback"
            placeholder="Feedback eingeben..."
            variant="filled"
            rows="3"
            fluid
            class="h-[84px] resize-none"
            aria-label="Feedback eingeben"
        />

        <div class="flex items-center gap-2">
            <Checkbox v-model="anonymous" inputId="anonymous" binary />
            <label for="anonymous" class="text-sm">Anonym senden</label>
        </div>

        <Button label="Absenden" icon="pi pi-check" iconPos="right" class="self-start" />
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