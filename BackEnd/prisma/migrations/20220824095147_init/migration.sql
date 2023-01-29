BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Accident] (
    [Ref] BIGINT NOT NULL,
    [CodeFiliale] BIGINT NOT NULL,
    [DateC] DATETIME,
    [DateAcc] DATETIME,
    [HeureAcc] VARCHAR(50),
    [NumDosPolice] VARCHAR(50),
    [CondMeteo] VARCHAR(50),
    [CondRoute] VARCHAR(50),
    [Immatriculation] VARCHAR(20),
    [Matriculec] VARCHAR(20),
    [Vitesse] DECIMAL(18,3),
    [Assurance] BIGINT,
    [Fautif] BIT,
    [ImmatriculationTiers] VARCHAR(20),
    [Conducteur] VARCHAR(50),
    [VitesseTiers] DECIMAL(18,3),
    [AssuranceTiers] VARCHAR(50),
    [DateExpAv] DATETIME,
    [DateExpApr] DATETIME,
    [AccordRep] BIT,
    [DateRemb] DATETIME,
    [NumCheque] VARCHAR(100),
    [Montant] DECIMAL(18,3),
    [MontDégats] DECIMAL(18,3),
    [DateFin] DATETIME,
    [HeureFin] VARCHAR(50),
    [AccordPC] BIT,
    [AccordBS] BIT,
    [Lieu] VARCHAR(50),
    [Descriptions] VARCHAR(500),
    [Degats] VARCHAR(50),
    [NomExpert] VARCHAR(50),
    [ExpertiseOui] BIT,
    [ExpertiseNon] BIT,
    [RP] BIT,
    [NonFautif] BIT,
    [TypeAccident] VARCHAR(50),
    [Commentaires] VARCHAR(500),
    [Mission] BIGINT,
    [DateEnvoiFacture] DATETIME,
    [DateMC] DATETIME,
    [HeureMC] VARCHAR(50),
    CONSTRAINT [PK_Accident] PRIMARY KEY ([Ref],[CodeFiliale])
);

-- CreateTable
CREATE TABLE [dbo].[AffectationClient] (
    [CodeLieu] BIGINT NOT NULL IDENTITY(1,1),
    [Affectation] VARCHAR(100),
    CONSTRAINT [PK_AffectationClient] PRIMARY KEY ([CodeLieu])
);

-- CreateTable
CREATE TABLE [dbo].[AffectationType] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [TypeAffectation] VARCHAR(50),
    CONSTRAINT [PK_AffectationType] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[Alerte] (
    [CodeAlert] BIGINT NOT NULL IDENTITY(1,1),
    [DesigAlerte] VARCHAR(50) NOT NULL,
    [CodeTyVeh] BIGINT,
    [RefArtic] VARCHAR(50),
    [Index_Prev] BIGINT,
    [Echeance] BIGINT,
    [index_message] BIGINT,
    [echeance_message] BIGINT,
    [Etat] BIT,
    [Acceuil] BIT,
    [Client] BIGINT,
    [Barre] BIT,
    CONSTRAINT [PK_Alerte] PRIMARY KEY ([CodeAlert])
);

-- CreateTable
CREATE TABLE [dbo].[AlerteRemorque] (
    [CodeAlert] BIGINT NOT NULL IDENTITY(1,1),
    [DesigAlerte] VARCHAR(50) NOT NULL,
    [CodeTypeRemorque] BIGINT NOT NULL,
    [RefArtic] VARCHAR(50),
    [Index_Prev] BIGINT,
    [Echeance] BIGINT,
    [index_message] BIGINT,
    [echeance_message] BIGINT,
    [Etat] BIT,
    [Acceuil] BIT,
    [Client] BIGINT,
    CONSTRAINT [PK_AlerteRemorque] PRIMARY KEY ([CodeAlert])
);

-- CreateTable
CREATE TABLE [dbo].[Article] (
    [RefArtic] VARCHAR(50) NOT NULL,
    [DesignationArt] VARCHAR(50),
    [CodeCatArt] BIGINT,
    [CodePays] VARCHAR(5),
    [ActifsArt] BIT,
    [StockMinArt] REAL,
    [StockInitArt] REAL CONSTRAINT [DF_Article_StockInitArt] DEFAULT 0,
    [QteEnStock] REAL,
    [Prix_htArt] REAL,
    [TVAArt] REAL,
    [DocumentArt] VARCHAR(500),
    [ObservationsArt] VARCHAR(500),
    [Serial] BIT,
    [PhotoArt] VARCHAR(50),
    [PhotoCam] IMAGE,
    [CodeOrgane] BIGINT,
    [codeCategRep] BIGINT,
    [KilometrageTheori] BIGINT,
    [StockMaxiArt] REAL,
    CONSTRAINT [PK_Article] PRIMARY KEY ([RefArtic])
);

-- CreateTable
CREATE TABLE [dbo].[ArticleFournisseur] (
    [AR_Ref] VARCHAR(19) NOT NULL,
    [CT_Num] VARCHAR(17) NOT NULL,
    [AF_RefFourniss] VARCHAR(19) NOT NULL,
    [AF_PrixAch] DECIMAL(24,6),
    [AF_Remise] DECIMAL(24,6),
    [IntituleFRS] VARCHAR(55),
    [TVA] FLOAT(53),
    CONSTRAINT [PK_ArticleFournisseur] PRIMARY KEY ([AR_Ref],[CT_Num],[AF_RefFourniss])
);

-- CreateTable
CREATE TABLE [dbo].[ArticleTypeVehicule] (
    [RefArtic] VARCHAR(50) NOT NULL,
    [CodeTyVeh] BIGINT NOT NULL,
    CONSTRAINT [PK_ArticleTypeVehicule] PRIMARY KEY ([RefArtic],[CodeTyVeh])
);

-- CreateTable
CREATE TABLE [dbo].[Assurance] (
    [CodeAssur] INT NOT NULL IDENTITY(1,1),
    [DésignationAssur] VARCHAR(50),
    CONSTRAINT [PK_Assurance] PRIMARY KEY ([CodeAssur])
);

-- CreateTable
CREATE TABLE [dbo].[Assurance_Contrat] (
    [NContrat] VARCHAR(50) NOT NULL,
    [Assurance] INT NOT NULL,
    [DateEffetDebut] SMALLDATETIME NOT NULL,
    [DateEffetFin] SMALLDATETIME NOT NULL,
    [DateSignature] SMALLDATETIME,
    [Référence] VARCHAR(100),
    [Alerte] BIGINT,
    [Montant] DECIMAL(18,3),
    [PersonneMorale] VARCHAR(50),
    [PersonnePhysique] VARCHAR(50),
    [Glossaire] VARCHAR(8000),
    [Fractionnement] VARCHAR(50),
    [Etat] BIT,
    [Prolongation] BIGINT,
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Filiale] BIGINT,
    [Departement] BIGINT,
    CONSTRAINT [PK_Assurance_Contrat] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[Assurance_Option] (
    [NContrat] VARCHAR(50) NOT NULL,
    [CodeOption] INT NOT NULL,
    [CodeAssurance] INT NOT NULL,
    [DesignOption] VARCHAR(50),
    [DesignAssurance] VARCHAR(50),
    CONSTRAINT [PK_Assurance_Optionmmm] PRIMARY KEY ([NContrat],[CodeOption])
);

-- CreateTable
CREATE TABLE [dbo].[Assurance_Vehicule] (
    [Vehicule] VARCHAR(50) NOT NULL,
    [NContrat] VARCHAR(50) NOT NULL,
    [Assurance] INT NOT NULL,
    [MontantDétail] FLOAT(53),
    [DateD] DATETIME,
    CONSTRAINT [PK_Assurance_Vehicule] PRIMARY KEY ([Vehicule],[NContrat],[Assurance])
);

-- CreateTable
CREATE TABLE [dbo].[CategorieArticle] (
    [CodeCatArt] BIGINT NOT NULL,
    [DesignCatArt] VARCHAR(30),
    CONSTRAINT [PK_CategorieArticle] PRIMARY KEY ([CodeCatArt])
);

-- CreateTable
CREATE TABLE [dbo].[CategorieReparation] (
    [codeCategRep] BIGINT NOT NULL IDENTITY(1,1),
    [DesigCategRep] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_CategorieReparation] PRIMARY KEY ([codeCategRep])
);

-- CreateTable
CREATE TABLE [dbo].[CategoriesPermis] (
    [CodeCategorie] BIGINT NOT NULL,
    [DesignationC] VARCHAR(30),
    CONSTRAINT [PK_TypesCat] PRIMARY KEY ([CodeCategorie])
);

-- CreateTable
CREATE TABLE [dbo].[cbSysLibre] (
    [CB_File] NVARCHAR(128) NOT NULL,
    [CB_Name] NVARCHAR(128) NOT NULL,
    [CB_Pos] SMALLINT NOT NULL,
    [CB_Type] SMALLINT NOT NULL,
    [CB_Len] SMALLINT NOT NULL,
    [CB_Flag] SMALLINT CONSTRAINT [DF__cbSysLibr__CB_Fl__0EF901FB] DEFAULT 0,
    [CB_Formule] VARCHAR(1024),
    [CB_Creator] CHAR(4),
    CONSTRAINT [PK_CBSYSLIBRE] PRIMARY KEY ([CB_File],[CB_Name])
);

-- CreateTable
CREATE TABLE [dbo].[Chauffeur] (
    [MatriculeC] VARCHAR(20) NOT NULL,
    [PrenomC] VARCHAR(20),
    [NomC] VARCHAR(20),
    [DateEmbaucheC] DATETIME,
    [NCinC] VARCHAR(50),
    [DateNaissanceC] DATETIME,
    [TelephC] VARCHAR(50),
    [PortableC] VARCHAR(50),
    [EmailC] VARCHAR(50),
    [AdresseC] VARCHAR(50),
    [VilleC] VARCHAR(50),
    [CpC] BIGINT,
    [NiveauC] VARCHAR(50),
    [ObsevationsC] VARCHAR(500),
    [EtatC] BIT,
    [Photo] VARCHAR(100),
    [Permis] VARCHAR(20),
    [PhotoCam] IMAGE,
    [Commercial] BIT,
    [DateDelivrance] DATETIME,
    [Abreviation] NVARCHAR(50),
    [ARChauff] NVARCHAR(50),
    [CodeClient] BIGINT,
    [GSang] VARCHAR(50),
    CONSTRAINT [PK_Chauffeur] PRIMARY KEY ([MatriculeC])
);

-- CreateTable
CREATE TABLE [dbo].[Chauffeur_CategPermis] (
    [MatriculeC] VARCHAR(20) NOT NULL,
    [CodeCategorie] BIGINT NOT NULL,
    [DateP] SMALLDATETIME,
    CONSTRAINT [PK_Chauffeur_CategPermis] PRIMARY KEY ([MatriculeC],[CodeCategorie])
);

-- CreateTable
CREATE TABLE [dbo].[Chauffeur_Lieu] (
    [CodeLieu] BIGINT NOT NULL,
    [MatriculeC] VARCHAR(20) NOT NULL,
    [DateDebut] SMALLDATETIME NOT NULL,
    [DateFin] SMALLDATETIME,
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_Chauffeur_Lieu] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[Client] (
    [CodeCl] BIGINT NOT NULL,
    [IntituleClient] NVARCHAR(50),
    [ActiviteCl] VARCHAR(50),
    [AdresseCl] NVARCHAR(50),
    [VilleCl] NVARCHAR(50),
    [CpCl] BIGINT,
    [RegionCl] NVARCHAR(50),
    [CodePays] VARCHAR(5),
    [TelephCl] VARCHAR(15),
    [Portable] VARCHAR(15),
    [EmailCl] VARCHAR(30),
    [SiteCl] VARCHAR(30),
    [Observations] VARCHAR(300),
    [RefDep] BIGINT,
    [EtatCli] BIT,
    [Type] VARCHAR(50),
    [MatriculeFiscale] VARCHAR(50),
    [Principal] BIT,
    [CodeCatCompta] BIGINT,
    [InfoLibre1] DECIMAL(18,0),
    [InfoLibre2] DECIMAL(18,0),
    [InfoLibre3] DECIMAL(18,0),
    [InfoLibre4] DECIMAL(18,0),
    [InfoLibre5] DECIMAL(18,0),
    [InfoLibre6] DECIMAL(18,0),
    [InfoLibre7] DECIMAL(18,0),
    [InfoLibre8] DECIMAL(18,0),
    [InfoLibre9] DECIMAL(18,0),
    [InfoLibre10] DECIMAL(18,0),
    [AR_Intitule] NVARCHAR(50),
    [AR_Description] NVARCHAR(50),
    [AR_Region] NVARCHAR(50),
    [AR_Code] NVARCHAR(50),
    [TypeParametre] BIGINT,
    [Formule] VARCHAR(50),
    [Produit] VARCHAR(50),
    CONSTRAINT [PK_Client] PRIMARY KEY ([CodeCl])
);

-- CreateTable
CREATE TABLE [dbo].[Convoyeur] (
    [MatriculeC] VARCHAR(20) NOT NULL,
    [PrenomC] VARCHAR(20),
    [NomC] VARCHAR(20),
    [DateEmbaucheC] DATETIME,
    [NCinC] BIGINT,
    [DateNaissanceC] DATETIME,
    [TelephC] VARCHAR(50),
    [PortableC] VARCHAR(50),
    [EmailC] VARCHAR(50),
    [AdresseC] VARCHAR(50),
    [VilleC] VARCHAR(50),
    [CpC] BIGINT,
    [NiveauC] VARCHAR(50),
    [ObsevationsC] VARCHAR(500),
    [EtatC] BIT,
    [Photo] VARCHAR(100),
    [Permis] VARCHAR(20),
    [PhotoCam] IMAGE,
    [Commercial] BIT,
    CONSTRAINT [PK_Convoyeur] PRIMARY KEY ([MatriculeC])
);

-- CreateTable
CREATE TABLE [dbo].[Convoyeur_CategPermis] (
    [MatriculeC] VARCHAR(20) NOT NULL,
    [CodeCategorie] BIGINT NOT NULL,
    [DateP] SMALLDATETIME,
    CONSTRAINT [PK_Convoyeur_CategPermis] PRIMARY KEY ([MatriculeC],[CodeCategorie])
);

-- CreateTable
CREATE TABLE [dbo].[CoutMainOeuvre] (
    [CodeCoutMainOeuvre] BIGINT NOT NULL IDENTITY(1,1),
    [DateCout] SMALLDATETIME,
    [CoutMainOeuvre] REAL,
    CONSTRAINT [PK_CoutMainOeuvre] PRIMARY KEY ([CodeCoutMainOeuvre])
);

-- CreateTable
CREATE TABLE [dbo].[CoutMission] (
    [CodeCout] BIGINT NOT NULL IDENTITY(1,1),
    [identifiant] VARCHAR(50),
    [prix] FLOAT(53),
    [codeMission] BIGINT,
    CONSTRAINT [PK_CoutMission] PRIMARY KEY ([CodeCout])
);

-- CreateTable
CREATE TABLE [dbo].[CoutOperation] (
    [CodeMission] BIGINT NOT NULL,
    [CodeContrat] VARCHAR(50) NOT NULL,
    [CodeCharge] VARCHAR(50) NOT NULL,
    [Montant] DECIMAL(18,3),
    CONSTRAINT [PK_CoutOperation_1] PRIMARY KEY ([CodeMission],[CodeContrat],[CodeCharge])
);

-- CreateTable
CREATE TABLE [dbo].[cRegion] (
    [CodeReg] VARCHAR(50) NOT NULL,
    [Designation] VARCHAR(50),
    CONSTRAINT [PK_cRegion] PRIMARY KEY ([CodeReg])
);

-- CreateTable
CREATE TABLE [dbo].[cVilles] (
    [CodeVille] VARCHAR(50) NOT NULL,
    [Desig_Ville] VARCHAR(50),
    [CodeReg] VARCHAR(50),
    CONSTRAINT [PK_Villes] PRIMARY KEY ([CodeVille])
);

-- CreateTable
CREATE TABLE [dbo].[Depot] (
    [RefDep] BIGINT NOT NULL,
    [IntituleDep] VARCHAR(20),
    [AdresseDep] VARCHAR(10),
    [CpDep] BIGINT,
    [VilleDep] VARCHAR(10),
    [RegionDep] VARCHAR(10),
    [ResponsableDep] VARCHAR(30),
    [TeleDep] VARCHAR(15),
    [EmailDep] VARCHAR(30),
    CONSTRAINT [PK_Depot] PRIMARY KEY ([RefDep])
);

-- CreateTable
CREATE TABLE [dbo].[DepotRemplissageGasoil] (
    [CodeDepot] BIGINT NOT NULL IDENTITY(1,1),
    [DesignDepot] VARCHAR(50),
    CONSTRAINT [PK_DepotRemplissageGasoil] PRIMARY KEY ([CodeDepot])
);

-- CreateTable
CREATE TABLE [dbo].[Depots_Clients] (
    [RefDep] BIGINT NOT NULL,
    [CodeCl] BIGINT NOT NULL,
    CONSTRAINT [PK_Depots_Clients] PRIMARY KEY ([RefDep],[CodeCl])
);

-- CreateTable
CREATE TABLE [dbo].[DetailRemplacement] (
    [Num] BIGINT NOT NULL IDENTITY(1,1),
    [Code] BIGINT,
    [RefArtic] VARCHAR(50) CONSTRAINT [DF_DetailRemplacement_RefArtic] DEFAULT '0',
    [CodeCl] BIGINT,
    [CodeFilial] BIGINT,
    [Prix] REAL,
    [Qte] FLOAT(53),
    CONSTRAINT [PK_DetailRemplacement] PRIMARY KEY ([Num])
);

-- CreateTable
CREATE TABLE [dbo].[DIDemandeIntervention] (
    [Code] BIGINT NOT NULL,
    [DIStatut] BIGINT,
    [DemandeDe] BIGINT,
    [DateDI] DATETIME,
    [HeureDI] VARCHAR(50),
    [DemandePar] VARCHAR(20),
    [DIMode] BIGINT,
    [DIPriorite] BIGINT,
    [DelaiPublic] DATETIME,
    [CodeVehRem] BIGINT,
    [VehRem] VARCHAR(20),
    [DernierIndex] BIGINT,
    [NouvIndex] BIGINT,
    [OrganeDI] BIGINT,
    [DISource] BIGINT,
    [DescriptionMotif] VARCHAR(5000),
    [DateDebut] DATETIME,
    [DateFin] DATETIME,
    [Filiale] BIGINT,
    [Utilisateur] VARCHAR(100),
    CONSTRAINT [PK_DIDemandeIntervention] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[DIMode] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50),
    CONSTRAINT [PK_ModeDI] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[DIPriorite] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50),
    CONSTRAINT [PK_Priorite] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[Direction] (
    [CodeDirec] BIGINT NOT NULL IDENTITY(1,1),
    [designationDirec] VARCHAR(50),
    [codeGouv] BIGINT,
    CONSTRAINT [PK_Direction] PRIMARY KEY ([CodeDirec])
);

-- CreateTable
CREATE TABLE [dbo].[DISource] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50),
    CONSTRAINT [PK_SourceDI] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[DIStatut] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50),
    CONSTRAINT [PK_StatutDI] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[E_ChauffContraintFormation] (
    [MatriculeC] VARCHAR(20) NOT NULL,
    [Code] BIGINT NOT NULL,
    [Designation] VARCHAR(100),
    [DateDebut] DATETIME,
    [DateFin] DATETIME,
    [Alerte] BIGINT,
    [Type] VARCHAR(50),
    [Etat] BIT,
    [cbmarq] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_E_ChauffContraintFormation] PRIMARY KEY ([MatriculeC],[Code],[cbmarq])
);

-- CreateTable
CREATE TABLE [dbo].[E_ClientContrainteFormation] (
    [CodeCl] BIGINT NOT NULL,
    [Code] BIGINT NOT NULL,
    [Designation] VARCHAR(100),
    [DateDebut] DATETIME,
    [DateFin] DATETIME,
    [Alerte] BIGINT,
    [Type] VARCHAR(50),
    [TypeFiche] VARCHAR(50),
    CONSTRAINT [PK_E_ClientContrainteFormation] PRIMARY KEY ([CodeCl],[Code])
);

-- CreateTable
CREATE TABLE [dbo].[E_ContrainteFormation] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(100),
    [Type] VARCHAR(50),
    [TypeFiche] VARCHAR(50),
    [Etat] BIT,
    [Fractionnement] VARCHAR(50),
    CONSTRAINT [PK_E_ContrainteFormation] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[E_ConvContrainteFormation] (
    [MatriculeC] VARCHAR(20) NOT NULL,
    [Code] BIGINT NOT NULL,
    [Designation] VARCHAR(100),
    [DateDebut] DATETIME,
    [DateFin] DATETIME,
    [Alerte] BIGINT,
    [Type] VARCHAR(50),
    [Etat] BIT,
    [cbmarq] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_E_ConvContrainteFormation] PRIMARY KEY ([MatriculeC],[Code],[cbmarq])
);

-- CreateTable
CREATE TABLE [dbo].[E_MecanicienContraintFormation] (
    [MatriculeC] VARCHAR(20) NOT NULL,
    [Code] BIGINT NOT NULL,
    [Designation] VARCHAR(100),
    [DateDebut] DATETIME,
    [DateFin] DATETIME,
    [Alerte] BIGINT,
    [Type] VARCHAR(50),
    [Etat] BIT,
    [cbmarq] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_E_MecanicienContraintFormation] PRIMARY KEY ([MatriculeC],[Code],[cbmarq])
);

-- CreateTable
CREATE TABLE [dbo].[E_RemorqueContrainteFormation] (
    [MatriculeRem] VARCHAR(20) NOT NULL,
    [Code] BIGINT NOT NULL,
    [Designation] VARCHAR(100),
    [DateDebut] DATETIME,
    [DateFin] DATETIME,
    [Alerte] BIGINT,
    [Type] VARCHAR(50),
    [Etat] BIT,
    [cbmarq] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_E_RemorqueContrainteFormation] PRIMARY KEY ([MatriculeRem],[Code],[cbmarq])
);

-- CreateTable
CREATE TABLE [dbo].[E_VehiculeContraintFormation] (
    [ImmatriculationVeh] VARCHAR(20) NOT NULL,
    [Code] BIGINT NOT NULL,
    [Designation] VARCHAR(100),
    [DateDebut] DATETIME,
    [DateFin] DATETIME,
    [Alerte] BIGINT,
    [Type] VARCHAR(50),
    [Etat] BIT,
    [cbmarq] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_E_VehiculeContraintFormation] PRIMARY KEY ([ImmatriculationVeh],[Code],[cbmarq])
);

-- CreateTable
CREATE TABLE [dbo].[EmailCC] (
    [ID] BIGINT NOT NULL IDENTITY(1,1),
    [Email] VARCHAR(50),
    CONSTRAINT [PK_EmailCC] PRIMARY KEY ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[EpaisseurPneu] (
    [RefArtPneu] VARCHAR(50) NOT NULL,
    [NSeriePneu] VARCHAR(50) NOT NULL,
    [NumOrdre] BIGINT NOT NULL,
    [CodeFiliale] BIGINT NOT NULL,
    [EpaissPneu] REAL,
    [DatePrelevem] SMALLDATETIME,
    CONSTRAINT [PK_EpaisseurPneu_1] PRIMARY KEY ([RefArtPneu],[NSeriePneu],[NumOrdre],[CodeFiliale])
);

-- CreateTable
CREATE TABLE [dbo].[EquivalenceArticle] (
    [RefArtic] VARCHAR(50) NOT NULL,
    [Art_RefArtic] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_EquivalenceArticle] PRIMARY KEY ([RefArtic],[Art_RefArtic])
);

-- CreateTable
CREATE TABLE [dbo].[Extincteurs] (
    [NSerieExtinct] VARCHAR(50) NOT NULL,
    [RefExtinct] VARCHAR(50) NOT NULL,
    [CumuleExtincteur] BIGINT,
    [DateMontageEx] SMALLDATETIME,
    [DateMorgEx] SMALLDATETIME,
    CONSTRAINT [PK_Extincteurs] PRIMARY KEY ([NSerieExtinct],[RefExtinct])
);

