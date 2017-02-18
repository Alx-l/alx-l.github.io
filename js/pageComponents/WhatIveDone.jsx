
import React from 'react'
import connect from 'fluxx/lib/ReactConnector'

import { mainStore } from '../store'
import { setFilter } from '../data'

import IconHeader from '../reusableComponents/IconHeader'
import { History } from '../svg'
import CardList from '../components/CardList'
import * as Cards from '../collections/CardCollection'
import settings from '../settings'

const { accentColor, grey } = settings


const WhatIveDone = (props) => {

  const renderFilterBtn = (text, dataAttr) => {
    const { filters } = props

    return (
      <button className='FilterBtn'
        onClick={ () => setFilter(dataAttr, !filters[dataAttr]) }
        data-props={ dataAttr }
        style={ filters[dataAttr] ? styles.btn.active : styles.btn.inactive }
        tabIndex="0"
      >
        { text }
      </button>
    )
  }

  return (
    <div className='WhatIveDone'>
      <IconHeader icon={ History } size={ 20 } color={ grey } text='My work'/>
      <div className='Main-textBlock'>
        <p>Here is what I've done so far :</p>
      </div>
      <div className="WhatIveDone-filters">
        <span>show :</span>
        { renderFilterBtn('side projects', 'sideprojects') }
        { renderFilterBtn('jobs', 'jobs') }
      </div>
      <div>
        <CardList collectionToRender={ Cards } filters={ props.filters }/>
      </div>
    </div>
  )
}

// styles
const styles = {
  btn: {
    active: {
      background: accentColor,
      borderColor: 'transparent',
      color: '#fff'
    },
    inactive: {
      background: 'transparent'
    }
  }
}

export default connect(WhatIveDone, mainStore, state => state)