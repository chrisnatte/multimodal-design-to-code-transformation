<template>
    <div class="flex w-64 flex-col gap-6">
        <Textarea
            v-model="feedback"
            placeholder="Feedback eingeben..."
            variant="filled"
            rows="3"
            fluid
            class="text-sm"
        />

        <div class="flex items-center gap-2">
            <Checkbox v-model="sendAnonymously" input-id="anonymous" binary />
            <label for="anonymous" class="text-sm">Anonym senden</label>
        </div>

        <Button label="Absenden" icon="pi pi-check" icon-pos="right" class="self-start" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'

const feedback = ref('')
const sendAnonymously = ref(false)
</script>