import React from 'react'
import { Button } from '../../styles/Button.styled';
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {addEmploi} from '../../../actions/emploi'

function Add_emploi({history}) {

    //state 
    const [emploi, setEmploi] = useState({ titre: "", desc: "", salaire: "", horaire: "", adresse: "", lien: "" })
    // dispatch 
    const dispatch = useDispatch()

        //handelChange 
        const handleChange = (e) => {
            setEmploi({...emploi, [e.target.name]: e.target.value})
        }
    
    return (
        <div>
            <Form className="container ">
                <br />
                <Form.Group className="my-little-form mb-3">
                    <Form.Control type="text"
                        placeholder="عنوان الشغل "
                        name="titre"
                        value={emploi.titre}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="my-little-form mb-3">
                    <Form.Control type="text"
                        placeholder="وصف الشغل "
                        name="desc"
                        value={emploi.desc}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="my-little-form mb-3">
                    <Form.Control type="number"
                        placeholder="راتب الشغل "
                        name="salaire"
                        value={emploi.salaire}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="my-little-form mb-3">
                    <Form.Control type="text"
                        placeholder=" وقت الشغل بالساعة"
                        name="horaire"
                        value={emploi.horaire}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="my-little-form mb-3">
                    <Form.Control type="text"
                        placeholder="مكان الشغل "
                        name="adresse"
                        value={emploi.adresse}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="my-little-form mb-3">
                    <Form.Control type="text"
                        placeholder="رابط المشاركة"
                        name="lien"
                        value={emploi.lien}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button onClick={() => { dispatch(addEmploi(emploi)); history.push('/rh') }} >اضافة عرض شغل</Button>
            </Form>
        </div>
    )
}

export default Add_emploi
