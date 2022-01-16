import {Skill, Talent}  from '../../store/CharacterStore';
import React, { Fragment, useEffect, useState } from 'react';
import './TalentGrid.scss';

type Props = {
    talent: Talent;
}


const TalentGrid = ({talent}: Props) => {
    let [talentValue, setTalentValue] = useState(0);

    useEffect(() => {
      var total = 0;
      talent.skills.map((skill: Skill) => total+=skill.value);
      setTalentValue(total/talent.skills.length);
    }, [talent.skills])
    
    return (
        <div className='talent-section'>
            <div className='skill-row main-row'>
                <div className='skill-name'> {talent.name} </div>
                <div className='skill-value'>{talentValue}</div>
            </div>
        { talent.skills.map(skill => {
            return (
                <div className='skill-row'>
                    <div className='skill-name' >{skill.name}</div>
                    <div className='skill-value'>{skill.value}</div>
                </div>
            )
        })}
        </div>
    );
};

export default TalentGrid;