-- CreateTable
CREATE TABLE [dbo].[F_COLLABORATEUR] (
    [CO_No] INT,
    [CO_Nom] VARCHAR(35),
    [cbCO_Nom] VARBINARY(36),
    [CO_Prenom] VARCHAR(35),
    [cbCO_Prenom] VARBINARY(36),
    [CO_Fonction] VARCHAR(35),
    [cbCO_Fonction] VARBINARY(36),
    [CO_Adresse] VARCHAR(35),
    [CO_Complement] VARCHAR(35),
    [CO_CodePostal] VARCHAR(9),
    [CO_Ville] VARCHAR(35),
    [CO_CodeRegion] VARCHAR(25),
    [CO_Pays] VARCHAR(35),
    [CO_Service] VARCHAR(35),
    [CO_Vendeur] SMALLINT,
    [CO_Caissier] SMALLINT,
    [CO_DateCreation] SMALLDATETIME,
    [CO_Acheteur] SMALLINT,
    [CO_Telephone] VARCHAR(21),
    [CO_Telecopie] VARCHAR(21),
    [CO_EMail] VARCHAR(69),
    [CO_Receptionnaire] SMALLINT,
    [PROT_No] INT,
    [cbPROT_No] INT,
    [CO_TelPortable] VARCHAR(21),
    [CO_ChargeRecouvr] SMALLINT,
    [cbProt] SMALLINT CONSTRAINT [DF__F_COLLABO__cbPro__503CB573] DEFAULT 0,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    [cbCreateur] CHAR(4) CONSTRAINT [DF__F_COLLABO__cbCre__5130D9AC] DEFAULT 'CSQL',
    [cbModification] SMALLDATETIME CONSTRAINT [DF__F_COLLABO__cbMod__5224FDE5] DEFAULT CURRENT_TIMESTAMP,
    [cbReplication] INT CONSTRAINT [DF__F_COLLABO__cbRep__5319221E] DEFAULT 0,
    [cbFlag] SMALLINT CONSTRAINT [DF__F_COLLABO__cbFla__540D4657] DEFAULT 0,
    CONSTRAINT [PK_CBMARQ_F_COLLABORATEUR] PRIMARY KEY ([cbMarq]),
    CONSTRAINT [ICO_CONO] UNIQUE ([CO_No]),
    CONSTRAINT [ICO_NOM] UNIQUE ([cbCO_Nom],[cbCO_Prenom])
);

-- CreateTable
CREATE TABLE [dbo].[F_COMPTEA] (
    [N_Analytique] SMALLINT NOT NULL,
    [CA_Num] VARCHAR(13) NOT NULL,
    [cbCA_Num] VARBINARY(15),
    [CA_Intitule] VARCHAR(35),
    [CA_Type] SMALLINT,
    [CA_Classement] VARCHAR(17),
    [cbCA_Classement] VARBINARY(18),
    [CA_Raccourci] VARCHAR(7),
    [cbCA_Raccourci] VARBINARY(8),
    [CA_Report] SMALLINT,
    [N_Analyse] SMALLINT,
    [CA_Saut] SMALLINT,
    [CA_Sommeil] SMALLINT,
    [CA_DateCreate] SMALLDATETIME,
    [CA_Domaine] SMALLINT,
    [CA_Achat] DECIMAL(24,6),
    [CA_Vente] DECIMAL(24,6),
    [cbProt] SMALLINT CONSTRAINT [DF__F_COMPTEA__cbPro__55016A90] DEFAULT 0,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    [cbCreateur] CHAR(4) CONSTRAINT [DF__F_COMPTEA__cbCre__55F58EC9] DEFAULT 'CSQL',
    [cbModification] SMALLDATETIME CONSTRAINT [DF__F_COMPTEA__cbMod__56E9B302] DEFAULT CURRENT_TIMESTAMP,
    [cbReplication] INT CONSTRAINT [DF__F_COMPTEA__cbRep__57DDD73B] DEFAULT 0,
    [cbFlag] SMALLINT CONSTRAINT [DF__F_COMPTEA__cbFla__58D1FB74] DEFAULT 0,
    [Nb_de_ventilations] DECIMAL(24,6),
    CONSTRAINT [PK_CBMARQ_F_COMPTEA] PRIMARY KEY ([cbMarq]),
    CONSTRAINT [ICA_NUM] UNIQUE ([N_Analytique],[cbCA_Num]),
    CONSTRAINT [UKA_F_COMPTEA_CA_Num] UNIQUE ([N_Analytique],[CA_Num])
);

-- CreateTable
CREATE TABLE [dbo].[F_COMPTEG] (
    [CG_Num] VARCHAR(13) NOT NULL,
    [cbCG_Num] VARBINARY(15),
    [CG_Type] SMALLINT,
    [CG_Intitule] VARCHAR(35),
    [CG_Classement] VARCHAR(17),
    [cbCG_Classement] VARBINARY(18),
    [N_Nature] SMALLINT,
    [CG_Report] SMALLINT,
    [CR_Num] VARCHAR(13),
    [cbCR_Num] VARBINARY(14),
    [CG_Raccourci] VARCHAR(7),
    [cbCG_Raccourci] VARBINARY(8),
    [CG_Saut] SMALLINT,
    [CG_Regroup] SMALLINT,
    [CG_Analytique] SMALLINT,
    [CG_Echeance] SMALLINT,
    [CG_Quantite] SMALLINT,
    [CG_Lettrage] SMALLINT,
    [CG_Tiers] SMALLINT,
    [CG_DateCreate] SMALLDATETIME,
    [CG_Devise] SMALLINT,
    [N_Devise] SMALLINT,
    [TA_Code] VARCHAR(5),
    [cbTA_Code] VARBINARY(6),
    [CG_Sommeil] SMALLINT,
    [cbProt] SMALLINT CONSTRAINT [DF__F_COMPTEG__cbPro__59C61FAD] DEFAULT 0,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    [cbCreateur] CHAR(4) CONSTRAINT [DF__F_COMPTEG__cbCre__5ABA43E6] DEFAULT 'CSQL',
    [cbModification] SMALLDATETIME CONSTRAINT [DF__F_COMPTEG__cbMod__5BAE681F] DEFAULT CURRENT_TIMESTAMP,
    [cbReplication] INT CONSTRAINT [DF__F_COMPTEG__cbRep__5CA28C58] DEFAULT 0,
    [cbFlag] SMALLINT CONSTRAINT [DF__F_COMPTEG__cbFla__5D96B091] DEFAULT 0,
    [Dernire_criture] SMALLDATETIME,
    [Nb_critures] DECIMAL(24,6),
    CONSTRAINT [PK_CBMARQ_F_COMPTEG] PRIMARY KEY ([cbMarq]),
    CONSTRAINT [UKA_F_COMPTEG_CG_Num] UNIQUE ([CG_Num]),
    CONSTRAINT [ICG_NUM] UNIQUE ([cbCG_Num])
);

-- CreateTable
CREATE TABLE [dbo].[F_COMPTER] (
    [CR_Num] VARCHAR(13) NOT NULL,
    [cbCR_Num] VARBINARY(15),
    [CR_Type] SMALLINT,
    [CR_Intitule] VARCHAR(35),
    [CR_Classement] VARCHAR(17),
    [cbCR_Classement] VARBINARY(18),
    [CR_Saut] SMALLINT,
    [cbProt] SMALLINT CONSTRAINT [DF__F_COMPTER__cbPro__5E8AD4CA] DEFAULT 0,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    [cbCreateur] CHAR(4) CONSTRAINT [DF__F_COMPTER__cbCre__5F7EF903] DEFAULT 'CSQL',
    [cbModification] SMALLDATETIME CONSTRAINT [DF__F_COMPTER__cbMod__60731D3C] DEFAULT CURRENT_TIMESTAMP,
    [cbReplication] INT CONSTRAINT [DF__F_COMPTER__cbRep__61674175] DEFAULT 0,
    [cbFlag] SMALLINT CONSTRAINT [DF__F_COMPTER__cbFla__625B65AE] DEFAULT 0,
    CONSTRAINT [PK_CBMARQ_F_COMPTER] PRIMARY KEY ([cbMarq]),
    CONSTRAINT [UKA_F_COMPTER_CR_Num] UNIQUE ([CR_Num]),
    CONSTRAINT [ICR_NUM] UNIQUE ([cbCR_Num])
);

-- CreateTable
CREATE TABLE [dbo].[F_DEPOT] (
    [DE_No] INT,
    [DE_Intitule] VARCHAR(35) NOT NULL,
    [cbDE_Intitule] VARBINARY(36),
    [DE_Adresse] VARCHAR(35),
    [DE_Complement] VARCHAR(35),
    [DE_CodePostal] VARCHAR(9),
    [DE_Ville] VARCHAR(35),
    [DE_Contact] VARCHAR(35),
    [DE_Principal] SMALLINT,
    [DE_CatCompta] SMALLINT,
    [DE_Region] VARCHAR(25),
    [DE_Pays] VARCHAR(35),
    [DE_EMail] VARCHAR(69),
    [DE_Code] VARCHAR(9),
    [cbDE_Code] VARBINARY(10),
    [DE_Telephone] VARCHAR(21),
    [DE_Telecopie] VARCHAR(21),
    [DE_Replication] INT,
    [DP_NoDefaut] INT,
    [cbDP_NoDefaut] INT,
    [cbProt] SMALLINT CONSTRAINT [DF__F_DEPOT__cbProt__6CD8F421] DEFAULT 0,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    [cbCreateur] CHAR(4) CONSTRAINT [DF__F_DEPOT__cbCreat__6DCD185A] DEFAULT 'CSQL',
    [cbModification] SMALLDATETIME CONSTRAINT [DF__F_DEPOT__cbModif__6EC13C93] DEFAULT CURRENT_TIMESTAMP,
    [cbReplication] INT CONSTRAINT [DF__F_DEPOT__cbRepli__6FB560CC] DEFAULT 0,
    [cbFlag] SMALLINT CONSTRAINT [DF__F_DEPOT__cbFlag__70A98505] DEFAULT 0,
    CONSTRAINT [PK_CBMARQ_F_DEPOT] PRIMARY KEY ([cbMarq]),
    CONSTRAINT [IDE_NO] UNIQUE ([DE_No]),
    CONSTRAINT [IDE_INTITULE] UNIQUE ([cbDE_Intitule])
);

-- CreateTable
CREATE TABLE [dbo].[F_DEPOTEMPL] (
    [DE_No] INT NOT NULL,
    [DP_No] INT,
    [DP_Code] VARCHAR(13),
    [cbDP_Code] VARBINARY(14),
    [DP_Intitule] VARCHAR(35),
    [DP_Zone] SMALLINT,
    [DP_Type] SMALLINT,
    [cbProt] SMALLINT CONSTRAINT [DF__F_DEPOTEM__cbPro__76625E5B] DEFAULT 0,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    [cbCreateur] CHAR(4) CONSTRAINT [DF__F_DEPOTEM__cbCre__77568294] DEFAULT 'CSQL',
    [cbModification] SMALLDATETIME CONSTRAINT [DF__F_DEPOTEM__cbMod__784AA6CD] DEFAULT CURRENT_TIMESTAMP,
    [cbReplication] INT CONSTRAINT [DF__F_DEPOTEM__cbRep__793ECB06] DEFAULT 0,
    [cbFlag] SMALLINT CONSTRAINT [DF__F_DEPOTEM__cbFla__7A32EF3F] DEFAULT 0,
    CONSTRAINT [PK_CBMARQ_F_DEPOTEMPL] PRIMARY KEY ([cbMarq]),
    CONSTRAINT [IDP_NO] UNIQUE ([DP_No]),
    CONSTRAINT [IDP_CODE] UNIQUE ([DE_No],[cbDP_Code]),
    CONSTRAINT [UKA_F_DEPOTEMPL_DENO_DPNO] UNIQUE ([DE_No],[DP_No])
);

-- CreateTable
CREATE TABLE [dbo].[F_FAMILLEIMMO] (
    [FA_CodeFamille] VARCHAR(13) NOT NULL,
    [cbFA_CodeFamille] VARBINARY(15),
    [FA_Type] SMALLINT,
    [FA_Intitule] VARCHAR(35),
    [cbFA_Intitule] VARBINARY(36),
    [FA_NatBiens] SMALLINT,
    [FA_NatFisc] SMALLINT,
    [FA_AEImmo] VARCHAR(13),
    [cbFA_AEImmo] VARBINARY(14),
    [FA_Compte01] VARCHAR(13),
    [FA_Compte02] VARCHAR(13),
    [FA_Compte03] VARCHAR(13),
    [FA_Compte04] VARCHAR(13),
    [FA_Compte05] VARCHAR(13),
    [FA_Compte06] VARCHAR(13),
    [FA_Compte07] VARCHAR(13),
    [FA_Compte08] VARCHAR(13),
    [FA_Compte09] VARCHAR(13),
    [FA_Compte10] VARCHAR(13),
    [FA_Compte11] VARCHAR(13),
    [FA_Compte12] VARCHAR(13),
    [FA_Compte13] VARCHAR(13),
    [FA_Compte14] VARCHAR(13),
    [FA_ModeAmort01] SMALLINT,
    [FA_ModeAmort02] SMALLINT,
    [FA_ModeAmort03] SMALLINT,
    [FA_ModeAmort04] SMALLINT,
    [FA_ModeAmort05] SMALLINT,
    [FA_NbAnnee01] SMALLINT,
    [FA_NbAnnee02] SMALLINT,
    [FA_NbAnnee03] SMALLINT,
    [FA_NbAnnee04] SMALLINT,
    [FA_NbAnnee05] SMALLINT,
    [FA_NbMois01] SMALLINT,
    [FA_NbMois02] SMALLINT,
    [FA_NbMois03] SMALLINT,
    [FA_NbMois04] SMALLINT,
    [FA_NbMois05] SMALLINT,
    [FA_Depart01] SMALLINT,
    [FA_Depart02] SMALLINT,
    [FA_Depart03] SMALLINT,
    [FA_Depart04] SMALLINT,
    [FA_Depart05] SMALLINT,
    [FA_Prorata01] SMALLINT,
    [FA_Prorata02] SMALLINT,
    [FA_Prorata03] SMALLINT,
    [FA_Prorata04] SMALLINT,
    [FA_Prorata05] SMALLINT,
    [FA_BaseAmort] DECIMAL(24,6),
    [FA_Plancher] DECIMAL(24,6),
    [FA_Stat01] VARCHAR(21),
    [FA_Stat02] VARCHAR(21),
    [FA_Stat03] VARCHAR(21),
    [FA_Stat04] VARCHAR(21),
    [FA_Stat05] VARCHAR(21),
    [FA_Stat06] VARCHAR(21),
    [FA_Stat07] VARCHAR(21),
    [FA_Stat08] VARCHAR(21),
    [FA_Stat09] VARCHAR(21),
    [FA_Stat10] VARCHAR(21),
    [N_CategorieTP] SMALLINT,
    [FA_EnumPro] VARCHAR(35),
    [CA_Num] VARCHAR(13),
    [cbCA_Num] VARBINARY(14),
    [cbProt] SMALLINT CONSTRAINT [DF__F_FAMILLE__cbPro__17C35226] DEFAULT 0,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    [cbCreateur] CHAR(4) CONSTRAINT [DF__F_FAMILLE__cbCre__18B7765F] DEFAULT 'CSQL',
    [cbModification] SMALLDATETIME CONSTRAINT [DF__F_FAMILLE__cbMod__19AB9A98] DEFAULT CURRENT_TIMESTAMP,
    [cbReplication] INT CONSTRAINT [DF__F_FAMILLE__cbRep__1A9FBED1] DEFAULT 0,
    [cbFlag] SMALLINT CONSTRAINT [DF__F_FAMILLE__cbFla__1B93E30A] DEFAULT 0,
    CONSTRAINT [PK_CBMARQ_F_FAMILLEIMMO] PRIMARY KEY ([cbMarq]),
    CONSTRAINT [UKA_F_FAMILLEIMMO_FA_CODE] UNIQUE ([FA_CodeFamille]),
    CONSTRAINT [IFAI_CODE] UNIQUE ([cbFA_CodeFamille])
);

-- CreateTable
CREATE TABLE [dbo].[F_PROTECTIONCPTA] (
    [PROT_User] VARCHAR(35) NOT NULL,
    [cbCIPROT_User] VARBINARY(36),
    [PROT_Pwd] VARCHAR(11),
    [PROT_Description] VARCHAR(35),
    [PROT_Right] SMALLINT,
    [PROT_No] INT,
    [PROT_EMail] VARCHAR(69),
    [PROT_UserProfil] INT,
    [cbPROT_UserProfil] INT,
    [PROT_Administrator] SMALLINT,
    [PROT_DatePwd] SMALLDATETIME,
    [PROT_DateCreate] SMALLDATETIME,
    [PROT_LastLoginDate] SMALLDATETIME,
    [PROT_LastLoginTime] CHAR(9),
    [PROT_PwdStatus] SMALLINT,
    [cbProt] SMALLINT CONSTRAINT [DF__F_PROTECT__cbPro__55C0849F] DEFAULT 0,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    [cbCreateur] CHAR(4) CONSTRAINT [DF__F_PROTECT__cbCre__56B4A8D8] DEFAULT 'CSQL',
    [cbModification] SMALLDATETIME CONSTRAINT [DF__F_PROTECT__cbMod__57A8CD11] DEFAULT CURRENT_TIMESTAMP,
    [cbReplication] INT CONSTRAINT [DF__F_PROTECT__cbRep__589CF14A] DEFAULT 0,
    [cbFlag] SMALLINT CONSTRAINT [DF__F_PROTECT__cbFla__59911583] DEFAULT 0,
    CONSTRAINT [PK_CBMARQ_F_PROTECTIONCPTA] PRIMARY KEY ([cbMarq]),
    CONSTRAINT [IPROTCPTA_USER] UNIQUE ([cbCIPROT_User]),
    CONSTRAINT [IPROTCPTA_NO] UNIQUE ([PROT_No])
);

-- CreateTable
CREATE TABLE [dbo].[F_TAXE] (
    [TA_Intitule] VARCHAR(35),
    [cbTA_Intitule] VARBINARY(36),
    [TA_TTaux] SMALLINT,
    [TA_Taux] DECIMAL(24,6),
    [TA_Type] SMALLINT,
    [CG_Num] VARCHAR(13) NOT NULL,
    [cbCG_Num] VARBINARY(14),
    [TA_No] INT NOT NULL,
    [TA_Code] VARCHAR(5) NOT NULL,
    [cbTA_Code] VARBINARY(6),
    [TA_NP] SMALLINT,
    [TA_Sens] SMALLINT,
    [TA_Provenance] SMALLINT,
    [TA_Regroup] VARCHAR(5),
    [cbTA_Regroup] VARBINARY(6),
    [TA_Assujet] DECIMAL(24,6),
    [TA_GrilleBase] VARCHAR(3),
    [TA_GrilleTaxe] VARCHAR(3),
    [cbProt] SMALLINT CONSTRAINT [DF__F_TAXE__cbProt__640EA3F6] DEFAULT 0,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    [cbCreateur] CHAR(4) CONSTRAINT [DF__F_TAXE__cbCreate__6502C82F] DEFAULT 'CSQL',
    [cbModification] SMALLDATETIME CONSTRAINT [DF__F_TAXE__cbModifi__65F6EC68] DEFAULT CURRENT_TIMESTAMP,
    [cbReplication] INT CONSTRAINT [DF__F_TAXE__cbReplic__66EB10A1] DEFAULT 0,
    [cbFlag] SMALLINT CONSTRAINT [DF__F_TAXE__cbFlag__67DF34DA] DEFAULT 0,
    CONSTRAINT [PK_CBMARQ_F_TAXE] PRIMARY KEY ([cbMarq]),
    CONSTRAINT [ITA_NO] UNIQUE ([TA_No]),
    CONSTRAINT [UKA_F_TAXE_TA_Code] UNIQUE ([TA_Code]),
    CONSTRAINT [ITA_CODE] UNIQUE ([cbTA_Code])
);

-- CreateTable
CREATE TABLE [dbo].[FA_ArticleDefaultMission] (
    [RefArticle] VARCHAR(50),
    [TypeArt] VARCHAR(50)
);

-- CreateTable
CREATE TABLE [dbo].[FA_ArticleFacturation] (
    [RefArticle] VARCHAR(50) NOT NULL,
    [DesignArticle] VARCHAR(50),
    [CodeF] VARCHAR(50),
    [Etat] BIT,
    [CodeU] BIGINT,
    [PrixHT] FLOAT(53),
    [PrixVente] FLOAT(53),
    [Qte] FLOAT(53),
    [Marge] FLOAT(53),
    [AR_Design] NVARCHAR(50),
    CONSTRAINT [PK_FA_ArticleFacturation] PRIMARY KEY ([RefArticle])
);

-- CreateTable
CREATE TABLE [dbo].[FA_ArticleTaxe] (
    [RefArticle] VARCHAR(50) NOT NULL,
    [CodeCat] BIGINT NOT NULL,
    [CodeF] VARCHAR(50) NOT NULL,
    [CGNum] VARCHAR(50),
    [CodeS] BIGINT,
    [CodeTaxe1] VARCHAR(50),
    [TauxTaxe1] FLOAT(53),
    [CodeTaxe2] VARCHAR(50),
    [TauxTaxe2] FLOAT(53),
    [CodeTaxe3] VARCHAR(50),
    [TauxTaxe3] FLOAT(53),
    CONSTRAINT [PK_FA_ArticleTaxe] PRIMARY KEY ([RefArticle],[CodeCat])
);

-- CreateTable
CREATE TABLE [dbo].[FA_CatCompta] (
    [CodeCatCompta] BIGINT NOT NULL IDENTITY(1,1),
    [DesignCatCompta] VARCHAR(50),
    CONSTRAINT [PK_FA_CatCompta] PRIMARY KEY ([CodeCatCompta])
);

-- CreateTable
CREATE TABLE [dbo].[FA_ChargeContrat] (
    [CodeContrat] VARCHAR(50) NOT NULL,
    [CodeCharge] VARCHAR(50) NOT NULL,
    [Montant] DECIMAL(18,3),
    CONSTRAINT [PK_FA_ChargeContrat] PRIMARY KEY ([CodeContrat],[CodeCharge])
);

-- CreateTable
CREATE TABLE [dbo].[FA_CompteG] (
    [CGNum] VARCHAR(50) NOT NULL,
    [IntituleCG] VARCHAR(50),
    [AutorisAnalytique] BIT,
    CONSTRAINT [PK_FA_CompteGeneral] PRIMARY KEY ([CGNum])
);

-- CreateTable
CREATE TABLE [dbo].[FA_EnteteBonCommande] (
    [NSouche] BIGINT NOT NULL,
    [DO_Piece] VARCHAR(50) NOT NULL,
    [Filiale] BIGINT,
    [DO_Date] DATETIME,
    [DO_Heure] VARCHAR(50),
    [Client] VARCHAR(50),
    [DO_Reference] VARCHAR(100),
    [Etat] BIT NOT NULL,
    [Transformer] VARCHAR(50),
    [TransformerSource] VARCHAR(50),
    [TransformerDest] VARCHAR(50),
    CONSTRAINT [PK_FA_EnteteBonCommande] PRIMARY KEY ([NSouche],[DO_Piece])
);

-- CreateTable
CREATE TABLE [dbo].[FA_EnteteBonLivraison] (
    [NSouche] BIGINT NOT NULL,
    [DO_Piece] VARCHAR(50) NOT NULL,
    [Filiale] BIGINT,
    [DO_Date] DATETIME,
    [DO_Heure] VARCHAR(50),
    [Client] VARCHAR(50),
    [DO_Reference] VARCHAR(100),
    [Etat] BIT NOT NULL,
    [Transformer] VARCHAR(50),
    [TransformerSource] VARCHAR(50),
    [TransformerDest] VARCHAR(50),
    CONSTRAINT [PK_FA_EnteteBonLivraison] PRIMARY KEY ([NSouche],[DO_Piece])
);

