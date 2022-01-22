import React from 'react'
import Title from '../Title'
import FakeApiStore from './FakeApiStore'


export default function FakeProductSection() {
    return (
        <div>
            <Title 
            title='Fake Api Products'
            subTitle='An api to fetch dummy e-commerce product'
            
            />
            <FakeApiStore />
        </div>
    )
}
