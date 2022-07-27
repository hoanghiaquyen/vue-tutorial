<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

const contentNoteRef = ref(null);

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'success'
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    },
    label: {
        type: String
    }
})

const emits = defineEmits(['update:modelValue']);

const focusTextarea = () => {
    contentNoteRef.value.focus();
}

defineExpose({
    focusTextarea
})

</script>

<template>
    <div class="container mb-5 p-4" :class="`has-background-${bgColor}-dark`">
        <div class="field">
            <label v-if="label" class="label has-text-white">{{ label }}</label>
            <div class="control">
                <textarea class="textarea" :placeholder="placeholder" :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)" ref="contentNoteRef" v-autofocus />
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>
