import React, {useEffect} from 'react'
import { getSmurfs } from '../Actions'
import Smurf from './Smurf'
import { connect } from 'react-redux'


const SmurfList = props => {

    useEffect(() => {
        props.getSmurfs()
    },[])


    return (
        <div>
            {props.smurfs.map(smurf =>
                <Smurf smurf={smurf}/>)}
        </div>
    )



}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps, {getSmurfs})(SmurfList)