import React, { createContext } from 'react';
import all_products from '../Assets/all_products';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // Add category to each product if not already present
    const productsWithCategory = all_products.map(product => ({
        ...product,
        category: product.category || determineCategory(product.name)
    }));

    const contextValue = { all_products: productsWithCategory };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );

    // Helper function to determine category based on product name
    function determineCategory(name) {
        if (name.includes('Lipstick')) return 'Lips';
        if (name.includes('Lip Balm')) return 'Lip Balm';
        if (name.includes('Shampoo')) return 'Shampoo';
        if (name.includes('Face Wash')) return 'Face Wash';
        if (name.includes('Kajal')) return 'Kajal';
        if (name.includes('Serum')) return 'Serums & Essence';
        if (name.includes('Moisturizer')) return 'Face Moisturizer & Day Cream';
        if (name.includes('Bodywash')) return 'Shower Gels & Body Wash';
        if (name.includes('Suncare')) return 'Suncare';
        return 'Other';
    }
}

export default ShopContextProvider;