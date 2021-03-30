import React from 'react';

// importing styling
import './new-features.css';

/**
 *  @return : Element, returns Home page new fueatures
 *  @includes : Homepage new features
 */
function NewFeatures() {

    // the new features array
    const features = [
        "Added Kurdish language",
        "Added dark theme",
        "Changed UI to more user friendly one",
        "Now, You can help with improving the website by giving us ideas",
        "As a developer, you can help with impoving and adding new features"
    ];


    return (
        <div className="new-features">

            <h2 className="new-features-title">New Features</h2>

            <ul className="new-features-list">

                {features.map((feature, i) => <li className="new-features-item" key={i}>{feature}</li>)}

            </ul>

        </div>
    );

}

export default NewFeatures;
