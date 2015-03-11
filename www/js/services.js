angular.module('starter.services', [])

    .factory('DateUtils', function () {
        this.addDays=function(date,days)
        {
            var newDay=new Date(date.getTime());
            newDay.setDate(newDay.getDate()+days);
            return newDay;
        };
        return this;
    })
    .factory('Session', function () {
        this.getCurDay=function()
        {
            var day;
            var sessionDay=sessionStorage.getItem('sessionDay');
            if (!sessionDay)
            {
                day=new Date();
                sessionStorage.setItem('sessionDay',day);
            }
            else
            {
                day=new Date(sessionDay);
            }
            return day;
        };

        this.setCurDay=function(day){
            sessionStorage.setItem('sessionDay',day);
        };

        return this;
    })
    .factory('Course', function (Account) {

        var courses = [
            {
                id: 0,
                name: 'Hydrobyke',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: true,
                snellimento: false,
                benessere: false,
                needsBooking: true,
                sessions: [
                    {
                        id:1,
                        room: 'Water',
                        dayOfWeek: 1,
                        start: '10:00',
                        end: '10:55'
                    }
                ]
            },
            {
                id: 1,
                name: 'Cardiofit',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: false,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:2,
                        room: 'Water',
                        dayOfWeek: 1,
                        start: '13:30',
                        end: '14:25'
                    },
                    {
                        id:3,
                        room: 'Water',
                        dayOfWeek: 4,
                        start: '10:00',
                        end: '10:55'
                    },
                    {
                        id:4,
                        room: 'Water',
                        dayOfWeek: 5,
                        start: '15:30',
                        end: '16:25'
                    },
                    {
                        id:5,
                        room: 'Water',
                        dayOfWeek: 6,
                        start: '11:30',
                        end: '12:25'
                    }
                ]
            },
            {
                id: 2,
                name: 'Walk & gym',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: true,
                benessere: false,
                needsBooking: true,
                sessions: [
                    {
                        id:6,
                        room: 'Water',
                        dayOfWeek: 1,
                        start: '18:30',
                        end: '19:25'
                    },
                    {
                        id:7,
                        room: 'Water',
                        dayOfWeek: 2,
                        start: '10:00',
                        end: '10:55'
                    }
                ]
            },
            {
                id: 3,
                name: 'Waterfit',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: false,
                benessere: false,
                needsBooking: true,
                sessions: [
                    {
                        id:8,
                        room: 'Water',
                        dayOfWeek: 2,
                        start: '15:30',
                        end: '16:25'
                    },
                    {
                        id:9,
                        room: 'Water',
                        dayOfWeek: 0,
                        start: '11:30',
                        end: '12:25'
                    }
                ]
            },
            {
                id: 4,
                name: 'Byke & gym',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: true,
                snellimento: false,
                benessere: false,
                needsBooking: true,
                sessions: [
                    {
                        id:10,
                        room: 'Water',
                        dayOfWeek: 2,
                        start: '19:00',
                        end: '19:55'
                    },
                    {
                        id:11,
                        room: 'Water',
                        dayOfWeek: 0,
                        start: '11:30',
                        end: '12:25'
                    }
                ]
            },
            {
                id: 5,
                name: 'Watertone',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: false,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:12,
                        room: 'Water',
                        dayOfWeek: 3,
                        start: '10:00',
                        end: '10:55'
                    }
                ]
            },
            {
                id: 6,
                name: 'Water Step',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: true,
                snellimento: false,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:13,
                        room: 'Water',
                        dayOfWeek: 3,
                        start: '18:30',
                        end: '19:25'
                    },
                    {
                        id:14,
                        room: 'Water',
                        dayOfWeek: 5,
                        start: '18:00',
                        end: '18:55'
                    }
                ]
            },
            {
                id: 7,
                name: 'Hydro Walk',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: true,
                benessere: false,
                needsBooking: true,
                sessions: [
                    {
                        id:15,
                        room: 'Water',
                        dayOfWeek: 3,
                        start: '20:30',
                        end: '21:25'
                    }
                ]
            },
            {
                id: 8,
                name: 'Water Functional',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: true,
                snellimento: false,
                benessere: false,
                needsBooking: true,
                sessions: [
                    {
                        id:16,
                        room: 'Water',
                        dayOfWeek: 4,
                        start: '14:30',
                        end: '15:25'
                    }
                ]
            },
            {
                id: 9,
                name: 'Water Circuit',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:17,
                        room: 'Water',
                        dayOfWeek: 4,
                        start: '19:00',
                        end: '19:55'
                    },
                    {
                        id:18,
                        room: 'Water',
                        dayOfWeek: 5,
                        start: '10:00',
                        end: '10:55'
                    }
                ]
            },
            {
                id: 21,
                name: 'Pilates',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: false,
                snellimento: false,
                benessere: true,
                needsBooking: false,
                sessions: [
                    {
                        id:19,
                        room: 'Conscious',
                        dayOfWeek: 1,
                        start: '11:30',
                        end: '12:25'
                    },
                    {
                        id:20,
                        room: 'Conscious',
                        dayOfWeek: 2,
                        start: '19:30',
                        end: '20:25'
                    },
                    {
                        id:21,
                        room: 'Conscious',
                        dayOfWeek: 3,
                        start: '15:30',
                        end: '16:25'
                    },
                    {
                        id:22,
                        room: 'Conscious',
                        dayOfWeek: 3,
                        start: '19:15',
                        end: '20:10'
                    },
                    {
                        id:23,
                        room: 'Conscious',
                        dayOfWeek: 4,
                        start: '18:30',
                        end: '19:25'
                    },
                    {
                        id:24,
                        room: 'Conscious',
                        dayOfWeek: 5,
                        start: '10:30',
                        end: '11:25'
                    }
                ]
            },
            {
                id: 22,
                name: 'Miofascial/Pilates',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: false,
                snellimento: false,
                benessere: true,
                needsBooking: false,
                sessions: [
                    {
                        id:25,
                        room: 'Conscious',
                        dayOfWeek: 1,
                        start: '17:00',
                        end: '17:55'
                    },
                    {
                        id:26,
                        room: 'Conscious',
                        dayOfWeek: 3,
                        start: '11:30',
                        end: '12:25'
                    },
                    {
                        id:27,
                        room: 'Conscious',
                        dayOfWeek: 4,
                        start: '19:30',
                        end: '20:25'
                    }
                ]
            },
            {
                id: 23,
                name: 'Pilates advanced',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: false,
                benessere: true,
                needsBooking: false,
                sessions: [
                    {
                        id:28,
                        room: 'Conscious',
                        dayOfWeek: 1,
                        start: '18:15',
                        end: '19:10'
                    }
                ]
            },
            {
                id: 24,
                name: 'Yoga',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: false,
                benessere: true,
                needsBooking: false,
                sessions: [
                    {
                        id:29,
                        room: 'Conscious',
                        dayOfWeek: 1,
                        start: '19:15',
                        end: '20:10'
                    },
                    {
                        id:30,
                        room: 'Conscious',
                        dayOfWeek: 2,
                        start: '09:30',
                        end: '10:25'
                    },
                    {
                        id:31,
                        room: 'Conscious',
                        dayOfWeek: 3,
                        start: '18:15',
                        end: '19:10'
                    },
                    {
                        id:32,
                        room: 'Conscious',
                        dayOfWeek: 4,
                        start: '13:30',
                        end: '14:25'
                    },
                    {
                        id:33,
                        room: 'Conscious',
                        dayOfWeek: 5,
                        start: '18:15',
                        end: '19:10'
                    },
                    {
                        id:34,
                        room: 'Conscious',
                        dayOfWeek: 6,
                        start: '12:00',
                        end: '12:55'
                    }
                ]
            },
            {
                id: 25,
                name: 'Gluteus',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:35,
                        room: 'Conscious',
                        dayOfWeek: 2,
                        start: '18:30',
                        end: '19:00'
                    },
                    {
                        id:36,
                        room: 'Fun',
                        dayOfWeek: 1,
                        start: '17:15',
                        end: '17:45'
                    },
                    {
                        id:37,
                        room: 'Fun',
                        dayOfWeek: 2,
                        start: '14:30',
                        end: '15:00'
                    },
                    {
                        id:38,
                        room: 'Fun',
                        dayOfWeek: 3,
                        start: '20:00',
                        end: '20:30'
                    },
                    {
                        id:39,
                        room: 'Fun',
                        dayOfWeek: 4,
                        start: '17:15',
                        end: '17:45'
                    }
                ]
            },
            {
                id: 26,
                name: 'Special abdominal',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:40,
                        room: 'Conscious',
                        dayOfWeek: 2,
                        start: '19:00',
                        end: '19:30'
                    },
                    {
                        id:41,
                        room: 'Fun',
                        dayOfWeek: 1,
                        start: '17:45',
                        end: '18:15'
                    },
                    {
                        id:42,
                        room: 'Fun',
                        dayOfWeek: 1,
                        start: '15:00',
                        end: '15:30'
                    },
                    {
                        id:43,
                        room: 'Fun',
                        dayOfWeek: 3,
                        start: '19:30',
                        end: '20:00'
                    },
                    {
                        id:44,
                        room: 'Fun',
                        dayOfWeek: 4,
                        start: '17:45',
                        end: '18:15'
                    }
                ]
            },
            {
                id: 27,
                name: 'Zumba',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:45,
                        room: 'Conscious',
                        dayOfWeek: 2,
                        start: '20:30',
                        end: '21:25'
                    },
                    {
                        id:46,
                        room: 'Fun',
                        dayOfWeek: 3,
                        start: '16:30',
                        end: '17:25'
                    },
                    {
                        id:47,
                        room: 'Fun',
                        dayOfWeek: 4,
                        start: '11:00',
                        end: '11:55'
                    },
                    {
                        id:48,
                        room: 'Fun',
                        dayOfWeek: 4,
                        start: '20:30',
                        end: '21:25'
                    },
                    {
                        id:49,
                        room: 'Fun',
                        dayOfWeek: 5,
                        start: '11:00',
                        end: '11:55'
                    }
                ]
            },
            {
                id: 28,
                name: 'Stretching',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: false,
                snellimento: false,
                benessere: true,
                needsBooking: false,
                sessions: [
                    {
                        id:50,
                        room: 'Conscious',
                        dayOfWeek: 3,
                        start: '20:15',
                        end: '21:10'
                    }
                ]
            },
            {
                id: 29,
                name: 'Prime Boxing',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:51,
                        room: 'Conscious',
                        dayOfWeek: 5,
                        start: '20:00',
                        end: '20:55'
                    },
                    {
                        id:52,
                        room: 'Fun',
                        dayOfWeek: 1,
                        start: '20:30',
                        end: '21:25'
                    }
                ]
            },
            {
                id: 30,
                name: 'Power stretching',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: false,
                benessere: true,
                needsBooking: false,
                sessions: [
                    {
                        id:53,
                        room: 'Conscious',
                        dayOfWeek: 0,
                        start: '11:00',
                        end: '11:55'
                    }
                ]
            },
            {
                id: 40,
                name: 'Circuit training new',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:54,
                        room: 'Energy',
                        dayOfWeek: 1,
                        start: '13:15',
                        end: '14:10'
                    }
                ]
            },
            {
                id: 41,
                name: 'Total body circuit',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:55,
                        room: 'Energy',
                        dayOfWeek: 1,
                        start: '16:00',
                        end: '16:50'
                    },
                    {
                        id:56,
                        room: 'Energy',
                        dayOfWeek: 4,
                        start: '19:15',
                        end: '20:10'
                    },
                    {
                        id:87,
                        room: 'Fun',
                        dayOfWeek: 2,
                        start: '11:00',
                        end: '11:55'
                    }
                ]
            },
            {
                id: 42,
                name: 'Prime TRXeme training',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: true,
                benessere: false,
                needsBooking: true,
                sessions: [
                    {
                        id:57,
                        room: 'Energy',
                        dayOfWeek: 1,
                        start: '18:15',
                        end: '19:10'
                    },
                    {
                        id:58,
                        room: 'Energy',
                        dayOfWeek: 2,
                        start: '18:15',
                        end: '19:10'
                    },
                    {
                        id:59,
                        room: 'Energy',
                        dayOfWeek: 3,
                        start: '20:30',
                        end: '21:20'
                    },
                    {
                        id:60,
                        room: 'Energy',
                        dayOfWeek: 4,
                        start: '18:15',
                        end: '19:10'
                    }
                ]
            },
            {
                id: 43,
                name: 'Cycling',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: true,
                benessere: false,
                needsBooking: true,
                sessions: [
                    {
                        id:61,
                        room: 'Energy',
                        dayOfWeek: 1,
                        start: '19:30',
                        end: '20:20'
                    },
                    {
                        id:62,
                        room: 'Energy',
                        dayOfWeek: 3,
                        start: '13:15',
                        end: '14:10'
                    },
                    {
                        id:63,
                        room: 'Energy',
                        dayOfWeek: 5,
                        start: '13:15',
                        end: '14:05'
                    },
                    {
                        id:64,
                        room: 'Energy',
                        dayOfWeek: 5,
                        start: '19:00',
                        end: '19:50'
                    },
                    {
                        id:65,
                        room: 'Energy',
                        dayOfWeek: 0,
                        start: '11:00',
                        end: '11:50'
                    }
                ]
            },
            {
                id: 44,
                name: 'Super Functional',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:66,
                        room: 'Energy',
                        dayOfWeek: 1,
                        start: '20:30',
                        end: '21:20'
                    },
                    {
                        id:67,
                        room: 'Energy',
                        dayOfWeek: 3,
                        start: '18:15',
                        end: '19:10'
                    },
                    {
                        id:68,
                        room: 'Fun',
                        dayOfWeek: 6,
                        start: '12:00',
                        end: '12:55'
                    }
                ]
            },
            {
                id: 45,
                name: 'Prime Follow me',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: false,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:69,
                        room: 'Energy',
                        dayOfWeek: 2,
                        start: '18:00',
                        end: '19:15'
                    },
                    {
                        id:70,
                        room: 'Energy',
                        dayOfWeek: 6,
                        start: '10:30',
                        end: '11:45'
                    }
                ]
            },
            {
                id: 47,
                name: 'Cycling Long Race',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: false,
                benessere: false,
                needsBooking: true,
                sessions: [
                    {
                        id:71,
                        room: 'Energy',
                        dayOfWeek: 2,
                        start: '19:30',
                        end: '20:55'
                    },
                    {
                        id:72,
                        room: 'Energy',
                        dayOfWeek: 4,
                        start: '20:15',
                        end: '21:45'
                    }
                ]
            },
            {
                id: 48,
                name: 'Cycling No Limits',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: false,
                benessere: false,
                needsBooking: true,
                sessions: [
                    {
                        id:73,
                        room: 'Energy',
                        dayOfWeek: 3,
                        start: '19:30',
                        end: '20:20'
                    }
                ]
            },
            {
                id: 60,
                name: 'Total body',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:74,
                        room: 'Fun',
                        dayOfWeek: 1,
                        start: '10:15',
                        end: '11:10'
                    },
                    {
                        id:75,
                        room: 'Fun',
                        dayOfWeek: 1,
                        start: '18:30',
                        end: '19:25'
                    },
                    {
                        id:76,
                        room: 'Fun',
                        dayOfWeek: 3,
                        start: '10:15',
                        end: '11:10'
                    },
                    {
                        id:77,
                        room: 'Fun',
                        dayOfWeek: 3,
                        start: '18:30',
                        end: '19:25'
                    },
                    {
                        id:78,
                        room: 'Fun',
                        dayOfWeek: 4,
                        start: '18:15',
                        end: '19:10'
                    },
                    {
                        id:79,
                        room: 'Fun',
                        dayOfWeek: 5,
                        start: '10:15',
                        end: '11:10'
                    },
                    {
                        id:80,
                        room: 'Fun',
                        dayOfWeek: 0,
                        start: '12:00',
                        end: '12:55'
                    }
                ]
            },
            {
                id: 61,
                name: 'Prime Piloxing',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:81,
                        room: 'Fun',
                        dayOfWeek: 1,
                        start: '15:00',
                        end: '15:55'
                    },
                    {
                        id:82,
                        room: 'Fun',
                        dayOfWeek: 2,
                        start: '18:15',
                        end: '19:10'
                    },
                    {
                        id:83,
                        room: 'Fun',
                        dayOfWeek: 3,
                        start: '20:30',
                        end: '21:25'
                    },
                    {
                        id:84,
                        room: 'Fun',
                        dayOfWeek: 4,
                        start: '13:15',
                        end: '14:10'
                    }
                ]
            },
            {
                id: 62,
                name: 'Pump',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: false,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:85,
                        room: 'Fun',
                        dayOfWeek: 1,
                        start: '19:30',
                        end: '20:25'
                    },
                    {
                        id:86,
                        room: 'Fun',
                        dayOfWeek: 5,
                        start: '18:30',
                        end: '19:25'
                    }
                ]
            },
            {
                id: 64,
                name: 'Tone up',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: false,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:88,
                        room: 'Fun',
                        dayOfWeek: 2,
                        start: '13:15',
                        end: '14:10'
                    }
                ]
            },
            {
                id: 65,
                name: 'GAG',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: false,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:89,
                        room: 'Fun',
                        dayOfWeek: 2,
                        start: '19:15',
                        end: '20:10'
                    },
                    {
                        id:90,
                        room: 'Fun',
                        dayOfWeek: 5,
                        start: '19:30',
                        end: '20:25'
                    }
                ]
            },
            {
                id: 66,
                name: 'Prime Thai fit',
                gym: 'Castel Maggiore',
                cardio: true,
                tonicita: false,
                snellimento: true,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:91,
                        room: 'Fun',
                        dayOfWeek: 2,
                        start: '20:30',
                        end: '21:25'
                    },
                    {
                        id:92,
                        room: 'Fun',
                        dayOfWeek: 4,
                        start: '19:15',
                        end: '20:10'
                    }
                ]
            },
            {
                id: 67,
                name: 'Prime Tone balance',
                gym: 'Castel Maggiore',
                cardio: false,
                tonicita: true,
                snellimento: false,
                benessere: false,
                needsBooking: false,
                sessions: [
                    {
                        id:93,
                        room: 'Fun',
                        dayOfWeek: 6,
                        start: '13:30',
                        end: '14:25'
                    }
                ]
            }
        ];

        return {
            all: function () {
                for (var i = 0; i < courses.length; i++) {
                    var course = courses[i];
                    course.starred=Account.isCourseStarred(course.id);
                }
                return courses;
            },
            get: function (courseId) {
                for (var i = 0; i < courses.length; i++) {
                    if (courses[i].id === parseInt(courseId)) {
                        return courses[i];
                    }
                }
                return null;
            },
            findAllByDay: function (day) {
                var dayOfWeek=day.getDay();
                var ret=[];
                for (var i = 0; i < courses.length; i++) {
                    var course=courses[i];
                    for (var j = 0; j < course.sessions.length; j++) {
                        var session = course.sessions[j];
                        if (session.dayOfWeek == dayOfWeek)
                        {
                            //course.uid=""+course.id+"_"+session.id;
                            course.room=session.room;
                            course.start=session.start;
                            course.end=session.end;
                            course.starred=Account.isCourseStarred(course.id);
                            ret.push(course);
                        }
                    }
                }
                return ret;
            }
        }
    })
    .factory('CourseSession', function (Course,Account) {
        return {
            findAllByDay: function (day) {
                var dayOfWeek=day.getDay();
                var courses=Course.all();
                var ret=[];
                for (var i = 0; i < courses.length; i++) {
                    var course=courses[i];
                    for (var j = 0; j < course.sessions.length; j++) {
                        var session = course.sessions[j];
                        if (session.dayOfWeek == dayOfWeek)
                        {
                            session.course=course;
                            ret.push(session);
                        }
                    }
                }
                return ret;
            }
        }
    })
    .factory('Account', function () {
        // Might use a resource here that returns a JSON array
        //localStorage.removeItem('starredCourse');
        var persistentData=localStorage.getItem("starredCourse");
        console.log(persistentData)
        if (persistentData)
        {
            this.starredCourse=JSON.parse(persistentData);
        }
        else
        {
            this.starredCourse =[];
        }

        this.isCourseStarred=function(courseId)
        {
            for (var i = 0; i < this.starredCourse.length; i++) {
                if (this.starredCourse[i].courseId == courseId) {
                    return this.starredCourse[i].starred;
                }
            }
            return false;
        };

        this.setStarredCourse=function(courseId,val)
        {
            var found=false;
            for (var i = 0; i < this.starredCourse.length; i++)
            {
                if (this.starredCourse[i].courseId == courseId) {
                    this.starredCourse[i].starred=val;
                    found=true;
                }
            }
            if (!found){
                this.starredCourse.push({courseId:courseId,starred:val})
            }
            console.log(JSON.stringify(this.starredCourse));
            localStorage.setItem("starredCourse", JSON.stringify(this.starredCourse));
        };


        return this;
    });