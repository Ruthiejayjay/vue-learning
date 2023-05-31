export default {
    template: `
    <li>
    <label class="p-2 flex justify-between items-center">
        {{ assignment.name }}
        <input class="ml-4" type="checkbox" v-model="assignment.completed" />
    </label>
</li>
    `,
    props: {
        assignment: Object
    }
}