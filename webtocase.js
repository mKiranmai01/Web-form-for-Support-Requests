<script>
    const caseType = document.getElementById("caseType");
    const dynamicFields = document.getElementById("dynamicFields");

    caseType.addEventListener("change", function() {
        let html = "";

        switch(this.value) {
            case "Order Inquiry":
                html = `
                    <div class="form-group">
                    <label>Order Number</label>
                    <input type="text">
                    </div>
                `;
                break;


        }
        dynamicFields.innerHTML = html;
    });
</script>