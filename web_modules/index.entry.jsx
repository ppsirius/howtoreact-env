'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Timer from 'absolvent/React/Timer'

ReactDOM.render(<Timer countdown={900} />, document.getElementById('app'));
