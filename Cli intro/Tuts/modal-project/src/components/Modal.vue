<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>
    .modal {
        margin: 100px auto;
        padding: 20px;
        width: 400px;
        background-color: white;
        border-radius: 10px;
    }

    .backdrop {
        position: fixed;
        background: rgba(0, 0,0, 0.5);
        top: 0;
        width: 100%;
        height: 100%;
    }

    .modal h1 {
        padding: 0;
        color: darkolivegreen;
        border: none;
    }

    .modal p {
        font-style: normal;
    }

    .modal.sale {
        background-color: rgb(93, 160, 145);
    }

    .modal.sale p {
        color: white;
    }

    .modal .actions {
        margin: 30px 0 10px 0;
        text-align: center;
    }

    .modal .actions a {
        margin: 10px;
        padding: 8px;
        color: #333;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
    }

</style>