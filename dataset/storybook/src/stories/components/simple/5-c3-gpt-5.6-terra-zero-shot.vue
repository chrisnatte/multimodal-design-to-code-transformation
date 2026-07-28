<template>
    <div class="flex min-h-[231px] w-[304px] flex-col gap-6 bg-white p-6">
        <Textarea
            v-model="feedback"
            placeholder="Feedback eingeben..."
            rows="4"
            fluid
            class="h-[84px] resize-none"
        />

        <div class="flex items-center gap-2">
            <Checkbox v-model="anonymous" inputId="anonymous" binary />
            <label for="anonymous" class="text-sm text-slate-700">Anonym senden</label>
        </div>

        <Button
            label="Absenden"
            icon="pi pi-check"
            iconPos="right"
            class="w-fit"
            @click="submitFeedback"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'

const feedback = ref('')
const anonymous = ref(false)

const submitFeedback = () => {
    feedback.value = feedback.value
}
</script>