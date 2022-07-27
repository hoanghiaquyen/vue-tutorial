<script setup>
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();
</script>

<template>
    <div class="stats">
        <h1>Stats</h1>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stats</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Total notes</td>
                    <td>{{ storeNotes.totalNote }}</td>
                </tr>
                <tr>
                    <td>Total amount</td>
                    <td>{{ storeNotes.totalCharacters }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>