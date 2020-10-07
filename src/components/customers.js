import React, { useState, useEffect } from 'react';
import firebase from './firebase'

const handleCustomers = () => {

    const [cust, setCustomers] = useState([]);

    useEffect(() => {
        // going to be run by react
        // when the component unmounts we will drop the subscribtion
        const unsubscribe = firebase
            .firestore()
            .collection('customers')
            .onSnapshot((snapshot) => {
                const newCust = snapshot.docs.map((doc) => ({
                    id: doc.id, ...doc.data()
                }))

                setCustomers(newCust)
            })

        return () => unsubscribe()
    }, [])

    return cust;
}

const Customers = () => {

    const custs = handleCustomers()

    return (
        <>
            <h2>Customers</h2>
            <ul>
                {custs.map(cust =>
                    <li key={cust.id}>
                        {cust.email}
                    </li>
                )}
            </ul>
        </>
    )
}


export default Customers;