import React, { ReactNode } from 'react';

const profileLayout = ({children}:{children:ReactNode}) => {
    return (
        <div>
            <p>Profile layout</p>
            {children}
        </div>
    );
};

export default profileLayout;