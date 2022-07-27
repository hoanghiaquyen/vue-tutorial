<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

const modalCardRef = ref(null);
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['update:modelValue', 'handleDelete', 'resetIdDelete'])

const handleCloseModal = () => {
    emits('update:modelValue', false);
    emits('resetIdDelete');
}

onClickOutside(modalCardRef, handleCloseModal);

const handleKeyboardEsc = (event) => {
    if (event.keyCode === 27) {
        handleCloseModal();
    }
}

onMounted(() => {
    document.addEventListener('keyup', handleKeyboardEsc)
})

onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboardEsc)
})
</script>

<template>
    <div class="modal is-active px-2">
        <div class="modal-background"></div>
        <div class="modal-card" ref="modalCardRef">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete note?</p>
                <button class="delete" aria-label="close" @click="handleCloseModal"></button>
            </header>
            <section class="modal-card-body">
                Are you sure you want to delete this note?
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <button class="button" @click="handleCloseModal">Cancel</button>
                <button class="button is-danger" @click="emits('handleDelete')">Delete</button>
            </footer>
        </div>
    </div>
</template>