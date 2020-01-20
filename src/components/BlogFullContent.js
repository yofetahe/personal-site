import React, {Fragment} from 'react';

import RedirectPage from './RedirectPage';

const BlogFullContent = () => {
    return (
        <Fragment>
            <RedirectPage />
            <div id="homePageContent" className="PageContent">
                Full Content
            </div>
        </Fragment>
    );
}

export default BlogFullContent;