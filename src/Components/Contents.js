import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from './Profile'
import Order from './Order'


const Contents = () => {
    return (
        <div>
            {/* <div className='top'></div>
            <div className='below'></div> */}
            <Switch>
                <Route exact path='/'>
                    <div className='content'>
                        <Profile/>
                    </div>
                </Route>
                <Route path='/order'>
                    <div >
                        <Order/>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default Contents