-- CreateTable
CREATE TABLE [dbo].[FA_EnteteDevis] (
    [NSouche] BIGINT NOT NULL,
    [DO_Piece] VARCHAR(50) NOT NULL,
    [Filiale] BIGINT,
    [DO_Date] DATETIME,
    [DO_Heure] VARCHAR(50),
    [Client] VARCHAR(50),
    [DO_Reference] VARCHAR(100),
    [Etat] BIT NOT NULL,
    [Transformer] VARCHAR(50),
    [TransformerSource] VARCHAR(50),
    [TransformerDest] VARCHAR(50),
    CONSTRAINT [PK_FA_EnteteDevis] PRIMARY KEY ([NSouche],[DO_Piece])
);

-- CreateTable
CREATE TABLE [dbo].[FA_EnteteFacture] (
    [NSouche] BIGINT NOT NULL,
    [DO_Piece] VARCHAR(50) NOT NULL,
    [Filiale] BIGINT,
    [DO_Date] DATETIME,
    [DO_Heure] VARCHAR(50),
    [Client] VARCHAR(50),
    [DO_Reference] VARCHAR(100),
    [Etat] BIT NOT NULL,
    [Transformer] VARCHAR(50),
    [TransformerSource] VARCHAR(50),
    [TransformerDest] VARCHAR(50),
    [TypeFact] VARCHAR(50),
    [TypeDeBon] BIGINT,
    CONSTRAINT [PK_FA_EnteteFacture] PRIMARY KEY ([NSouche],[DO_Piece])
);

-- CreateTable
CREATE TABLE [dbo].[FA_FacturationEnergie] (
    [CodeCl] BIGINT NOT NULL,
    [CodeTypFact] VARCHAR(50) NOT NULL,
    [LieuDep] BIGINT NOT NULL,
    [LieuArriv] BIGINT NOT NULL,
    [PrixU] FLOAT(53),
    [Marq] INT NOT NULL IDENTITY(1,1),
    [Produit] VARCHAR(50),
    [CodeU] BIGINT,
    CONSTRAINT [PK_FA_FacturationEnergie] PRIMARY KEY ([CodeCl],[LieuDep],[LieuArriv])
);

-- CreateTable
CREATE TABLE [dbo].[FA_FacturationForfait] (
    [CodeCl] BIGINT NOT NULL,
    [CodeTypeFact] INT,
    [PrixU] FLOAT(53),
    [CbMarq] BIGINT NOT NULL IDENTITY(1,1),
    [CodeArticle] VARCHAR(50) NOT NULL,
    [CodeU] BIGINT,
    CONSTRAINT [PK_FA_FacturationForfait] PRIMARY KEY ([CodeCl],[CodeArticle])
);

-- CreateTable
CREATE TABLE [dbo].[FA_FacturationLocation] (
    [CodeCl] BIGINT NOT NULL,
    [CodeTypeFact] INT,
    [PrixU] FLOAT(53),
    [CbMarq] BIGINT NOT NULL IDENTITY(1,1),
    [CodeArticle] VARCHAR(50) NOT NULL,
    [CodeU] BIGINT,
    CONSTRAINT [PK_FA_FacturationLocation] PRIMARY KEY ([CodeCl],[CodeArticle])
);

-- CreateTable
CREATE TABLE [dbo].[FA_FacturationPrixLieu] (
    [CodeCl] BIGINT NOT NULL,
    [CodeTypFact] VARCHAR(50) NOT NULL,
    [LieuDep] BIGINT NOT NULL,
    [LieuArriv] BIGINT NOT NULL,
    [PrixUTone] FLOAT(53),
    [Marq] INT NOT NULL IDENTITY(1,1),
    [Produit] VARCHAR(50) NOT NULL,
    [CodeU] BIGINT,
    CONSTRAINT [PK_FA_FacturationPrixLieu_1] PRIMARY KEY ([CodeCl],[LieuDep],[LieuArriv],[Produit])
);

-- CreateTable
CREATE TABLE [dbo].[FA_FacturationToneKm] (
    [CodeCl] BIGINT NOT NULL,
    [CodeTypFact] VARCHAR(50) NOT NULL,
    [SeuilMinKm] BIGINT NOT NULL,
    [SeuilMaxKm] BIGINT NOT NULL,
    [PrixUTone] FLOAT(53) NOT NULL,
    [Marq] INT NOT NULL IDENTITY(1,1),
    [CodeArticle] VARCHAR(50) NOT NULL,
    [SupInf] VARCHAR(50) NOT NULL,
    [Quantite] FLOAT(53),
    [Formule] BIT,
    [Distance] BIGINT,
    [Majoration] FLOAT(53),
    CONSTRAINT [PK_FA_FacturationToneKm_1] PRIMARY KEY ([CodeCl],[SeuilMinKm],[SeuilMaxKm],[SupInf])
);

-- CreateTable
CREATE TABLE [dbo].[FA_FacturationType] (
    [Cl_Fact_Type] VARCHAR(50),
    [Cl_fact_Intitule] VARCHAR(50),
    [Code] INT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_FA_TypeFacturation] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[FA_FacturationTypeCl] (
    [CodeCl] BIGINT NOT NULL,
    [CodeTypeFact] INT NOT NULL,
    [TypeFact] VARCHAR(50),
    [IntituleTypeFact] VARCHAR(50),
    [defaultT] BIT,
    [CbType] INT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_FA_FacturationTypeCl] PRIMARY KEY ([CodeCl],[CodeTypeFact])
);

-- CreateTable
CREATE TABLE [dbo].[FA_FamilleArticle] (
    [CodeF] VARCHAR(50) NOT NULL,
    [DesignF] VARCHAR(50),
    CONSTRAINT [PK_FA_FamilleArticle] PRIMARY KEY ([CodeF])
);

-- CreateTable
CREATE TABLE [dbo].[FA_FamilleTaxe] (
    [CodeCat] BIGINT NOT NULL,
    [CodeF] VARCHAR(50) NOT NULL,
    [CGNum] VARCHAR(50),
    [CodeS] BIGINT,
    [CodeTaxe1] VARCHAR(50),
    [TauxTaxe1] FLOAT(53),
    [CodeTaxe2] VARCHAR(50),
    [TauxTaxe2] FLOAT(53),
    [CodeTaxe3] VARCHAR(50),
    [TauxTaxe3] FLOAT(53),
    CONSTRAINT [PK_FA_FamilleTaxe] PRIMARY KEY ([CodeCat],[CodeF])
);

-- CreateTable
CREATE TABLE [dbo].[FA_Filiale] (
    [CodeFilial] BIGINT NOT NULL IDENTITY(1,1),
    [DesignationFilial] VARCHAR(50),
    CONSTRAINT [PK_FA_Filiale] PRIMARY KEY ([CodeFilial]),
    CONSTRAINT [FA_IX_Filiale] UNIQUE ([DesignationFilial])
);

-- CreateTable
CREATE TABLE [dbo].[FA_Formule] (
    [CodeFormule] VARCHAR(50) NOT NULL,
    [IntituleFormule] VARCHAR(50),
    [TypeFormule] VARCHAR(50),
    [OpFormule] VARCHAR(50),
    [IntituleVar] VARCHAR(50),
    [VariableFormule] VARCHAR(50),
    [TableVarFormule] VARCHAR(50),
    [Identifiant] VARCHAR(50),
    [CbMarque] BIGINT NOT NULL IDENTITY(1,1),
    [Formule] VARCHAR(1000),
    CONSTRAINT [PK_FA_Formule] PRIMARY KEY ([CodeFormule],[CbMarque])
);

-- CreateTable
CREATE TABLE [dbo].[FA_ImageBonTransport] (
    [BonTransport] BIGINT,
    [Image] IMAGE,
    [CodeDoc] BIGINT NOT NULL IDENTITY(1,1)
);

-- CreateTable
CREATE TABLE [dbo].[FA_Journaux] (
    [CodeJ] VARCHAR(50) NOT NULL,
    [IntituleJ] VARCHAR(50),
    [AutorisAnalytiqJ] BIT,
    [TypeJ] VARCHAR(50),
    CONSTRAINT [PK_FA_Journaux] PRIMARY KEY ([CodeJ])
);

-- CreateTable
CREATE TABLE [dbo].[FA_LieuArrive] (
    [CodeLieuArrive] BIGINT NOT NULL IDENTITY(1,1),
    [DesigLieuArrive] VARCHAR(50) NOT NULL,
    [AR_Design] NVARCHAR(50),
    [CodeRegion] VARCHAR(50),
    [abreviation] NVARCHAR(50),
    CONSTRAINT [PK_FA_LieuArrive] PRIMARY KEY ([CodeLieuArrive])
);

-- CreateTable
CREATE TABLE [dbo].[FA_LieuDepart] (
    [CodeLieuDepart] BIGINT NOT NULL IDENTITY(1,1),
    [DesigLieuDepart] VARCHAR(50) NOT NULL,
    [AR_Design] NVARCHAR(50),
    [CodeRegion] VARCHAR(50),
    [Abreviation] NVARCHAR(50),
    CONSTRAINT [PK_FA_LieuDepart] PRIMARY KEY ([CodeLieuDepart])
);

-- CreateTable
CREATE TABLE [dbo].[FA_LieuDistance] (
    [CodeDistance] BIGINT NOT NULL IDENTITY(1,1),
    [CodeLieuDepart] BIGINT,
    [CodeLieuArrive] BIGINT,
    [KmDistance] BIGINT,
    CONSTRAINT [PK_FA_LieuDistance] PRIMARY KEY ([CodeDistance])
);

-- CreateTable
CREATE TABLE [dbo].[FA_LieuDistanceContrat] (
    [CodeContrat] VARCHAR(50) NOT NULL,
    [CodeLieuDepart] BIGINT NOT NULL,
    [CodeLieuArrive] BIGINT NOT NULL,
    [KmDistance] BIGINT,
    CONSTRAINT [PK_FA_LieuDistanceContrat] PRIMARY KEY ([CodeContrat],[CodeLieuDepart],[CodeLieuArrive])
);

-- CreateTable
CREATE TABLE [dbo].[FA_LigneBonCommande] (
    [NSouche] BIGINT NOT NULL,
    [DO_Piece] VARCHAR(50) NOT NULL,
    [Filiale] BIGINT NOT NULL,
    [Reference] VARCHAR(50) NOT NULL,
    [Designation] VARCHAR(50),
    [Glossaire] VARCHAR(50),
    [Quantite] FLOAT(53),
    [Unite] BIGINT,
    [PUHT] FLOAT(53),
    [Remise] FLOAT(53),
    [MttRemise] FLOAT(53),
    [THT] FLOAT(53),
    [TVA1] FLOAT(53),
    [MttTVA1] FLOAT(53),
    [TypeTVA1] BIGINT,
    [TVA2] FLOAT(53),
    [MttTVA2] FLOAT(53),
    [TypeTVA2] BIGINT,
    [TVA3] FLOAT(53),
    [MttTVA3] FLOAT(53),
    [TypeTVA3] BIGINT,
    [PTTC] FLOAT(53),
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Transformer] VARCHAR(50),
    CONSTRAINT [PK_FA_LigneBonCommande] PRIMARY KEY ([NSouche],[DO_Piece],[Filiale],[Reference],[Code])
);

-- CreateTable
CREATE TABLE [dbo].[FA_LigneBonLivraison] (
    [NSouche] BIGINT NOT NULL,
    [DO_Piece] VARCHAR(50) NOT NULL,
    [Filiale] BIGINT NOT NULL,
    [Reference] VARCHAR(50) NOT NULL,
    [Designation] VARCHAR(50),
    [Glossaire] VARCHAR(50),
    [Quantite] FLOAT(53),
    [Unite] BIGINT,
    [PUHT] FLOAT(53),
    [Remise] FLOAT(53),
    [MttRemise] FLOAT(53),
    [THT] FLOAT(53),
    [TVA1] FLOAT(53),
    [MttTVA1] FLOAT(53),
    [TypeTVA1] BIGINT,
    [TVA2] FLOAT(53),
    [MttTVA2] FLOAT(53),
    [TypeTVA2] BIGINT,
    [TVA3] FLOAT(53),
    [MttTVA3] FLOAT(53),
    [TypeTVA3] BIGINT,
    [PTTC] FLOAT(53),
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Transformer] VARCHAR(50),
    CONSTRAINT [PK_FA_LigneBonLivraison] PRIMARY KEY ([NSouche],[DO_Piece],[Filiale],[Reference],[Code])
);

-- CreateTable
CREATE TABLE [dbo].[FA_LigneDevis] (
    [NSouche] BIGINT NOT NULL,
    [DO_Piece] VARCHAR(50) NOT NULL,
    [Filiale] BIGINT NOT NULL,
    [Reference] VARCHAR(50) NOT NULL,
    [Designation] VARCHAR(50),
    [Glossaire] VARCHAR(50),
    [Quantite] FLOAT(53),
    [Unite] BIGINT,
    [PUHT] FLOAT(53),
    [Remise] FLOAT(53),
    [MttRemise] FLOAT(53),
    [THT] FLOAT(53),
    [TVA1] FLOAT(53),
    [MttTVA1] FLOAT(53),
    [TypeTVA1] BIGINT,
    [TVA2] FLOAT(53),
    [MttTVA2] FLOAT(53),
    [TypeTVA2] BIGINT,
    [TVA3] FLOAT(53),
    [MttTVA3] FLOAT(53),
    [TypeTVA3] BIGINT,
    [PTTC] FLOAT(53),
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Transformer] VARCHAR(50),
    CONSTRAINT [PK_FA_LigneDevis] PRIMARY KEY ([NSouche],[DO_Piece],[Filiale],[Reference],[Code])
);

-- CreateTable
CREATE TABLE [dbo].[FA_LigneFacture] (
    [NSouche] BIGINT NOT NULL,
    [DO_Piece] VARCHAR(50) NOT NULL,
    [Filiale] BIGINT NOT NULL,
    [Reference] VARCHAR(50) NOT NULL,
    [Designation] VARCHAR(50),
    [Glossaire] VARCHAR(50),
    [Quantite] FLOAT(53),
    [Unite] BIGINT,
    [PUHT] FLOAT(53),
    [Remise] FLOAT(53),
    [MttRemise] FLOAT(53),
    [THT] FLOAT(53),
    [TVA1] FLOAT(53),
    [MttTVA1] FLOAT(53),
    [TypeTVA1] BIGINT,
    [TVA2] FLOAT(53),
    [MttTVA2] FLOAT(53),
    [TypeTVA2] BIGINT,
    [TVA3] FLOAT(53),
    [MttTVA3] FLOAT(53),
    [TypeTVA3] BIGINT,
    [PTTC] FLOAT(53),
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Transformer] VARCHAR(50),
    [LieuDepart] NVARCHAR(50),
    [LieuArrive] NVARCHAR(50),
    [TypeBT] NVARCHAR(50),
    [Marchandise] NVARCHAR(50),
    [DateBT] DATE,
    [Distance] FLOAT(53),
    [CodeMission] VARCHAR(50),
    CONSTRAINT [PK_FA_LigneFacture] PRIMARY KEY ([NSouche],[DO_Piece],[Filiale],[Reference],[Code])
);

-- CreateTable
CREATE TABLE [dbo].[FA_Marchandise] (
    [CodeMarchandise] INT NOT NULL IDENTITY(1,1),
    [DesignMachandise] VARCHAR(50),
    [AR_Design] NVARCHAR(50)
);

-- CreateTable
CREATE TABLE [dbo].[FA_ModeReglement] (
    [CodeM] VARCHAR(50) NOT NULL,
    [IntituleM] VARCHAR(50),
    [TypeM] VARCHAR(50),
    [CodeJournauxA] VARCHAR(50),
    [CodeJournauxV] VARCHAR(50),
    CONSTRAINT [PK_FA_ModeReglement] PRIMARY KEY ([CodeM])
);

-- CreateTable
CREATE TABLE [dbo].[FA_Operationcontrat] (
    [Code] VARCHAR(50) NOT NULL,
    [DesignationContrat] VARCHAR(50),
    CONSTRAINT [PK_FA_Operationcontrat] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[FA_Operationcout] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Designationcout] VARCHAR(50),
    [Type] BIGINT,
    CONSTRAINT [PK_FA_Operationcout] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[FA_Option] (
    [Langue] VARCHAR(50)
);

-- CreateTable
CREATE TABLE [dbo].[FA_Organisation] (
    [CodeSouche] BIGINT NOT NULL,
    [intituleSouche] VARCHAR(50),
    [NDevisOrg] BIGINT,
    [NBCOrg] BIGINT,
    [NBLOrg] BIGINT,
    [NFactureOrg] BIGINT,
    [NFactureROrg] BIGINT,
    [NRegAchOrg] BIGINT,
    [NRegVenOrg] BIGINT
);

-- CreateTable
CREATE TABLE [dbo].[FA_ProduitClient] (
    [RefProduit] VARCHAR(50),
    [CodeCl] BIGINT,
    [Cond1] DECIMAL(18,3),
    [CoefCh1] DECIMAL(18,3),
    [Cond2] DECIMAL(18,3),
    [CoefCh2] DECIMAL(18,3),
    [CbMarq] BIGINT NOT NULL IDENTITY(1,1)
);

-- CreateTable
CREATE TABLE [dbo].[FA_Produits] (
    [RefProduit] VARCHAR(50) NOT NULL,
    [DesignProduit] VARCHAR(50),
    [CodeF] VARCHAR(50),
    [Etat] BIT,
    [CodeU] BIGINT,
    [PrixHT] FLOAT(53),
    [PrixVente] FLOAT(53),
    [Qte] FLOAT(53),
    [Marge] FLOAT(53),
    [TVA] FLOAT(53),
    CONSTRAINT [PK_FA_Produit] PRIMARY KEY ([RefProduit])
);

-- CreateTable
CREATE TABLE [dbo].[FA_ProvenanceT] (
    [CodeProv] BIGINT NOT NULL IDENTITY(1,1),
    [DesignProvT] VARCHAR(50),
    CONSTRAINT [PK_FA_ProvenanceT] PRIMARY KEY ([CodeProv])
);

-- CreateTable
CREATE TABLE [dbo].[FA_SectionAnalytique] (
    [CodeS] BIGINT NOT NULL IDENTITY(1,1),
    [DesignS] VARCHAR(50),
    CONSTRAINT [PK_FA_SectionAnalytique] PRIMARY KEY ([CodeS])
);

-- CreateTable
CREATE TABLE [dbo].[FA_SensT] (
    [CodeSensT] BIGINT NOT NULL IDENTITY(1,1),
    [designSensT] VARCHAR(50),
    CONSTRAINT [PK_FA_SensT] PRIMARY KEY ([CodeSensT])
);

-- CreateTable
CREATE TABLE [dbo].[FA_Souche] (
    [CodeSouche] BIGINT NOT NULL IDENTITY(1,1),
    [IntituleSouche] VARCHAR(50),
    [NDevisSouche] VARCHAR(50),
    [NBCSouche] VARCHAR(50),
    [NBLSouche] VARCHAR(50),
    [NFactureSouche] VARCHAR(50),
    [NFactureRSouche] VARCHAR(50),
    [NRegAchSouche] VARCHAR(50),
    [NRegVenSouche] VARCHAR(50),
    [DefaultS] BIT,
    CONSTRAINT [PK_FA_Souche] PRIMARY KEY ([CodeSouche])
);

-- CreateTable
CREATE TABLE [dbo].[FA_TarifClient] (
    [RefArticle] VARCHAR(50) NOT NULL,
    [CodeCl] BIGINT,
    [IntituleClient] VARCHAR(50),
    [PrixAchat] FLOAT(53),
    [Coef] FLOAT(53),
    [PrixVente] FLOAT(53),
    [Remise] FLOAT(53)
);

-- CreateTable
CREATE TABLE [dbo].[FA_Taxe] (
    [CodeT] VARCHAR(50) NOT NULL,
    [IntituleT] VARCHAR(50),
    [DescTaux] VARCHAR(50),
    [TauxT] FLOAT(53),
    [CGNum] VARCHAR(50),
    [SensT] INT,
    [TypeT] INT,
    [CodeRegrouppement] VARCHAR(50),
    [Assujettissement] DECIMAL(18,0),
    [provenance] VARCHAR(50),
    CONSTRAINT [PK_FA_Taxe] PRIMARY KEY ([CodeT])
);

-- CreateTable
CREATE TABLE [dbo].[FA_TypeBT] (
    [CodeTypeBT] BIGINT NOT NULL IDENTITY(1,1),
    [DesignTypeBT] VARCHAR(50),
    [AR_Design] NVARCHAR(50),
    CONSTRAINT [PK_FA_TypeBT] PRIMARY KEY ([CodeTypeBT])
);

-- CreateTable
CREATE TABLE [dbo].[FA_TypeCharge] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [TypeCharge] VARCHAR(50),
    CONSTRAINT [PK_FA_TypeCharge] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[FA_TypeParametre] (
    [CodePar] BIGINT NOT NULL IDENTITY(1,1),
    [DesignPar] VARCHAR(50),
    CONSTRAINT [PK_FA_TypeParametre] PRIMARY KEY ([CodePar])
);

-- CreateTable
CREATE TABLE [dbo].[FA_TypeTaxe] (
    [CodeTypeT] BIGINT NOT NULL,
    [DesignTypeT] VARCHAR(50),
    CONSTRAINT [PK_FA_TypeTaxe] PRIMARY KEY ([CodeTypeT])
);

-- CreateTable
CREATE TABLE [dbo].[FA_Unite] (
    [CodeU] BIGINT NOT NULL IDENTITY(1,1),
    [DesignU] VARCHAR(50),
    CONSTRAINT [PK_FA_Unite] PRIMARY KEY ([CodeU])
);

