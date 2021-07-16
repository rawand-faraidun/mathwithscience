import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

// importing styling
import './collections.css';

// importing components
import ListView from '../ListView/ListView';

// importing Components
import languageHelper from '../../partials/languageHelper';

// importing proportion Ratio
import CalculatorPage from '../CalculatorPage/CalculatorPage';

// importing datas
const Collections = require('../../DATA/Collections');
const Calculators = require('../../DATA/Calculators');



// component content all languages
const componentContent = {
    collectionsList: {
        en: {
            title: 'Collections',
            description: 'list of all Collections'
        },
        kr: {
            title: 'لقەکان',
            description: 'لیستی لقەکان'
        }
    }
}



/**
 *  @return {Element} : Collections
 */
// *** using CollectionsRoute name instead of Collections because of the name of DATA Collections variable
function CollectionsRoutes() {

    // getting params of the route
    const route = useParams();




    // if there was no params from the route, then it must be root calculations list view
    if (!route.collectionUrlName && !route.calculatorUrlName) {
        return (
            <>
                {/* overriding page head */}
                <Helmet>
                    <title>Collections | Math with Science</title>
                    <meta name="description" content="List of all collections provieded by Math with Science" />
                </Helmet>


                {/* collections */}
                <div className="collections" dir={languageHelper.getDirection()}>

                    {/* wecan make a header title and description for collections, but it is easier to be with the ListView when we use it in different places */}

                    {/* collections list */}
                    <ListView
                        header={{
                            title: componentContent.collectionsList[languageHelper.getLanguageSymbol()].title,
                            description: componentContent.collectionsList[languageHelper.getLanguageSymbol()].description
                        }}
                        list={Collections.find({
                            language: true,
                            changeUrl: 'collections',
                            sort: { sortingLanguage: languageHelper.getLanguageSymbol() }
                        })}
                    />

                </div>
            </>
        );
    }




    // if there was only collectionUrlName, so it is the list of a collection
    if (route.collectionUrlName && !route.calculatorUrlName) {

        // getting the collection choosen in the url
        const collection = Collections.findOne({ urlName: route.collectionUrlName });

        // checking if the collection was vailed
        if (collection === undefined) {
            /**
             * @todo add 404 not found here
             */

            console.log('undefined collection');
            return (
                <>
                    <div className="undefined" style={{ marginTop: 'var(--first-element-margin-top)' }}>
                        <h1>undefined collection</h1>
                    </div>
                </>
            );
        }

        // getting the collections calculators
        const calculators = Calculators.findIn({
            list: collection.calculatorsUrlName,
            language: true,
            removeComponent: true,
            changeUrl: `collections/${collection.urlName}`,
            sort: { sortingLanguage: languageHelper.getLanguageSymbol() }
        });


        return (
            <>
                {/* overriding page head */}
                <Helmet>
                    <title>{collection.en.name} | Math with Science</title>
                    <meta name="description" content={collection[languageHelper.getLanguageSymbol()].name} />
                </Helmet>


                {/* collections */}
                <div className="collections" dir={languageHelper.getDirection()}>

                    {/* wecan make a header title and description for collections, but it is easier to be with the ListView when we use it in different places */}

                    {/* collections list */}
                    <ListView
                        header={{
                            title: collection[languageHelper.getLanguageSymbol()].name,
                            description: collection[languageHelper.getLanguageSymbol()].description
                        }}
                        list={calculators}
                    />

                </div>
            </>
        );
    }




    // if there both params, so it a calculator in a collection
    if (route.collectionUrlName && route.calculatorUrlName) {

        const calculator = Calculators.findOne({ urlName: route.calculatorUrlName });

        // checking if the collection was vailed
        if (calculator === undefined) {
            /**
             * @todo add 404 not found here
             */

            console.log('undefined collection');
            return (
                <>
                    <div className="undefined" style={{ marginTop: 'var(--first-element-margin-top)' }}>
                        <h1>undefined collection</h1>
                    </div>
                </>
            );
        }

        /**
        * @todo make this check for the calculator in the collection
        */
        return (
            <>
                <div className="collections">

                    {/* Getting wanted calculator */}
                    <CalculatorPage calculatorData={calculator} haveHeader={true} useHelmet={true} />

                </div>
            </>
        );
    }

}

export default CollectionsRoutes;
