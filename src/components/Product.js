import React from 'react'
import ProductStyle from '../styles/Product.styles'

export default function Product({productType,productImage,productName,productDesc,productPrice}) {
    return (
        <ProductStyle>
            <div class="product">
             <div class="productContent">
               <div class="productOrigin fresh">
                    <a href="#">{productType}</a>
                </div>
                  <div class="productContentInnen">
                   <div class="productImageArea">
                             <img
                                  class="productImg"
                                  src={productImage}
                                  alt=""
                                />
                        </div>
                              <p class="productName">{productName}</p>
                              <p class="productSubtext">{productDesc}</p>
                              <p class="productPriceArea">
                                <span class="quantitySymbol">৳ </span>
                                <span class="prodcutPrice">{productPrice}</span>
                              </p>
                            </div>
                          </div>
                          
                </div>
        </ProductStyle>
    )
}