-- CreateTable
CREATE TABLE [dbo].[FC_Banque] (
    [Code] BIGINT NOT NULL,
    [Designation] VARCHAR(30),
    CONSTRAINT [PK_Banque] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[FC_CompteBancaire] (
    [CompteBancaire] BIGINT NOT NULL,
    [Banque] BIGINT,
    CONSTRAINT [PK_FC_CompteBancaire] PRIMARY KEY ([CompteBancaire])
);

-- CreateTable
CREATE TABLE [dbo].[FC_ModeReglement] (
    [Code] BIGINT NOT NULL,
    [Designation] VARCHAR(30),
    [Retenu] BIT,
    CONSTRAINT [PK_ModeReglement] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[FC_Reglement] (
    [NPiece] BIGINT NOT NULL IDENTITY(1,1),
    [NReglement] VARCHAR(50),
    [CompteBancaire] VARCHAR(50),
    [ModeReglement] BIGINT,
    [Montant] DECIMAL(18,3),
    [Date] DATETIME,
    [DateEcheance] DATETIME,
    [Fournisseur] VARCHAR(50),
    [Libelle] VARCHAR(150),
    [MontantImpute] DECIMAL(18,3),
    [MontantRestant] DECIMAL(18,3),
    [Retenu] BIT,
    [TauxRetenu] DECIMAL(18,3),
    [NReglementRetenu] VARCHAR(50),
    CONSTRAINT [PK_FC_Reglement] PRIMARY KEY ([NPiece])
);

-- CreateTable
CREATE TABLE [dbo].[FC_ReglementFacture] (
    [NDocAchat] BIGINT NOT NULL,
    [NReglement] BIGINT NOT NULL,
    [NFacture] VARCHAR(50),
    [MontantImpute] DECIMAL(18,3),
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_FC_ReglementFacture] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[Filiale] (
    [CodeFilial] BIGINT NOT NULL IDENTITY(1,1),
    [DesignationFilial] VARCHAR(50),
    CONSTRAINT [PK_Filiale] PRIMARY KEY ([CodeFilial]),
    CONSTRAINT [IX_Filiale] UNIQUE ([DesignationFilial])
);

-- CreateTable
CREATE TABLE [dbo].[FilialeBlocageKms] (
    [Login] VARCHAR(50) NOT NULL,
    [DiffKMS] FLOAT(53),
    [Etat] BIT,
    CONSTRAINT [PK_FilialeBlocageKms] PRIMARY KEY ([Login])
);

-- CreateTable
CREATE TABLE [dbo].[Flexibles] (
    [NSerieFlex] VARCHAR(50) NOT NULL,
    [RefFlexcib] VARCHAR(50) NOT NULL,
    [CumulFlexib] BIGINT,
    [DateMontageFlex] SMALLDATETIME,
    [DateMorgFlex] SMALLDATETIME,
    CONSTRAINT [PK_Flexibles] PRIMARY KEY ([NSerieFlex],[RefFlexcib])
);

-- CreateTable
CREATE TABLE [dbo].[Fonction] (
    [CodeFonc] BIGINT NOT NULL IDENTITY(1,1),
    [designation] VARCHAR(50),
    CONSTRAINT [PK_Fonction] PRIMARY KEY ([CodeFonc])
);

-- CreateTable
CREATE TABLE [dbo].[FormeSource] (
    [Code] INT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50),
    CONSTRAINT [PK_FormeSource] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[Fournisseur] (
    [CodeFr] VARCHAR(50) NOT NULL,
    [IntituleFr] VARCHAR(55),
    [ActiviteFr] VARCHAR(50),
    [AdresseFr] VARCHAR(500),
    [VilleFr] VARCHAR(50),
    [CpFr] INT,
    [RegionFr] VARCHAR(50),
    [CodePays] VARCHAR(5),
    [TelephFr] VARCHAR(50),
    [NomctctFr] VARCHAR(50),
    [PortblFr] VARCHAR(50),
    [FaxFr] VARCHAR(50),
    [EmailFr] VARCHAR(50),
    [FctctctFr] VARCHAR(50),
    [SiteFr] VARCHAR(100),
    [ObservationsFr] VARCHAR(500),
    [Etat] BIT,
    [MatriculeFiscale] VARCHAR(50),
    [TauxRetenu] DECIMAL(18,1),
    CONSTRAINT [PK_Fournisseur] PRIMARY KEY ([CodeFr])
);

-- CreateTable
CREATE TABLE [dbo].[Gouvernorat] (
    [CodeGouv] BIGINT NOT NULL IDENTITY(1,1),
    [designationGouv] VARCHAR(50),
    CONSTRAINT [PK_Gouvernorat] PRIMARY KEY ([CodeGouv])
);

-- CreateTable
CREATE TABLE [dbo].[GroupsUtilisateurs] (
    [CodeDroit] BIGINT NOT NULL IDENTITY(1,1),
    [DesignationDroit] VARCHAR(50),
    CONSTRAINT [PK_Droit] PRIMARY KEY ([CodeDroit]),
    CONSTRAINT [IX_Droit] UNIQUE ([DesignationDroit])
);

-- CreateTable
CREATE TABLE [dbo].[HistoriqueAnomalieGazoil] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [NumOrdre] BIGINT,
    [CodeFilial] BIGINT,
    [DateOrdre] DATETIME,
    [ImmatriculationVeh] VARCHAR(20) NOT NULL,
    [MatriculeC] VARCHAR(20),
    [IndexVeh] BIGINT CONSTRAINT [DF_HistoriqueAnomalieGazoil_IndexVeh1] DEFAULT 0,
    [QteGaz] REAL,
    [MoyConsReel] REAL,
    [MoyConTeor] REAL,
    CONSTRAINT [PK_HistoriqueAnomalieGazoil] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[HistoriqueDemontage] (
    [NumOrdreRepar] BIGINT NOT NULL,
    [RefArtic] VARCHAR(50) NOT NULL,
    [NSerie] VARCHAR(50) NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [Prix] REAL NOT NULL,
    [CodeVehRem] BIGINT NOT NULL,
    [RefAchat] BIGINT,
    [CodeFilialeAchat] BIGINT,
    [Origine] INT,
    [NumLigne] BIGINT,
    CONSTRAINT [PK_HistoriqueDemontage] PRIMARY KEY ([NumOrdreRepar],[RefArtic],[NSerie],[CodeFilial],[Prix],[CodeVehRem])
);

-- CreateTable
CREATE TABLE [dbo].[HistoriqueIndexPompe] (
    [code_index] BIGINT NOT NULL IDENTITY(1,1),
    [date_index] SMALLDATETIME NOT NULL,
    [Code_Pompe] VARCHAR(50) NOT NULL,
    [indexPop] DECIMAL(18,2) NOT NULL,
    CONSTRAINT [PK_HistoriqueIndexPompe] PRIMARY KEY ([code_index])
);

-- CreateTable
CREATE TABLE [dbo].[HistoriqueIndexVehicule] (
    [code_index] BIGINT NOT NULL IDENTITY(1,1),
    [date_index] DATETIME NOT NULL,
    [ImmatriculationVeh] VARCHAR(20),
    [index_veh] BIGINT NOT NULL,
    [tachygraphe] VARCHAR(50),
    [NumOrdre] BIGINT,
    [Filiale] BIGINT,
    [FrmSource] VARCHAR(50),
    [NumLigne] BIGINT,
    [etat] BIGINT CONSTRAINT [DF_HistoriqueIndexVehicule_etat] DEFAULT 1,
    CONSTRAINT [PK_historique_Index_Vehicule] PRIMARY KEY ([code_index])
);

-- CreateTable
CREATE TABLE [dbo].[HistoriquePneumatique] (
    [ImmatriculationVeh] VARCHAR(20) NOT NULL,
    [RefArtic] VARCHAR(50) NOT NULL,
    [NSerie] VARCHAR(50) NOT NULL,
    [DateMontage] SMALLDATETIME NOT NULL,
    [PositionP] BIGINT NOT NULL,
    [DateDemontage] SMALLDATETIME,
    [IndexMontagHPneu] BIGINT,
    [IndexDemontagHPneu] BIGINT,
    [NumOrdreMontage] BIGINT,
    [NumOrdreDemontage] BIGINT,
    [CodeFilialeMontage] BIGINT,
    [CodeFilialeDemontage] BIGINT,
    CONSTRAINT [PK_HistoriquePneumatique] PRIMARY KEY ([ImmatriculationVeh],[RefArtic],[NSerie],[DateMontage])
);

-- CreateTable
CREATE TABLE [dbo].[HistoriquePrix] (
    [RefAch] BIGINT,
    [CodeFilial] BIGINT,
    [RefArtic] VARCHAR(50) NOT NULL,
    [NSerie] VARCHAR(50) NOT NULL,
    [PrixUnit] REAL,
    [ImmatVehRem] VARCHAR(20),
    [Origine] INT CONSTRAINT [DF_HistoriquePrix_Origine] DEFAULT 0,
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_HistoriquePrix] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[HuileEssuiGlass] (
    [CodeHEssuiGlass] BIGINT NOT NULL IDENTITY(1,1),
    [DesigHEssuiGlass] VARCHAR(50),
    CONSTRAINT [PK_HuileEssuiGlass] PRIMARY KEY ([CodeHEssuiGlass]),
    CONSTRAINT [IX_HuileEssuiGlass] UNIQUE ([DesigHEssuiGlass])
);

-- CreateTable
CREATE TABLE [dbo].[HuileGasoil] (
    [CodeHuileGa] BIGINT NOT NULL IDENTITY(1,1),
    [DesiHuileGa] VARCHAR(50),
    CONSTRAINT [PK_HuileGasoil] PRIMARY KEY ([CodeHuileGa]),
    CONSTRAINT [IX_HuileGasoil] UNIQUE ([DesiHuileGa])
);

-- CreateTable
CREATE TABLE [dbo].[HuilePontArr] (
    [CodeHPontA] BIGINT NOT NULL IDENTITY(1,1),
    [DesigHPontA] VARCHAR(50),
    CONSTRAINT [PK_HuilePontArr] PRIMARY KEY ([CodeHPontA]),
    CONSTRAINT [IX_HuilePontArr] UNIQUE ([DesigHPontA])
);

-- CreateTable
CREATE TABLE [dbo].[HuilePriseMvt] (
    [CodeHPriseMvt] BIGINT NOT NULL IDENTITY(1,1),
    [DesigHPriseMvt] VARCHAR(50),
    CONSTRAINT [PK_HuilePriseMvt] PRIMARY KEY ([CodeHPriseMvt]),
    CONSTRAINT [IX_HuilePriseMvt] UNIQUE ([DesigHPriseMvt])
);

-- CreateTable
CREATE TABLE [dbo].[HuileReductRou] (
    [CodeHReductRou] BIGINT NOT NULL IDENTITY(1,1),
    [DesigHReductRou] VARCHAR(50),
    CONSTRAINT [PK_HuileReductRou] PRIMARY KEY ([CodeHReductRou]),
    CONSTRAINT [IX_HuileReductRou] UNIQUE ([DesigHReductRou])
);

-- CreateTable
CREATE TABLE [dbo].[Image] (
    [Code_I] BIGINT NOT NULL IDENTITY(1,1),
    [Ref] BIGINT,
    [Codefiliale] BIGINT,
    [Img] IMAGE,
    [TypeImg] BIGINT,
    CONSTRAINT [PK_Image] PRIMARY KEY ([Code_I])
);

-- CreateTable
CREATE TABLE [dbo].[ImageAccident] (
    [Code_I] BIGINT NOT NULL IDENTITY(1,1),
    [Ref] BIGINT,
    [Codefiliale] BIGINT,
    [Img] IMAGE,
    [TypeImg] BIGINT,
    CONSTRAINT [PK_ImageAccident] PRIMARY KEY ([Code_I])
);

-- CreateTable
CREATE TABLE [dbo].[ImageAffaire] (
    [Code_I] BIGINT NOT NULL IDENTITY(1,1),
    [Affaire] VARCHAR(50) NOT NULL,
    [IMG] IMAGE,
    CONSTRAINT [PK_ImageAffaire] PRIMARY KEY ([Code_I],[Affaire])
);

-- CreateTable
CREATE TABLE [dbo].[ImageAffectationVehicule] (
    [CodeAuto] BIGINT NOT NULL IDENTITY(1,1),
    [Vehicule] VARCHAR(50),
    [DateAffectation] DATETIME,
    [Image] IMAGE,
    CONSTRAINT [PK_ImageAffectationVehicule] PRIMARY KEY ([CodeAuto])
);

-- CreateTable
CREATE TABLE [dbo].[ImageAssurance] (
    [Code_I] BIGINT NOT NULL IDENTITY(1,1),
    [Assurance] INT NOT NULL,
    [NContrat] VARCHAR(50) NOT NULL,
    [Image] IMAGE,
    CONSTRAINT [PK_ImageAssuranceccc] PRIMARY KEY ([Code_I],[Assurance],[NContrat])
);

-- CreateTable
CREATE TABLE [dbo].[ImageChauffeur] (
    [CodeAuto] BIGINT NOT NULL IDENTITY(1,1),
    [Chauffeur] VARCHAR(50) NOT NULL,
    [Image] IMAGE,
    CONSTRAINT [PK_ImageChauffeur] PRIMARY KEY ([CodeAuto],[Chauffeur])
);

-- CreateTable
CREATE TABLE [dbo].[ImageConvoyeur] (
    [CodeAuto] BIGINT NOT NULL IDENTITY(1,1),
    [Convoyeur] VARCHAR(50) NOT NULL,
    [Image] IMAGE,
    CONSTRAINT [PK_ImageConvoyeur] PRIMARY KEY ([CodeAuto],[Convoyeur])
);

-- CreateTable
CREATE TABLE [dbo].[ImageDevis] (
    [Code_I] BIGINT NOT NULL IDENTITY(1,1),
    [Devis] BIGINT NOT NULL,
    [IMG] IMAGE,
    CONSTRAINT [PK_ImageDevis] PRIMARY KEY ([Code_I],[Devis])
);

-- CreateTable
CREATE TABLE [dbo].[ImageMecanicien] (
    [CodeAuto] BIGINT NOT NULL IDENTITY(1,1),
    [Mecanicien] VARCHAR(50) NOT NULL,
    [Image] IMAGE,
    CONSTRAINT [PK_ImageMecanicien] PRIMARY KEY ([CodeAuto],[Mecanicien])
);

-- CreateTable
CREATE TABLE [dbo].[ImageOR] (
    [CodeAuto] BIGINT NOT NULL IDENTITY(1,1),
    [OREP] BIGINT NOT NULL,
    [Image] IMAGE,
    CONSTRAINT [PK_ImageOR] PRIMARY KEY ([CodeAuto],[OREP])
);

-- CreateTable
CREATE TABLE [dbo].[ImagePersonnel] (
    [CodeAuto] BIGINT NOT NULL IDENTITY(1,1),
    [Personnel] VARCHAR(50) NOT NULL,
    [Image] IMAGE,
    CONSTRAINT [PK_ImagePersonnel] PRIMARY KEY ([CodeAuto],[Personnel])
);

-- CreateTable
CREATE TABLE [dbo].[ImageRapport] (
    [EnteteRapport] IMAGE,
    [PiedRapport] IMAGE,
    [LogoSociete] IMAGE,
    [CheminEnteteRapport] VARCHAR(5000),
    [CheminPiedRapport] VARCHAR(5000),
    [CheminLogoSociete] VARCHAR(5000)
);

-- CreateTable
CREATE TABLE [dbo].[ImageTaxe] (
    [Code_I] BIGINT NOT NULL IDENTITY(1,1),
    [NContrat] VARCHAR(50) NOT NULL,
    [Image] IMAGE,
    CONSTRAINT [PK_ImageTaxesss] PRIMARY KEY ([Code_I],[NContrat])
);

-- CreateTable
CREATE TABLE [dbo].[ImageVehicule] (
    [CodeAuto] BIGINT NOT NULL IDENTITY(1,1),
    [Vehicule] VARCHAR(50) NOT NULL,
    [Image] IMAGE,
    CONSTRAINT [PK_ImageVehicule] PRIMARY KEY ([CodeAuto],[Vehicule])
);

-- CreateTable
CREATE TABLE [dbo].[ImageVisiteTechnique] (
    [Code_I] BIGINT NOT NULL IDENTITY(1,1),
    [NContrat] VARCHAR(50) NOT NULL,
    [Image] IMAGE,
    CONSTRAINT [PK_ImageVisiteTechniquessss] PRIMARY KEY ([Code_I],[NContrat])
);

-- CreateTable
CREATE TABLE [dbo].[Jde] (
    [CodeJde] BIGINT NOT NULL,
    [codeclient] BIGINT NOT NULL,
    [ImmatriculationVeh] VARCHAR(20) NOT NULL,
    CONSTRAINT [PK_Jde] PRIMARY KEY ([CodeJde],[codeclient])
);

-- CreateTable
CREATE TABLE [dbo].[LieuChargement] (
    [CodeLieuCharg] BIGINT NOT NULL IDENTITY(1,1),
    [DesigLieuCharg] VARCHAR(50) NOT NULL,
    [AR_Design] NVARCHAR(50),
    [CodeRegion] VARCHAR(50),
    [Abreviation] NVARCHAR(50),
    CONSTRAINT [PK_LieuChargement] PRIMARY KEY ([CodeLieuCharg])
);

-- CreateTable
CREATE TABLE [dbo].[LieuCouchage] (
    [CodeLieuCouchage] BIGINT NOT NULL IDENTITY(1,1),
    [DesigLieuCouchage] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_LieuCouchage] PRIMARY KEY ([CodeLieuCouchage])
);

-- CreateTable
CREATE TABLE [dbo].[LieuDechargement] (
    [CodeLieudeCharg] BIGINT NOT NULL IDENTITY(1,1),
    [DesigLieudeCharg] VARCHAR(50) NOT NULL,
    [KMS] FLOAT(53),
    [AR_Design] NVARCHAR(50),
    [CodeRegion] VARCHAR(50),
    [Abreviation] NVARCHAR(50),
    CONSTRAINT [PK_LieuDechargement] PRIMARY KEY ([CodeLieudeCharg])
);

-- CreateTable
CREATE TABLE [dbo].[LieuRepot] (
    [CodeLieuRepot] BIGINT NOT NULL IDENTITY(1,1),
    [DesigLieuRepot] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_LieuRepot] PRIMARY KEY ([CodeLieuRepot])
);

-- CreateTable
CREATE TABLE [dbo].[LigneOrdreReparation] (
    [NumOrdreRepar] BIGINT NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [RefArtic] VARCHAR(50) NOT NULL,
    [Prix] DECIMAL(18,3) NOT NULL,
    [CodeVehRem] BIGINT NOT NULL,
    [CodeOrgane] BIGINT NOT NULL,
    [codeCategRep] BIGINT NOT NULL,
    [QteRepArt] REAL,
    [NumLigne] BIGINT NOT NULL,
    [Marque] BIGINT,
    [QteStk] REAL,
    [TypeRep] BIGINT,
    CONSTRAINT [PK_LigneOrdreReparation] PRIMARY KEY ([NumOrdreRepar],[CodeFilial],[RefArtic],[Prix],[CodeVehRem],[CodeOrgane],[codeCategRep],[NumLigne])
);

-- CreateTable
CREATE TABLE [dbo].[LigneOrdreSortie] (
    [Ref_E] BIGINT NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [RefArtic] VARCHAR(50) NOT NULL,
    [PrixUnit] DECIMAL(18,3) NOT NULL,
    [CodeLoc] BIGINT,
    [Qte] REAL NOT NULL,
    [Serial] BIT,
    [ImmatriculationVeh] VARCHAR(20),
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [NInv] BIGINT,
    [QteEnStock] DECIMAL(18,3),
    CONSTRAINT [PK_LigneOrdreSortie] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[ListeClient] (
    [CodeCl] BIGINT NOT NULL,
    [IntituleClient] VARCHAR(50),
    [CodeClient] BIGINT,
    [RegionCl] BIGINT,
    [Observations] VARCHAR(300),
    [ActiviteCl] VARCHAR(50),
    [AdresseCl] VARCHAR(50),
    [VilleCl] VARCHAR(10),
    [CpCl] BIGINT,
    [CodePays] VARCHAR(20),
    [TelephCl] VARCHAR(15),
    [Portable] VARCHAR(15),
    [EmailCl] VARCHAR(30),
    [SiteCl] VARCHAR(30),
    [RefDep] BIGINT,
    [EtatCli] BIT,
    CONSTRAINT [PK_ListeClient] PRIMARY KEY ([CodeCl])
);

-- CreateTable
CREATE TABLE [dbo].[Location] (
    [CodeLoc] BIGINT NOT NULL IDENTITY(1,1),
    [DesigLoc] VARCHAR(50) NOT NULL,
    [CodeFilial] BIGINT,
    CONSTRAINT [PK_Location] PRIMARY KEY ([CodeLoc]),
    CONSTRAINT [IX_Location] UNIQUE ([DesigLoc])
);

-- CreateTable
CREATE TABLE [dbo].[LocationArticle] (
    [RefArtic] VARCHAR(50) NOT NULL,
    [CodeLoc] BIGINT NOT NULL,
    CONSTRAINT [PK_LocationArticle] PRIMARY KEY ([RefArtic],[CodeLoc])
);

-- CreateTable
CREATE TABLE [dbo].[MarqueArticle] (
    [CodeAuto] BIGINT NOT NULL IDENTITY(1,1),
    [RefArtic] VARCHAR(50),
    [Code] BIGINT,
    CONSTRAINT [PK_MarqueArticle] PRIMARY KEY ([CodeAuto])
);

-- CreateTable
CREATE TABLE [dbo].[MarquePneu] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(100),
    CONSTRAINT [PK_MarquePneu] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[MarqueVehicule] (
    [CodeMarVeh] BIGINT NOT NULL IDENTITY(1,1),
    [DesigMarque] VARCHAR(50),
    CONSTRAINT [PK_MarqueVehicule] PRIMARY KEY ([CodeMarVeh])
);

-- CreateTable
CREATE TABLE [dbo].[Mecanicien] (
    [MatriculeM] VARCHAR(50) NOT NULL,
    [PrenomM] VARCHAR(50),
    [NomM] VARCHAR(50),
    [DateEmbaucheM] SMALLDATETIME,
    [NCinM] VARCHAR(50),
    [DateNaissanceM] SMALLDATETIME,
    [TelephM] VARCHAR(100),
    [PortableM] VARCHAR(100),
    [EmailM] VARCHAR(50),
    [AdresseM] VARCHAR(50),
    [VilleM] VARCHAR(50),
    [CpM] BIGINT,
    [NiveauM] VARCHAR(100),
    [ObservationM] VARCHAR(500),
    [EtatM] BIT,
    [Photo] IMAGE,
    [Permis] VARCHAR(50),
    [Qualification] VARCHAR(50),
    [GSang] VARCHAR(50),
    CONSTRAINT [PK_Mecanicien] PRIMARY KEY ([MatriculeM])
);

-- CreateTable
CREATE TABLE [dbo].[Mecanicien_Lieu] (
    [CodeLieu] BIGINT NOT NULL,
    [MatriculeC] VARCHAR(20) NOT NULL,
    [DateDebut] SMALLDATETIME NOT NULL,
    [DateFin] SMALLDATETIME,
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_Mecanicien_Lieu] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[MecanicienTravaux] (
    [NumOrdreRepar] BIGINT,
    [CodeFilial] BIGINT,
    [TravDem] VARCHAR(150),
    [CodeVehRem] BIGINT,
    [cbMarq] BIGINT NOT NULL IDENTITY(1,1),
    [MatriculeM] VARCHAR(20),
    [PrenomM] VARCHAR(20),
    [NomM] VARCHAR(30),
    [Temps] BIGINT,
    [RAF] VARCHAR(150),
    CONSTRAINT [PK_MecanicienTravaux] PRIMARY KEY ([cbMarq])
);

-- CreateTable
CREATE TABLE [dbo].[Mission] (
    [CodeMiss] BIGINT NOT NULL,
    [libelle] VARCHAR(100),
    [DateD] SMALLDATETIME,
    [DateF] SMALLDATETIME,
    [IndexCout] BIGINT,
    [Information] VARCHAR(5000),
    [Etat] BIT,
    [QteInit] REAL,
    [ParcourD] BIGINT,
    [ParcourF] BIGINT,
    [Qte] FLOAT(53),
    [Depart] VARCHAR(100),
    [Arriver] VARCHAR(100),
    [NBHeureTrv] FLOAT(53),
    [CodeChauff] VARCHAR(20),
    [NTelephone] VARCHAR(50),
    [Lieu] VARCHAR(100),
    [CodeVeh] VARCHAR(20),
    [MatriculeRem] VARCHAR(20),
    [Kms] BIGINT,
    [HeureDemTrv] TIME,
    [MatriculeM] VARCHAR(50),
    [MatVehMec] VARCHAR(20),
    [IndexD] BIGINT,
    [HeureDepart] TIME,
    [HeureDTrv] TIME,
    [HeureFTrv] TIME,
    [HeureRetour] TIME,
    [IndexF] BIGINT,
    [CodeTypeMission] BIGINT,
    [T_CodeCl] BIGINT,
    [T_Depcharger] BIT,
    [T_DepVide] BIT,
    [T_Depsolo] BIT,
    [T_Rcharger] BIT,
    [T_RVide] BIT,
    [T_Rsolo] BIT,
    [T_Convoyeur] VARCHAR(20),
    [T_LieuChargement] BIGINT,
    [T_LieuDechargement] BIGINT,
    [T_NFR] VARCHAR(50),
    [T_NBI] VARCHAR(50),
    [T_Instruction] VARCHAR(8000),
    [T_Materiel] VARCHAR(8000),
    [DateMission] DATETIME,
    [T_ReglComptant] BIT,
    [T_ReglATerme] BIT,
    [RecurrencePattern] VARCHAR(max),
    [MatriculeCahufPane] VARCHAR(20),
    [NordreRep] BIGINT,
    [CodeReg] BIGINT,
    [NbMinute] BIGINT,
    [InfoLibre1] VARCHAR(max),
    [InfoLibre2] VARCHAR(max),
    [InfoLibre3] VARCHAR(max),
    [InfoLibre4] VARCHAR(max),
    [InfoLibre5] VARCHAR(max),
    [InfoLibre6] VARCHAR(max),
    [InfoLibre7] VARCHAR(max),
    [InfoLibre8] VARCHAR(max),
    [InfoLibre9] VARCHAR(max),
    [InfoLibre10] VARCHAR(max),
    [InfoLibre11] VARCHAR(max),
    [InfoLibre12] VARCHAR(max),
    [InfoLibre13] VARCHAR(max),
    [InfoLibre14] VARCHAR(max),
    [InfoLibre15] VARCHAR(max),
    [InfoLibre16] VARCHAR(max),
    [InfoLibre17] VARCHAR(max),
    [InfoLibre18] VARCHAR(max),
    [InfoLibre19] VARCHAR(max),
    [InfoLibre20] VARCHAR(max),
    [CodeFilial] BIGINT,
    [NConteneur] VARCHAR(100),
    [jde] BIGINT,
    [codeDepot] BIGINT,
    [NTournee] VARCHAR(50),
    [NBL] VARCHAR(50),
    [DateCloture] DATETIME,
    [HeureCloture] VARCHAR(50),
    [Responsable] VARCHAR(100),
    [TypeMissionExpl] VARCHAR(50),
    [UnJour] BIT,
    [DeuxJour] BIT,
    [TroisPlusJ] BIT,
    [Autoroute] BIT,
    [RouteNationale] BIT,
    [RouteSecondaire] BIT,
    [DistanceConvMissAR] FLOAT(53),
    [Ecart] FLOAT(53),
    [Tarif] FLOAT(53),
    [ChargeSociete] BIT,
    [ChargeClient] BIT,
    [Chauffeur2] VARCHAR(20),
    [StatutMiss] BIGINT,
    [FamilleMiss] VARCHAR(50),
    [TypeMissionTransport] VARCHAR(50),
    [BT_NDoc] VARCHAR(28),
    [BT_DateDoc] DATE,
    [BT_NRecu] VARCHAR(28),
    [BT_DateRecu] DATE,
    [BT_Produit] VARCHAR(50),
    [BT_Marchandise] NVARCHAR(max),
    [BT_TVA] FLOAT(53),
    [Observations] NVARCHAR(max),
    [BT_Distance] FLOAT(53),
    [BT_LieuDepart] BIGINT,
    [BT_LieuArrive] BIGINT,
    [BT_Taxe1] FLOAT(53),
    [BT_MttTVA1] FLOAT(53),
    [BT_Taxe2] FLOAT(53),
    [BT_MttTVA2] FLOAT(53),
    [BT_Taxe3] FLOAT(53),
    [BT_MttTVA3] FLOAT(53),
    [BT_BruteHT] FLOAT(53),
    [BT_Remise] FLOAT(53),
    [BT_NetHT] FLOAT(53),
    [BT_TypeFacUtilisé] VARCHAR(50),
    [BT_PrixUn] FLOAT(53),
    [BT_TypeBT] BIGINT,
    [TransformerSource] VARCHAR(50),
    [TransformerDest] VARCHAR(50),
    [BT_Unite] BIGINT,
    [BT_Ecart] FLOAT(53),
    [TypeTVA1] BIGINT,
    [TypeTVA2] BIGINT,
    [TypeTVA3] BIGINT,
    [Formule] VARCHAR(1000),
    [NV_Tarif] FLOAT(53),
    [CodeFormule] VARCHAR(50),
    [BT_Contrat] VARCHAR(50),
    [Representant] VARCHAR(50),
    [SousClient] BIGINT,
    CONSTRAINT [PK_aaaaa] PRIMARY KEY ([CodeMiss])
);

-- CreateTable
CREATE TABLE [dbo].[Mission_Personnels] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [CodeMiss] BIGINT,
    [MatriculeP] VARCHAR(20),
    CONSTRAINT [PK_Mission_Personnels] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[Missions_Clients] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [CodeMiss] BIGINT,
    [CodeCl] BIGINT,
    [DesignationSClient] VARCHAR(50),
    [Qte] BIGINT,
    [BL] VARCHAR(50),
    [Destination] VARCHAR(100),
    [T_LieuRepot] VARCHAR(50),
    [T_LieuCouchage] VARCHAR(50),
    [CodeDestination] BIGINT,
    [DistanceConv] BIGINT,
    [HeureD] VARCHAR(50),
    [HeureF] VARCHAR(50),
    CONSTRAINT [PK_Missions_Clients] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[Missions_Convoyeur] (
    [CodeMission] BIGINT NOT NULL,
    [MatriculeC] VARCHAR(20) NOT NULL,
    CONSTRAINT [PK_Missions_Convoyeur] PRIMARY KEY ([CodeMission],[MatriculeC])
);

-- CreateTable
CREATE TABLE [dbo].[Missions_LieuDeChargement] (
    [CodeMission] BIGINT NOT NULL,
    [LieuDeChargement] BIGINT NOT NULL,
    CONSTRAINT [PK_Missions_LieuDeChargement] PRIMARY KEY ([CodeMission],[LieuDeChargement])
);

-- CreateTable
CREATE TABLE [dbo].[OeilBoiteVitesse] (
    [CodeOeilBteVit] BIGINT NOT NULL IDENTITY(1,1),
    [DesigOeilBteVit] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_OeilBoiteVitesse] PRIMARY KEY ([CodeOeilBteVit]),
    CONSTRAINT [IX_OeilBoiteVitesse] UNIQUE ([DesigOeilBteVit])
);

