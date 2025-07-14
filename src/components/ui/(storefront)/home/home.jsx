import React from 'react'
import BannerCarousel from './banner'
import FeatureProduct from './feature-product'
import CategoryScroller from '../category-scroller'

export default function StoreFrontHomePage() {
    return (
        <div>
            <BannerCarousel />
            <CategoryScroller />
            <FeatureProduct />
        </div>
    )
}
