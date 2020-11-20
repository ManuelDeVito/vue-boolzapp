
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
                        data: '20:30',
                        messaggio: 'Hai portato a spasso il cane?',
                        stato: 'inviato',
                        cancella: false

                    },
                    {
                        data: '20:45',
                        messaggio: 'Ricordati di dargli da mangiare',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '20:55',
                        messaggio: 'Tutto fatto!',
                        stato: 'ricevuto',
                        cancella: false
                    }
                ],
            },
            {
                nome: 'Fabio',
                avatar: 'http://www.avatars.it/pictures/Racing2024.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '19:14',
                        messaggio: 'Hai mangiato la pasta?',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '19:15',
                        messaggio: 'La trovi nella pentola',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '19:17',
                        messaggio: 'Grazie!',
                        stato: 'ricevuto',
                        cancella: false
                    }
                ],
            },
            {
                nome: 'Samuele',
                avatar: 'http://www.avatars.it/pictures/Sunset6_800.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '14:20',
                        messaggio: 'Sei andato in palestra?',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '14:21',
                        messaggio: 'Non andare troppo tardi',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '14:22',
                        messaggio: 'Va bene andrò presto!',
                        stato: 'ricevuto',
                        cancella: false
                    }
                ],
            },
            {
                nome: 'Alessandro B.',
                avatar: 'http://www.avatars.it/pictures/Surfing6_1024_thumb.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '08:50',
                        messaggio: 'Vai a ritirare la macchina dal meccanico',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '08:50',
                        messaggio: 'Ricordati di prendere i soldi',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '08:58',
                        messaggio: 'Ok tra poco vado!',
                        stato: 'ricevuto',
                        cancella: false
                    }
                ],
            },
            {
                nome: 'Alessandro L.',
                avatar: 'http://www.avatars.it/pictures/TN_220.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10:14',
                        messaggio: 'Vai a prendere tua sorella a scuola',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '10:14',
                        messaggio: 'Portagli il pranzo',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '10:19',
                        messaggio: 'Sarà fatto!',
                        stato: 'ricevuto',
                        cancella: false
                    }
                ],
            },
            {
                nome: 'Claudia',
                avatar: 'http://www.avatars.it/pictures/pampit.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '12:32',
                        messaggio: 'Vai a fare shopping oggi?',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '12:33',
                        messaggio: 'Se vai posso venire con te?',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '12:35',
                        messaggio: 'Oggi non riesco ho altri impegni!',
                        stato: 'ricevuto',
                        cancella: false
                    }
                ],
            },
            {
                nome: 'Davide',
                avatar: 'http://www.avatars.it/pictures/asroma27.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '17:20',
                        messaggio: 'Lo stadio era pieno oggi?',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '17:20',
                        messaggio: 'Quanto vorrei venire a tifare anche io',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '17:22',
                        messaggio: 'Si come sempre! Prima o poi verrai anche tu',
                        stato: 'ricevuto',
                        cancella: false
                    }
                ],
            },
            {
                nome: 'Federico',
                avatar: 'http://www.avatars.it/pictures/roma-totti_thumb.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '11:03',
                        messaggio: 'Tanti auguri di buon compleanno!',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '11:04',
                        messaggio: 'Ci vediamo stasera alla festa',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '11:05',
                        messaggio: 'Grazie mille a stasera!',
                        stato: 'ricevuto',
                        cancella: false
                    }
                ],
            },
            {
                nome: 'Manuel',
                avatar: 'http://www.avatars.it/pictures/uefaCampioni_thumb.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10:30',
                        messaggio: 'Vieni a giocare a calcetto stasera?',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '10:30',
                        messaggio: 'La partita inizia alle 21 ',
                        stato: 'inviato',
                        cancella: false
                    },
                    {
                        data: '10:33',
                        messaggio: 'Va bene ci sarò.A stasera!',
                        stato: 'ricevuto',
                        cancella: false
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
                data: this.orario_corrente(),
                messaggio: this.nuovo_messaggio_inviato,
                stato: 'inviato',
                cancella: false
            }

            this.contatti[this.indice_contatti].messaggi.push(nuovo_messaggio);

            this.nuovo_messaggio_inviato = '';

            this.scrollautomatico();

        setTimeout(() => {

            var risposta_automatica = {
                data: this.orario_corrente(),
                messaggio: 'Ok!!!',
                stato: 'ricevuto',
                cancella: false
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
                if (contatto.nome.toLowerCase().includes(this.ricerca_utenti.toLowerCase())) {
                    contatto.visibile = true;
                }else {
                    contatto.visibile = false;
                }
            });

        },

        drop_menu_visibile(indice) {

            if (this.contatti[this.indice_contatti].messaggi[indice].cancella == false) {
                this.contatti[this.indice_contatti].messaggi[indice].cancella = true;
            }else {
                this.contatti[this.indice_contatti].messaggi[indice].cancella = false;
            }
        },

        cancella_messaggio(indice) {
            this.contatti[this.indice_contatti].messaggi.splice(indice, 1);
        },



        mounted: function() {
            this.scrollautomatico();

        }


    }
});
