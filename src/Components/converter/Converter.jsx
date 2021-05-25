import React from 'react'
import './Converter.css';


const Converter = (props) => {
   
    console.log(props.units)

    return (
        <>
            <div className="input-container">
                <div className="from">
                    <div>FROM</div>
                    <form className="form-input">
                        <input type="number" className="section1" />
                    </form>
                    <form className="form-input">
                        <select className="section1">
                            {
                              props.units.map(value => <option value={value}>{value}</option>)
                            }
                           
                           
                        </select>
                    </form>
                </div>
                <div className="to">
                    <div>TO</div>
                    <form className="form-input">
                        <input type="number" className="section2" />
                    </form>
                    <form className="form-input">
                        <select className="section2">
                            {
                              props.units.map(value => <option value={value}>{value}</option>)
                            }
                           
                        </select>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Converter;