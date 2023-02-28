<template>
    <div class="container custom-cont">
        <img class="text-center" src="../assets/logo_web.png" width="" alt="">
        <div class="card p-5 shadow-sm">
            <div class="card-body">
                <h3 class="text-center">Check-out</h3>
                <hr>
                <div class="row">
                    <h5>Please find your name and then Check-out</h5>
                </div>
                <div class="row">
                    <div class="form-group col-lg-12 mt-3">
                        <!-- <label for="fruit">Select a fruit:</label> -->
                        <select id="option" v-model="selectedOption" label="name" @input="loadFormData"
                            class="form-control">
                            <option value="">Choose...</option>
                            <option v-for="option in options" :key="option.id" :value="option.name">{{ option.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <hr class="mt-4 mb-4">

                <div class="row">
                    <form v-if="formData">
                        <div class="row">
                            <div class="form-group col-lg-6">
                                <label>Name:</label>
                                <input type="text" v-model="formData.name" class="form-control">
                            </div>

                            <div class="form-group col-lg-6">
                                <label>Email:</label>
                                <input type="email" v-model="formData.email" class="form-control">
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-lg-6">
                                <label>Phone:</label>
                                <input type="tel" v-model="formData.phone" class="form-control">
                            </div>

                            <div class="form-group col-lg-6">
                                <label>Company:</label>
                                <input type="tel" v-model="formData.phone" class="form-control">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
    components: {
        vSelect
    },
    data() {
        return {
            options: [
                { id: 1, name: 'Option 1', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
                { id: 2, name: 'Option 2', name: 'Jane Doe', email: 'jane.doe@example.com', phone: '555-555-5555' },
                { id: 3, name: 'Option 3', name: 'Bob Smith', email: 'bob.smith@example.com', phone: '987-654-3210' }
            ],
            selectedOption: null,
            formData: null
        };
    },
    methods: {
        loadFormData() {
            this.formData = this.selectedOption;
        }
    },
    // computed: {
    //     filteredFruits() {
    //         if (this.search) {
    //             return this.fruits.filter(fruit => fruit.name.toLowerCase().includes(this.search.toLowerCase()));
    //         } else {
    //             return this.fruits;
    //         }
    //     }
    // }
};
</script>