import React, { useEffect, useState } from "react";
import "./HomePage.css";
import "react-router-dom"

import Banner from "../../components/Banner/Banner";
import MainContent from "../../components/MainContent/MainContent";
import VisionSection from "../../components/VisionSection/VisionSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Title from "../../components/Title/Title";
import NextEvent from "../../components/NextEvent/NextEvent";
import PreviousEvents from "../../components/PreviousEvent/PreviousEvent"
import Container from "../../components/Container/Container";
import api, { nextEventResource, previousEventResource } from "../../Services/Service";
import Notification from "../../components/Notification/Notification";


const HomePage = () => {
  const [nextEvents, setNextEvents] = useState([]);
  const [previousEvents, setPreviousEvents] = useState([]);
  const [notifyUser, setNotifyUser] = useState(); //Componente Notification

  async function getNextEvents() {
    try {
      const promise = await api.get(nextEventResource);
      const dados = await promise.data;
      // console.log(dados);
      setNextEvents(dados); //atualiza o state

    } catch (error) {
      console.log("não trouxe os próximos eventos, verifique lá!");
      setNotifyUser({
        titleNote: "Erro",
        textNote: `Não foi possível carregar os próximos eventos. Verifique a sua conexão com a internet`,
        imgIcon: "danger",
        imgAlt:
        "Imagem de ilustração de erro. Rapaz segurando um balão com símbolo x.",
        showMessage: true,
      });
    }
  }

  async function getPreviousEvents() {
    try {
      const promise = await api.get(previousEventResource);
      const dados = await promise.data;
      // console.log(dados);
      setPreviousEvents(dados); //atualiza o state

    } catch (error) {
      console.log("Erro ao carregar eventos passados");
      setNotifyUser({
        titleNote: "Erro",
        textNote: `Não foi possível carregar os próximos eventos. Verifique a sua conexão com a internet`,
        imgIcon: "danger",
        imgAlt:
        "Imagem de ilustração de erro. Rapaz segurando um balão com símbolo x.",
        showMessage: true,
      });
    }
  }

  // roda somente na inicialização do componente
  useEffect(() => {
    getNextEvents(); //chama a função
    getPreviousEvents()
  }, []);

  return (
    
    <MainContent>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
      <Banner />

      {/* PRÓXIMOS EVENTOS */}
      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Próximos Eventos"} />

          <div className="events-box">
            {nextEvents.map((e) => {
              return (
                <NextEvent
                  key={e.idEvento}
                  title={e.nomeEvento}
                  description={e.descricao}
                  eventDate={e.dataEvento}
                  idEvent={e.idEvento}
                />
              );
            })}
          </div>
        </Container>
      </section>
      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Eventos Anteriores"} />

          <div className="events-box">
            {previousEvents.map((e) => {
              return (
                <PreviousEvents
                  key={e.idEvento}
                  title={e.nomeEvento}
                  description={e.descricao}
                  eventDate={e.dataEvento}
                  idEvent={e.idEvento}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;
