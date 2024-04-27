<a name="readme-top"></a>

[![React][React.js]][React-url]
[![Springboot][Springboot.bdg]][springboot-url]
[![Docker][Docker.bdg]][Docker-url]

<br>

<div width="100px" height="100px" align="center">
<image width="100px" height="100px" src="https://brandslogos.com/wp-content/uploads/images/large/react-logo-1.png"/>
</div>

<div align="center">
  <h3 align="center">springboot and react application</h3>

  <p align="center">
    Progetto che permette la costruzione di una applicazione web avente React.js come componente Frontend e due servizi Springboot come Backend.
</div>

<br>
<br>

## Descrizione
Il progetto mira a offrire un modello per lo sviluppo completo di una web-app, sia dal punto di vista del Frontend che del Backend, affrontando le sfide comuni incontrate dagli sviluppatori nel tentativo di integrare servizi Spring Boot e React.js.

Le principali difficoltà risiedono spesso nei blocchi imposti dai browser, specialmente per quanto riguarda le politiche di CORS.

Di solito, la soluzione più diffusa online (anche supportata da fonti come Baeldung) consiste nell'"incapsulare" l'applicazione React in un servizio Spring Boot e poi utilizzare altre componenti (come Spring Cloud) per facilitare l'interazione con le altre API.

Tuttavia, in questo contesto, ho preferito adottare un approccio che mantenesse separate le tecnologie coinvolte, evitando soluzioni ibride.

In questo scenario, l'applicazione è basata su React e viene distribuita tramite NGINX, che si occupa di indirizzare correttamente le chiamate REST generate dal Frontend verso i servizi Spring Boot appropriati. È importante sottolineare che ci sono due servizi Spring Boot, evidenziando così la capacità del Frontend di interagire simultaneamente con più componenti del Backend.

<br>


![architecture drawio](https://github.com/alebianchi96/boilerplate/assets/130935791/d23a8426-e748-4c8d-b292-640ab301e3ac)


<br>

## Getting Started
Per agevolare l'installazione, il progetto è stato organizzato all'interno di un Docker Compose che include tre componenti principali:

- fe-react, accessibile sulla porta :80
- be-springboot, raggiungibile sulla porta :8080
- be-configuration, con interfaccia sulla porta :8081

L'Nginx, incaricato di mantenere l'applicazione React operativa, è configurato attraverso il file <code>default.conf</code>, dove sono specificati i riferimenti ai due servizi backend.

Per semplificare la pipeline di build e deploy di tutti e tre i progetti, è stato creato uno script denominato <code>deploy-all.sh</code>. Questo script gestisce tutte le fasi necessarie, tenendo conto delle preferenze dell'utente. Ad esempio, l'utente potrebbe desiderare di omettere una delle tre fasi di build prima del deploy tramite Docker Compose.

Instruzione per il lancio: <code>sh deploy-all.sh</code>

Durante le operazioni di sviluppo del frontend, è consigliabile mantenere l'intero progetto in esecuzione su Docker al fine di poter sfruttare l'instradamento verso le API di backend fornito dall'Nginx.

L'applicazione avviata in modalità sviluppo (<code>localhost:3000</code>) punterà l'Nginx in esecuzione su Docker grazie all'attributo "proxy" impostato nel suo package.jso.

Per avviare il Frontend in modalità di sviluppo, esegui il seguente comando: <code>cd fe-react && npm run start</code>

<br>
<br>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Springboot.bdg]: https://img.shields.io/badge/Springboot-20232A?style=for-the-badge&logo=springboot&logoColor=8dc891
[springboot-url]: https://e7.pngegg.com/pngimages/931/804/png-clipart-spring-framework-software-framework-java-application-framework-web-framework-java-leaf-text-thumbnail.png
[Docker.bdg]: https://img.shields.io/badge/Docker-20232A?style=for-the-badge&logo=docker&logoColor=61DAFB
[Docker-url]: https://w7.pngwing.com/pngs/219/411/png-transparent-docker-logo-kubernetes-microservices-cloud-computing-dockers-logo-text-logo-cloud-computing.png
