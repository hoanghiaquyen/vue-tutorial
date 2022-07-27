import { watch } from "vue";

export function useWatchCharacter(valueToWatch, maxChars = 10) {
  watch(valueToWatch, (newVal) => {
    if (newVal.length >= maxChars) {
      alert("Note is too long");
    }
  });
}
