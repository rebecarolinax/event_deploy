import React, { useState, useContext, useEffect } from 'react';
import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';
import { UserContext } from '../../context/AuthContext';
import Title from '../../components/Title/Title';
import api, { commentaryEventResource, eventsResource } from '../../Services/Service';
import { redirect, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import Table from './TableDetails/TableDetails'
import './EventDetails.jsx'

const EventDetails = () => {

    const [evento, setEvento] = useState({});
    const { userData } = useContext(UserContext);
    const [comentarios, setComentarios] = useState([]);
    const { eventoId } = useParams();
    const [showSpinner, setShowSpinner] = useState(false);
    const navigate = useNavigate();



    useEffect(() => {
        loadEvento();
        loadComentarios();
    }, [eventoId]); //

    async function loadEvento() {
        console.log(evento);
        try {
            const promise = await api.get(`${eventsResource}/${eventoId}`)
            if (promise.status === 200) setEvento(promise.data)
            else navigate("/");
        } catch (error) {
            console.error(error);
        }
    }


    async function loadComentarios() {
        try {
            let resource = `${commentaryEventResource}/GetExibe/${eventoId}`
            if (userData.role === "Administrador") {
                resource = `${commentaryEventResource}/GetAll/${eventoId}`
            }

            const promise = await api.get(resource)
            if (promise.status === 200) setComentarios(await promise.data)
            else redirect("/")

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
            <MainContent>
                <Container>
                    <div style={{ margin: 50 + "px" }} >
                        <Title titleText={"Detalhes do evento"} />
                    </div>
                    <Table
                        nomeEvento={evento.nomeEvento}
                        descricao={evento.descricao}
                        tipoEvento={evento.tipoEvento}
                        dataEvento={new Date(evento.dataEvento).toLocaleDateString()}
                        comentarios={comentarios}
                    />
                </Container>
            </MainContent>
        </>
    );
};

export default EventDetails;