const fs = require('node:fs');
const path = require('node:path');

console.log([
  "0x1003A4b1FF4D8D32658a93055AeA5fB4B07D8570",
  "0x7C31C23005355947AAA0Acc72aE87bAf0F9CeBb3",
].map(e => e.toLowerCase()));

// let list = [
//   "0x8D16e6AF9faa28277B4fef9F7225ab1642a7dC8E",
//   "0x6f9cFAccA63145c906fAE462433Aa1d1F147eec9",
//   "0x3340D258D99F91EA2249e1b975Ab5875614cD1a6",
//   "0xFd7F2a3ad259B5c00F2acb12B8D1ea01809350AE",
//   "0x3CeB33Aa7dD005f4b170115756dc8a079CBF20E2",
//   "0xf713727729C8dae3F2772517E5D1A8a5dee6E3E9",
//   "0xFEc4213278555d692679C918423816fa99Bb74A8",
//   "0xe6B67036b1a14FF7126717aA4fd0AfC6BEE4D797",
//   "0x9686ef5e52E51FA6c8bbfAcCb2Ff6b958C4625a9",
//   "0x096B405C3A81E68235d43fEc2B41c28cB7248f30",
//   "0xB731207807EAf1Fb7d0e67327868aC04f399A977",
//   "0x55e5564FbC6a3bE8C9A911Efb902292280868351",
//   "0x170Fa4320CEd15ceadb2567c1f8Fe254A974Bf19",
//   "0xc358cAA3817Ba7906F9C3bCc1bb34e793492D113",
//   "0x9bc08415Cb3132501a8C938b19ba9267111707eB",
//   "0x8Ec619C861CB6d99a6BB6988e3088190709B2eDD",
//   "0xA64A02bB9D3788f93C830F8C1f187afC5D6f9e2c",
//   "0x967011AaA4052d43f224fF8f46b5cd2eB3973842",
//   "0x319322dD20eCFCFf8743d977D1a5620b0D13c254",
//   "0x4313e4B72f31f09EC231DeAc970685280184FD47",
//   "0xe54DEBc68b0676d8F800Aff820Dfe63E5C854091",
//   "0x5062643314417A88AE40BBDC8b15f21c4Abb288b",
//   "0x644802C6128AA215bb4EdfFE46e9Db63C6794D5F",
//   "0xBE7a8280dca1FbeB70cad0f60e9E21a866c583ED",
//   "0x5D420769080C4122b5a29fD21Cb77e53b06a229d",
//   "0xdf09092bAe5C265e404e0a8Ce01eBF341481F531",
//   "0x2FA24D9eED14CF4edC79F8F14E809aF99239aC05",
//   "0x1013604e012A917E33104Bb0c63Cc98E1b8D2bdc",
//   "0xfDf46e603fb742FA9B459326D5B39A1C33cb65f0",
//   "0x5c2260103ba960d23603a7b824c80a24eae159b9",
//   "0xC6b86eB995c72B16B90075fC33cc63f30d4dA7Fb",
//   "0x183316b3362AFF869D0Db30c56C798189F9cD709",
//   "0xdA035D4E5DfA3deFA9cd5a57d5c2E41B1546a1d2",
//   "0x591bE8d5268f2F9D6b62a6604D58F325eb7c84BC",
//   "0x06074279257FDE7d5Ab41C9673d134295Ba1A28d",
//   "0xe8Af2757C5dB9B318702E98F2fE3fc1584899669",
//   "0x6C52D274Ac246FB29657756941ad1c158004Bf99",
//   "0x495624a0f21833B4B577D0d442b7207419A0f413",
//   "0x360e3f47a62de5876b3f25ac29e947a9fec17bca",
//   "0x8A7Bc8EF535760570c3A99fa79Ed1A8bCea26861",
//   "0x798AE58fe6f1B550476A032E7FA004892Fcd0631",
//   "0x3eE7a3fF58E5d22cbe1b5767DAcB16625712b5de",
//   "0xeA994fC370f3997CF577039371B70567c94d2DB5",
//   "0x646645154bc79853c113028530AAb0edbA45798b",
//   "0x319F84CbEDdE36fA323F8e5189f262C8Cf62B760",
//   "0x25752c333e544a13A2b4887b5F5488817c28f2c9",
//   "0x03aC3B14Ac989671e2CeaB10A9D24e71381ce562",
//   "0x82c854504F266dAd4a7eA9E448Ca7B1572AebF1C",
//   "0x0C3d63B1DD8f27190C637A132a7CA7c959d387d3",
//   "0xB3c7a5a2B28E719A615e6Ae2bdfB6d64422fa40a",
//   "0x2c3f4a55119809C1a778239Fd124630F5D9F530B",
//   "0x6A66Fafd732AdaDFc45A75a9cf13C9991BE087ca",
//   "0x63a605579F5Dcc2E20a162D56F0599e3F0696CF7",
//   "0xfA9CEF2385aFc33c6E8d6D9586A32D755114C12f",
//   "0xf43dA1e86a4D3fB6f0067Ca2809f957F27bD2C00",
//   "0x378f27D402B9983Ef50B5CeDEd0a8639C20Cf513",
//   "0xbCCa964f0cBBa0Cb31E690d2b2a8dd42A58C2a82",
//   "0x054e2873926f601Ab7bFa19c9cb1Cc708Ac7F8F6",
//   "0xC5824BAea99e353CDA75a41329Da0983f5aCdff5",
//   "0x87923410aDff931815EB2A67C0d65Aa709d000A9",
//   "0xD63b1828B35D1F4075Aa7F8a32D69c87795AA8D1",
//   "0xd0C7c30A8f963c8aC7F837Cb66B6A71602502b8A",
//   "0x98158DBD4dc0Fb8C2d0Aa47505E212db016A471F",
//   "0x537b2671238Dc3db1352668D0F4f4651da8ecc6D",
//   "0xF0bF1C59ee9b78A2Ce5763165e1B6B24Cb35fD8A",
//   "0x956Bd536f309D14F993C0B16b0a048a6ddA2EccB",
//   "0x5BF6Fd587A3401750b05fF1C605399D1a41FB11B",
//   "0x32EdB603ED21775F8d6063C77bCcc6e3604da2B7",
//   "0xd19bD1ab686C50930a9f5840bc42e06F882fe4c2",
//   "0x8B06A41982bDb46437cEBc18F2aE7e46347f4F94",
//   "0xcEAb6ad391F4Bf02baEa85DbF6487bb9BE3fB9C4",
//   "0xDC43089BF262394C3dA4291D45381253883E5510",
//   "0x0C0c4ea708CaB9f2974c8856cB4a6fEA81ce15f9",
//   "0x517f6Fbf0fDfc640Ba02Ab70De0dB4b83140d6dd",
//   "0x44cdbe227381588eBC72eE67E1e8111D88e1Ee64",
//   "0x947B545B2aBf42374bbA5b6f2Ca0249e987d6e0E",
//   "0xFD51e62220e3bF59F1aE246a85ee7e77bd4C5818",
//   "0x77d6f5c54BBe2192281F7F49F673E786B0Fb88FC",
//   "0x1C254044D79E6D68d0Db89f420e50D3148e377dD",
//   "0x4B65A165FA77d9469A5AB80e989b05ECecBEACb2",
//   "0x0c7E4f7608502bA0159E7c535a0967742c961E0A",
//   "0x704e55e01E2ce094da95DB4cf887e2Bd045AA71E",
//   "0xc15DC279Afcb94f209f9251E814532E5768de073",
//   "0x3bbD5Fd7B0a5A04ad7e2D0fD7F245beAF39c8F68",
//   "0xe72c52Ce4212FcfB2Ce5682F8910a03Bf02d8ff2",
//   "0xce276ce8c728a56F0109Ee2Ac6eC8e76dF311d4D",
//   "0x331164cCC0E0dAee2a92a347b51FcF48016fBD7C",
//   "0xEa9F8D4a2349EC791d50C280B7BCf28E837ce4F3",
//   "0x7C95a955b65bb68728c2c33c7B1881e5a06f2352",
//   "0x0Ada4Adf3597967F784dAFb51DFbcc9e64956505",
//   "0x9ae27A629c269Ef26611A6B8A16a6073a71E0a9c",
//   "0x5F0d3527a53C21Ee4e20cF9EC03D68E74Ae320F4",
//   "0x3DbdAC1c208a8D3a4227f094a1bC2301869E792b",
//   "0x3970bF23acfb2B7BDA0a159B95F44A88B1a259c4",
//   "0x5D5CbB4283A470C3240E00F8e4916A10C6753A6a",
//   "0xE5A69EF337094DC2C4A002EAcc148964BAecc67E",
//   "0x0E283788bFE56d88083Affb5F8cC3CF487D8050A",
//   "0xa3C4F6cFb3fdEBd68D5f0992e5C0393d9B223D11",
//   "0x3BF856111223340b1b0D84265c6836776630aB1a",
//   "0xea31107781fAd279457Af9B3B60020045DfCD39b",
//   "0x11279e1Cc48Dc8B88B80dEE95144D7af1E77F843",
//   "0xD48ad0e91F911b1a9f95DbD8b626F10B3683d312",
//   "0x4a25b5e4c44732b79aD668e7385Cb766B4B4E844",
//   "0x786563294e211d77ea6Ae6f2F768572ae9F31Ac6",
//   "0x880B448b1F804d05903ac2e57b5a0edB1c001f91",
//   "0xDAA2b3a066766F90F1e0a8A29768668d6dB07AF6",
//   "0x48B0ac246fD4B6E3f55BD65272C79ad14e2E0869",
//   "0x69d1BCb7F21B69bC7b4Ce64028F52b760aB9a767",
//   "0xcFa352Baa635269275F8f9cba315ADE6ae4CE270",
//   "0x9b0223084D36937E45b43CB99941C701be502142",
//   "0xA04B2C0bc90498f131EaE058Aa74053d1D93b25E",
//   "0xe727dC136d7fcD7C455cB5d03DD8C13F0953be79",
//   "0x4FDF3264926c08f0E4D905Eb258B60725593aF44",
//   "0x0be2cd6dEAEE51fA2a29183Fa82061C720fdd19a",
//   "0x7337eE232b707AF3771CA2bF67f07d5A13a8c7f9",
//   "0xb0CD0E661C9786F8eda518fc4aC5c529a8696172",
//   "0x3ecb3f674283d2B503A5eDa24401Ee01DEb3BcB3",
//   "0xcDf3B9D5F41ba95E8fA576937afEfb66d0fFc9B1",
//   "0x5e8d05266543Fb5442e6b9C5649E3B83a803dF04",
//   "0x4069d163D9FF94F4e7025F28Ac3f3C5df3F7A149",
//   "0x64e4453b898457707b27Ab16D80F5C3e02e71141",
//   "0xEa3b87F55974FaBF28CaA6fE90Ee1751d6E276a3",
//   "0xfC6b1aCA13455ed4Cdf01ce35FEbAaF5eF01e0E8",
//   "0x333c4b621F79bDfEd3a57FD9E9d69CC20678A31c",
//   "0xF1BdD1279d6E2787dCE77988096d53e39623Fa27",
//   "0x32F14803485175d0D5DE4BF7C1495A0734C9Aa65",
//   "0xEACe7D353e4d73B15cFF0B07c5D572aC57219CB1",
//   "0x3AE891d1f0bc354e19f5BcF2136998f6e82e8eBB",
//   "0xd1262AeC709E0a0BE6bA3e738E71338F2691b4F2",
//   "0x74826ae64Cd0AdDb07e0E653132d28B0Fe7524AD",
//   "0x76AE7078D5B9f62F674ad0eBf1413d4Df8E73B87",
//   "0x0B4a7b0A559d0F16E6818E834e8611CF7a07DEEA",
//   "0xf76b604f2E53Ba91348B5bB82FEA3Adfeb0d3340",
//   "0xC7A0984352ED27f8Dd67F76Fe7bFd11Da287B1Ca",
//   "0xE4bD6cE791B3d44DA6a08f17420067ec3Ee63B08",
//   "0xBa61A4766c7eAa73F10A12f0cB319F62828779B3",
//   "0x3d629AEe3cf67cf001194e8E8ae2dD6734e24A76",
//   "0x46391D1175EFDEbB38bd0CA61928274292Ec3896",
//   "0x9910D94d387Cf49eBB22f86Fd1Ee2f9C37Eb54C5",
//   "0x945ddC5135015685E49624F2D57Ea22d766883b1",
//   "0x0aB817AA31C324e7CE53EB826de250D7f031aC62",
//   "0x01117E94f863AcafB8F0Db5C05F5Cb58a20E16A8",
//   "0xEDBfb42D53e6c3A99f770b50288dA0E4702F6524",
//   "0x454461bFE78A00Cc8f3825DAdCDd8AE4a5215A2a",
//   "0x25D0783B35395C078d0789464F59f556faC51f64",
//   "0xf3dE14B366576015d531ED71d437c1FA599EC18c",
//   "0xC6df0C5DFDfcFe85C60137AEd076ba9af899A204",
//   "0xa272619D1dF656D2B9edCF04E3219fDd31151eDE",
//   "0x11C486e7BF25b8548D8F181420316F01FD43F4a2",
//   "0xc8BD4A148134d4CD1e4e2315Fd346f3F91DCbD6D",
//   "0x96aee193EDD5319CBDFdEb85D6f84aC929e5ec53",
//   "0xdE442b89c5b35714F784632cf2E57196bdE1a07f",
//   "0xF10e43A651365E4d4C400251d5De2dEf18F5a06A",
//   "0x4813340E8a1fB4e7F530F16a77b514aBf78CeD41",
//   "0xc455a3230C7B7eB141D9B6A775Ae355EA7ABFBf9",
//   "0x8dDCA55a69842d9Ea1AC039Dc623f747c8Ef6438",
//   "0xe716277105441fb56D5c65436515DF6fa7952FDf",
//   "0x490D8842cb1480a35Ab7BA048A2C2BAee1931961",
//   "0xE5cEa7D7346BefBe0e34142FE98c5C957091b429",
//   "0xa41C70ae23510C5c00d7a71BEf2d574fc0424b9E",
//   "0xce6E5b572C04b44149F38059328fB8323E2ACb29",
//   "0x525845c8E4Aa2888860bD1C61f99595078029d95",
//   "0xDB96946bBE9D433Dd4895226caC29e2E3f0D4eCC",
//   "0x7C308d69e334551C173a790764103bDe62Bd5F7c",
//   "0x329632c0a815844FdFFD5701d7A94dC94b23EB83",
//   "0x6feAA5ceeDadF6730b50825c7896316491838b3e",
//   "0x692fF83Cc08c264E49e387A0decE4051232Cd20f",
//   "0xAA6B335b960AB5AD924760E66940e485f83d192e",
//   "0x4F0B2175BE5630d46aAeC06c571B9Ae00001fA78",
//   "0x095ca8B2A9A5D2fC60984764D117E9F3aC39F860",
//   "0xfC82191711569d0fA92e8B664cF04f3f6d0971e0",
//   "0xC59dc5B9906728A19070BeD06F10E31da2313AC6",
//   "0x948aA8319cB9E8311Aa3E9DA27DCD0C265C27f5F",
//   "0x3528b176160927DEf06332C64eA1A99F2BE79E84",
//   "0x936341d115425E80b7cDF1cbB96229767BDC9D12",
//   "0xC9fD9E362aAaaF8C2cbDFeBff2763d44630aA0f2",
//   "0x75a243cb48a7b7a5ce1776d267745ece3de9c6dd",
//   "0xD8bC2c52f99b51189daFD8446B284c9bd38E12B6",
//   "0x20C61B217ABD8769911b914725d2202FbE9cD64A",
//   "0x0C246fB1431975B5d5b1c8a56CB811901B664E4A",
//   "0xeE5De9939059B530D3825F90A16Ad5a5ead4A741",
//   "0x1344CDee3Ba239c85C0E5B5CC72942187Cf954B4",
//   "0xD89d1C2Bca429c784A3B270e6902AC488802135f",
//   "0x667128d400FAb4a113A96529b72E69154Da13D8E",
//   "0xf61B3Be93336EEf79e948525A8B3cd491e249Dcd",
//   "0x4BB66194c2bD9eB64b9999C1365ee5761CD65E1c",
//   "0xa13212b6a0f1693e6b0f85a031b24529c2dba0cd",
//   "0x70e896e7D2FD56AB7C2561Cb10Ead3EC6eac32F9",
//   "0xc4b7Ed7Ff7ff18ed4CB3B8510685e5924681631d",
//   "0xF02Fb3DC89228A47c376Be96386ba298dD6B28dD",
//   "0xBDeD2929056380cbDAc076994D009c193e9152F9",
//   "0x034fF51fF7661210A8390bFdb8176c1250a08738",
//   "0x162b8bac2876B7eC663493581b0Ffd639CB297E2",
//   "0xF619E3b0256d2cA00F4c5535E53E3225FE29BD02",
//   "0x5540594E7aa44408F4eE0F05A5842dc27E89E761",
//   "0xCAa511cDE90B4eBafbFcD4aFF20B8C3B52d8B43C",
//   "0x31FD3Ccffc688befC3A77446c47e341F68963F8f",
//   "0x6F1c92E03a9b16eB2adB5C8634909c945237DEEb",
//   "0xdA973264810f06dEB912633a8C62029431273Af3",
//   "0x41C4332c16ba2b847614299e1b6686e93e0B228d",
//   "0xE65f103f77A0b6115D618b6D82730571075F7bAd",
//   "0xa9DFFBb231dF8Bf65aCF52fb0F333ee01149B2e0",
//   "0x67E86c6B1d99eb9654C06eAb3CE3Cf66E8755c54",
//   "0x4b562437C74DA1B5E698d30aDFb0826921aB3C82",
//   "0x103E16341EeDB071A9322e1979C4E0587114d7E9",
//   "0x4CEA64159C1F39B3caaF3c58d9983D10fC660A11",
//   "0xbCDC57e1518cEC517C721DC45C0CF1B828783331",
//   "0xf7D0cc90e43635e4c3656A98b76cEc7475407670",
//   "0xc44a25EB35b2D4F5fA30870BEC5f246e5601499C",
//   "0xA29698c3E7B1352B7aD917085b6e543e5d73c39c",
//   "0xb6435335d4323B6D0945485306d3AE23dad68e6B",
//   "0xc5798691CdC9e426009e71b36c49C39B708fc39f",
//   "0x542B9dde0fB4014323d6E4C63C2693c6931314bf",
//   "0xD23786aeA88560F30693D2e6e5Ab6e6aE1FEF8F6",
//   "0xa6e1F76c25163028141e0D55D7D363A83919D38F",
//   "0x15F03a85A5d6500DA5C363ed812Bc899f3F31BEA",
//   "0xD15495B41878D54DEc0e3801e01b9ceb8c8DddF3",
//   "0x4fB5Ae963c4fDa03D98Fc3ff8ff287FDF49dE548",
//   "0x79ab4c8ca2C25bf2071678915A813b64371aAD3A",
//   "0x4e258cC6180E73A69Bb0Ce18621c8901AEd3B792",
//   "0xfc6533B88aD48a608b21688101bEDBa594CF4d38",
//   "0x8CD4fc20cC3933126A2B8882Cd950af21e416235",
//   "0x16D475E61136D3A342318193C98e67Bd0f52e8db",
//   "0x387a4f838d5971399F38919c0D8fb3854C640bDF",
//   "0x2DeD7A9a7C6aa52540E556c9660D505da0b10203",
//   "0xcf9b5cb8AeC81d8aEab6CF4e62DE238E6a7f82d7",
//   "0x4439f1b2000C3baA207432387Ba635Ef6CA56aE0",
//   "0x5bBA33f03671B7AEEC91cbD05Eb31776Bc05337d",
//   "0x050050Fa351c3De8A342fbbcA883dD81624D8f19",
//   "0x25dB4fAF1A4f139982F84518D36AEd6aaA312796",
//   "0x5636966433544861CA813719a5721A3dd47eBA6f",
//   "0x082d57902773e786247b93A4027F7C5Fe0404a9b",
//   "0x8439895c10892E199F281bF95a1323a66Cd13A99",
//   "0xBA19C073C28f203d9FE23EEfeFA01A6d2562360F",
//   "0x5AF138EFC8Ae6BF1779688E0Aa09d1fA8bab6FeB",
//   "0xD2530247DcbE1b42923912eCf1bfE1BdA332bDBb",
//   "0x77c223f8FfCDa453919A7E56E8e143fa457215c8",
//   "0xe6cC3F3f57d597b4a21EC24bD3F608B28efd44ea",
//   "0xE50976DBa9AF1212b1029A7f3Cc5628a1dBb374E",
//   "0x344Ad6781370Af1d1A21A81b1016Ce278bB24EA9",
//   "0x7bF8139Bc5F009447D6d4a3B227899a195218913",
//   "0x11ca77a7ff3a14d992E70bf042f056485a40A4A6",
//   "0xe2F77048B21932F4F9eD0E3ee39EE81d47502446",
//   "0xd91E326c6D4085DfF0026f27B3eB4b58734D0E6E",
//   "0x9ca73054BADeE6B9270faC11e1d87B323b6189b1",
//   "0xFb9E9804390f14747DfA37eaF7251Fd2F76e19Df",
//   "0xE7481eB6ec8E2858C60FFB44a0c84b3961c84316",
//   "0x2DC40e8870D2be54723A60aA8Ba65a842dAff332",
//   "0x5AE70cFB1bBbD5F7eD9256b5863A995ad624A5cE",
//   "0x2c5a13503cBA82c341f5a7622015c8C60dA0a7d7",
//   "0xBf89198E4691dc878FBe470e3F534f8866495e77",
//   "0x51728EB00d21CD77d630e4F9ABd08f5b7131dc5a",
//   "0xcC0fe514a11bfA77f855Da3D6cFc3Cf91FbFabFa",
//   "0xCB89A4FC1c8BeE87ABcB9819C43B7A3ce4eB067D",
//   "0x293A32bF2280b59586A06CdEf3B7D36BF40d808E",
//   "0xf5745dB66fFEDe31449A5DAA30fAbB9E855fA97d",
//   "0x0F42ad8a93f4AD2AD3D7C030EADFf6CB87FF5365",
//   "0x54D373bC51576dD105d99786d0ea1467d9663403",
//   "0x150bCa43Bfd294078Ca0679cB4E201DCc55f5dAd",
//   "0x535FBC3Ff90CA4F070b809158337F012d78D4819",
//   "0xCc7AeEF4A272C4E9394F5A19d720A553B3451d0A",
//   "0xD556fCB17E867DC862C42694e9E816176Cb68C98",
//   "0xe384715d363942EFbf200b1038220d76bE6B2FC8",
//   "0x5BC052E505cDd5147A8ed2e07fa08e4Db02BE911",
//   "0x5918a20d1BEF2605582401C3718266b793346FdC",
//   "0x98e8C7Da764CfBCbcABc54171aCD0aF5F6E6bA26",
//   "0xc6db206b90A26F5922Dd3dc0042D8A6d2C59F18A",
//   "0x12911446b43940Ad0E60F1355105Da35DA97Feec",
//   "0xce0839D89B20Ca61C745fdbb246C6d0dF7d31B38",
//   "0x11f09A8800dC63254499cf74eDdD101C28Cb6783",
//   "0xfFe238b8C8bA38741F9468f7bE478163B0B573D4",
//   "0xb4fBb7A71c1746E07a4f44d7C18B8B3952c1E6F6",
//   "0xd5c8733AA23a921d8055c090a67aD0258C011bdF",
//   "0xd285Aa0191B3f82075eB01eED0bE0488fac29416",
//   "0xfaf14410065E3CE4FCD63DD0ACd9222643d89e27",
//   "0x9CCB0e8e4DF3B6789b37F8F32dc0DCaE1Eab6E97",
//   "0x37Db1629458c7ACd1ECC0b6702AC0C6636341F99",
//   "0x3d0b712e66433ce43E7683DA0B9586685ef91066",
//   "0x1d935f516D5008Ff3153ab789258Bf5d8cF604f5",
//   "0xe8a5AC14A90e6E7F8D968D4FaE45801bbA204114",
//   "0x3807cB1F9185296646fDc4c362417c3e13f95BAb",
//   "0xdD94764911aC329B94acC4a045609742bf8a9142",
//   "0x6aCF717b6a14ab0C3fB79bFeb682ce7dD9222Dca",
//   "0xb6A100a8947C09aA2b9364786f805BE03AdA3BF5",
//   "0x28e8FFF93c3D0020996f5a1C256ce6F2A4dda25d",
//   "0xC31112AD11fc5BEfe3c8Cf0712E8d46cd739dfE3",
//   "0x9058F4BC347A034881C1f1C6cDA1e6Fa2b639509",
//   "0xA3181e178fC1787f296C7648CC6e8cf016baAf76",
//   "0x7584E576A2708Dd019d5B352C3705DdFD22574E4",
//   "0xF598e8388e273c72600fb8d61DEA2289Fab6453D",
//   "0xDbbb610DB6ff4BF07A3Baa82C2bAdEA0461ca178",
//   "0x5F447eD3D1B278E0a3D34c67c31d9898Dd10734A",
//   "0x7Bb996fB0d45B425D1E20EB32Ac2eBb24a7CB300",
//   "0x81C910De3384e50bC567163598E116844E33e343",
//   "0x7d10540Fa7dE76E680C82Dd6B3f8609F49856C62",
//   "0x3aCe817c8103B93F910ACCbf43B8a3E16D871369",
//   "0xCaf0e3F1e611972a7c0f28E99AeE2829776Ef63b",
//   "0xd9a4F795AeBc8f502730331c143d00959414FF0b",
//   "0x32Dc97209887cC365D3C690756648702141deF62",
//   "0x3847e032bB0d3A05f33a4903D0A846aBdE1BF0D3",
//   "0x65d44Fd3097f9d4a3d51653D31402c0b5B942363",
//   "0x6d779596f095463362a825a67145d0c5245a89f2",
//   "0x6e2b57d73Aa589387C5268D4Bfa984211cB465a6",
//   "0x070c5B422bDB2C9f51cBa7f61033f9A20903F71a",
//   "0x42F6d7AABeA3649b7894441516F504eeBc23daF6",
//   "0xEE3BCA6833215eB2C4140BdF74F6653cCFA2e04D",
//   "0x9297641f076cb555d633E355E3A1ffa236E4F6B8",
//   "0x79593B91f2c6661A270CB61B059B7793235Bc544",
//   "0xE7235BF158EE41876c64690265b844a9548796fe",
//   "0x4cFece7616B90FC13f6c376468a5a7F5849E17D6",
//   "0x99d06615D7B4d93cdfFF30E3b50AdaB9f0e228d3",
//   "0xd6d6DE74E0a7375944444EF2Da4916CD293b917B",
//   "0x7797Ced0783Abe88EDc808C48c69D01d203D8e4C",
//   "0xfC04c3c5883bA9A80C4226C24B8472b61cCFD734",
//   "0x1664EAfC12cf3B2991fEe868460A4de72FFE5816",
//   "0x055adfD910C81dB0c07801c69956334b4375649E",
//   "0x5292102537aA1A276869B30Ca41c9997fEA89299",
//   "0xb582ca8Fd12b7f3d8E4e8517f1804Fe9C09e0c46",
//   "0xb169e4E80BEaBecb2f6105beAb544ccFa65464F5",
//   "0xbb19C20ef6Ca7050Aa67C0A69BBAA59D6095a2E6",
//   "0x51eDb088b39Fd1cE613Eb7fFb06503B83Ef35198",
//   "0xb8ec53CB2E44e4fD43d470162c2F5cAaD9662C19",
//   "0xBb6b7D9cF93d6Ad37A851445974960be2e236403",
//   "0xbC1F926485956B1aDa816ce71F57Df66b232129B",
//   "0x3c52B4fA783C9670DCd52D34A2B5f216d30A3b4e",
//   "0x3f3E791194fb13723B2Bfcd663057d4Ee157c30F",
//   "0x4FEe9F8d7597AEE23276d5377444eFB3c102d373",
//   "0x51622D216895064F7524833868d94FF6ed926b95",
//   "0x343b3a7f583a3082c33924AaE671ddff6eF2d9CA",
//   "0xCe375f9cDD93B3027D96d529D6f7e9a3Ac22ab27",
//   "0xe01Dd1aD7CcF754e388C427DebFA5fBe0363C10E",
//   "0x86a26f01cAFf39c28cf5d8dF1bAADC81749063eB",
//   "0x086DD0f953FE5F3Edb5aeE19C5A6cf2431F2B1b9",
//   "0x3F680a14c91Ed01A983D684Ec26E461fC10c4064",
//   "0x33c16405EACB34764F43f85C91facBBe636c571A",
//   "0x5dcF41551856df159D87F12b4052bD65061F5267",
//   "0x3f3fdD1Ee0653C12eFfE705bFFc2C49a640c68dc",
//   "0xF1A28F165Cc800Cb4eCC5922C5018261b6F5b235",
//   "0x3d94B91cce80364eeBdf3416ad612Ff9CbA6cff5",
//   "0xabBFF35e351b3d3f40a84F8a09b19549BB063f10",
//   "0x617a638162DfaA760FD5a8B2378f63603a40FF45",
//   "0xacb36B08c820c2D7B8D6de445eB4F5A704F274F6",
//   "0x2c78FDBfb2981fE8A22d1Feb52BF68493607Ee06",
//   "0xc5a13EDAC7411C757c4f6a134347261aAF4733c7",
//   "0x9a4db5aa96CD710C4cC73Dc35F3Fda6a9cBbDDbF",
//   "0xA57954721204407BE677Aa01250f470062203ea3",
//   "0x91A9F253Cae7C9959165CafBb079F91b9f44bDAc",
//   "0x6E538bC0F34f98c44966ca3894217c1970758c88",
//   "0x1a251131Ee5ed96694B812573eA2B4D2e278084B",
//   "0xB7fE570d074C84D44B924D3a7c645Ef49554B1f8",
//   "0x7bd799fD4d0A67e8D8Df16aE471302229Af6B529",
//   "0x0280991b064204C1118E13C071e5201bA870e20d",
//   "0xd63c136Ae72952534b6A46AF296DD0f15C747565",
//   "0x1939A73FEB7CD1799D116Feeda5f2deAC56C1a5f",
//   "0x6EE94A16DCb52fe8F31c829bf60922b443BEC705",
//   "0x2457C41946205b398030Ca16bF0B71D4BaEe56db",
//   "0x8a7474984592Cf7D1003477Ebffac83283e820bE",
//   "0x60AaA9FadeD22DAde3d867C10329FC55126FBB92",
//   "0x0fa96CB382FA61B413C45a806E60722A28547557",
//   "0xd2EF23Ea827e80D88073496c568543570CaeFcCF",
//   "0x20992f6CfC5c3B809451453C81c8f1499A4791a0",
//   "0x25ADcCa2b461180538cA9E855B40707737e07E4d",
//   "0xa0C3856bBA5C4c71f490551776C0A0e0231708Ef",
//   "0xBA0d8c12eAD14e95E562378f09381e4A0D4B9468",
//   "0x854B0800A72f8097bc468EB5D8acd06D677B2980",
//   "0x35F25FDA5027fCACD5f5fbfda2044A1375Fd2C9E",
//   "0xfd93112De14D6536873b244076eADe515EA491fa",
//   "0x38DD64f8C926bCA121b00179c590eb2845683E83",
//   "0x68dA606b42028f57541b1C51DaA11208b9aE41D9",
//   "0xb15f501cD9768cBB2bce97BeCC5b64f8aF4d4728",
//   "0xa4976B875f5Be5208314A518ed03d62411910938",
//   "0x8453518F53fA202019a9feF43E09fe5aA85B0ADc",
//   "0x14A9134B3fEBfDBFb6357DFaD8b65e5c5383E7BD",
//   "0x2190F15A37A2c1FC7b6561655e1d0165D4813c22",
//   "0xe07E7dA4227Ebf6f2bfAB62A3263F54dBD49dB4A",
//   "0xc0A45E684f0288624Ede126cB795F1680C9bb5c0",
//   "0x0A051a69F27b9aAeCa868b252eADF8A8f5f7323A",
//   "0x26DC2043D53B2495e7B07dAf32a83d3A7c8a5Bd1",
//   "0x7CaF9de8760ABBdf1C0cd75baC2108b13F8c6aD4",
//   "0xd4acc964864CBc22BDD212A3D0FA330a150AB7c8",
//   "0x8a83Ce97B74a1b79797dD73A9bc82B938fF6e98F",
//   "0x3D6f6043fFC09AD396535CdFAcb6e4bC47668e02",
//   "0x8CcFAA2C191F60a5a625064aE9682Bb82b1c6d94",
//   "0xc5FAFE1E28669F2f70aA6181634d96975B3879E3",
//   "0x5e13457c32fEFf667e5a879e3F9D00199e4757DC",
//   "0x228CE4e903741B86502C09758F1DaFEE50aF44F2",
//   "0xca01BaE7894e9d5026Bc06fF3E4ba2097d56BA59",
//   "0x20e6af36fD433821f704B12ec03f644dc406A5Dc",
//   "0xc7cE35e283a87fa06e80533B5D0aF8E1Ba0c95df",
//   "0xE386804593c3b277f696C9937762Bc462Dd34C41",
//   "0x40C65A435Ff1ceB8E17bdbAACB8273454A67595F",
//   "0x350b824Eb3fcA6A76570221bc8337B01E3e9D795",
//   "0xE87294Fc9395b18BafbB4635442E3fBac4006E51",
//   "0xb222a4Db6E3C9482359D9eFb5991887ad726eFD8",
//   "0xa060DbfC93E5C75Aa2c74F91Fe601465c031a65D",
//   "0x76dA8D99ED6aBF465E47dC24F162d1F6D03b8562",
//   "0xA171574706d53bA0a237fE4BaDF79A71fAE0b480",
//   "0xd4980c7a2D3440d90539eDD26085aE722Ed48B53",
//   "0x4363A6EE36F9184b7f8CCDd1A737a79d69ff3F8D",
//   "0xe167891353Ea02692d4aCfC04660BE1DdA20C68E",
//   "0xB6355d931A0E2025A05587dd1872633B5fD2a91E",
//   "0xc33D0dBbdB6ABEDC0A2b6f6B7B5a4015C4e22B26",
//   "0xfE90b996aeB7051bDFfd5d840988B8673394297b",
//   "0xaC79754969bb7BBaB1fE30611cA9bfC1A4BAC129",
//   "0x53f95f79fc93CfDE0A4942Afda17A814d41Ce33B",
//   "0x28b609ED2062AF70847Db798C091A5F38Ff423c4",
//   "0xFd63d9503e4F0D538b48c163C224d93e0Cc9537C",
//   "0x836dF2AC9107f4b67A9e90c42F49a0CAb26C1573",
//   "0xA9D071361d22242416703dd89D3eDea2829CB2BC",
//   "0x4bAaF56dD774488AA19CD5CdF5a92E2CB5dCBa24",
//   "0x932E703Fe5d062a2a3DF76c0F4deFef20268810e",
//   "0x1112c0a27bA6AAdFae7394bc1cC27bE3f89B97EC",
//   "0xE828ABD66d651caE1c1bA353995241fc3e5a336C",
//   "0x53dD50Fb848609e9657640da0ED0188ED7E347d5",
//   "0x7143fBF7cF066bA2390Eb66F309999019B34AAFE",
//   "0x554DC4d438d5B025498b5b7d6b88E792aF9aa32E",
//   "0x25AE094F96b1b0E8a6Ec146D7Ac67d9EE9e3686e",
//   "0x3CF21235C193ddC86997F1488DF47eEe7834cae3",
//   "0xDf11314F6505126E9656C543BB11913583Bd1D7b",
//   "0xd08A0E5c4faf114880A732C1E951D8fE56839118",
//   "0x9B472bC59E8003088c7a04f00bA8ba2b313a4ffa",
//   "0x07c2E12B139689bF164d733942FaDd97b7561Efe",
//   "0xaBd0b5ef2a478ce6504a0dF7cbBD1b5376dB9109",
//   "0x834EC2E82CeB5b10E05C175f60c4Ce3799A1Bebc",
//   "0x44d6Fc741188f7Fb811dB3138385FfF179e9252B",
//   "0x47AD0D6Ce4F54C88D30ed95dB4F18aecD66769D5",
//   "0x120Eb1488B59B0dAC00c2E4A819094128a9F4e96",
//   "0xD805726BA9f10BFF64d940992ea7D16D91De7C05",
//   "0xa604983D0F16Bc159c818531891ff961f4206DD7",
//   "0xAEB79cf6AA81bD82f4236913bd71Df297c8F06ee",
//   "0x909aA1488F8a94448Ca60F22eb94566bE0454712",
//   "0x257FA15F9f60cB4Bfa257E6F91700570F027905E",
//   "0x565cea2Fd86FF22694ad53167E715FB81F4395AE",
//   "0x7c5541907c9877a0D24f0B7D4DF77A9aE4373812",
//   "0xD22173B52b6Ca3b3cAb6711F3BD589452c3c5Ecc",
//   "0xf03186A1FD2B42046768DCdB5aA30604A97747D5",
//   "0xb2f4eA5eE6302cB9D3Eb29adda15A49D25CD5f3b",
//   "0xdb9986bd0596B8a4873b09b4a10B81B13f2C9dDd",
//   "0x7af06229D88ad92227A6ddd73c4B134e388f6895",
//   "0xB195515b4A54885b7311c84c9b5640Aa0f5d3F22",
//   "0x40aF14478E8e4534dF21412652Ec426bC6e0B0F7",
//   "0x39C68804479053Acc2F410113ee7DfA0C85B16Ba",
//   "0xF8cF866EEF515484e3c2e7338661F91FCa9a550b",
//   "0x1e68f79457f04A9D2FC2967BA9f722780af09560",
//   "0xA285a9f59D0f27509FD3a342A6Ad97D3227b5d08",
//   "0x56FB5199bDc0d8Eb5186537f4738f812A3464ACA",
//   "0x0A4c4D06F70EF1812731f5e677fa1b00C8b1a789",
//   "0x1F5Ca53f1F91A583dbd39B7b1aA8e2988A9F0Bce",
//   "0x1aB42f85ab4A21429f1349d76fd625D458e21bf5",
//   "0x0CE02D3a89efa218CD0f486514CAe77D74b88bEe",
//   "0x316cCBeEdD53c120B2f8985F0530ce355000cEd7",
//   "0x9c968118C8f4C55467359FE6A1cD1CeE3C0508B3",
//   "0x14B593548E01BAC24dbC7911AC46d0cE383EcF76",
//   "0x54D585861EFCe7e4d56e927ffb3aAE6BaD0ca0b9",
//   "0x023f5B749860964393ae1217BB5d9bB56fe5dF23",
//   "0x7Aed9E7993E9d6f2A008eC9602E869FD7B443802",
//   "0x26d78D0dB14d2C8fa9611d826b4F72Ba4CE9eEaA",
//   "0xc0f730cfc29A74Ea6041047830b8cc9e47A3c1aD",
//   "0x08137A0834AD5323D4D26E1d4E22E539B825671a",
//   "0x4c68937acA3b154545D28a631d55AD8320f7e5Df",
//   "0x5d35A940F7E32391fC0C688642937aEc7De09cDb",
//   "0xc911eDdD90b0FB4c7Df588f731678f8eb3C60b58",
//   "0x8BaAcBa17c2305e58bFBb93bD7aF5A5Dd0301CcF",
//   "0x5C9E2A6fEc34b510996a8e2a3d1e2c47A382a8b9",
//   "0x5b47c04894A0A672Aa1727f0f29D0ca6416292C4",
//   "0x507183c8B149F5B20F57114d25698ca1f4ec5ac7",
//   "0xB0481E4d9513924D3EeF075781794ea81b14e0F7",
//   "0xC6e5d62ED1cfCcaE80C4d4b203fEEa7263A535c2",
//   "0x78C31658c3f99aB8449c2845aBdE6c46D314E109",
//   "0x5F7ecebdAad72E2082fcf43B756D4973bFD24338",
//   "0x49717e63A29317e39386B0119A165bb219278706",
//   "0xb477501f72a70Ea02036Ff52E6A4c947Ccf89539",
//   "0x59d935Ef10D48821f5E2dbf89499aC440cA5761C",
//   "0x1cCd4FE35BdE55147F0fb17DadC8Dd3702705cd9",
//   "0x93c442C7B3B064D9367D34F40b42772fF350664b",
//   "0x849f1D70C04D3AB53BE7Da5aD15EA5da259eE578",
//   "0x42FF9Ed7d0a256c912515e5b4F0D7A5212A56b97",
//   "0xD358171340eb400316224e67cfB3B329dA969365",
//   "0x628c02f2b9f90369ffa2567a03226c753dcb11a5",
//   "0x9297C619fEd4C0E71a922E069cE82121779856D3",
//   "0xAaB95C9763ae7238D7126Ed515C9e2773Ba364a7",
//   "0x7bE2df0Ec3E0Cd8348C5675dC3c022E7161567b6",
//   "0x530F9823a199Ca3A4c4c6fCc29bE1ED1f1ef4Da8",
//   "0xFF9d0294139313a79F2F0535BaB23F08B0D7A3B5",
//   "0xc55cc7F53D5c425f0AD7168b13784B3a4Daf70Df",
//   "0xED3ED88068597b83DCdc8dEe18d198f9e6BE28A5",
//   "0x035000529CffE9f04DB8E81B7A53807E63EeaC12",
//   "0xaf496250Dddb00a0B211ABb849460B69Ca5f27Dd",
//   "0x7CA06fe0418e58af5bE74A2bA5a2a56318169743",
//   "0x68AD1Fa00cB9D499B73e85c6449766374463B6B2",
//   "0x3Ae522BE74b3a56f32a0ae767040094222C3a544",
//   "0xBf53B4C72cCb766E536f2Ce8745f483128FFA108",
//   "0x097343D16951433E41106d347B6A6d1DDB221D57",
//   "0x26aB234539fD886711df8641c6A52A82EB40954A",
//   "0x5E97c883877EC4ddAd12A83838ce2615962446B7",
//   "0x6b2393eF30DF1c0FEa50B35f5E78d9cC490DB094",
//   "0xe7951a3D8CAf7bF3e583D6fdE57EB275569bAF6C",
//   "0x2944C1Fbf2dCb1737dFA91403a512B245D92B6E9",
//   "0x9F65b4fA7D241fFcCFbC2734B602B27D4D02e8d8",
//   "0x37015C3F9e6d889B4fBb6100c9fBcAD1a6601eD4",
//   "0x3d79952D73bb733fc3C68C6CaC405Dd7B7EB64ac",
//   "0xbc1b5460ea9Dbc0134AA8d6ced90943E3d672a66",
//   "0xF7D941c4584Fc8810df56dD1E74F023908755219",
//   "0x67968A91ec5c4933e8C11c7f2F27F9bbcBf3dB71",
//   "0x4C8EBDE3da921f7DCBf4027fBc181a69f8AeB213",
//   "0x253F0703C1609472779578046A23c6E11f8560ff",
//   "0xF451e0Be8CEE49735487b1a7259FB4fE5a7AD32e",
//   "0xF2B548394F5E8eE171209739d66675594BE555E0",
//   "0x2d14E8684d8702e0082B7C93e2495E34D80F5E5A",
//   "0x68214d88df4A2DdDF616F922Be08a8D8901De7bb",
//   "0xb455e830D7b7450e899e06707a2002FCDD0c070a",
//   "0x32D3363364e03c4820712Dae17612896Cb76bBE8",
//   "0xB8B6888B3339692f97d158764c8f651D6D4BF9ed",
//   "0xfb6c6aB83E0F3F38aBFC9471dAdE64b86f206F2A",
//   "0x4897837402926558526cfE8d5031E9fA646b8d74",
//   "0xf21e63dFe90dD209233c1ad44E7ba2b2CA8e97a0",
//   "0xa63Df0f8A4B258a81840a9bD99d33c5Eeb1933f6",
//   "0x3cDb9af9714B5E70955Fa1882Cdf843D1BAD290b",
//   "0x1F8022a6dF705dc36f8D42bA5f67B4d2d6CFD88a",
//   "0x42998330bFCDf289af93729C4170d8622De6f9DE",
//   "0xa5C0A9b949760f2b8e11fbcE3B2E524d186B6974",
//   "0xe9446bC303A4861248feBebcbFd5D2054CF45B81",
//   "0x38233DBF3285D6109568C298E52935D00219B236",
//   "0x50f9CC9BAC386dD99624662135187713f1744BD4",
//   "0x75D1138A8b669D2BA6578Ec3C61CBA9D202f3223",
//   "0xcd066Dd52C1776e7Cad9FF67645800F48E15a2a4",
//   "0x08c8D7fEFB3A76e4aD8dB45010a3de021AEa21C4",
//   "0x9553E57F6d7684e77cfd6B6DCe5c3174fe6Ef234",
//   "0x38f8B2aC82773573eB5e9151870361563AE166A7",
//   "0x927Cda0d8efe06CAf257306e957B7E73f0168655",
//   "0x3Ef30D70A7576a37aCc80D135C75D4F5a61bD698",
//   "0x6e82Ce36948f356Adcc9D110f7a7a0138272E5Ce",
//   "0x48d673b192919D94c48C647C77f6e5E55f8A6913",
//   "0x5973B426c616aF28773d7A1457Bd645a220EA79a",
//   "0xa004129Af57124418362622f6a9EfCde2976Dc5E",
//   "0xdC8a6008126525A954F77DF681532C1f6e1B3243",
//   "0x5e4EeFd83629585d8ac086D6F04827F5d6dD9d5b",
//   "0x863502553e07b662b0E7502a2232A839bE0Ace2F",
//   "0xA31AEFB37Fe47b7ef70109Bf0b00B76Dd171B0b4",
//   "0xa8B44d98F6092529deb51fFF42a69Ebd00122409",
//   "0x75A96e19f9C677712310f6Fc5f38598359a86900",
//   "0xE84fE887506C1513aDE658C0409cAF71C610d69C",
//   "0xaDd12d142D237e7e1FF1F0fc868621a09EF4a624",
//   "0xff159dE604e9F5744DFb5D7A0f55C1765b903873",
//   "0xEB914D83ACA612279f29D97A8b26AB5dD190c61a",
//   "0x2132234ddEAcC84fE4eE3d7fd0eb9F7417e01e87",
//   "0x2A63dDa6743F2acD1C2d35C1f036C78c29C1F81F",
//   "0x519fAF9c09C6A769a7023a1ffFbA56d30952Dc41",
//   "0x03C6547A6935Ec26dc9c9440bbE758afB2E06797",
//   "0x7A1F0116d806c5E1F4f405FA78846aBa4A89Bf18",
//   "0xec3734f3788478f022d0752f865baf766cd5676a",
//   "0xf046f811376808631A45451261F9678741f42b5d",
//   "0x571e58D8088D2D992282f0e5D6EbD6E39E3D6DE7",
//   "0xceF95Bda7FE9f1Ed09554EC175Fd86aC13B05e7A",
//   "0x84E719e4AacCf7bF70760dBf34983c9b880bB4A6",
//   "0x1Dc236FfC44D275c49629DCFFBC897F1585752ff",
//   "0x9e4a122605C06727DCE2DC25ED590eBc55bA4411",
//   "0x2f60bb51943bBbf9152282B03907d55fa2a55f89",
//   "0x1FA2029Ec29B060044A995063aad02FA9290E197",
//   "0x428763b2Dff1C0034A20e2bEFbA71055C4993306",
//   "0x105704a52DEB48895226f2C6C47Fb4cc353A4560",
//   "0xa308763BED35CE2354719bD2e02a9DEA4eA8052f",
//   "0x6B5e8FA4A4399ad73985Da3B50a32522A81e2f00",
//   "0x9351DEe9975909751c59c4c4921076c0Dfc38743",
//   "0x0DdD1eFde7568b4cC1A3Caf050D579362e5C2528",
//   "0xf5d839676F90053908f4b456801198401b026936",
//   "0xF7f5090cf84771bE616d738fefC5092F33f87B74",
//   "0xF2d795117f66058Bf94940609f22089336489C60",
//   "0xe911B64Bd8e2106BB91Acd31cf6bc5cb72398486",
//   "0x4819951Ef30D768046212E705B92993a91E906D1",
//   "0x9E3316068EccA3Efdf7201d86ceC5e1ba96728DD",
//   "0x055B6328FAeA08BfaD770cf3e2d86b6a04C3b83c",
//   "0x096Ed0d82cB3274b92e4b87cfd846113861f8956",
//   "0xA036e354F3e77603ff662544E2f48c7c99267a9b",
//   "0xBE3352Ae7C20161d4fb1D0Dc2aad099227B5F246",
//   "0x3118fBe9dDfD9bA217a0BD0c39CAc257Fec022b9",
//   "0x2b6cD34F241a34C24b058C70616eF4C81C5f9eb8",
//   "0x08bd61A0eC527d81B4746740F324c8DE6a0B4826",
//   "0x0BdA5FfA68972Ae3586102deF7f97083B6aB54A3",
//   "0x49f2b78458B553229c51a389C811C4A73ae84C73",
//   "0xecd77D0a2fA6d63D32Ef7e748b52ec7D1303F6b2",
//   "0xf8D8B3b0F2b9f16522eF04b370c032d0EeDbE734",
//   "0xe5070D02F672893721DCC2773abCD388582C27a1",
//   "0x2787f2FFb984D684Ed979a4A725308266F52b06e",
//   "0xcD5a6a439c815D1B990aDCA1009d71f9431008D4",
//   "0x44443c838805A5f4394AC37b27884446c462d783",
//   "0xB84F07bA2E8ee5F3F8cc979bDe88A2Bf564CA15a",
//   "0xd8e31e331e78488FB84C121Fe5328393EBaCB43c",
//   "0x48f6c2cc0BE7c3825cCC971D16a573b8a5388fAd",
//   "0x0D3C1f3C822dBDEAd3F27a62C88A1a57ee27463b",
//   "0xBd6c6b595a16e6618cD42E7B1bAD9C171aee66dE",
//   "0x54CdDe35Ca4647e6A7b38908Dd2d59eF9C995583",
//   "0xc88910C401AC093017dBd816A7810abE9F8CD13f",
//   "0x662b4c90aB3F14497f73F2Bd928c5D9Af82e21aa",
//   "0xF23A4a320220c354ACbc36bEC7a9005d37455668",
//   "0x2C50570a26F66A3A4Ba91eA4d0EaC5f3ac9545D2",
//   "0xf5b6F869D96164c323C12b7ba8739B2fb20e8EDc",
//   "0xeFFB28F61B3cA5E4dac0fe5076155a25Cca94DB8",
//   "0x9394cDB927986dbE186d9D85892DA22a06B853AE",
//   "0xdA7A737e8E554061cE1D37f1Bec2e9f9525Af74A",
//   "0xa7552C4a1b57258C79E020ac74E13AAc0f89Ed18",
//   "0x4A7b9c8FBBFa0ac156014E77a132Efdb23c18544",
//   "0x771d7CdF8A7aaDfAD9A5c432d1dB1f51f7290208",
//   "0x5C902a334f4Ada6785DFC5A51d6ceDD5e11E6Bd7",
//   "0x41338D84A3e14d506499aBEb455d749339E3FF5c",
//   "0x5A15D797FF77244aC40D4bF497035fF9672e7242",
//   "0x0b1497ADc7C07d4cfA439C53A6e2C2C67CeB156C",
//   "0x85B53BDDD65C621C8d44d6f8BD1130F8feFEAA6C",
//   "0x998eC8e5e0dcC670c4C4906779e3176fA82A23D5",
//   "0x0249C212538aA55aDb538017FeE40e9b4d739386",
//   "0x2EFbdFa875b150c9660846F496c31278e7531Aa3",
//   "0x342725C730b7C9A6E66BB5011439EA3064367546",
//   "0x51adC54f4f62Aa3451adFd593665dB91092C4B37",
//   "0x655674325392480542Aaa9B0291F3BE976cd95Ac",
//   "0x05B783AAd022ee0386010F88E3b70b42A782d767",
//   "0xA3189F059F69be042Fb716F6bd508C5ce6251969",
//   "0x4A75D5890423320Cd3b2A1F542E782a4E0b6f148",
//   "0x03E0469CA10c8B3A76A5312fB6f2A06698934BF4",
//   "0xb5E9b627e2C4bcBFDE4Ad7DF3ad7FC98b97C65C7",
//   "0xa99b67E3b25aF6F98b3985b8424751b8931fe0fe",
//   "0x7D0C7905a34F715dD78995bAfe6F11c3D7ae6cE6",
//   "0x36c81e0ec22cac063a0588b6165ce3fd022ab5b0",
//   "0x0DFF75291061539AE256832A485bFCb92f1053B1",
//   "0xAA80321169979A9bD0Ac308970F793D74dAb5c3e",
//   "0x059Edd09Ab23d85087B5EB7A231f10C82dea103B",
//   "0xe2Be067C8F323565c69bE52DbE261a770C10D55B",
//   "0x77eB3e7242787DC0E55010671eB88FD7529a51E6",
//   "0x441758e3Ccd76c2B371Bf6BCa21941A38352cC01",
//   "0x79e156e8c4f6f0d9398d27f7058Fd0b0900e7F3D",
//   "0xe085aA206D02d7f56D3271b24d3C1D5b007C5F85",
//   "0x8d831dD7F693860067b2518a2058f521fcDB8C03",
//   "0x39Fe29BcB14BEafE1d82f8C3CE33206D06f55963",
//   "0x94662250b62e1dAadDC763aDcABD1e5CB1E6B397",
//   "0x3C967b4EED37e4A218bf4f104684085567aFEA49",
//   "0x25508662bf909e0817739176ec39dCafbb18A965",
//   "0x36A8457691C6E234c9DB01F0536BB7f4017c6f69",
//   "0xA6AFFa9cA930FB6D3F59c6261E69F510600F2693",
//   "0xCCe3B99Ddf68baea82689c0e51bb4d5d875DF0e4",
//   "0xa656a248f4aE0DA7748505Eb7b4EC6E759ff50a0",
//   "0xEB5442E53EA30028AdcFDa5d8A76Ac3457591E68",
//   "0x45CB3267bbf383323DAEA66869572fFBAA36D6C7",
//   "0x7E3509E75ba15C240E9E60E02C180a93Aa5e0c6f",
//   "0x217b39848dd0283ea8BBbe51FC358C35AfdF1C6a",
//   "0x0E94848F4c6e777Ec3Db237EF351ca1FD4c4D6bC",
//   "0xE4E3e29FC2eFC2a8BD87cEE6fbc7556106581f9f",
//   "0xE43Dd557405384DA34ee0Aa315d4804AfC6eE2f9",
//   "0xF908845B35fB2c44D9F0193ca38Afb3D2C11b14A",
//   "0x94f4614DF3e100C5Ed93A096015cB0cF5465bA43",
//   "0x8aB7091DAcd6e4FF3C6f80ff1Db02616F553C432",
//   "0x13a883c96B3a5F9b6a18E14a082459C8c5F349d5",
//   "0x13B57acE33a4Cd5b717c56D64e2Fe762526B677c",
//   "0x388587bD3E872052CF4222Cd8D366393a93475e7",
//   "0x6572B4ea0865f71536dc34c12A6749A3993F8BA9",
//   "0x6914427af9a36b5187AA994e322f65715aE5A537",
//   "0x033F4b891C5ba59835Ae9B59502B50537C8b698d",
//   "0x2f40D2FB75a5EeaB585F5E72C39dAc3c5C7C906C",
//   "0xB384b18Ed91A110C9ee685Bb1f474e480A2f750f",
//   "0x0dDCf572D23AefCF2d2Ee75d71783bdF6b1F8980",
//   "0xd889663d0E651878B2709309631F57C32d0fE504",
//   "0xDa7ac208A6f8f42463587A97041614e5bF0d46da",
//   "0x39c6482dC57d33A6a30980aa31445348887380fB",
//   "0xE5d3c70046a5B5B52b95DB2649b0635f8f4b3600",
//   "0x55b4291Fc1a76301bF16F31614971F95f9ED068a",
//   "0x902C236f3a77F2bd781ab0A3e06A6f76AE2Ce587",
//   "0x45815F977981409f8c243083f25C25E280596Bbc",
//   "0x1C784a526a000f7dbede357E5132ed514f067b70",
//   "0x16Ee2e28Af5e71C5A2A7761aAA84e856dc8f2ff1",
//   "0x9F743989fB116d5A6A858880Ffa0EFE4e9612fe3",
//   "0x0B5be21B2B2c36B9d50DB382331Ed87faCf65D06",
//   "0x82a62b51326Dd3919228C18CbBbce910c4Aa56BB",
//   "0xcBbF08B389768B3C9C46680F66d1651ffF8c137c",
//   "0x28cF5D9d465dFaF5C616958Ef8b23DbEe567e2b7",
//   "0x53b50703c199b0e379575caFE6B3D208676D0593",
//   "0x8189394bCAAbE9E52a903d657B4D5BD86da7d8db",
//   "0x85A606ef07d4D32a1A2c9c8269569487481BFFCE",
//   "0x97baB2c9ecEA56faA1C5D68D4C32Ee6FbBBA2540",
//   "0x4536e10FE9972524bde25c44D5cafa760946dEFD",
//   "0xD6c54Bc41d1f118052a8241CA5242584c3B66109",
//   "0xA5a68394A628AB170cDd82c878B4408090dF45d7",
//   "0x08e533289aa9Bf0b4962931834D077ff67f21090",
//   "0x9cc52988C3329d22C79bb9ba10ad791ea165A2C0",
//   "0x229D70Bc1ca126F854Aa9DF814af1844495bc77A",
//   "0xe807542cF62BC5b7efDD9Bc5CcbCd61a5fBBEe1f",
//   "0xdcC54e8E093Ba4eb69d9A5A2933044C3cc22B9F1",
//   "0xf25b906F94bd8311412059169fC9D3E96f6d74a4",
//   "0x8e6E59d00d52538bF4C4EC9B1ecC5546EA519daB",
//   "0xA0009BcbDB659Af2387A32eC5ebe39Cb13c6639b",
//   "0xbcda5D85198109188deC70a9e7C26ca1b41590B9",
//   "0x61790580139E32958f2ef19ADF553ee3633C6Ae1",
//   "0xCF90C0133784cDC1085a8364ca5ee406F797B327",
//   "0x8464C67c6e9e99FdD1BE26A586dAf5B79a259614",
//   "0x9Cc5A2b9bE6C8b5A524738d1485Aa53029234708",
//   "0x8a5aA33A8C02869e209617E2Cf8e2717F0c9c1AE",
//   "0x5b6E57bAeb62c530cF369853e15ED25D0c82A865",
//   "0x2e8Ee51e037cd8B13e52c0243c0A0c0D17BB644C",
//   "0xA5E809EbF9C9906f8AC12Af273fB736fCE5c39c9",
//   "0xA7964d31fcB2DDe6cAE43A71205299DeADEf90bb",
//   "0xbccb20640F6F3dEb7f5dd815Fdbfb9BCF676C725",
//   "0xa22f8994a73f32E847A5FCBEb8B2256a2b1F410a",
//   "0x81369c3a06C35D15CeB63CEb2c9674aDa7379be1",
//   "0x89d73A8F14226BaD6bdFFF8282F69C2b7816A57b",
//   "0xb1327Af50E1F5F25Bc4307f2fdB1E780D615F9dB",
//   "0x273B8feb49c6593c9Abc9BcD4C2F19fe4dEa5E10",
//   "0x908d7750B2e45D0fDf1c663058404E49f6d35AD1"
// ].map(e => e.toLowerCase());

// try {
//   fs.writeFileSync('/home/pallab/Documents/development/web3/projects/merkleTree/list.txt', list.map(e => `"${e}"`).toString());
// } catch (err) {
//   console.log(err);
// }
// let textByLine;

// try {
//   let text = fs.readFileSync("./Friendlist_fcfs.txt", 'utf-8');
//   textByLine = text.split(`\r\n`)
//   fs.writeFileSync('./list2.txt', textByLine.map(e => `"${e.toLowerCase()}"`).toString());
// } catch (err) {
//   console.log(err);
// }

// console.log(textByLine);