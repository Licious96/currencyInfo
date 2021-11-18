import './App.css'
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

    const [baseCurrency, setbaseCurrency] = useState([])
    const [rates, setRates] = useState([])

    useEffect(() => {

        try {
            axios.get('http://127.0.0.1:8000/api')
            .then(response => {
                setbaseCurrency(response.data.query.base_currency)
                setRates(response.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const refresh = () => {
        try {
            axios.get('http://127.0.0.1:8000/api')
            .then(response => {
                setbaseCurrency(response.data.query.base_currency)
                setRates(response.data.data)
                document.getElementById("btn").classList.add('btn_loading')
                setTimeout(function(){
                    document.getElementById("btn").classList.remove('btn_loading')
                }, 2000)
                
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <p className="h6 text-center m-4">The following currency rates are equal to 1 {baseCurrency}</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Currency</th>
                                <th scope="col">Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{baseCurrency}/ZAR</td>
                                <td>{rates.ZAR}</td>
                            </tr>
                            <tr>
                                <td>{baseCurrency}/BDT</td>
                                <td>{rates.BDT}</td>
                            </tr>
                            <tr>
                                <td>{baseCurrency}/PKR</td>
                                <td>{rates.PKR}</td>
                            </tr>
                            <tr>
                                <td>{baseCurrency}/INR</td>
                                <td>{rates.INR}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <button type="button" onClick={refresh} className="btn btn-primary" id="btn">
                                        <span class="btn_cnts">
                                            <i className="bi bi-arrow-clockwise"></i> refresh
                                        </span>
                                    </button>
                                </td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
      );
}

export default App;