-- CreateTable
CREATE TABLE [dbo].[OeilDirection] (
    [CodeOeilDirec] BIGINT NOT NULL IDENTITY(1,1),
    [DesigOeilDirec] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_OeilDirection] PRIMARY KEY ([CodeOeilDirec]),
    CONSTRAINT [IX_OeilDirection] UNIQUE ([DesigOeilDirec])
);

-- CreateTable
CREATE TABLE [dbo].[OeilEmbrayage] (
    [CodeOeilEmbr] BIGINT NOT NULL IDENTITY(1,1),
    [DesigOeilEmbr] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_OeilEmbrayage] PRIMARY KEY ([CodeOeilEmbr]),
    CONSTRAINT [IX_OeilEmbrayage] UNIQUE ([DesigOeilEmbr])
);

-- CreateTable
CREATE TABLE [dbo].[OeilFrein] (
    [CodeOeilFrein] BIGINT NOT NULL IDENTITY(1,1),
    [DesigOeilFrein] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_OeilFrein] PRIMARY KEY ([CodeOeilFrein]),
    CONSTRAINT [IX_OeilFrein] UNIQUE ([DesigOeilFrein])
);

-- CreateTable
CREATE TABLE [dbo].[OeilMoteur] (
    [CodeOeilMot] BIGINT NOT NULL IDENTITY(1,1),
    [DesigOeilMot] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_OeilMoteur] PRIMARY KEY ([CodeOeilMot]),
    CONSTRAINT [IX_OeilMoteur] UNIQUE ([DesigOeilMot])
);

-- CreateTable
CREATE TABLE [dbo].[OeilReferoidissement] (
    [CodeOeilRefr] BIGINT NOT NULL IDENTITY(1,1),
    [DesigOeilRefr] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_OeilReferoidissement] PRIMARY KEY ([CodeOeilRefr]),
    CONSTRAINT [IX_OeilReferoidissement] UNIQUE ([DesigOeilRefr])
);

-- CreateTable
CREATE TABLE [dbo].[OeilReservoireCarburent] (
    [CodeOeilGasoil] BIGINT NOT NULL IDENTITY(1,1),
    [DesigOeilGasoil] VARCHAR(50),
    CONSTRAINT [PK_OeilGasoil] PRIMARY KEY ([CodeOeilGasoil]),
    CONSTRAINT [IX_OeilReservoireCarburent] UNIQUE ([DesigOeilGasoil])
);

-- CreateTable
CREATE TABLE [dbo].[OptionAssurance] (
    [Code] INT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50),
    CONSTRAINT [PK_OptionAssurance] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[OrdreAchatGasoil] (
    [RefAch] BIGINT NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [DateAch] SMALLDATETIME,
    [RefFacture] VARCHAR(50),
    [CodeFr] VARCHAR(50),
    [CodeCl] BIGINT NOT NULL,
    [HeureAchatGasoil] VARCHAR(50),
    [MontantGlobal] DECIMAL(24,6),
    [Bloquer] BIT CONSTRAINT [DF_OrdreAchatGasoil_Bloquer] DEFAULT 0,
    CONSTRAINT [PK_OrdreAchatGasoil] PRIMARY KEY ([RefAch],[CodeFilial])
);

-- CreateTable
CREATE TABLE [dbo].[OrdreEntrer] (
    [Ref_E] BIGINT NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [Date_E] DATETIME,
    [CodeCl] BIGINT,
    [CodeEntrer] VARCHAR(100),
    [ImmatriculationVeh] VARCHAR(20),
    [NumInventaire] BIGINT,
    CONSTRAINT [PK_OrdreEntrer] PRIMARY KEY ([Ref_E],[CodeFilial])
);

-- CreateTable
CREATE TABLE [dbo].[OrdreGazoil] (
    [NumOrdre] BIGINT NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [DateOrdre] SMALLDATETIME,
    [Jour] BIT,
    [Nuit] BIT,
    [Code_Pompe] VARCHAR(50),
    [MatriculePo] VARCHAR(20),
    [CpteDepart] DECIMAL(18,2),
    [CpteFin] DECIMAL(18,2),
    [HeureOrdreGasoil] VARCHAR(50),
    [Bloquer] BIT CONSTRAINT [DF_OrdreGazoil_Bloquer] DEFAULT 0,
    [TypeOR] BIT,
    [StockInit] FLOAT(53),
    [StockFinal] FLOAT(53),
    [DateFin] DATETIME,
    [HeureFin] VARCHAR(50),
    [Utilisateur] VARCHAR(100),
    [UtilisateurCloture] VARCHAR(100),
    CONSTRAINT [PK_OrdreGasoil] PRIMARY KEY ([NumOrdre],[CodeFilial])
);

-- CreateTable
CREATE TABLE [dbo].[OrdreReparation] (
    [NumOrdreRepar] BIGINT NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [DateOrdre] DATETIME NOT NULL,
    [ImmatriculationVeh] VARCHAR(20),
    [indexVeh] BIGINT,
    [MatriculeRem] VARCHAR(20),
    [indexRem] BIGINT,
    [MatriculeC] VARCHAR(20),
    [CodeCl] BIGINT,
    [HeureOrdreRep] VARCHAR(50),
    [DernierIndex] BIGINT,
    [NouvIndex] BIGINT,
    [IndexT] BIGINT,
    [IndexTAvModif] BIGINT,
    [IndexCorr2010] BIGINT,
    [Bloquer] BIT CONSTRAINT [DF_OrdreReparation_Bloquer] DEFAULT 0,
    [Interieur] BIT,
    [Exterieur] BIT,
    [Curatif] BIT,
    [Préventif] BIT,
    [BlocNotes] VARCHAR(5000),
    [DateFin] DATETIME,
    [HeureFin] VARCHAR(50),
    [CodeMiss] BIGINT,
    [CodeSousClient] BIGINT,
    [SousClient] VARCHAR(50),
    [Statut] BIGINT,
    [Utilisateur] VARCHAR(100),
    [UtilisateurCloture] VARCHAR(100),
    CONSTRAINT [PK_OrdreReparation] PRIMARY KEY ([NumOrdreRepar],[CodeFilial])
);

-- CreateTable
CREATE TABLE [dbo].[OrdreSortie] (
    [Ref_E] BIGINT NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [Date_E] DATETIME,
    [CodeCl] BIGINT,
    [CodeEntrer] VARCHAR(100),
    [ImmatriculationVeh] VARCHAR(20),
    [NumInventaire] BIGINT,
    CONSTRAINT [PK_OrdreSortie] PRIMARY KEY ([Ref_E],[CodeFilial])
);

-- CreateTable
CREATE TABLE [dbo].[OrdreTransfertCarburant] (
    [RefTransf] BIGINT NOT NULL,
    [CodeFilialS] BIGINT NOT NULL,
    [CodeFilialDest] BIGINT,
    [Date_Transf] DATETIME,
    [Heure_Transf] VARCHAR(50),
    [CodeClDest] BIGINT,
    [Etat] BIT CONSTRAINT [DF_OrdreTransfertCarburant_Etat] DEFAULT 0,
    [CodeAuto] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_OrdreTransfertCarburant] PRIMARY KEY ([RefTransf],[CodeFilialS])
);

-- CreateTable
CREATE TABLE [dbo].[Organe] (
    [CodeOrgane] BIGINT NOT NULL IDENTITY(1,1),
    [DesignOrgane] VARCHAR(50),
    CONSTRAINT [PK_Organe_1] PRIMARY KEY ([CodeOrgane]),
    CONSTRAINT [IX_Organe] UNIQUE ([DesignOrgane])
);

-- CreateTable
CREATE TABLE [dbo].[ORREP] (
    [NumOrdreRepar] BIGINT NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [DateOrdre] DATETIME NOT NULL,
    [ImmatriculationVeh] VARCHAR(20),
    [indexVeh] BIGINT,
    [MatriculeRem] VARCHAR(20),
    [indexRem] BIGINT,
    [MatriculeC] VARCHAR(20),
    [CodeCl] BIGINT,
    [HeureOrdreRep] VARCHAR(50)
);

-- CreateTable
CREATE TABLE [dbo].[P_CATEGORIETP] (
    [TP_Intitule] VARCHAR(35),
    [TP_Taux] DECIMAL(24,6),
    [TP_Plancher] DECIMAL(24,6),
    [TP_Plafond] DECIMAL(24,6),
    [cbIndice] SMALLINT,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_CBMARQ_P_CATEGORIETP] PRIMARY KEY ([cbMarq])
);

-- CreateTable
CREATE TABLE [dbo].[P_CONVEUROIMMO] (
    [C_BasculeCompte] SMALLINT,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_CBMARQ_P_CONVEUROIMMO] PRIMARY KEY ([cbMarq])
);

-- CreateTable
CREATE TABLE [dbo].[P_DOSSIER] (
    [D_RaisonSoc] VARCHAR(35),
    [D_Profession] VARCHAR(35),
    [D_Adresse] VARCHAR(35),
    [D_Complement] VARCHAR(35),
    [D_CodePostal] VARCHAR(9),
    [D_Ville] VARCHAR(35),
    [D_CodeRegion] VARCHAR(25),
    [D_Pays] VARCHAR(35),
    [D_Commentaire] VARCHAR(69),
    [D_Siret] VARCHAR(15),
    [D_Ape] VARCHAR(7),
    [D_Identifiant] VARCHAR(25),
    [D_DebutExo01] SMALLDATETIME,
    [D_DebutExo02] SMALLDATETIME,
    [D_DebutExo03] SMALLDATETIME,
    [D_DebutExo04] SMALLDATETIME,
    [D_DebutExo05] SMALLDATETIME,
    [D_FinExo01] SMALLDATETIME,
    [D_FinExo02] SMALLDATETIME,
    [D_FinExo03] SMALLDATETIME,
    [D_FinExo04] SMALLDATETIME,
    [D_FinExo05] SMALLDATETIME,
    [D_LgCg] SMALLINT,
    [D_LgAn] SMALLINT,
    [D_FormatQtes] VARCHAR(31),
    [D_CodeTrait] SMALLINT,
    [D_ConfSupp] SMALLINT,
    [D_AnalyseGL01] SMALLINT,
    [D_AnalyseGL02] SMALLINT,
    [D_AnalyseGL03] SMALLINT,
    [D_Delai] SMALLINT,
    [D_OuvCompte] SMALLINT,
    [D_Budget] SMALLINT,
    [D_SuppEc] SMALLINT,
    [D_RegTaxe] SMALLINT,
    [D_Ventil] SMALLINT,
    [D_Edi] SMALLINT,
    [D_Archivage01] SMALLINT,
    [D_Archivage02] SMALLINT,
    [D_Archivage03] SMALLINT,
    [D_Archivage04] SMALLINT,
    [D_Archivage05] SMALLINT,
    [D_RBSupp] SMALLINT,
    [D_MajImport] SMALLINT,
    [D_SaisCab] SMALLINT,
    [D_TypeValid] SMALLINT,
    [D_ImpressZero] SMALLINT,
    [N_DeviseCompte] SMALLINT,
    [N_DeviseEquival] SMALLINT,
    [D_ANSais] SMALLINT,
    [JO_NumAN] VARCHAR(7),
    [CG_NumANOuv] VARCHAR(13),
    [CG_NumANBenef] VARCHAR(13),
    [CG_NumANPerte] VARCHAR(13),
    [D_TVAEncReg] SMALLINT,
    [D_TVAEncAffect] SMALLINT,
    [D_DeviseEq] SMALLINT,
    [D_AnAffect] SMALLINT,
    [D_ReglPiece] SMALLINT,
    [D_ExtNeg] SMALLINT,
    [D_RapproDevise] SMALLINT,
    [D_ImportEqJo] SMALLINT,
    [D_ImportEqAn] SMALLINT,
    [CG_NumImportDebit] VARCHAR(13),
    [CG_NumImportCredit] VARCHAR(13),
    [N_Analytique] SMALLINT,
    [D_NumDoss] VARCHAR(9),
    [D_EMail] VARCHAR(69),
    [D_EMailExpert] VARCHAR(69),
    [D_Expert] VARCHAR(35),
    [D_Telephone] VARCHAR(21),
    [D_Telecopie] VARCHAR(21),
    [D_EMailSoc] VARCHAR(69),
    [D_Site] VARCHAR(69),
    [D_AppelTiers] SMALLINT,
    [D_AppelSection] SMALLINT,
    [D_ProtPiece] SMALLINT,
    [D_NumCont] SMALLINT,
    [D_DateClot] SMALLDATETIME,
    [D_CompteGTotal] SMALLINT,
    [D_RapproRecherche] SMALLINT,
    [D_RapproEcart] DECIMAL(24,6),
    [CG_NumRappro] VARCHAR(13),
    [D_RapproContrepartie] SMALLINT,
    [D_ComSens] SMALLINT,
    [D_ComType] SMALLINT,
    [D_ComMoyen] SMALLINT,
    [D_ComSoft] SMALLINT,
    [D_ComCodeExpert] VARCHAR(9),
    [D_ComDateSynchro] SMALLDATETIME,
    [D_ComGUID] BINARY(16),
    [D_RapproTypeEcart] SMALLINT,
    [D_RapproReport] SMALLINT,
    [JO_NumRapproEscCl] VARCHAR(7),
    [PI_NoRapproEscCl] INT,
    [JO_NumRapproEscFr] VARCHAR(7),
    [PI_NoRapproEscFr] INT,
    [D_GestionIFRS] SMALLINT,
    [D_SaisieIFRS] SMALLINT,
    [N_AnalytiqueIFRS] SMALLINT,
    [JA_NumAN] VARCHAR(7),
    [JO_NumANIFRS] VARCHAR(7),
    [JA_NumANIFRS] VARCHAR(7),
    [D_RappelSoldeMin] DECIMAL(24,6),
    [D_ImportVentil] SMALLINT,
    [D_PenalTaux] DECIMAL(24,6),
    [D_PenalImputation] SMALLINT,
    [JO_NumPenal] VARCHAR(7),
    [PI_NoPenal] INT,
    [D_Impayes] SMALLINT,
    [JO_NumImpayes] VARCHAR(7),
    [PI_NoImpayes] INT,
    [D_ImpressFactRef] SMALLINT,
    [D_SeuilTVA] DECIMAL(24,6),
    [D_NotSaisieSommeil] SMALLINT,
    [D_NormeDGI] SMALLINT,
    [D_ArchivePeriod] SMALLDATETIME,
    [D_ECNoCloture01] INT,
    [D_ECNoCloture02] INT,
    [D_ECNoCloture03] INT,
    [D_ECNoCloture04] INT,
    [D_ECNoCloture05] INT,
    [D_CloturePeriod] SMALLDATETIME,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_CBMARQ_P_DOSSIER] PRIMARY KEY ([cbMarq])
);

-- CreateTable
CREATE TABLE [dbo].[P_DOSSIERCIAL] (
    [D_RaisonS] VARCHAR(35),
    [D_FormatQte] VARCHAR(31),
    [D_FormatPrix] VARCHAR(31),
    [N_DeviseCompte] SMALLINT,
    [N_DeviseEquival] SMALLINT,
    [D_ArchivePeriod] SMALLDATETIME,
    [D_ValiditePeriod] SMALLINT,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_CBMARQ_P_DOSSIERCIAL] PRIMARY KEY ([cbMarq])
);

-- CreateTable
CREATE TABLE [dbo].[P_NATUREBIEN] (
    [B_Intitule] VARCHAR(35),
    [B_Suivi] SMALLINT,
    [B_Type] SMALLINT,
    [B_Immeuble] SMALLINT,
    [cbIndice] SMALLINT,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_CBMARQ_P_NATUREBIEN] PRIMARY KEY ([cbMarq])
);

-- CreateTable
CREATE TABLE [dbo].[P_PREFERENCESIMMO] (
    [PR_Virement] SMALLINT,
    [PR_Degressif] SMALLINT,
    [PR_DotAnter] SMALLINT,
    [PR_CalculCession] SMALLINT,
    [PR_ReportArrondi] SMALLINT,
    [PR_RecalculValCess] SMALLINT,
    [PR_ClotureExercice] SMALLINT,
    [PR_DateDot] SMALLINT,
    [PR_ComptaDotMens] SMALLINT,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_CBMARQ_P_PREFERENCESIMMO] PRIMARY KEY ([cbMarq])
);

-- CreateTable
CREATE TABLE [dbo].[P_TIERS] (
    [T_Principal] SMALLINT,
    [T_Val01T_Intitule] VARCHAR(17),
    [T_Val01T_TCompte] SMALLINT,
    [T_Val01T_Compte] VARCHAR(13),
    [T_Val02T_Intitule] VARCHAR(17),
    [T_Val02T_TCompte] SMALLINT,
    [T_Val02T_Compte] VARCHAR(13),
    [T_Val03T_Intitule] VARCHAR(17),
    [T_Val03T_TCompte] SMALLINT,
    [T_Val03T_Compte] VARCHAR(13),
    [T_Val04T_Intitule] VARCHAR(17),
    [T_Val04T_TCompte] SMALLINT,
    [T_Val04T_Compte] VARCHAR(13),
    [T_Val05T_Intitule] VARCHAR(17),
    [T_Val05T_TCompte] SMALLINT,
    [T_Val05T_Compte] VARCHAR(13),
    [T_Val06T_Intitule] VARCHAR(17),
    [T_Val06T_TCompte] SMALLINT,
    [T_Val06T_Compte] VARCHAR(13),
    [T_Val07T_Intitule] VARCHAR(17),
    [T_Val07T_TCompte] SMALLINT,
    [T_Val07T_Compte] VARCHAR(13),
    [T_Val08T_Intitule] VARCHAR(17),
    [T_Val08T_TCompte] SMALLINT,
    [T_Val08T_Compte] VARCHAR(13),
    [T_Val09T_Intitule] VARCHAR(17),
    [T_Val09T_TCompte] SMALLINT,
    [T_Val09T_Compte] VARCHAR(13),
    [T_Val10T_Intitule] VARCHAR(17),
    [T_Val10T_TCompte] SMALLINT,
    [T_Val10T_Compte] VARCHAR(13),
    [T_Numerotation] SMALLINT,
    [T_Lg] SMALLINT,
    [T_Racine] VARCHAR(17),
    [cbIndice] SMALLINT,
    [cbMarq] INT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_CBMARQ_P_TIERS] PRIMARY KEY ([cbMarq])
);

-- CreateTable
CREATE TABLE [dbo].[Param_Pneu] (
    [RefArtPneu] VARCHAR(50) NOT NULL,
    [EpaissMax] REAL,
    [EpaissMin] REAL,
    CONSTRAINT [PK_EpaisseurPneu] PRIMARY KEY ([RefArtPneu])
);

-- CreateTable
CREATE TABLE [dbo].[ParamDistanceConv] (
    [CodeDepotRemplCarb] BIGINT NOT NULL,
    [DestinationMission] BIGINT NOT NULL,
    [Distance] BIGINT,
    CONSTRAINT [PK_ParamDistanceConv] PRIMARY KEY ([CodeDepotRemplCarb],[DestinationMission])
);

-- CreateTable
CREATE TABLE [dbo].[Parametrage] (
    [DateOrdreReparation] BIT,
    [DateOrdreCarburant] BIT,
    [LoginUser] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_Parametrage] PRIMARY KEY ([LoginUser])
);

-- CreateTable
CREATE TABLE [dbo].[Park] (
    [CodeParc] BIGINT NOT NULL IDENTITY(1,1),
    [DesigParc] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_Park] PRIMARY KEY ([CodeParc])
);

-- CreateTable
CREATE TABLE [dbo].[Pays] (
    [CodePays] VARCHAR(20) NOT NULL,
    [DesignationP] VARCHAR(30),
    CONSTRAINT [PK_Pays] PRIMARY KEY ([CodePays])
);

