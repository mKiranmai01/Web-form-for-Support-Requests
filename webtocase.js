function showFields() {
    const caseType = document.getElementById("caseType").value;
    const dynamicFields = document.getElementById("dynamicFields");
    let html = "";

    if(caseType === "Product Issue") {
        html = `
            <div class="case-details-card">
                <h3>Product Issue Details</h3>
                <div class="form-group">
                    <label for="00NgK00004FCwju">Order Number <span style="color: red;">*</span></label>
                    <input 
                        id="00NgK00004FCwju"
                        type="text"
                        name="00NgK00004FCwju"
                        placeholder="Enter order number"
                        maxlength="50"
                        size="20"
                        required>
                </div> 

                <div class="form-group">
                    <label for="00NgK00002SgrTX">Product <span style="color: red;">*</span></label>
                    <select  id="00NgK00002SgrTX" name="00NgK00002SgrTX" title="Product" required>
                        <option value="">--None--</option>
                        <option value="P-001">iPhone 16 Pro</option>
                        <option value="LP0001">HP Laptop</option>
                        <option value="P-002">Kit Kat</option>
                        <option value="P-003">Rice</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="00NgK00004FDRvl">Issue Type</label>
                    <select  id="00NgK00004GlJbp" name="00NgK00004GlJbp" title="Issue Type">
                        <option value="">--None--</option>
                        <option value="Damaged Product">Damaged Product</option>
                        <option value="Wrong Product">Wrong Product</option>
                        <option value="Expired Product">Expired Product</option>
                        <option value="Spoiled Product">Spoiled Product</option>
                    </select>
                </div>
            </div>
            `;
    }

    else if(caseType === "Billing Issue") {
        html = `
            <div class="case-details-card">
                <h3>Billing Issue Details</h3>
                <div class="form-group">
                    <label for="00NgK00004FCwju">Order Number <span style="color: red;">*</span></label>
                    <input 
                        id="00NgK00004FCwju"
                        type="text"
                        name="00NgK00004FCwju"
                        placeholder="Enter order number"
                        maxlength="50"
                        size="20"
                        required>
                </div>

                <div class="form-group">
                    <label for="00NgK00004GluJd">Billing Issue Type</label>
                    <select  id="00NgK00004GluJd" name="00NgK00004GluJd" title="Billing Issue Type">
                        <option value="">--None--</option>
                        <option value="Wrong Price Charged">Wrong Price Charged</option>
                        <option value="Discount not Applied">Discount not Applied</option>
                        <option value="Missing item in bill">Missing item in bill</option>
                        <option value="Incorrect Quantity Billed">Incorrect Quantity Billed</option>
                    </select>
                </div>
            </div>
        `;
    }

    else if(caseType === "General Inquiry") {
        html =  `

            <div class="case-details-card">
                <h3>Inquiry Deatils</h3>
                <div class="form-group">
                    <label for="00NgK00004FDRvl">Inquiry Type</label>
                    <select  id="00NgK00004FDRvl" name="00NgK00004FDRvl" title="Inquiry Type">
                        <option value="">--None--</option>
                        <option value="Price Inquiry">Price Inquiry</option>
                        <option value="Availability Check">Availability Check</option>
                        <option value="Product Information">Product Information</option>
                        <option value="Store Timing">Store Timing</option>
                        <option value="Warranty Information">Warranty Information</option>
                        <option value="Promotion / Offer Details">Promotion / Offer Details</option>
                    </select>
                </div>
                
            </div>


        `;
    }

    else if(caseType === "Information Update") {

        html = `
            <div class="case-details-card">
                <h3>Information Update Details</h3>
                <div class="form-group">
                    <label for="00NgK00004FE1Uc">Field to Update:</label>
                    <select  id="00NgK00004GmrDF" name="00NgK00004GmrDF" title="Field to Update">
                        <option value="">--None--</option>
                        <option value="Name">Name</option>
                        <option value="Phone Number">Phone Number</option>
                        <option value="Email">Email</option>
                    </select>

                </div>
            </div>
        `;
    }
    else {
        html="";
    }
    dynamicFields.innerHTML = html;
        
}

