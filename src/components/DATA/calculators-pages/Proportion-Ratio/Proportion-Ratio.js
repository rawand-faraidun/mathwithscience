import React from 'react';

// importing styling
import './proportion-ratio.css';

// importing Components
import languageHelper from '../../../partials/languageHelper';



// component content all languages
const componentContent = {
    method: {
        en: 'Method',
        kr: 'ڕێگا'
    },
    select: {
        en: ['Directly Proportion', 'Indirectly Proportion'],
        kr: ['ڕێژەی ڕاستەوخۆیی', 'ڕێژەی ناڕاستەوخۆیی']
    },
    label: {
        en: 'Input the Values',
        kr: 'ژمارەکان بنووسە'
    }
}



/**
 *  @return {Element} : Collections
 */
// *** using CollectionsRoute name instead of Collections because of the name of DATA Collections variable
function ProportionRatio() {

    return (
        <>
            <div className="">

                {/* list grid */}
                <h1>ProportionRatio hlaw</h1>

            </div>
        </>
    );
}

export default ProportionRatio;
