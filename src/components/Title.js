import React from 'react'
import TitleStyled from '../styles/Title.styles'


export default function Title({title,subTitle,subTitle2,image}) {
    return (
        <TitleStyled>
            <div class="preorderSection">
                <div class="container">
                  <div class="common__product__title__area">
                    <div class="common__product__title__wrapper">
                      <div class="common__product__left__border"></div>
                      <p class="common__product__title">{title}</p>
                      <p class="common__product__subTitle">
                        {subTitle}
                      </p>
                    </div>
                  </div>
                
                </div>
              </div>
        </TitleStyled>
    )
}
