import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'



export default class Thukinh extends Component {


    state = {
        glassesCurrent: {
        },
    }

    renderSP = () => {
        return dataGlasses.map((sp, i) => {
            return <div>

                <img onClick={() => { this.changeGlass(sp) }} src={sp.url} alt="" key={i} className='ml-2 p-4' style={{
                    width: '120px',
                    cursor: 'pointer'
                }} />

            </div>

        })
    }
    changeGlass = (newGlass) => {
        this.setState({
            glassesCurrent: newGlass
        })
    }


    render() {
        let styleKinh = {
            width: '124px',
            top: '66px',
            left: '163px',
            opacity: '0.7'
        }
        return (
            <div style={{
                width: '30%',
                margin: 'auto'
            }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.5)', }}>
                    <div className="p-5 mt-5">
                        <h3 className='text-center bg-dark text-light'> Thử Kính</h3>
                        <div className="container">
                            <div className="text-center m-auto">
                                <div className='position-relative'>
                                    <img className='position-absolute' src={this.state.glassesCurrent.url} alt="" style={styleKinh} />
                                    <img className='w-50' src="./img/model.jpg" alt="" />
                                    <div className='text-light bg-success w-50 m-auto'>
                                        <p>Name glass: {this.state.glassesCurrent.name}</p>
                                        <p>Description: {this.state.glassesCurrent.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            {/* Div kính */}
                            <div className="row bg-light">
                                {this.renderSP()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
