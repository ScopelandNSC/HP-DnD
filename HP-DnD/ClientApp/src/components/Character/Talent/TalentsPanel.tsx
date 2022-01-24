import {Skill, Talent}  from '../../../store/CharacterStore';
import React, { Fragment, useEffect, useState } from 'react';
import './TalentsPanel.scss';
import TalentsTable from './TalentsTable';

type Props = {
}

const TalentsPanel = () => {   
    return (  
        <div className='talent-panel'>
            <div className='panel-title'>
                Talents
            </div>
            <TalentsTable/>
        </div>
    );
};

export default TalentsPanel;
