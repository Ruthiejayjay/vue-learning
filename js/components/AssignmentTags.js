

export default {
  template: `
    <div class="flex gap-2 mt-2">
    <button 
      @click="$emit('change', tag)"
      v-for="tag in tags" 
      class="border rounded px-1 py-px text-xs"
      :class="{
        'border-blue-500 text-blue-500': tag === currentTag
      }"
      >{{ tag }}
      </button>
  </div>
    `,
  props: {
    initalTags: Array
  },

  computed: {
    tags() {
      return ['all', ...new Set(this.initalTags)];
    }
  }
}