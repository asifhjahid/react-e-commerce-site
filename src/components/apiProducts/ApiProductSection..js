import React from 'react'
import FakeApiStore from '../fakeApi/FakeApiStore'
import ShoppingCart from '../ShoppingCart'

export default function FakeProductSection() {
    return (
        <div>
            <ShoppingCart />
            <FakeApiStore />
        </div>
    )
}
