import React from 'react';
import { useParams } from 'react-router-dom';

// importing styling
import './collections.css';

// importing components
import ListView from '../ListView/ListView';

// importing Components
import languageHelper from '../../partials/languageHelper';

// importing datas
const Collections = require('../../DATA/Collections');
const Calculators = require('../../DATA/Calculators');



// component content all languages
const componentContent = {
    en: {
        title: 'Collections',
        description: 'list of all Collections'
    },
    kr: {
        title: 'لقەکان',
        description: 'لیستی لقەکان'
    }
}



/**
 *  @return {Element} : Collections
 */
// *** using CollectionsRoute name instead of Collections because of the name of DATA Collections variable
function CollectionsRoutes() {

    // getting params of the route
    var route = useParams();




    // if there was no params from the route, then it must be root calculations list view
    if (!route.collectionUrlName && !route.calculatorUrlName) {
        return (
            <>
                {/* collections */}
                <div className="collections" dir={languageHelper.getDirection()}>

                    {/* wecan make a header title and description for collections, but it is easier to be with the ListView when we use it in different places */}

                    {/* collections list */}
                    <ListView
                        header={{
                            title: componentContent[languageHelper.getLanguageSymbol()].title,
                            description: componentContent[languageHelper.getLanguageSymbol()].description
                        }}
                        list={Collections.find({
                            language: true,
                            changeUrl: 'collections',
                            sort: 1
                        })}
                    />

                </div>
            </>
        );
    }




    // if there was only collectionUrlName, so it is the list of a collection
    if (route.collectionUrlName && !route.calculatorUrlName) {

        // getting the collection choosen in the url
        var collection = Collections.findOne({ urlName: route.collectionUrlName, language: true });

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
        var calculators = Calculators.findIn({ list: collection.calculatorsUrlName, language: true, changeUrl: `collections/${collection.urlName}` });


        return (
            <>
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
        /**
        * @todo make this check for the calculator in the collection
        */
        return (
            <>
                <div className="collections">

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

export default CollectionsRoutes;
