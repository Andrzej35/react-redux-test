import React from 'react'
import { connect } from 'react-redux'
import './Earthquake.css'
import { fetchEarthquakes } from '../actions'

class Earthquakes extends React.Component {

    componentDidMount() {
        this.props.fetchEarthquakes()
    }

    renderEarthquakes(earthquake) {
        return (
            <div className="card" key={earthquake.id}>
                <div className="card-body">
                    <h3>{earthquake.properties.title}</h3>
                    <h4>{earthquake.properties.place}</h4>
                    <h5>{earthquake.properties.mag}</h5>
                    <p>Type: <strong>{earthquake.properties.type.toUpperCase()}</strong>  Id: {earthquake.id}</p>
                    <a href={earthquake.properties.url} className="btn btn-primary">More..</a>
                </div>
            </div>
        )
    }
    render() {
        const { earthquakes } = this.props

        if (earthquakes.length === 0) {
            return (
                <div>Not found</div>
            )
        }

        return (
            <div className="row">
                <div className="col">
                    {earthquakes.map(this.renderEarthquakes)}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    earthquakes: state.earthquakes
})

export default connect(mapStateToProps, { fetchEarthquakes })(Earthquakes)
