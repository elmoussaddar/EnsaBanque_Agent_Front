export interface Transfert{
[x: string]: any;
    idTransfert:number,
    refTransfert:string,
    etatTransfert:string,
    idAgent:number,
    nomSender:string,
    prenomSender:string,
    dateEmissionTransfert:Date,
    montantTransfert:number,
    nomBeneficiere:string,
    prenomBeneficiere:string,
    motifRestitution:string
}

export interface Transferts{
    listTransfert: Array<Transfert>;
}