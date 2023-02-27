<template>
    <div class="container custom-cont">
        <img class="text-center" src="../assets/logo_web.png" width="" alt="">
        <!-- <hr style="color: #000666;"> -->
        <div class="card shadow-sm">
            <div class="card-header">
                <h3 class="text-center">Visitor Details</h3>
            </div>
            <div class="card-body">
                <form class="pt-3">
                    <div class="row">
                        <div class="form-group col-lg-6">
                            <label>First Name <span>*</span></label>
                            <input type="text" name="f_name" class="form-control">
                        </div>
                        <div class="form-group col-lg-6">
                            <label>Last Name <span>*</span></label>
                            <input type="text" name="l_name" class="form-control">
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-lg-6">
                            <label>Email</label>
                            <input type="text" name="email" class="form-control">
                        </div>
                        <div class="form-group col-lg-6">
                            <label>Phone <span>*</span></label>
                            <input type="text" name="phone" class="form-control">
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-lg-12">
                            <label>Company <span>*</span></label>
                            <input type="text" name="address" class="form-control">
                        </div>
                        <div class="form-group col-lg-12">
                            <label>Car plate No</label>
                            <input type="text" name="c_plate_no" class="form-control">
                        </div>
                    </div>
                    <button class="btn btn-danger mt-2" @click.prevent="home">Cancel</button> &nbsp;
                    <button class="btn btn-success mt-2" @click.prevent="submit">Next</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            f_name: '',
            l_name: '',
            phone: '',
            address: '',
            c_plate_no: '',
            email: ''
        };
    },
    methods: {
        home() {
            this.$router.push('/')
        },
        submit() {
            this.$router.push('/check-in-2', { f_name: this.f_name, l_name: this.l_name, email: this.email, address: this.address, phone: this.phone });
        }
    }
};
</script>

<style scoped>
span {
    color: red;
}

.custom-cont {
    text-align: left;
}

.row {
    margin-bottom: 5px;
}
</style>