export interface Transfert{
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


}

export interface Transferts{
    listTransfert: Array<Transfert>;
}