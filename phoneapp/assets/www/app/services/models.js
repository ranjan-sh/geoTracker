define(['require'], function(require) {

    /**
     * Models generated from "Model and Storage" and models extracted from services.
     * To generate entity use syntax:
     * Apperyio.EntityAPI("<model_name>[.<model_field>]");
     */

    var models = {
        "String": {
            "type": "string"
        },
        "Number": {
            "type": "number"
        },
        "array": {
            "type": "array",
            "items": [{
                "type": "number",
                "index": 1
            }, {
                "type": "number",
                "index": 0
            }, {
                "type": "number"
            }]
        },
        "Boolean": {
            "type": "boolean"
        },
        "wafs__files_create_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/files/{file_name}"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "file_name": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "application/octet-stream"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{wafs_settings.database_id}"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {}
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Geolocation_currentPosition": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "enableHighAccuracy": {
                                    "type": "boolean",
                                    "default": true
                                },
                                "timeout": {
                                    "type": "number",
                                    "default": 300000
                                },
                                "maximumAge": {
                                    "type": "number",
                                    "default": 3000
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "timestamp": {
                                    "type": "string"
                                },
                                "coords": {
                                    "type": "object",
                                    "properties": {
                                        "altitudeAccuracy": {
                                            "type": "string"
                                        },
                                        "speed": {
                                            "type": "string"
                                        },
                                        "altitude": {
                                            "type": "string"
                                        },
                                        "latitude": {
                                            "type": "string"
                                        },
                                        "accuracy": {
                                            "type": "string"
                                        },
                                        "heading": {
                                            "type": "string"
                                        },
                                        "longitude": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "Geolocation_clearWatch": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "watchID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "number",
                                "default": null
                            }]
                        }
                    }
                }
            }
        },
        "Geolocation_watchPosition": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "maximumAge": {
                                    "type": "number",
                                    "default": 3000
                                },
                                "enableHighAccuracy": {
                                    "type": "boolean",
                                    "default": true
                                },
                                "timeout": {
                                    "type": "number",
                                    "default": 300000
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        }
    };
    return models;

});