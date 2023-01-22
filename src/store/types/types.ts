export type Weather = {
    wind: {
        speed: number;
        gust: number;
        deg: number;
    },
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
    },
    weather: {
        0: {
            description: string;
            main: string;
        }
    },
    name: string;
}
export type WeatherWeek = {
    city: {
        name: string
    },
    list: {
        0: {
            main: {
                temp: number;
                temp_min: number,
                temp_max: number,
            }
            weather: {
                0: {
                    description: string;
                    main: string;
                }
            }
        },
        4: {
            main: {
                temp: number;
                temp_min: number,
                temp_max: number,
            }
            weather: {
                0: {
                    description: string;
                    main: string;
                }
            }
        },
       8: {
            main: {
                temp: number;
                temp_min: number,
                temp_max: number,
            }
            weather: {
                0: {
                    description: string;
                    main: string;
                }
            }
        },
        12: {
            main: {
                temp: number;
                temp_min: number,
                temp_max: number,
            }
            weather: {
                0: {
                    description: string;
                    main: string;
                }
            }
        },
       16: {
            main: {
                temp: number;
                temp_min: number,
                temp_max: number,
            }
            weather: {
                0: {
                    description: string;
                    main: string;
                }
            }
        },
       20: {
            main: {
                temp: number;
                temp_min: number,
                temp_max: number,
            }
            weather: {
                0: {
                    description: string;
                    main: string;
                }
            }
        },
        24: {
            main: {
                temp: number;
                temp_min: number,
                temp_max: number,
            }
            weather: {
                0: {
                    description: string;
                    main: string;
                }
            }
        },
        28: {
            main: {
                temp: number;
                temp_min: number,
                temp_max: number,
            }
            weather: {
                0: {
                    description: string;
                    main: string;
                }
            }
        }
        32: {
            main: {
                temp: number;
                temp_min: number,
                temp_max: number,
            }
            weather: {
                0: {
                    description: string;
                    main: string;
                }
            }
        }
        39: {
            main: {
                temp: number;
                temp_min: number,
                temp_max: number,
            }
            weather: {
                0: {
                    description: string;
                    main: string;
                }
            }
        }
    }
}