-- CreateTable
CREATE TABLE [dbo].[Personnel] (
    [MatriculeP] VARCHAR(20) NOT NULL,
    [PrenomC] VARCHAR(20),
    [NomC] VARCHAR(20),
    [DateEmbaucheC] DATETIME,
    [NCinC] BIGINT,
    [DateNaissanceC] DATETIME,
    [TelephC] VARCHAR(50),
    [PortableC] VARCHAR(50),
    [EmailC] VARCHAR(50),
    [AdresseC] VARCHAR(50),
    [VilleC] VARCHAR(50),
    [CpC] BIGINT,
    [NiveauC] VARCHAR(50),
    [ObsevationsC] VARCHAR(500),
    [EtatC] BIT,
    [Photo] VARCHAR(100),
    [Permis] VARCHAR(20),
    [PhotoCam] IMAGE,
    CONSTRAINT [PK_Personnel] PRIMARY KEY ([MatriculeP])
);

-- CreateTable
CREATE TABLE [dbo].[Plan_Action] (
    [ID] BIGINT NOT NULL IDENTITY(1,1),
    [Ref] BIGINT NOT NULL,
    [CodeFiliale] BIGINT NOT NULL,
    [Action] VARCHAR(500),
    [Responsable] VARCHAR(50),
    [DateAction] DATETIME,
    [CritereEfficacite] VARCHAR(100),
    [Efficacite] VARCHAR(100),
    [DateCloture] DATETIME,
    CONSTRAINT [PK_Plan_Action] PRIMARY KEY ([ID],[Ref],[CodeFiliale])
);

-- CreateTable
CREATE TABLE [dbo].[Pneumatique] (
    [RefArtic] VARCHAR(50) NOT NULL,
    [NSerie] VARCHAR(50) NOT NULL,
    [DateMiseCirc] SMALLDATETIME NOT NULL,
    [IndexP] BIGINT NOT NULL,
    [DateArreCirc] SMALLDATETIME,
    CONSTRAINT [PK_Pneumatique] PRIMARY KEY ([RefArtic],[NSerie],[DateMiseCirc])
);

-- CreateTable
CREATE TABLE [dbo].[Pompes] (
    [Code_Pompe] VARCHAR(50) NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [DesignationPomp] VARCHAR(50),
    [RefPompe] BIGINT,
    [CodeTyCarbu] BIGINT,
    [Capacité_Pompe] REAL,
    [Qté_Actuelle] REAL CONSTRAINT [DF_Pompes_Qté_Actuelle] DEFAULT 0,
    [Stock_min] REAL,
    [CMUP] DECIMAL(18,6),
    [IndexDepart] DECIMAL(18,2),
    [QteInitial] DECIMAL(18,3),
    CONSTRAINT [PK_Pompes] PRIMARY KEY ([Code_Pompe])
);

-- CreateTable
CREATE TABLE [dbo].[Pompiste] (
    [MatriculePo] VARCHAR(20) NOT NULL,
    [PrenomPo] VARCHAR(20),
    [NomPo] VARCHAR(20),
    [DateEmbauchePo] DATETIME,
    [EtatPo] BIT,
    [NCinPo] BIGINT,
    [DateNaissancePo] DATETIME,
    [TelephPo] VARCHAR(20),
    [GSM_Po] VARCHAR(20),
    [EmailPo] VARCHAR(50),
    [AdressePo] VARCHAR(20),
    [VillePo] VARCHAR(20),
    [CpPo] INT,
    [CodePays] VARCHAR(20),
    [NumeroP] BIGINT,
    [NiveauPo] VARCHAR(20),
    [ObsevationsPo] VARCHAR(500),
    [PhotoPo] IMAGE,
    CONSTRAINT [PK_Pompiste] PRIMARY KEY ([MatriculePo])
);

-- CreateTable
CREATE TABLE [dbo].[Pompiste_CategPermis] (
    [MatriculePo] VARCHAR(20) NOT NULL,
    [CodeCategorie] BIGINT NOT NULL,
    [DateP] SMALLDATETIME,
    CONSTRAINT [PK_Pompiste_CategPermis] PRIMARY KEY ([MatriculePo],[CodeCategorie])
);

-- CreateTable
CREATE TABLE [dbo].[PressionPneu] (
    [RefArtPneu] VARCHAR(50) NOT NULL,
    [NSeriePneu] VARCHAR(50) NOT NULL,
    [NumOrdre] BIGINT NOT NULL,
    [CodeFiliale] BIGINT NOT NULL,
    [Pression] REAL,
    [DatePrelevem] SMALLDATETIME,
    [HeurePreleve] VARCHAR(50),
    CONSTRAINT [PK_PressionPneu] PRIMARY KEY ([RefArtPneu],[NSeriePneu],[NumOrdre],[CodeFiliale])
);

-- CreateTable
CREATE TABLE [dbo].[Profils] (
    [NomForm] VARCHAR(50),
    [CodeDroit] BIGINT,
    [NomControl] VARCHAR(50)
);

-- CreateTable
CREATE TABLE [dbo].[Profils1] (
    [NomForm] VARCHAR(50),
    [CodeDroit] BIGINT,
    [NomControl] VARCHAR(50)
);

-- CreateTable
CREATE TABLE [dbo].[RapportAccident] (
    [Ref] BIGINT NOT NULL,
    [CodeFiliale] BIGINT NOT NULL,
    [Lieu] VARCHAR(50),
    [Gouvernement] VARCHAR(50),
    [Tracteur] VARCHAR(20),
    [Citerne] VARCHAR(20),
    [Affectation] VARCHAR(50),
    [Date] DATETIME,
    [HeureAccident] VARCHAR(50),
    [Destination] VARCHAR(50),
    [Chauffeur] VARCHAR(20),
    [AncienneteSMTT] DATETIME,
    [ValiditePermis] DATETIME,
    [ValiditeCertifMed] DATETIME,
    [ValiditeTMD] DATETIME,
    [DerniFormSecour] DATETIME,
    [DerniFormConduiteDef] DATETIME,
    [DerniFormLutteIncendie] DATETIME,
    [DerniFormConduiteRation] DATETIME,
    [Faits] VARCHAR(8000),
    [ActionsPrise] VARCHAR(500),
    [CausesFond] VARCHAR(500),
    [CausesProf] VARCHAR(500),
    [Degats] VARCHAR(500),
    [Consequence] VARCHAR(500),
    [IncidentEvite] VARCHAR(500),
    [LeconARetenir] VARCHAR(500),
    [MesureDisciplinaire] VARCHAR(500),
    [EApersonne] VARCHAR(50),
    [EAbien] VARCHAR(50),
    [EAenvironnement] VARCHAR(50),
    [EAimage] VARCHAR(50),
    [EPpersonne1] VARCHAR(50),
    [EPbien1] VARCHAR(50),
    [EPenvironnement1] VARCHAR(50),
    [EPimage1] VARCHAR(50),
    [EAclients] VARCHAR(50),
    [EAresultats] VARCHAR(50),
    [EPclients] VARCHAR(50),
    [EPresultats] VARCHAR(50),
    CONSTRAINT [PK_RapportAccident] PRIMARY KEY ([Ref],[CodeFiliale])
);

-- CreateTable
CREATE TABLE [dbo].[Region] (
    [CodeReg] BIGINT NOT NULL IDENTITY(1,1),
    [designationReg] VARCHAR(50),
    [codeGouv] BIGINT,
    CONSTRAINT [PK_Regionn] PRIMARY KEY ([CodeReg])
);

-- CreateTable
CREATE TABLE [dbo].[Region1] (
    [CodeReg] BIGINT NOT NULL IDENTITY(1,1),
    [designationReg] VARCHAR(50),
    [codeGouv] BIGINT,
    CONSTRAINT [PK_Region] PRIMARY KEY ([CodeReg])
);

-- CreateTable
CREATE TABLE [dbo].[Remorque] (
    [MatriculeRem] VARCHAR(20) NOT NULL,
    [CodeTypeRemorque] BIGINT NOT NULL,
    [NChassisRem] VARCHAR(50) NOT NULL,
    [IndexRem] BIGINT,
    [CumuleRem] BIGINT CONSTRAINT [DF_Remorque_CumuleRem] DEFAULT 0,
    [PoidsRem] REAL,
    [PtraRem] REAL,
    [CapaciteRem] REAL,
    [NbrCompRem] BIGINT,
    [DesigTyPneu] VARCHAR(50),
    [NbrPneuRem] BIGINT,
    [ChargeRem] REAL,
    [DateMC] SMALLDATETIME,
    [DateAchat] SMALLDATETIME,
    [CodeParc] BIGINT,
    [CodeCl] BIGINT,
    [CodeTySusAv] BIGINT,
    [CodeTySusArr] BIGINT,
    [RefEssieu] BIGINT,
    [AbsRemork] BIT,
    [Gazoil] BIT,
    [Observations] VARCHAR(500),
    [Remarques] VARCHAR(500),
    [Etat] BIT,
    [ABS] BIT,
    [EBS] BIT,
    [EssieuRelvable] BIT,
    [EssieuSuiveur] BIT,
    [ChargementEnSource] BIT,
    [AffectationClient] BIGINT,
    [DerDateRenovation] DATETIME,
    [DateEtanchite] DATETIME,
    [DiametreTrouHomme] REAL,
    [TypeJauge] BIGINT,
    [EtatImmo] BIT,
    [ValeurAcquisition] REAL,
    CONSTRAINT [PK_Remorque] PRIMARY KEY ([MatriculeRem])
);

-- CreateTable
CREATE TABLE [dbo].[Remorque_Extincteur] (
    [MatriculeRem] VARCHAR(20) NOT NULL,
    [RefExtinct] VARCHAR(50) NOT NULL,
    [NSerieExtinct] VARCHAR(50) NOT NULL,
    [DateExtMontage] SMALLDATETIME NOT NULL,
    [DateExtDemontage] SMALLDATETIME,
    [IndexExtMontage] BIGINT,
    [IndexExtDemontage] BIGINT,
    [NumOrdreMontage] BIGINT,
    [NumOrdreDemontageontage] BIGINT,
    [CodeFilialMontage] BIGINT,
    [CodeFilialDemontage] BIGINT,
    CONSTRAINT [PK_Remorque_Extincteur] PRIMARY KEY ([MatriculeRem],[RefExtinct],[NSerieExtinct],[DateExtMontage])
);

-- CreateTable
CREATE TABLE [dbo].[Remorque_Flexibles] (
    [MatriculeRem] VARCHAR(20) NOT NULL,
    [RefFlexcib] VARCHAR(50) NOT NULL,
    [NSerieFlex] VARCHAR(50) NOT NULL,
    [DateFlexMontage] SMALLDATETIME NOT NULL,
    [DateFlexDemontage] SMALLDATETIME,
    [IndexFlxMontage] BIGINT,
    [IndexFlxDemontage] BIGINT,
    [NumOrdreMontage] BIGINT,
    [NumOrdreDemontage] BIGINT,
    [CodeFilialMontage] BIGINT,
    [CodeFilialDemontage] BIGINT,
    CONSTRAINT [PK_Veh_Flexibles] PRIMARY KEY ([MatriculeRem],[RefFlexcib],[NSerieFlex],[DateFlexMontage])
);

-- CreateTable
CREATE TABLE [dbo].[RemplacerArticle] (
    [Code] BIGINT NOT NULL,
    [RefArtic] VARCHAR(50) NOT NULL,
    [Art_RefArtic] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_RemplacerArticle] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[SerialiseArticleTemp] (
    [CodeTransfert] VARCHAR(100),
    [RefAch] BIGINT,
    [CodeFilial] BIGINT,
    [RefArtic] VARCHAR(50),
    [NSerie] VARCHAR(50),
    [PrixUnit] REAL,
    [ImmatVehRem] VARCHAR(20),
    [NumLigne] BIGINT NOT NULL IDENTITY(1,1),
    [Etat] INT CONSTRAINT [DF_SerialiseArticleTemp_Etat] DEFAULT 0,
    [CodeFilialDest] BIGINT,
    [CodeFilialS] BIGINT,
    [TypeOperation] INT CONSTRAINT [DF_SerialiseArticleTemp_TypeOperation] DEFAULT 0,
    CONSTRAINT [PK_SerialiseArticleTemp] PRIMARY KEY ([NumLigne])
);

-- CreateTable
CREATE TABLE [dbo].[SerialiserArticle] (
    [RefAch] BIGINT,
    [CodeFilial] BIGINT,
    [RefArtic] VARCHAR(50) NOT NULL,
    [NSerie] VARCHAR(50) NOT NULL,
    [PrixUnit] DECIMAL(18,3),
    [ImmatVehRem] VARCHAR(20),
    [NumLigne] BIGINT NOT NULL IDENTITY(1,1),
    [Origine] INT CONSTRAINT [DF_SerialiserArticle_Origine] DEFAULT 0,
    [CodeM] BIGINT,
    CONSTRAINT [PK_SerialiserArticle] PRIMARY KEY ([NumLigne])
);

-- CreateTable
CREATE TABLE [dbo].[SerieArticleConsommer] (
    [NumOrdreRepar] BIGINT NOT NULL,
    [RefArtic] VARCHAR(50) NOT NULL,
    [NSerie] VARCHAR(50) NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [Prix] DECIMAL(18,3) NOT NULL,
    [CodeVehRem] BIGINT NOT NULL,
    [RefAchat] BIGINT,
    [CodeFilialeAchat] BIGINT,
    [Origine] INT,
    [NumLigne] BIGINT,
    CONSTRAINT [PK_SerieArticleConsommer] PRIMARY KEY ([NumOrdreRepar],[RefArtic],[NSerie],[CodeFilial],[Prix],[CodeVehRem])
);

-- CreateTable
CREATE TABLE [dbo].[Service] (
    [CodeService] BIGINT NOT NULL IDENTITY(1,1),
    [designation] VARCHAR(50),
    [CodeDirection] BIGINT,
    CONSTRAINT [PK_Service] PRIMARY KEY ([CodeService])
);

-- CreateTable
CREATE TABLE [dbo].[Situation] (
    [CodeSituation] BIGINT NOT NULL IDENTITY(1,1),
    [DesigSituation] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_Situation] PRIMARY KEY ([CodeSituation])
);

-- CreateTable
CREATE TABLE [dbo].[SousTraitance] (
    [CodeSousTraitance] BIGINT NOT NULL IDENTITY(1,1),
    [IntituleSousTraitance] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_SousTraitance] PRIMARY KEY ([CodeSousTraitance])
);

-- CreateTable
CREATE TABLE [dbo].[SP_Societe] (
    [RS] VARCHAR(50),
    [adresse] VARCHAR(50),
    [CP] VARCHAR(50),
    [ville] VARCHAR(50),
    [pays] VARCHAR(50),
    [Tel] VARCHAR(50),
    [telecopie] VARCHAR(50),
    [codeNAF] VARCHAR(50),
    [NSiret] VARCHAR(50),
    [NIdentifiant] VARCHAR(50),
    [Effectif] VARCHAR(50),
    [Civilite] VARCHAR(50),
    [Nom] VARCHAR(50),
    [Prenom] VARCHAR(50),
    [gsm] VARCHAR(50),
    [fonction] VARCHAR(50),
    [Email] VARCHAR(50),
    [MotdePass] VARCHAR(30)
);

-- CreateTable
CREATE TABLE [dbo].[StatutMission] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50),
    CONSTRAINT [PK_StatutM] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[StatutOR] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50),
    CONSTRAINT [PK_StatutOR_1] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[StockArticle] (
    [RefArtic] VARCHAR(50) NOT NULL CONSTRAINT [DF_ss_RefArtic] DEFAULT '0',
    [PrixUnit] DECIMAL(18,3) NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [CodeCl] BIGINT NOT NULL,
    [QteAchat] FLOAT(53) NOT NULL,
    [QteConsommee] FLOAT(53) CONSTRAINT [DF_ss_QteConsommee] DEFAULT 0,
    CONSTRAINT [PK_StockArticle] PRIMARY KEY ([RefArtic],[PrixUnit],[CodeFilial],[CodeCl])
);

-- CreateTable
CREATE TABLE [dbo].[StockTemp] (
    [CodeTransfert] VARCHAR(100) NOT NULL,
    [RefArtic] VARCHAR(50) NOT NULL,
    [PrixUnit] DECIMAL(18,3) NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [CodeCl] BIGINT NOT NULL,
    [QteAchat] FLOAT(53) NOT NULL,
    [QteConsommee] FLOAT(53) CONSTRAINT [DF_StockTemp_QteConsommee] DEFAULT 0,
    [Etat] INT CONSTRAINT [DF_StockTemp_Etat] DEFAULT 0,
    CONSTRAINT [PK_StockTemp] PRIMARY KEY ([CodeTransfert],[RefArtic],[PrixUnit],[CodeFilial],[CodeCl])
);

-- CreateTable
CREATE TABLE [dbo].[StockTempTCarb] (
    [CodeTransfert] BIGINT NOT NULL,
    [CodeFilialS] BIGINT NOT NULL,
    [TypeCab] BIGINT,
    [PompeSour] VARCHAR(50),
    [PompeDest] VARCHAR(50),
    [PrixUnit] DECIMAL(18,6),
    [QteAch] FLOAT(53),
    [QteConsommee] FLOAT(53) CONSTRAINT [DF_StockTempTCarb_QteConsommee] DEFAULT 0,
    [Etat] INT CONSTRAINT [DF_StockTempTCarb_Etat] DEFAULT 0,
    CONSTRAINT [PK_StockTempTCarb] PRIMARY KEY ([CodeTransfert],[CodeFilialS])
);

-- CreateTable
CREATE TABLE [dbo].[StructurePneumatique] (
    [ImmatriculationVeh] VARCHAR(20) NOT NULL,
    [PositionP] BIGINT NOT NULL,
    CONSTRAINT [PK_StructurePneumatique] PRIMARY KEY ([ImmatriculationVeh],[PositionP])
);

-- CreateTable
CREATE TABLE [dbo].[tabIndex] (
    [index] BIGINT,
    [ImmatriculationVeh] VARCHAR(20)
);

-- CreateTable
CREATE TABLE [dbo].[TableFinalManqueNSerie2] (
    [RefAch] BIGINT,
    [CodeFilial] BIGINT,
    [RefArtic] VARCHAR(50) NOT NULL,
    [NSerie] VARCHAR(50) NOT NULL,
    [PrixUnit] REAL,
    [ImmatVehRem] VARCHAR(20),
    [Origine] INT,
    [Code] BIGINT NOT NULL IDENTITY(1,1)
);

-- CreateTable
CREATE TABLE [dbo].[Tachygraphe] (
    [NSerie] VARCHAR(50) NOT NULL,
    [RefTachygraphe] VARCHAR(50) NOT NULL,
    [CumulTachyg] BIGINT,
    [DateMontageTachyg] SMALLDATETIME,
    [DateMorgueTachyg] SMALLDATETIME,
    CONSTRAINT [PK_Tachygraphe] PRIMARY KEY ([NSerie],[RefTachygraphe])
);

-- CreateTable
CREATE TABLE [dbo].[TachygrapheVehiculRepar] (
    [ImmatriculationVeh] VARCHAR(20) NOT NULL,
    [NSerie] VARCHAR(50) NOT NULL,
    [RefTachygraphe] VARCHAR(50) NOT NULL,
    [DateTachyMontag] SMALLDATETIME NOT NULL,
    [DateTachyDemontag] SMALLDATETIME,
    [IndexTachygMontage] BIGINT NOT NULL,
    [IndexTachygDemontage] BIGINT,
    [NumOrdreMontage] BIGINT,
    [NumOrdreDemontage] BIGINT,
    [CodeFilialMontage] BIGINT,
    [CodeFilialDemontage] BIGINT,
    CONSTRAINT [PK_TachygrapheVehiculRepar] PRIMARY KEY ([ImmatriculationVeh],[NSerie],[RefTachygraphe],[DateTachyMontag])
);

-- CreateTable
CREATE TABLE [dbo].[TaxeVignette_ListeVehicule] (
    [Vehicule] VARCHAR(50) NOT NULL,
    [NContrat] INT NOT NULL,
    [MontantDétail] FLOAT(53),
    CONSTRAINT [PK_TaxeVignette_Vehicule000] PRIMARY KEY ([Vehicule],[NContrat])
);

-- CreateTable
CREATE TABLE [dbo].[TaxeVignette_Vehicule] (
    [NContrat] INT NOT NULL,
    [DateEffetDebut] SMALLDATETIME,
    [DateEffetFin] SMALLDATETIME,
    [Référence] VARCHAR(100),
    [Alerte] BIGINT,
    [Montant] DECIMAL(18,3),
    [Glossaire] VARCHAR(8000),
    [Fractionnement] VARCHAR(50),
    [Etat] BIT,
    [Filiale] BIGINT,
    [Departement] BIGINT,
    CONSTRAINT [PK_TaxeVignette_Vehiculeqqq] PRIMARY KEY ([NContrat])
);

-- CreateTable
CREATE TABLE [dbo].[TCarteCarburant] (
    [NumCarte] VARCHAR(50) NOT NULL,
    [OperateurCarte] BIGINT NOT NULL,
    [IntituleCarte] VARCHAR(50),
    [TypeCarte] BIGINT,
    [Vehicule] VARCHAR(20),
    [MatChauffeur] VARCHAR(20),
    [Etat] BIT,
    [SoldeCarte] FLOAT(53),
    [Departement] BIGINT,
    [Direction] BIGINT,
    [CodeCarte] VARCHAR(50),
    [DateExpir] DATETIME,
    [PrixUnitaire] FLOAT(53),
    CONSTRAINT [PK_TCarteCarburant] PRIMARY KEY ([NumCarte],[OperateurCarte])
);

-- CreateTable
CREATE TABLE [dbo].[TOperateurCarte] (
    [CodeOperateur] BIGINT NOT NULL IDENTITY(1,1),
    [OperateurCarte] VARCHAR(50),
    CONSTRAINT [PK_TOperateurCarte] PRIMARY KEY ([CodeOperateur])
);

-- CreateTable
CREATE TABLE [dbo].[Transfert] (
    [RefTransf] BIGINT NOT NULL,
    [CodeFilialS] BIGINT NOT NULL,
    [CodeFilialDest] BIGINT,
    [Date_Transf] DATETIME,
    [Heure_Transf] VARCHAR(50),
    [CodeClDest] BIGINT,
    [Etat] BIT CONSTRAINT [DF_Transfert_Etat] DEFAULT 0,
    [CodeTransfert] VARCHAR(100),
    [Utilisateur] VARCHAR(50),
    CONSTRAINT [PK_Transfert] PRIMARY KEY ([RefTransf],[CodeFilialS])
);

-- CreateTable
CREATE TABLE [dbo].[Traveaux] (
    [NumOrdreRepar] BIGINT NOT NULL,
    [CodeFilial] BIGINT NOT NULL,
    [TravDem] VARCHAR(150) NOT NULL,
    [CodeVehRem] BIGINT NOT NULL,
    [TravExec] VARCHAR(150),
    [CodeOrgane] BIGINT,
    [MatriculeM] VARCHAR(50),
    [TempsTD] BIGINT,
    [RAF] VARCHAR(150),
    [Prix_Heure] REAL,
    [codeAuto] BIGINT NOT NULL IDENTITY(1,1),
    [OrdreRAF] BIGINT,
    [FilialeSource] BIGINT,
    [RAFExec] VARCHAR(150),
    [CodeIntervention] BIGINT,
    [TypeRep] BIGINT,
    CONSTRAINT [PK_Traveaux] PRIMARY KEY ([NumOrdreRepar],[CodeFilial],[TravDem],[CodeVehRem],[codeAuto])
);

-- CreateTable
CREATE TABLE [dbo].[TrouPneu] (
    [RefArtPneu] VARCHAR(50) NOT NULL,
    [NSeriePneu] VARCHAR(50) NOT NULL,
    [NumOrdre] BIGINT NOT NULL,
    [CodeFiliale] BIGINT NOT NULL,
    [NbrTrou] REAL,
    [DatePrelevem] SMALLDATETIME,
    [HeurePreleve] VARCHAR(50),
    CONSTRAINT [PK_TrouPneu] PRIMARY KEY ([RefArtPneu],[NSeriePneu],[NumOrdre],[CodeFiliale])
);

