import React from "react";




 function SelectedProduct() {
  return (
    <>
      <div className="selectedResponse">
      <div className="selectedHeader">
        <h2>Your Selected Product</h2>
      </div>
      <div>
        <table className="selectedTable">
          <tbody>
            <tr>
              <td>
                <img
                  src="https://5.imimg.com/data5/RV/YO/MY-14439822/mens-white-shirt-500x500.jpg"
                  alt=""
                  width={400}
                  height={400}
                />
              </td>
              <td>
                <div className="leftdata">
                <h4><span className="selectedName">NAME :</span><span>Mens Fit Shirt</span></h4>
                <h5><span className="slectedBrand">Brand :</span><span>US POLO</span></h5>
                <h6><span className="selectedPrice">Price :</span><span className="selectedPriceNumber">1540</span></h6>
                <select class="form-select selectedSelect" aria-label="Default select example">
                  <option selected>Select Qty</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <br/>
                <button className=" btn btn-md btn-danger   selectedButton">ADD TO CART</button>
                <br/>
                <br/>
                <p>
                    Care instructions: Machine Wash Fit Type : Slim Fit 100% Cotton Slim Fit Long Sleeve <br/>
                    Cutway Machine Wash.
                </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}



export default SelectedProduct;