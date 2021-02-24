import React from 'react'

var time = new Date();
var currentYear = time.getFullYear()

function footer() {
    return (
        <div className="footer">
            Copyright © {currentYear}
        </div>
    )
};

export default footer