-- CreateTable
CREATE TABLE [dbo].[TypeAccident] (
    [Code] INT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50),
    CONSTRAINT [PK_TypeAccident] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[TypeAvantTrain] (
    [CodeTyAvTr] BIGINT NOT NULL IDENTITY(1,1),
    [DesigTyAvTr] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypeAvantTrain] PRIMARY KEY ([CodeTyAvTr]),
    CONSTRAINT [IX_TypeAvantTrain] UNIQUE ([DesigTyAvTr])
);

-- CreateTable
CREATE TABLE [dbo].[TypeBoiteDirection] (
    [CodeTyBtDir] BIGINT NOT NULL IDENTITY(1,1),
    [DesigTyBtDir] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypeBoiteDirection] PRIMARY KEY ([CodeTyBtDir]),
    CONSTRAINT [IX_TypeBoiteDirection] UNIQUE ([DesigTyBtDir])
);

-- CreateTable
CREATE TABLE [dbo].[TypeBoiteVitesse] (
    [CodeTyBteVit] BIGINT NOT NULL IDENTITY(1,1),
    [DesigTyBteVit] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypeBoiteVitesse] PRIMARY KEY ([CodeTyBteVit]),
    CONSTRAINT [IX_TypeBoiteVitesse] UNIQUE ([DesigTyBteVit])
);

-- CreateTable
CREATE TABLE [dbo].[TypeCarburent] (
    [CodeTyCarbu] BIGINT NOT NULL IDENTITY(1,1),
    [DesigTyCarbu] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypeCarburent] PRIMARY KEY ([CodeTyCarbu])
);

-- CreateTable
CREATE TABLE [dbo].[TypeCarteCarburant] (
    [CodeTC] BIGINT NOT NULL IDENTITY(1,1),
    [IntituleTypeCarte] VARCHAR(50),
    CONSTRAINT [PK_TypeCarteCarburant] PRIMARY KEY ([CodeTC])
);

-- CreateTable
CREATE TABLE [dbo].[TypeDocAdmin] (
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(100),
    [TD] BIT,
    CONSTRAINT [PK_TypeDocAdmin] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[TypeDocument] (
    [Type_document] INT,
    [Document] VARCHAR(50)
);

-- CreateTable
CREATE TABLE [dbo].[TypeEmbrayage] (
    [CodeTyEmbr] BIGINT NOT NULL IDENTITY(1,1),
    [DesigTyEmbr] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypeEmbrayage] PRIMARY KEY ([CodeTyEmbr]),
    CONSTRAINT [IX_TypeEmbrayage] UNIQUE ([DesigTyEmbr])
);

-- CreateTable
CREATE TABLE [dbo].[TypeEssieu] (
    [RefEssieu] BIGINT NOT NULL IDENTITY(1,1),
    [DesigEssieu] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypeEssieu] PRIMARY KEY ([RefEssieu])
);

-- CreateTable
CREATE TABLE [dbo].[TypeExtincteursVeh] (
    [RefExtinct] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_ExtincteursVeh] PRIMARY KEY ([RefExtinct])
);

-- CreateTable
CREATE TABLE [dbo].[TypeFlexcibleVehi] (
    [RefFlexcib] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_FlexcibleVehi] PRIMARY KEY ([RefFlexcib])
);

-- CreateTable
CREATE TABLE [dbo].[TypeMission] (
    [Code] INT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50),
    [SmallIcon] IMAGE,
    CONSTRAINT [PK_TypeMission] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[TypeMoteur] (
    [CodeTyMot] BIGINT NOT NULL IDENTITY(1,1),
    [DesigTyMot] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypeMoteur] PRIMARY KEY ([CodeTyMot]),
    CONSTRAINT [IX_TypeMoteur] UNIQUE ([DesigTyMot])
);

-- CreateTable
CREATE TABLE [dbo].[TypePneu] (
    [DesigTyPneu] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypePneu] PRIMARY KEY ([DesigTyPneu]),
    CONSTRAINT [IX_TypePneu] UNIQUE ([DesigTyPneu])
);

-- CreateTable
CREATE TABLE [dbo].[TypePompe] (
    [RefPompe] BIGINT NOT NULL IDENTITY(1,1),
    [DesigPompe] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypePompe] PRIMARY KEY ([RefPompe]),
    CONSTRAINT [IX_TypePompe] UNIQUE ([DesigPompe])
);

-- CreateTable
CREATE TABLE [dbo].[TypePontArriere] (
    [CodeTyPontArri] BIGINT NOT NULL IDENTITY(1,1),
    [DesigTyPontArri] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypePontArriere] PRIMARY KEY ([CodeTyPontArri]),
    CONSTRAINT [IX_TypePontArriere] UNIQUE ([DesigTyPontArri])
);

-- CreateTable
CREATE TABLE [dbo].[TypeRemorque] (
    [CodeTypeRemorque] BIGINT NOT NULL,
    [DesignationTyRemorque] VARCHAR(30) NOT NULL,
    [Immo] BIT,
    [EtatImmo] BIT,
    CONSTRAINT [PK_TypeRemorque] PRIMARY KEY ([CodeTypeRemorque])
);

-- CreateTable
CREATE TABLE [dbo].[TypeReparation] (
    [CodeT] BIGINT NOT NULL IDENTITY(1,1),
    [Libelle] VARCHAR(50),
    CONSTRAINT [PK_TypeReparation] PRIMARY KEY ([CodeT])
);

-- CreateTable
CREATE TABLE [dbo].[TypeSuspontionArriere] (
    [CodeTySusArr] BIGINT NOT NULL IDENTITY(1,1),
    [DesigTySusArr] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypeSuspontionArriere] PRIMARY KEY ([CodeTySusArr]),
    CONSTRAINT [IX_TypeSuspontionArriere] UNIQUE ([DesigTySusArr])
);

-- CreateTable
CREATE TABLE [dbo].[TypeSuspontionAvant] (
    [CodeTySusAv] BIGINT NOT NULL IDENTITY(1,1),
    [DesigTySusAv] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypeSuspontionAvant] PRIMARY KEY ([CodeTySusAv]),
    CONSTRAINT [IX_TypeSuspontionAvant] UNIQUE ([DesigTySusAv])
);

-- CreateTable
CREATE TABLE [dbo].[TypeTachygraphe] (
    [RefTachygraphe] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK_TypeTachygraphe] PRIMARY KEY ([RefTachygraphe])
);

-- CreateTable
CREATE TABLE [dbo].[TypeVehicule] (
    [CodeTyVeh] BIGINT NOT NULL,
    [IntituleTyVeh] VARCHAR(30) NOT NULL,
    [Immo] BIT,
    [EtatImmo] BIT,
    CONSTRAINT [PK_TypeVehicule] PRIMARY KEY ([CodeTyVeh])
);

-- CreateTable
CREATE TABLE [dbo].[User] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [Email] NVARCHAR(1000) NOT NULL,
    [Password] NVARCHAR(1000) NOT NULL,
    [FirstName] NVARCHAR(1000) NOT NULL,
    [LastName] NVARCHAR(1000) NOT NULL,
    [Role] NVARCHAR(1000) NOT NULL CONSTRAINT [User_Role_df] DEFAULT 'DRIVER',
    [Phone] NVARCHAR(1000) NOT NULL,
    [Image] NVARCHAR(1000),
    CONSTRAINT [User_pkey] PRIMARY KEY ([ID]),
    CONSTRAINT [User_Email_key] UNIQUE ([Email])
);

-- CreateTable
CREATE TABLE [dbo].[Utilisateurs] (
    [CodeUser] BIGINT NOT NULL IDENTITY(1,1),
    [LoginUser] VARCHAR(50) NOT NULL,
    [MotPassUser] VARCHAR(50),
    [NomUser] VARCHAR(50),
    [PrenomUser] VARCHAR(50),
    [CodeDroit] BIGINT,
    [Connect] VARCHAR(50),
    CONSTRAINT [PK_Utilisateur] PRIMARY KEY ([CodeUser],[LoginUser])
);

-- CreateTable
CREATE TABLE [dbo].[VehFonc] (
    [codeVF] BIGINT NOT NULL,
    [codeF] BIGINT,
    [codeV] VARCHAR(20),
    [DateD] DATETIME,
    [DateF] DATETIME,
    CONSTRAINT [PK_VehFonc] PRIMARY KEY ([codeVF])
);

-- CreateTable
CREATE TABLE [dbo].[Vehi_Extin] (
    [ImmatriculationVeh] VARCHAR(20) NOT NULL,
    [RefExtinct] VARCHAR(50) NOT NULL,
    [NSerieExtinct] VARCHAR(50) NOT NULL,
    [DateExtMontage] SMALLDATETIME NOT NULL,
    [DateExtDemontage] SMALLDATETIME,
    [IndexExtMontage] BIGINT,
    [IndexExtDemontage] BIGINT,
    [NumOrdreMontage] BIGINT,
    [NumOrdreDemontage] BIGINT,
    [CodeFilialMontage] BIGINT,
    [CodeFilialDemontage] BIGINT,
    CONSTRAINT [PK_Vehi_Extin] PRIMARY KEY ([ImmatriculationVeh],[RefExtinct],[NSerieExtinct],[DateExtMontage])
);

-- CreateTable
CREATE TABLE [dbo].[Vehicule] (
    [ImmatriculationVeh] VARCHAR(20) NOT NULL,
    [CodeTyVeh] BIGINT,
    [CodeMarVeh] BIGINT,
    [Etat] BIT,
    [CodeCl] BIGINT,
    [IndexeVeh] BIGINT,
    [CumuleKms] BIGINT CONSTRAINT [DF_Vehicule_CumuleKms] DEFAULT 0,
    [NbrPneux] BIGINT,
    [Gaz] BIT,
    [Climatiseur] BIT,
    [MotoPompe] BIT,
    [NChassis] VARCHAR(50),
    [Ptra] VARCHAR(20),
    [CodeTyMot] BIGINT,
    [CodeTyEmbr] BIGINT,
    [CodeTyBteVit] BIGINT,
    [CodeTyBtDir] BIGINT,
    [CodeTyAvTr] BIGINT,
    [CodeTyPontArri] BIGINT,
    [CodeTySusAv] BIGINT,
    [CodeTySusArr] BIGINT,
    [PoidsVide] REAL,
    [MoyenneConsommation] REAL,
    [CodeTypeRemorque] BIGINT,
    [Chargeutile] VARCHAR(50),
    [DateMiseEnService] SMALLDATETIME,
    [DateAchat] SMALLDATETIME,
    [CodeParc] BIGINT,
    [DesigTyPneu] VARCHAR(50),
    [CodeOeilMot] BIGINT,
    [QteHuileMot] REAL,
    [CodeOeilBteVit] BIGINT,
    [QteHuileBv] REAL,
    [CodeOeilEmbr] BIGINT,
    [QteHEmb] REAL,
    [CodeOeilDirec] BIGINT,
    [QteHDirect] REAL,
    [CodeOeilRefr] BIGINT,
    [QteHRefroid] REAL,
    [CodeOeilFrein] BIGINT,
    [QteHFrein] REAL,
    [CodeOeilGasoil] BIGINT,
    [QteHReservCarb] REAL,
    [CodeHEssuiGlass] BIGINT,
    [QteHuilEssuiG] REAL,
    [CodeHPontA] BIGINT,
    [QteHPArt] REAL,
    [CodeHReductRou] BIGINT,
    [QteHReR] REAL,
    [CodeHPriseMvt] BIGINT,
    [QteHPMvt] REAL,
    [CodeHuileGa] BIGINT,
    [QteHGasoil] REAL,
    [Remarques] VARCHAR(500),
    [Observations] VARCHAR(500),
    [IndexT] BIGINT CONSTRAINT [DF_Vehicule_IndexT] DEFAULT 0,
    [IndexTAvModif] BIGINT,
    [ParcourDepart] BIGINT CONSTRAINT [DF_Vehicule_ParcourDepart] DEFAULT 0,
    [FrmSource] VARCHAR(100),
    [CodeTyCarbu] BIGINT,
    [NumCarte] VARCHAR(50),
    [NbPlace] INT,
    [CodeOperationBon] INT,
    [NbreLittreBonGasoil] BIGINT,
    [NbreBonGasoil] BIGINT,
    [DateBonGas] DATETIME,
    [DateProchBon] DATETIME,
    [RTMT] BIT,
    [ABS] BIT,
    [EBS] BIT,
    [AntiBrouillard] BIT,
    [AffectationClient] BIGINT,
    [TRMT] BIT,
    [SousClient] BIGINT,
    [ReferenceTachygraphe] VARCHAR(50),
    [NSerieTachygraphe] VARCHAR(50),
    [PuissanceFiscal] BIGINT,
    [ValeurAcquisition] REAL,
    [ValeurVCN] REAL,
    [CodeSituation] BIGINT,
    [EtatImmo] BIT,
    [CodeVehiculeCarburant] VARCHAR(50),
    [SousTraitance] BIT,
    [SousTraitant] BIGINT,
    [SuiviKmHeure] BIT,
    [Abreviation] NVARCHAR(50),
    [PTC] VARCHAR(50),
    [PTAC] VARCHAR(50),
    [NumeroPolice] VARCHAR(50),
    [MatParcEtablissement] VARCHAR(50),
    [NCarteGris] VARCHAR(50),
    [Assurance] BIT,
    [NbrPlace] BIGINT,
    CONSTRAINT [PK_Vehicule] PRIMARY KEY ([ImmatriculationVeh])
);

-- CreateTable
CREATE TABLE [dbo].[Vehicule_Chauffeur] (
    [ImmatriculationVeh] VARCHAR(20) NOT NULL,
    [MatriculeC] VARCHAR(20) NOT NULL,
    [DateDebutConduit] DATETIME NOT NULL,
    [CodeL] BIGINT,
    [DateFinConduit] DATETIME,
    [IndexVehChaufDebut] BIGINT,
    [IndexVehChaufFin] BIGINT,
    [Source] VARCHAR(50),
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_Vehicule_Chauffeur_1] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[Vehicule_Lieu] (
    [CodeLieu] BIGINT NOT NULL,
    [NT] VARCHAR(50) NOT NULL,
    [NP] VARCHAR(50),
    [PE] VARCHAR(50),
    [DateDebut] SMALLDATETIME NOT NULL,
    [DateFin] SMALLDATETIME,
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    [TypeAffectation] BIGINT,
    [NTelegram] VARCHAR(50),
    [NRapport] VARCHAR(50),
    [Utilisateur] VARCHAR(50),
    [UtilisateurDesaff] VARCHAR(50),
    CONSTRAINT [PK_Vehicule_Lieu] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[Vehicule_Remorque] (
    [ImmatriculationVeh] VARCHAR(20) NOT NULL,
    [MatriculeRem] VARCHAR(20) NOT NULL,
    [DateDebutRemVeh] DATETIME NOT NULL,
    [DateFinRemVeh] DATETIME,
    [IndexVehRemDeb] BIGINT,
    [IndexVehRemFin] BIGINT,
    [IndexAffect] BIGINT,
    [IndexDesaff] BIGINT,
    [Code] BIGINT NOT NULL IDENTITY(1,1),
    CONSTRAINT [PK_Vehicule_Remorque] PRIMARY KEY ([Code])
);

-- CreateTable
CREATE TABLE [dbo].[VehRem] (
    [CodeVehRem] BIGINT NOT NULL IDENTITY(1,1),
    [DesigVehRem] VARCHAR(50),
    CONSTRAINT [PK_Organe] PRIMARY KEY ([CodeVehRem])
);

-- CreateTable
CREATE TABLE [dbo].[VehServ] (
    [codeSV] BIGINT NOT NULL,
    [CodeS] BIGINT,
    [CodeV] VARCHAR(20),
    [DateD] DATETIME,
    [DateF] DATETIME,
    CONSTRAINT [PK_VehServ] PRIMARY KEY ([codeSV])
);

-- CreateTable
CREATE TABLE [dbo].[VisitePréventifRemorque] (
    [CodeVisite] BIGINT NOT NULL IDENTITY(1,1),
    [DesigVisite] VARCHAR(50) NOT NULL,
    [CodeTypeRemorque] BIGINT NOT NULL,
    [Index_PrevV] BIGINT,
    [EcheanceV] BIGINT,
    [index_messageV] BIGINT,
    [echeance_messageV] BIGINT,
    CONSTRAINT [PK_VisitePréventifRemorque] PRIMARY KEY ([CodeVisite])
);

-- CreateTable
CREATE TABLE [dbo].[VisitesPreventifs] (
    [CodeVisite] BIGINT NOT NULL IDENTITY(1,1),
    [DesigVisite] VARCHAR(50) NOT NULL,
    [CodeTyVehV] BIGINT,
    [Index_PrevV] BIGINT,
    [EcheanceV] BIGINT,
    [index_messageV] BIGINT,
    [echeance_messageV] BIGINT,
    CONSTRAINT [PK_VisitesPreventifs] PRIMARY KEY ([CodeVisite])
);

-- CreateTable
CREATE TABLE [dbo].[VisiteTechnique_ListeVehicule] (
    [Vehicule] VARCHAR(50) NOT NULL,
    [NContrat] INT NOT NULL,
    CONSTRAINT [PK_VisiteTechnique_ListeVehicule] PRIMARY KEY ([Vehicule],[NContrat])
);

-- CreateTable
CREATE TABLE [dbo].[VisiteTechnique_Vehicule] (
    [NContrat] INT NOT NULL,
    [DateEffetDebut] SMALLDATETIME,
    [DateEffetFin] SMALLDATETIME,
    [Référence] BIGINT,
    [Alerte] BIGINT,
    [Glossaire] VARCHAR(8000),
    [Fractionnement] VARCHAR(50),
    [Etat] BIT,
    [Prolongation] BIGINT,
    [Montant] DECIMAL(18,3),
    [Filiale] BIGINT,
    [Departement] BIGINT,
    CONSTRAINT [PK_VisiteTechnique_Vehiculewwww] PRIMARY KEY ([NContrat])
);

-- CreateTable
CREATE TABLE [dbo].[VisiteVehiculeRemorque] (
    [CodeVisite] BIGINT NOT NULL,
    [MatriculeVehRem] VARCHAR(20) NOT NULL,
    [DateVist] SMALLDATETIME NOT NULL,
    [IndexVehRem] BIGINT,
    CONSTRAINT [PK_VisiteVehiculeRemorque] PRIMARY KEY ([CodeVisite],[MatriculeVehRem],[DateVist])
);

-- CreateTable
CREATE TABLE [dbo].[sysdiagrams] (
    [name] NVARCHAR(128) NOT NULL,
    [principal_id] INT NOT NULL,
    [diagram_id] INT NOT NULL IDENTITY(1,1),
    [version] INT,
    [definition] VARBINARY(max),
    CONSTRAINT [PK__sysdiagr__C2B05B6128D452E7] PRIMARY KEY ([diagram_id]),
    CONSTRAINT [UK_principal_name] UNIQUE ([principal_id],[name])
);

-- CreateTable
CREATE TABLE [dbo].[Amende] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [Chauffeur] VARCHAR(50) NOT NULL,
    [Vehicule] VARCHAR(50) NOT NULL,
    [Cause] VARCHAR(50) NOT NULL,
    [Date] DATETIME NOT NULL,
    [Montant] INT NOT NULL,
    [Etat] BIT NOT NULL,
    CONSTRAINT [PK__Amende__3214EC27EA76783E] PRIMARY KEY ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[CK_Type] (
    [CodeCK_Type] INT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK__CK_Type__205F8179FC4905AE] PRIMARY KEY ([CodeCK_Type])
);

-- CreateTable
CREATE TABLE [dbo].[CK_SousType] (
    [CodeCK_SousType] INT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK__CK_SousT__2D9DFE248F7338D5] PRIMARY KEY ([CodeCK_SousType])
);

-- CreateTable
CREATE TABLE [dbo].[CK_Contenu] (
    [CodeCK_Contenu] INT NOT NULL IDENTITY(1,1),
    [Designation] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK__CK_Conte__303DBF7B357D7783] PRIMARY KEY ([CodeCK_Contenu])
);

-- CreateTable
CREATE TABLE [dbo].[CK_Checklist] (
    [CodeCK] INT NOT NULL,
    [CodeCK_Type] INT NOT NULL,
    [CodeCK_SousType] INT NOT NULL,
    [CodeCK_Contenu] INT NOT NULL,
    [DesignationCK] VARCHAR(50),
    CONSTRAINT [PK_CK_Checklist] PRIMARY KEY ([CodeCK],[CodeCK_Contenu])
);

-- CreateTable
CREATE TABLE [dbo].[CK_Entete] (
    [CodeDoc] INT NOT NULL IDENTITY(1,1),
    [Filiale] INT NOT NULL,
    [Vehicule] VARCHAR(50) NOT NULL,
    [Chauffeur] VARCHAR(50) NOT NULL,
    [Remorque] VARCHAR(50) NOT NULL,
    [Date] DATE NOT NULL CONSTRAINT [CK_Entete_Date_df] DEFAULT CURRENT_TIMESTAMP,
    [Heure] TIME NOT NULL,
    CONSTRAINT [CK_Entete_pkey] PRIMARY KEY ([CodeDoc])
);

-- CreateTable
CREATE TABLE [dbo].[CK_Ligne] (
    [CodeDoc] INT NOT NULL IDENTITY(1,1),
    [Filiale] INT NOT NULL,
    [Oui] BIT NOT NULL,
    [Non] BIT NOT NULL,
    [Observations] VARCHAR(200) NOT NULL,
    CONSTRAINT [CK_Ligne_pkey] PRIMARY KEY ([CodeDoc])
);

-- CreateIndex
CREATE INDEX [index_CodeTyVeh] ON [dbo].[Alerte]([CodeTyVeh]);

-- CreateIndex
CREATE INDEX [index_RefArtic] ON [dbo].[Alerte]([RefArtic]);

-- CreateIndex
CREATE INDEX [index_CodeTypeRemorque] ON [dbo].[AlerteRemorque]([CodeTypeRemorque]);

-- CreateIndex
CREATE INDEX [index_RefArticle] ON [dbo].[AlerteRemorque]([RefArtic]);

-- CreateIndex
CREATE INDEX [index_CodeCatArt] ON [dbo].[Article]([CodeCatArt]);

-- CreateIndex
CREATE INDEX [index_CodePays] ON [dbo].[Article]([CodePays]);

-- CreateIndex
CREATE INDEX [index_CodeOrgane] ON [dbo].[LigneOrdreReparation]([CodeOrgane]);

-- CreateIndex
CREATE INDEX [index_codeCategRep] ON [dbo].[LigneOrdreReparation]([codeCategRep]);

-- CreateIndex
CREATE INDEX [IX_OeilEmbrayage_1] ON [dbo].[OeilEmbrayage]([CodeOeilEmbr]);

-- CreateIndex
CREATE INDEX [index_CodeCl] ON [dbo].[OrdreAchatGasoil]([CodeCl]);

-- CreateIndex
CREATE INDEX [index_CodeFr] ON [dbo].[OrdreAchatGasoil]([CodeFr]);

-- CreateIndex
CREATE INDEX [index_Code_Pompe] ON [dbo].[OrdreGazoil]([Code_Pompe]);

-- CreateIndex
CREATE INDEX [index_MatriculePo] ON [dbo].[OrdreGazoil]([MatriculePo]);

-- CreateIndex
CREATE INDEX [index_CodeCl] ON [dbo].[OrdreReparation]([CodeCl]);

-- CreateIndex
CREATE INDEX [index_ImmatriculationVeh] ON [dbo].[OrdreReparation]([ImmatriculationVeh]);

-- CreateIndex
CREATE INDEX [index_MatriculeC] ON [dbo].[OrdreReparation]([MatriculeC]);

-- CreateIndex
CREATE INDEX [index_MatriculeRem] ON [dbo].[OrdreReparation]([MatriculeRem]);

-- CreateIndex
CREATE INDEX [index_SerialiserArticle] ON [dbo].[SerialiserArticle]([RefAch], [CodeFilial], [RefArtic], [PrixUnit]);

-- CreateIndex
CREATE INDEX [index_CodeCl] ON [dbo].[StockArticle]([CodeCl]);

-- CreateIndex
CREATE INDEX [index_CodeFilial] ON [dbo].[StockArticle]([CodeFilial]);

-- CreateIndex
CREATE INDEX [index_RefArtic] ON [dbo].[StockArticle]([RefArtic]);

