import Dashboard from '../components/elements/Dashboard';

import { useForm } from 'react-hook-form';
import {useEffect, useState} from "react";

const index = () => {
    return (
        <div>
            <title>Modelo P</title>
            <main>
                <section className="section">
                    <Dashboard>
                        <ContainerForm />
                    </Dashboard>
                </section>
            </main>
        </div>
    )
}

const ContainerForm = () => {

    const [field, setField] = useState([]);
    const {register, handleSubmit} = useForm();

    useEffect(() => {

    }, [])

    const calcEOQ = () => {
        //setField([...field, data]);
        //console.log(data);
    }

    return (
        <>
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
                    <button className="button is-link" onClick={ calcEOQ }>Calcular EOQ</button>
                </div>
            </div>
        </>
    )
}

export default index;