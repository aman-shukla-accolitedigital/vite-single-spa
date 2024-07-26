
import React from "react";

const DynamicContent = ({content}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
            }}
        >
            <h1>
                {content}
            </h1>
        </div>
    );
};

export default DynamicContent;