-- CreateIndex
CREATE INDEX [index_CodeOrgane] ON [dbo].[Traveaux]([CodeOrgane]);

-- CreateIndex
CREATE INDEX [index_CodeVehRem] ON [dbo].[Traveaux]([CodeVehRem]);

-- CreateIndex
CREATE INDEX [index_MatriculeM] ON [dbo].[Traveaux]([MatriculeM]);

-- CreateIndex
CREATE INDEX [index_CodeDroit] ON [dbo].[Utilisateurs]([CodeDroit]);

-- CreateIndex
CREATE INDEX [index_CodeTypeRemorque] ON [dbo].[VisitePréventifRemorque]([CodeTypeRemorque]);

-- AddForeignKey
ALTER TABLE [dbo].[Alerte] ADD CONSTRAINT [FK_Alerte_Article] FOREIGN KEY ([RefArtic]) REFERENCES [dbo].[Article]([RefArtic]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Alerte] ADD CONSTRAINT [FK_Alerte_TypeVehicule] FOREIGN KEY ([CodeTyVeh]) REFERENCES [dbo].[TypeVehicule]([CodeTyVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Article] ADD CONSTRAINT [FK_Article_CategorieArticle] FOREIGN KEY ([CodeCatArt]) REFERENCES [dbo].[CategorieArticle]([CodeCatArt]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ArticleTypeVehicule] ADD CONSTRAINT [FK_ArticleTypeVehicule_Article] FOREIGN KEY ([RefArtic]) REFERENCES [dbo].[Article]([RefArtic]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ArticleTypeVehicule] ADD CONSTRAINT [FK_ArticleTypeVehicule_TypeVehicule] FOREIGN KEY ([CodeTyVeh]) REFERENCES [dbo].[TypeVehicule]([CodeTyVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Chauffeur_CategPermis] ADD CONSTRAINT [FK_Chauffeur_CategPermis_CategoriesPermis] FOREIGN KEY ([CodeCategorie]) REFERENCES [dbo].[CategoriesPermis]([CodeCategorie]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Chauffeur_CategPermis] ADD CONSTRAINT [FK_Chauffeur_CategPermis_Chauffeur] FOREIGN KEY ([MatriculeC]) REFERENCES [dbo].[Chauffeur]([MatriculeC]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Convoyeur_CategPermis] ADD CONSTRAINT [FK_Convoyeur_CategPermis_CategoriesPermis] FOREIGN KEY ([CodeCategorie]) REFERENCES [dbo].[CategoriesPermis]([CodeCategorie]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Convoyeur_CategPermis] ADD CONSTRAINT [FK_Convoyeur_CategPermis_Convoyeur] FOREIGN KEY ([MatriculeC]) REFERENCES [dbo].[Convoyeur]([MatriculeC]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CoutMission] ADD CONSTRAINT [FK_CoutMission_Mission] FOREIGN KEY ([codeMission]) REFERENCES [dbo].[Mission]([CodeMiss]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[cVilles] ADD CONSTRAINT [FK__cVilles__CodeReg__09FF42B4] FOREIGN KEY ([CodeReg]) REFERENCES [dbo].[cRegion]([CodeReg]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DetailRemplacement] ADD CONSTRAINT [FK_DetailRemplacement_RemplacerArticle] FOREIGN KEY ([Code]) REFERENCES [dbo].[RemplacerArticle]([Code]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Direction] ADD CONSTRAINT [FK_Direction_Gouvernorat] FOREIGN KEY ([codeGouv]) REFERENCES [dbo].[Gouvernorat]([CodeGouv]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Extincteurs] ADD CONSTRAINT [FK_Extincteurs_Article] FOREIGN KEY ([RefExtinct]) REFERENCES [dbo].[Article]([RefArtic]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[F_COLLABORATEUR] ADD CONSTRAINT [FKA_F_COLLABORATEUR_PROT_No] FOREIGN KEY ([cbPROT_No]) REFERENCES [dbo].[F_PROTECTIONCPTA]([PROT_No]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[F_COMPTEG] ADD CONSTRAINT [FKA_F_COMPTEG_CR_Num] FOREIGN KEY ([CR_Num]) REFERENCES [dbo].[F_COMPTER]([CR_Num]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[F_COMPTEG] ADD CONSTRAINT [FKA_F_COMPTEG_TA_Code] FOREIGN KEY ([TA_Code]) REFERENCES [dbo].[F_TAXE]([TA_Code]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[F_DEPOT] ADD CONSTRAINT [FKA_F_DEPOT_DP_NoDefaut] FOREIGN KEY ([cbDP_NoDefaut]) REFERENCES [dbo].[F_DEPOTEMPL]([DP_No]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[F_DEPOTEMPL] ADD CONSTRAINT [FKA_F_DEPOTEMPL_DE_No] FOREIGN KEY ([DE_No]) REFERENCES [dbo].[F_DEPOT]([DE_No]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[F_PROTECTIONCPTA] ADD CONSTRAINT [FKA_F_PROTECTIONCPTA_PROT_UserProfil] FOREIGN KEY ([cbPROT_UserProfil]) REFERENCES [dbo].[F_PROTECTIONCPTA]([PROT_No]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[F_TAXE] ADD CONSTRAINT [FKA_F_TAXE_CG_Num] FOREIGN KEY ([CG_Num]) REFERENCES [dbo].[F_COMPTEG]([CG_Num]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FA_ArticleFacturation] ADD CONSTRAINT [FK__FA_Articl__CodeF__1A35AA7D] FOREIGN KEY ([CodeF]) REFERENCES [dbo].[FA_FamilleArticle]([CodeF]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FA_ArticleFacturation] ADD CONSTRAINT [FK__FA_Articl__CodeU__1D121728] FOREIGN KEY ([CodeU]) REFERENCES [dbo].[FA_Unite]([CodeU]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FA_ArticleTaxe] ADD CONSTRAINT [FK__FA_Articl__CodeS__6498B3DB] FOREIGN KEY ([CodeS]) REFERENCES [dbo].[FA_SectionAnalytique]([CodeS]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FA_ArticleTaxe] ADD CONSTRAINT [FK__FA_Articl__CodeT__658CD814] FOREIGN KEY ([CodeTaxe1]) REFERENCES [dbo].[FA_Taxe]([CodeT]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FA_ArticleTaxe] ADD CONSTRAINT [FK__FA_Articl__CodeT__6680FC4D] FOREIGN KEY ([CodeTaxe2]) REFERENCES [dbo].[FA_Taxe]([CodeT]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FA_ArticleTaxe] ADD CONSTRAINT [FK__FA_Articl__CodeT__67752086] FOREIGN KEY ([CodeTaxe3]) REFERENCES [dbo].[FA_Taxe]([CodeT]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FA_FamilleTaxe] ADD CONSTRAINT [FK__FA_Famill__CodeS__2A6C1246] FOREIGN KEY ([CodeS]) REFERENCES [dbo].[FA_SectionAnalytique]([CodeS]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FA_FamilleTaxe] ADD CONSTRAINT [FK__FA_Famill__CodeT__2B60367F] FOREIGN KEY ([CodeTaxe1]) REFERENCES [dbo].[FA_Taxe]([CodeT]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FA_FamilleTaxe] ADD CONSTRAINT [FK__FA_Famill__CodeT__2C545AB8] FOREIGN KEY ([CodeTaxe2]) REFERENCES [dbo].[FA_Taxe]([CodeT]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FA_FamilleTaxe] ADD CONSTRAINT [FK__FA_Famill__CodeT__2D487EF1] FOREIGN KEY ([CodeTaxe3]) REFERENCES [dbo].[FA_Taxe]([CodeT]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Flexibles] ADD CONSTRAINT [FK_Flexibles_Article] FOREIGN KEY ([RefFlexcib]) REFERENCES [dbo].[Article]([RefArtic]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[HistoriqueAnomalieGazoil] ADD CONSTRAINT [FK_HistoriqueAnomalieGazoil_Chauffeur] FOREIGN KEY ([MatriculeC]) REFERENCES [dbo].[Chauffeur]([MatriculeC]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[HistoriqueAnomalieGazoil] ADD CONSTRAINT [FK_HistoriqueAnomalieGazoil_OrdreGazoil] FOREIGN KEY ([NumOrdre], [CodeFilial]) REFERENCES [dbo].[OrdreGazoil]([NumOrdre],[CodeFilial]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[HistoriqueAnomalieGazoil] ADD CONSTRAINT [FK_HistoriqueAnomalieGazoil_Vehicule] FOREIGN KEY ([ImmatriculationVeh]) REFERENCES [dbo].[Vehicule]([ImmatriculationVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[HistoriqueIndexPompe] ADD CONSTRAINT [FK_HistoriqueIndexPompe_Pompes] FOREIGN KEY ([Code_Pompe]) REFERENCES [dbo].[Pompes]([Code_Pompe]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Jde] ADD CONSTRAINT [FK_Jde_Client1] FOREIGN KEY ([codeclient]) REFERENCES [dbo].[Client]([CodeCl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Jde] ADD CONSTRAINT [FK_Jde_Vehicule1] FOREIGN KEY ([ImmatriculationVeh]) REFERENCES [dbo].[Vehicule]([ImmatriculationVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[LigneOrdreReparation] ADD CONSTRAINT [FK_LigneOrdreReparation_Article] FOREIGN KEY ([RefArtic]) REFERENCES [dbo].[Article]([RefArtic]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[LigneOrdreReparation] ADD CONSTRAINT [FK_LigneOrdreReparation_Filiale] FOREIGN KEY ([CodeFilial]) REFERENCES [dbo].[Filiale]([CodeFilial]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[LigneOrdreReparation] ADD CONSTRAINT [FK_LigneOrdreReparation_OrdreReparation] FOREIGN KEY ([NumOrdreRepar], [CodeFilial]) REFERENCES [dbo].[OrdreReparation]([NumOrdreRepar],[CodeFilial]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[LigneOrdreReparation] ADD CONSTRAINT [FK_LigneOrdreReparation_VehRem] FOREIGN KEY ([CodeVehRem]) REFERENCES [dbo].[VehRem]([CodeVehRem]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[LigneOrdreSortie] ADD CONSTRAINT [FK_LigneOrdreSortie_Article] FOREIGN KEY ([RefArtic]) REFERENCES [dbo].[Article]([RefArtic]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[LigneOrdreSortie] ADD CONSTRAINT [FK_LigneOrdreSortie_Filiale] FOREIGN KEY ([CodeFilial]) REFERENCES [dbo].[Filiale]([CodeFilial]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[LigneOrdreSortie] ADD CONSTRAINT [FK_LigneOrdreSortie_OrdreSortie] FOREIGN KEY ([Ref_E], [CodeFilial]) REFERENCES [dbo].[OrdreSortie]([Ref_E],[CodeFilial]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Location] ADD CONSTRAINT [FK_Location_Filiale] FOREIGN KEY ([CodeFilial]) REFERENCES [dbo].[Filiale]([CodeFilial]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[LocationArticle] ADD CONSTRAINT [FK_LocationArticle_Article] FOREIGN KEY ([RefArtic]) REFERENCES [dbo].[Article]([RefArtic]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[LocationArticle] ADD CONSTRAINT [FK_LocationArticle_Location] FOREIGN KEY ([CodeLoc]) REFERENCES [dbo].[Location]([CodeLoc]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Mission] ADD CONSTRAINT [FK_Mission_Client] FOREIGN KEY ([T_CodeCl]) REFERENCES [dbo].[Client]([CodeCl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Mission_Personnels] ADD CONSTRAINT [FK_Mission_Personnels_Mission] FOREIGN KEY ([CodeMiss]) REFERENCES [dbo].[Mission]([CodeMiss]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreAchatGasoil] ADD CONSTRAINT [FK_OrdreAchatGasoil_Client] FOREIGN KEY ([CodeCl]) REFERENCES [dbo].[Client]([CodeCl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreAchatGasoil] ADD CONSTRAINT [FK_OrdreAchatGasoil_Filiale] FOREIGN KEY ([CodeFilial]) REFERENCES [dbo].[Filiale]([CodeFilial]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreAchatGasoil] ADD CONSTRAINT [FK_OrdreAchatGasoil_Fournisseur] FOREIGN KEY ([CodeFr]) REFERENCES [dbo].[Fournisseur]([CodeFr]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreEntrer] ADD CONSTRAINT [FK_OrdreEntrer_Client] FOREIGN KEY ([CodeCl]) REFERENCES [dbo].[Client]([CodeCl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreEntrer] ADD CONSTRAINT [FK_OrdreEntrer_Filiale] FOREIGN KEY ([CodeFilial]) REFERENCES [dbo].[Filiale]([CodeFilial]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreGazoil] ADD CONSTRAINT [FK_OrdreGazoil_Filiale] FOREIGN KEY ([CodeFilial]) REFERENCES [dbo].[Filiale]([CodeFilial]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreGazoil] ADD CONSTRAINT [FK_OrdreGazoil_Pompes] FOREIGN KEY ([Code_Pompe]) REFERENCES [dbo].[Pompes]([Code_Pompe]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreGazoil] ADD CONSTRAINT [FK_OrdreGasoil_Pompiste] FOREIGN KEY ([MatriculePo]) REFERENCES [dbo].[Pompiste]([MatriculePo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreReparation] ADD CONSTRAINT [FK_OrdreReparation_Chauffeur] FOREIGN KEY ([MatriculeC]) REFERENCES [dbo].[Chauffeur]([MatriculeC]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreReparation] ADD CONSTRAINT [FK_OrdreReparation_Client] FOREIGN KEY ([CodeCl]) REFERENCES [dbo].[Client]([CodeCl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreReparation] ADD CONSTRAINT [FK_OrdreReparation_Filiale] FOREIGN KEY ([CodeFilial]) REFERENCES [dbo].[Filiale]([CodeFilial]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreReparation] ADD CONSTRAINT [FK_OrdreReparation_Remorque] FOREIGN KEY ([MatriculeRem]) REFERENCES [dbo].[Remorque]([MatriculeRem]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreReparation] ADD CONSTRAINT [FK_OrdreReparation_Vehicule] FOREIGN KEY ([ImmatriculationVeh]) REFERENCES [dbo].[Vehicule]([ImmatriculationVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreSortie] ADD CONSTRAINT [FK_OrdreSortie_Client] FOREIGN KEY ([CodeCl]) REFERENCES [dbo].[Client]([CodeCl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreSortie] ADD CONSTRAINT [FK_OrdreSortie_Filiale] FOREIGN KEY ([CodeFilial]) REFERENCES [dbo].[Filiale]([CodeFilial]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrdreTransfertCarburant] ADD CONSTRAINT [FK_OrdreTransfertCarburant_OrdreTransfertCarburant] FOREIGN KEY ([RefTransf], [CodeFilialS]) REFERENCES [dbo].[OrdreTransfertCarburant]([RefTransf],[CodeFilialS]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Param_Pneu] ADD CONSTRAINT [FK_EpaisseurPneu_Article] FOREIGN KEY ([RefArtPneu]) REFERENCES [dbo].[Article]([RefArtic]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Pompiste] ADD CONSTRAINT [FK_Pompiste_Pays] FOREIGN KEY ([CodePays]) REFERENCES [dbo].[Pays]([CodePays]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Pompiste_CategPermis] ADD CONSTRAINT [FK_Pompiste_CategPermis_CategoriesPermis] FOREIGN KEY ([CodeCategorie]) REFERENCES [dbo].[CategoriesPermis]([CodeCategorie]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Pompiste_CategPermis] ADD CONSTRAINT [FK_Pompiste_CategPermis_Pompiste] FOREIGN KEY ([MatriculePo]) REFERENCES [dbo].[Pompiste]([MatriculePo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Remorque] ADD CONSTRAINT [FK_Remorque_Park] FOREIGN KEY ([CodeParc]) REFERENCES [dbo].[Park]([CodeParc]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Remorque] ADD CONSTRAINT [FK_Remorque_TypeRemorque] FOREIGN KEY ([CodeTypeRemorque]) REFERENCES [dbo].[TypeRemorque]([CodeTypeRemorque]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Remorque_Extincteur] ADD CONSTRAINT [FK_Remorque_Extincteur_Remorque] FOREIGN KEY ([MatriculeRem]) REFERENCES [dbo].[Remorque]([MatriculeRem]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Remorque_Flexibles] ADD CONSTRAINT [FK_Remorque_Flexibles_Remorque] FOREIGN KEY ([MatriculeRem]) REFERENCES [dbo].[Remorque]([MatriculeRem]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[RemplacerArticle] ADD CONSTRAINT [FK_RemplacerArticle_Article] FOREIGN KEY ([RefArtic]) REFERENCES [dbo].[Article]([RefArtic]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Service] ADD CONSTRAINT [FK_Service_Direction] FOREIGN KEY ([CodeDirection]) REFERENCES [dbo].[Direction]([CodeDirec]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Tachygraphe] ADD CONSTRAINT [FK_Tachygraphe_Article] FOREIGN KEY ([RefTachygraphe]) REFERENCES [dbo].[Article]([RefArtic]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[TachygrapheVehiculRepar] ADD CONSTRAINT [FK_TachygrapheVehiculRepar_Vehicule] FOREIGN KEY ([ImmatriculationVeh]) REFERENCES [dbo].[Vehicule]([ImmatriculationVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Transfert] ADD CONSTRAINT [FK_Transfert_Client] FOREIGN KEY ([CodeClDest]) REFERENCES [dbo].[Client]([CodeCl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Transfert] ADD CONSTRAINT [FK_Transfert_Filiale1] FOREIGN KEY ([CodeFilialDest]) REFERENCES [dbo].[Filiale]([CodeFilial]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Transfert] ADD CONSTRAINT [FK_Transfert_Filiale] FOREIGN KEY ([CodeFilialS]) REFERENCES [dbo].[Filiale]([CodeFilial]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Utilisateurs] ADD CONSTRAINT [FK_Utilisateurs_GroupsUtilisateurs] FOREIGN KEY ([CodeDroit]) REFERENCES [dbo].[GroupsUtilisateurs]([CodeDroit]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[VehFonc] ADD CONSTRAINT [FK_VehFonc_Fonction] FOREIGN KEY ([codeF]) REFERENCES [dbo].[Fonction]([CodeFonc]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[VehFonc] ADD CONSTRAINT [FK_VehFonc_Vehicule] FOREIGN KEY ([codeV]) REFERENCES [dbo].[Vehicule]([ImmatriculationVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehi_Extin] ADD CONSTRAINT [FK_Vehi_Extin_Vehicule] FOREIGN KEY ([ImmatriculationVeh]) REFERENCES [dbo].[Vehicule]([ImmatriculationVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_Client] FOREIGN KEY ([CodeCl]) REFERENCES [dbo].[Client]([CodeCl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_HuileEssuiGlass] FOREIGN KEY ([CodeHEssuiGlass]) REFERENCES [dbo].[HuileEssuiGlass]([CodeHEssuiGlass]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_HuileGasoil] FOREIGN KEY ([CodeHuileGa]) REFERENCES [dbo].[HuileGasoil]([CodeHuileGa]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_HuilePontArr] FOREIGN KEY ([CodeHPontA]) REFERENCES [dbo].[HuilePontArr]([CodeHPontA]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_HuilePriseMvt] FOREIGN KEY ([CodeHPriseMvt]) REFERENCES [dbo].[HuilePriseMvt]([CodeHPriseMvt]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_HuileReductRou] FOREIGN KEY ([CodeHReductRou]) REFERENCES [dbo].[HuileReductRou]([CodeHReductRou]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_MarqueVehicule] FOREIGN KEY ([CodeMarVeh]) REFERENCES [dbo].[MarqueVehicule]([CodeMarVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_OeilBoiteVitesse] FOREIGN KEY ([CodeOeilBteVit]) REFERENCES [dbo].[OeilBoiteVitesse]([CodeOeilBteVit]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_OeilDirection] FOREIGN KEY ([CodeOeilDirec]) REFERENCES [dbo].[OeilDirection]([CodeOeilDirec]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_OeilEmbrayage] FOREIGN KEY ([CodeOeilEmbr]) REFERENCES [dbo].[OeilEmbrayage]([CodeOeilEmbr]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_OeilFrein] FOREIGN KEY ([CodeOeilFrein]) REFERENCES [dbo].[OeilFrein]([CodeOeilFrein]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_OeilMoteur] FOREIGN KEY ([CodeOeilMot]) REFERENCES [dbo].[OeilMoteur]([CodeOeilMot]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_OeilReferoidissement] FOREIGN KEY ([CodeOeilRefr]) REFERENCES [dbo].[OeilReferoidissement]([CodeOeilRefr]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_OeilReservoireCarburent] FOREIGN KEY ([CodeOeilGasoil]) REFERENCES [dbo].[OeilReservoireCarburent]([CodeOeilGasoil]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_Park] FOREIGN KEY ([CodeParc]) REFERENCES [dbo].[Park]([CodeParc]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_TypeAvantTrain] FOREIGN KEY ([CodeTyAvTr]) REFERENCES [dbo].[TypeAvantTrain]([CodeTyAvTr]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_TypeBoiteDirection] FOREIGN KEY ([CodeTyBtDir]) REFERENCES [dbo].[TypeBoiteDirection]([CodeTyBtDir]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_TypeBoiteVitesse] FOREIGN KEY ([CodeTyBteVit]) REFERENCES [dbo].[TypeBoiteVitesse]([CodeTyBteVit]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_TypeEmbrayage] FOREIGN KEY ([CodeTyEmbr]) REFERENCES [dbo].[TypeEmbrayage]([CodeTyEmbr]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_TypeMoteur] FOREIGN KEY ([CodeTyMot]) REFERENCES [dbo].[TypeMoteur]([CodeTyMot]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_TypePontArriere] FOREIGN KEY ([CodeTyPontArri]) REFERENCES [dbo].[TypePontArriere]([CodeTyPontArri]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_TypeRemorque] FOREIGN KEY ([CodeTypeRemorque]) REFERENCES [dbo].[TypeRemorque]([CodeTypeRemorque]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_TypeSuspontionArriere] FOREIGN KEY ([CodeTySusArr]) REFERENCES [dbo].[TypeSuspontionArriere]([CodeTySusArr]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_TypeSuspontionAvant] FOREIGN KEY ([CodeTySusAv]) REFERENCES [dbo].[TypeSuspontionAvant]([CodeTySusAv]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule] ADD CONSTRAINT [FK_Vehicule_TypeVehicule] FOREIGN KEY ([CodeTyVeh]) REFERENCES [dbo].[TypeVehicule]([CodeTyVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule_Remorque] ADD CONSTRAINT [FK_Vehicule_Remorque_Remorque1] FOREIGN KEY ([MatriculeRem]) REFERENCES [dbo].[Remorque]([MatriculeRem]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehicule_Remorque] ADD CONSTRAINT [FK_Vehicule_Remorque_Vehicule] FOREIGN KEY ([ImmatriculationVeh]) REFERENCES [dbo].[Vehicule]([ImmatriculationVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[VehServ] ADD CONSTRAINT [FK_VehServ_Service] FOREIGN KEY ([CodeS]) REFERENCES [dbo].[Service]([CodeService]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[VehServ] ADD CONSTRAINT [FK_VehServ_Vehicule] FOREIGN KEY ([CodeV]) REFERENCES [dbo].[Vehicule]([ImmatriculationVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[VisitesPreventifs] ADD CONSTRAINT [FK_VisitesPreventifs_TypeVehicule] FOREIGN KEY ([CodeTyVehV]) REFERENCES [dbo].[TypeVehicule]([CodeTyVeh]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CK_Checklist] ADD CONSTRAINT [FK__CK_Checkl__CodeC__0B335E0F] FOREIGN KEY ([CodeCK_Type]) REFERENCES [dbo].[CK_Type]([CodeCK_Type]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CK_Checklist] ADD CONSTRAINT [FK__CK_Checkl__CodeC__0C278248] FOREIGN KEY ([CodeCK_SousType]) REFERENCES [dbo].[CK_SousType]([CodeCK_SousType]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CK_Checklist] ADD CONSTRAINT [FK__CK_Conten__CodeC__0F03EEF3] FOREIGN KEY ([CodeCK_Contenu]) REFERENCES [dbo].[CK_Contenu]([CodeCK_Contenu]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
