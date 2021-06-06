import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

// importing styling
import './calculators.css';

// importing components
import ListView from '../ListView/ListView';

// importing Components
import languageHelper from '../../partials/languageHelper';

// importing datas
const Calculators = require('../../DATA/Calculators');



// component content all languages
const componentContent = {
    en: {
        title: 'Calculators',
        description: 'list of all Calculators'
    },
    kr: {
        title: 'ژمێرەرەکان',
        description: 'لیستی ژمێرەرەکان'
    }
}



/**
 *  @return {Element} : Collections
 */
// *** using CollectionsRoute name instead of Collections because of the name of DATA Collections variable
function CalculatorsRoutes() {

    // getting params of the route
    const route = useParams();
    console.log(route);




    // if there was no params from the route, then it must be root calculators list view
    if (!route.calculatorUrlName) {
        return (
            <>
                {/* overriding page head */}
                <Helmet>
                    <title>Calculators | Math with Science</title>
                    <meta name="description" content="list of all calculators provieded by Math with Science" />
                </Helmet>


                {/* collections */}
                <div className="calculators" dir={languageHelper.getDirection()}>

                    {/* wecan make a header title and description for calculators, but it is easier to be with the ListView when we use it in different places */}

                    {/* collections list */}
                    <ListView
                        header={{
                            title: componentContent[languageHelper.getLanguageSymbol()].title,
                            description: componentContent[languageHelper.getLanguageSymbol()].description
                        }}
                        list={Calculators.find({ language: true, removeComponent: true, changeUrl: 'calculators', sort: { sortingLanguage: languageHelper.getLanguageSymbol() } })}
                    />

                </div>
            </>
        );
    }
    // if there was calculatorUrlName, then it is a calculator page
    else {
        /**
        * @todo make this check for the calculator and show it's page
        */
        return (
            <>
                {/* overriding page head */}
                <Helmet>
                    <title>TITLE | Math with Science</title>
                    <meta name="description" content="DESCRIPTION" />
                </Helmet>


                <div className="calculators">

                    {/* list grid */}
                    <ListView
                        header={{
                            title: 'NAME',
                            description: 'DESCRIPTION'
                        }}
                        list={[]}
                    />

                </div>
            </>
        );
    }
}

export default CalculatorsRoutes;
