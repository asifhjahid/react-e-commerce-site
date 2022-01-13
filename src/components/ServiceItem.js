import React from 'react'
import ServiceItemStyle from '../styles/ServiceItem.styles'

export default function ServiceItem({serviceImage,serviceTitle,serviceDesc}) {
    return (
        <ServiceItemStyle>
            <div class="serviceItem">
                    <div class="serviceItemIcon">
                      <img 
                      src= {serviceImage}
                      alt="" />
                    </div>
                    <div class="serviceItemContent">
                      <p class="serviceContentTitle">
                        {serviceTitle}
                      </p>
                      <p class="serviceSubContentTitle">
                        {serviceDesc}
                      </p>
                    </div>
                  </div>
        </ServiceItemStyle>
    )
}
