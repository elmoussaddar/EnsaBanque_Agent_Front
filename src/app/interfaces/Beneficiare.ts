export interface Beneficiare{
    titre: string;
    prenom: string;
    nom:string;
    typePieceIdentity:string;
    payeEmissionPieceIdentity:string; 
    numPieceIdentity:string;
    dateExpirationPieceIdentity:Date | null;
    DateNaissance:Date | null;
    Profession:string;
    payeNationality:string;
    payeAdresse:string;
    adresseLegal:string;
    Ville:string;
    GSM:string;
    Email:string;
}