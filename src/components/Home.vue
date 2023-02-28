<template>
    <div class="container p-5">
        <div class="card shadow-sm">
            <div class="card-body p-5">
                <div class="logo-img">
                    <img src="../assets/logo_web.png" width="300" alt="">
                </div>
                <div class="row">
                    <h5>Welcome, Please tap on button to Check-in</h5>
                </div>
                <div class="row">
                    <div class="col-lg-12 mb-2">
                        <a class="btn btn-primary btn-lg" href="/check-in"> <img src="../assets/tap.png" height="32" alt="">
                            Check-in</a>
                    </div>
                    <div class="col-lg-12">
                        <a class="btn btn-danger btn-lg" href="/check-out"> <img src="../assets/log-out.png" height="32" alt="">
                            Check-out</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row p-2"></div>
        <footer>
            <div class="row">
                <div class="col-lg-12"><p>&copy; 2023, All right Reserved. Techvilla.</p></div>
            </div>
        </footer>
    </div>
</template>

<script>

</script>

<style scoped>
body{}
.container h5 {
    text-align: center;
    text-transform: capitalize;
}

.btn {
    border-radius: 42px;
    padding: 15px;
    color: #fff;
    font-size: 28px;
}

.btn:hover {
    color: #fff;
}</style>