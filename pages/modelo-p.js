import Dashboard from '../components/elements/Dashboard';

import { useForm } from 'react-hook-form';
import {useEffect, useState} from "react";
import {calculoCostoTotal, calculoEOQ} from "../components/funcionality/inventario";

const index = () => {
    return (
        <div>
            <title>Modelo P</title>
            <main>
                <section className="section">
                    <Dashboard>
                        <ContainerEOQ />
                        <ContainerCostoTotal />
                    </Dashboard>
                </section>
            </main>
        </div>
    )
}

const ContainerEOQ = () => {

    const [field, setField] = useState([]);
    const [Qoptimo, setQoptimo] = useState(0);
    const {register, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
       // e.preventDefault();
        //console.log(data.D);
        setField(field.push(data));
        let d_ = calculoEOQ(data.D, data.S, data.H);
        setQoptimo(d_);
        console.log(d_);
    }

    return (
        <>
            <h3 className='subtitle is-4'>Cálculo de lote óptimo</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="columns">
                    <div className="column"><div className="field">
                        <label className="label">Demanda Anual</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                {...register("D", {
                                    required: true,
                                    message: "error"
                                })
                                }
                            />
                        </div>
                    </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Costo de Pedir</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("S", {
                                        required: true,
                                        message: "error"
                                    })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Costo de Mant. </label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("H", {
                                        required: true,
                                        message: "error"
                                    })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <input type='submit' className="button is-link" value='Calcular EOQ' />
                    </div>
                </div>
            </form>
            <div className="box">
                <p>EOQ: <span className='tag is-info'>{Qoptimo}</span></p>
            </div>
        </>
    )
}

const ContainerCostoTotal = () => {
    const [field, setField] = useState([]);
    const [costoTotal, setCostoTotal] = useState(0);
    const {register, handleSubmit} = useForm();

    const onSubmit = (e) => {
        e.preventDefault();
        //setField(field.push(data));
        //setCostoTotal(calculoCostoTotal(e.target[0].value, data.S, data.Q, data.H, data.C));
        console.log(e.target[0].value);
    }

    return (
        <>
            <h3 className='subtitle is-4'>Cálculo del costo total</h3>
            <form onSubmit={(onSubmit)}>
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <label className="label">Demanda Anual</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("D", {
                                        required: true,
                                        message: "error"
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Costo de Pedir</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("S", {
                                        required: true,
                                        message: "error"
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Cantidad</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("Q", {
                                        required: true,
                                        message: "error"
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <label className="label">Costo de mantenimiento anual</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                {...register("H", {
                                    required: true,
                                    message: "error"
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="column">
                        <label className="label">Costo del producto</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                {...register("C", {
                                    required: true,
                                    message: "error"
                                    })
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Calcular costo total</button>
                    </div>
                </div>
            </form>
            <div className="box">
                <p>Costo total anual: <span className='tag is-info'>{ costoTotal }</span></p>
            </div>
        </>
    )
}

export default index;