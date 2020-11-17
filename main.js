
var app = new Vue ({

    el:'#root',

    data: {

    ricerca_utenti: "",

    nuovo_messaggio_inviato: "",

    indice_contatti: 0,

    contatti: [
            {
                nome: 'Michele',
                avatar: 'http://www.avatars.it/pictures/Mondiali.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '12/11/2020 20:30:35',
                        messaggio: 'Hai portato a spasso il cane?',
                        stato: 'inviato'
                    },
                    {
                        data: '12/11/2020 20:45:50',
                        messaggio: 'Ricordati di dargli da mangiare',
                        stato: 'inviato'
                    },
                    {
                        data: '12/11/2020 20:55:23',
                        messaggio: 'Tutto fatto!',
                        stato: 'ricevuto'
                    }
                ],
            },
            {
                nome: 'Fabio',
                avatar: 'http://www.avatars.it/pictures/Racing2024.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '23/05/2020 19:14:11',
                        messaggio: 'Hai mangiato la pasta?',
                        stato: 'inviato'
                    },
                    {
                        data: '23/05/2020 19:15:05',
                        messaggio: 'La trovi nella pentola',
                        stato: 'inviato'
                    },
                    {
                        data: '23/05/2020 19:17:25',
                        messaggio: 'Grazie!',
                        stato: 'ricevuto'
                    }
                ],
            },
            {
                nome: 'Samuele',
                avatar: 'http://www.avatars.it/pictures/Sunset6_800.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '15/06/2020 14:20:21',
                        messaggio: 'Sei andato in palestra?',
                        stato: 'inviato'
                    },
                    {
                        data: '15/06/2020 14:21:07',
                        messaggio: 'Non andare troppo tardi',
                        stato: 'inviato'
                    },
                    {
                        data: '15/06/2020 14:22:45',
                        messaggio: 'Va bene andrò presto!',
                        stato: 'ricevuto'
                    }
                ],
            },
            {
                nome: 'Alessandro B.',
                avatar: 'http://www.avatars.it/pictures/Surfing6_1024_thumb.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '30/06/2020 08:50:46',
                        messaggio: 'Vai a ritirare la macchina dal meccanico',
                        stato: 'inviato'
                    },
                    {
                        data: '30/06/2020 08:52:32',
                        messaggio: 'Ricordati di prendere i soldi',
                        stato: 'inviato'
                    },
                    {
                        data: '30/06/2020 08:58:13',
                        messaggio: 'Ok tra poco vado!',
                        stato: 'ricevuto'
                    }
                ],
            },
            {
                nome: 'Alessandro L.',
                avatar: 'http://www.avatars.it/pictures/TN_220.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '03/07/2020 10:14:27',
                        messaggio: 'Vai a prendere tua sorella a scuola',
                        stato: 'inviato'
                    },
                    {
                        data: '03/07/2020 10:14:48',
                        messaggio: 'Portagli il pranzo',
                        stato: 'inviato'
                    },
                    {
                        data: '03/07/2020 10:19:21',
                        messaggio: 'Sarà fatto!',
                        stato: 'ricevuto'
                    }
                ],
            },
            {
                nome: 'Claudia',
                avatar: 'http://www.avatars.it/pictures/pampit.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '16/07/2020 12:32:40',
                        messaggio: 'Vai a fare shopping oggi?',
                        stato: 'inviato'
                    },
                    {
                        data: '16/07/2020 12:33:02',
                        messaggio: 'Se vai posso venire con te?',
                        stato: 'inviato'
                    },
                    {
                        data: '16/07/2020 12:35:18',
                        messaggio: 'Oggi non riesco ho altri impegni!',
                        stato: 'ricevuto'
                    }
                ],
            },
            {
                nome: 'Davide',
                avatar: 'http://www.avatars.it/pictures/asroma27.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '23/03/2020 17:20:43',
                        messaggio: 'Lo stadio era pieno oggi?',
                        stato: 'inviato'
                    },
                    {
                        data: '23/03/2020 17:20:49',
                        messaggio: 'Quanto vorrei venire a tifare anche io',
                        stato: 'inviato'
                    },
                    {
                        data: '23/03/2020 17:22:05',
                        messaggio: 'Si come sempre! Prima o poi verrai anche tu',
                        stato: 'ricevuto'
                    }
                ],
            },
            {
                nome: 'Federico',
                avatar: 'http://www.avatars.it/pictures/roma-totti_thumb.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '03/10/2020 11:03:41',
                        messaggio: 'Tanti auguri di buon compleanno!',
                        stato: 'inviato'
                    },
                    {
                        data: '03/10/2020 11:04:06',
                        messaggio: 'Ci vediamo stasera alla festa',
                        stato: 'inviato'
                    },
                    {
                        data: '03/10/2020 11:05:33',
                        messaggio: 'Grazie mille a stasera!',
                        stato: 'ricevuto'
                    }
                ],
            },
            {
                nome: 'Manuel',
                avatar: 'http://www.avatars.it/pictures/uefaCampioni_thumb.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '04/12/2020 10:30:41',
                        messaggio: 'Vieni a giocare a calcetto stasera?',
                        stato: 'inviato'
                    },
                    {
                        data: '04/12/2020 10:30:53',
                        messaggio: 'La partita inizia alle 21 ',
                        stato: 'inviato'
                    },
                    {
                        data: '04/12/2020 10:33:29',
                        messaggio: 'Va bene ci sarò.A stasera!',
                        stato: 'ricevuto'
                    }
                ],
            },
        ]

    },
    methods: {

        cambio_utente(contatto_corrente) {

            this.indice_contatti = contatto_corrente;
            this.scrollautomatico();
        },

        aggiungi_messaggio() {

            var nuovo_messaggio = {
                data: '12/11/2020 21:04:21',
                messaggio: this.nuovo_messaggio_inviato,
                stato: 'inviato'
            }

            this.contatti[this.indice_contatti].messaggi.push(nuovo_messaggio);

            this.nuovo_messaggio_inviato = '';

            this.scrollautomatico();

        setTimeout(() => {

            var risposta_automatica = {
                data: '12/11/2020 21:05:48',
                messaggio: 'Ok!!!',
                stato: 'ricevuto'
            }

            this.scrollautomatico();

            this.contatti[this.indice_contatti].messaggi.push(risposta_automatica);
            }, 1000);


        },

        scrollautomatico() {

            Vue.nextTick(function(){
                let chat_scroll_messaggi = document.getElementsByClassName('chat')[0];
                chat_scroll_messaggi.scrollTop = chat_scroll_messaggi.scrollHeight;
            });

        },

        trova_contatto() {

            this.contatti.forEach((contatto, i) => {
                if (contatto.nome.includes(this.ricerca_utenti)) {
                    contatto.visibile = true;
                }else {
                    contatto.visibile = false;
                }
            });

        },

        mounted: function() {
            this.scrollautomatico();

        }


    }
});
