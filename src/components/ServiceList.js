import React from 'react'
import ServiceImage_1 from '../images/servicesImages/service_1.png'
import ServiceImage_2 from '../images/servicesImages/service_2.png'
import ServiceImage_3 from '../images/servicesImages/service_3.png'
import ServiceImage_4 from '../images/servicesImages/service_4.png'
import ServiceImage_5 from '../images/servicesImages/service_5.png'
import ServiceImage_6 from '../images/servicesImages/service_6.png'
import ServiceImage_7 from '../images/servicesImages/service_7.png'
import ServiceImage_8 from '../images/servicesImages/service_8.png'
import ServiceListStyle from '../styles/ServiceList.styles'
import ServiceItem from './ServiceItem'
import ServiceTitle from './ServiceTitle'


export default function ServiceList() {
    return (
        <ServiceListStyle>
            <ServiceTitle 
            title='Why ShodaiMama'
            />
             <div class="serviceArea">
                 
                <ServiceItem 
                serviceImage={ServiceImage_1}
                serviceTitle='Hassle Free Grocery Shopping'
                serviceDesc='Avoid the crowds and long queues to get your daily needs.'
                />
              
                
                <ServiceItem 
                serviceImage={ServiceImage_2}
                serviceTitle='Freshness Redefined'
                serviceDesc=' Fresh groceries from trusted and hygienic sources to
                your doorstep.'
                />
              

             
                <ServiceItem 
                serviceImage={ServiceImage_3}
                serviceTitle=' On-time doorstep delivery'
                serviceDesc=' Solution to your needs just on time.'
                />
             

              
                <ServiceItem 
                serviceImage={ServiceImage_4}
                serviceTitle='Fast & Flawless payment system'
                serviceDesc='All secured payment gateways to ensure stress free fast
                payment.'
                />
               
            
                <ServiceItem 
                serviceImage={ServiceImage_5}
                serviceTitle='Customer Centric Approach'
                serviceDesc=' For us, our customer needs comes first. Our Aim is to
                offer the very Best quality, at the best price and
                deals.'
                />
        
           
                <ServiceItem 
                serviceImage={ServiceImage_6}
                serviceTitle='Value for Money'
                serviceDesc=' Commited to ensure that your hard-earned money are spent
                wisely.'
                />
             
                <ServiceItem 
                serviceImage={ServiceImage_7}
                serviceTitle='Prompt Query Resolve'
                serviceDesc=' Not just answering your calls, rather a substantial
                solution to all your queries.'
                />
              
                <ServiceItem 
                serviceImage={ServiceImage_8}
                serviceTitle=' Stress Free Refund/Return policy'
                serviceDesc='With proper validation your return and refund will be as
                smooth as your shopping experience with us.'
                />
            
             </div>
        </ServiceListStyle>
    )
}
