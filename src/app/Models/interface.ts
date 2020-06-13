export interface Credentials {
    login:string,
    pwd:string
}

export interface Users {
    idUser:string
    prenomUser:string
    nomUser:string
    adresseUser:string
    ageUser:number
    login:string
    pwd:string
    idGenre:string
    profil:string
}

export interface Activite {
    idActivite:number,
    libelleActivite:string
}

export interface ActiviteUser {
    idActiviteUser:string
    dateActivite:Date
    heureDebut:Date
    heureFin:Date
    valide:string
    idUser:string
    idActivite:string
}

export interface ActiviteUserRetour {
    idActiviteUser:string
    dateActivite:Date
    heureDebut:Date
    heureFin:Date
    valide:string
    idUser:string
    idActivite:string
    libelleActivite:string
    listPointGps:PointGps[],
    prenomNomUser:string
}


export interface PointGps {
    idPoint:number
    heure:Date
    latitude:number
    longitude:number
    idActiviteUser:string
}

export interface markeurPoint{
    title: string,
    icon: string,
    animation: string,
    position: position
}

export interface position{
      lat: number,
      lng: number
}
