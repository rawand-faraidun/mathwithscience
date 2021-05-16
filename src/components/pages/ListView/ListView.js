import React from 'react';

// importing styling
import './list-view.css';

// importing Components
import languageHelper from '../../partials/languageHelper';


/**
 * @props :
 *      @header : {Object}, object of headers details (OPTIONAL) :
 *          @title : {String}, title of the list
 *          @description : {String}, description of the list
 *      @list : {Array}, array of the list
 *      
 * 
 *  @return {Element} : List grid view
 */
function listView(props) {

    return (
        <>
            {/* list grid */}
            <div className="list-view">

                {/* list view headers */}
                {/* it will only show if header property excists */}
                {props.header ? (
                    <div className="list-view-header">

                        {/* list view title */}
                        <h1 className="list-view-title">{props.header.title}</h1>

                        {/* list view title */}
                        <p className="list-view-description">{props.header.description}</p>
                    </div>
                ) : ''}


                {/* list view grid of datas */}
                <div className="list-view-grid">

                    {/* each item */}
                    {props.list.map((item, i) =>
                        <div className="grid-item" key={i}>

                            {/* item name */}
                            <h2 className="grid-item-name">
                                <a href={item.urlName}>{item[languageHelper.getLanguageSymbol()].name}</a>
                                <span className="grid-item-name-arrow"><i class="fas fa-arrow-circle-right"></i></span>
                            </h2>

                            {/* item description */}
                            <p className="grid-item-description">
                                {item[languageHelper.getLanguageSymbol()].description.substring(0, 150)}...
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </>
    );

}

export default listView;
