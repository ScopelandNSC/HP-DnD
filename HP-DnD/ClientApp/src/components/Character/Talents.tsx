import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../../store';
import * as CharacterStore from '../../store/CharacterStore';
import { range, filter, map } from 'rxjs';
import React, { Fragment, useEffect } from 'react';
import TalentGrid from './TalentGrid';
import './Talents.scss'

type CharacterProps =
    CharacterStore.CharacterState &
    typeof CharacterStore.actionCreators

const TalentsTable = ({ talents }: CharacterProps) => {

    return (
        <div className='talents-table'>
            <div className='talents-table-row title'>
                Talents
            </div>
            <div className='talents-table-row'>
                { talents 
                    ? 
                        talents.map((talent: CharacterStore.Talent) => {
                          return (<TalentGrid
                              talent={talent}
                          />)
                        })
                    : 
                        null
                }
            </div>
        </div>
    );
};

export default connect(
    (state: ApplicationState) => state.character,
    CharacterStore.actionCreators
)(TalentsTable);
