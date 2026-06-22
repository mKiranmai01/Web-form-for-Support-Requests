function showFields() {
    const caseType = document.getElementById("caseType").value;
    const dynamicFields = document.getElementById("dynamicFields");
    let html = "";

    if(caseType === "invoice") {
        html = `
            <div class="case-details-card">
                <h3>Invoice Request Details</h3>
                <div class="form-group">
                    <label for="00NgK00004FCwju">Order Number <span style="color: red;">*</span></label>
                    <input 
                        id="00NgK00004FCwju"
                        type="text"
                        name="00NgK00004FCwju"
                        placeholder="Enter order number"
                        maxlength="50"
                        size="20">
                </div> 
            </div>
            `;
    }

    else if(caseType === "Product Inquiry") {
        html = `
            <div class="case-details-card">
                <h3>Product Inquiry Details</h3>
                <div class="form-group">
                    <label for="00NgK00002SgrTX">Product <span style="color: red;">*</span></label>
                    <select  id="00NgK00002SgrTX" name="00NgK00002SgrTX" title="Product">
                        <option value="">--None--</option>
                        <option value="P-001">iPhone 16 Pro</option>
                        <option value="LP0001">HP Laptop</option>
                        <option value="P-002">Kit Kat</option>
                        <option value="P-003">Rice</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="00NgK00004FDRvl">Inquiry Type</label>
                    <select  id="00NgK00004FDRvl" name="00NgK00004FDRvl" title="Inquiry Type">
                        <option value="">--None--</option>
                        <option value="Price Inquiry">Price Inquiry</option>
                        <option value="Availability Check">Availability Check</option>
                        <option value="Product Information">Product Information</option>
                    </select>
                </div>
            </div>
        `;
    }

    else if(caseType === "Product Complaint") {
        html =  `

            <div class="case-details-card">
                <h3>Product Complaint Details</h3>

                <div class="form-group">
                <label for="00NgK00004FCwju">Order Number <span style="color: red;">*</span></label>
                <input 
                    id="00NgK00004FCwju"
                    type="text"
                    name="00NgK00004FCwju"
                    placeholder="Enter order number"
                    maxlength="50"
                    size="20">
                </div>

                <div class="form-group">
                    <label for="00NgK00002SgrTX">Product <span style="color: red;">*</span></label>
                    <select  id="00NgK00002SgrTX" name="00NgK00002SgrTX" title="Product">
                        <option value="">--None--</option>
                        <option value="P-001">iPhone 16 Pro</option>
                        <option value="LP0001">HP Laptop</option>
                        <option value="P-002">Kit Kat</option>
                        <option value="P-003">Rice</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="00NgK00004FDRvl">Complaint Type</label>
                    <select  id="00NgK00004FDczF" name="00NgK00004FDczF" title="Complaint Type">
                        <option value="">--None--</option>
                        <option value="Fulfillment Issues">Fulfillment Issues</option>
                        <option value="Billing Issues">Billing Issues</option>
                        <option value="Product Issues">Product Issues</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                
            </div>


        `;
    }

    else if(caseType === "info") {

        html = `
            <div class="case-details-card">
                <h3>Information Update Details</h3>
                <div class="form-group">
                    <label for="00NgK00004FE1Uc">Update Type</label>
                    <select  id="00NgK00004FE1Uc" name="00NgK00004FE1Uc" title="Update type">
                        <option value="">--None--</option>
                        <option value="Phone Number Update">Phone Number Update</option>
                        <option value="Email Update">Email Update</option>
                        <option value="Name Correction">Name Correction</option>
                        <option value="Other">Other</option>
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

