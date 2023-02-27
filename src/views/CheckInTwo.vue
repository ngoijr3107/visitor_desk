<template>
    <div class="container custom-cont">
        <img class="text-center" src="../assets/logo_web.png" width="" alt="">
        <!-- <hr style="color: #000666;"> -->
        <div class="card shadow-sm">
            <div class="card-header">
                <h3 class="text-center">Purpose</h3>
            </div>
            <div class="card-body">
                <div class="row p-4">
                    <h3 class="text-center">Hi,<span>{{ $route.params.f_name }}</span> <br> Almost done, This is the last step..</h3>
                </div>
                <hr style="color: #000666; border: 2px solid #000666;">
                <form action="" class="pt-3">
                    <div class="row">
                        <div class="form-group col-lg-12">
                            <label>Department</label>
                            <select class="form-control">
                                    <option value="">Select Department</option>
                                    <option>ICT</option>
                                    <option>HR</option>
                                    <option>ACCOUNT</option>
                                </select>
                        </div>
                    <!-- </div>
                    <div class="row"> -->
                        <div class="form-group col-lg-12 mt-3">
                            <label>Purpose</label>
                            <select class="form-control">
                                    <option value="">Select Purpose</option>
                                    <option>ICT</option>
                                    <option>HR</option>
                                    <option>ACCOUNT</option>
                                </select>
                        </div>
                    </div>
                    <button class="btn btn-primary mt-2" @click.prevent="previous">Previous</button> &nbsp;
                    <button class="btn btn-success mt-2">Finish</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        previous() {
            this.$router.push('/check-in')
        }
    },
    mounted() {
      console.log(this.$route.params)
    }
}
</script>

<style scoped>
span{
    color: #000666;
    font-weight: bold;
}
.custom-cont {
    text-align: left;
}

.row{
    margin-bottom: 5px;
}
</style>