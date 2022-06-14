/*
  car

  name
  title
  sticker

  gtwing
  ministick

  miles
  story

  versus
  settings
*/

OFFSETS = {
  game: {
    wmmt5: {
      name: "MT5",
      cars: {
        indexes: {

        }, 
        values: {

        }
      },
      story: {
        indexes: {

        }, 
        values: {

        }
      },
      miles: {
        indexes: {

        }, 
        values: {

        }
      },
      gtwing: {
        indexes: {

        }, 
        values: {

        }
      },
      versus: {
        indexes: {

        }, 
        values: {

        }
      },
      settings: {
        indexes: {

        }, 
        values: {

        }
      },
      ministick: {
        indexes: {

        }, 
        values: {

        }
      },
    }, 
    wmmt5dxp: {
      name: "MT5DX/DX+",
      cars: {
        indexes: {
          'region': 0x28, 
          'car-id': 0x30,
          'car-model': 0x34,    
          'colour-stock': 0x38, 
          'colour-custom': 0x3C,
          'rims': 0x40, 
          'colour-rims': 0x44, 
          'aero': 0x48, 
          'hood': 0x4C, 
          'wing': 0x58,
          'mirror': 0x5C, 
          'body-sticker-type': 0x60, 
          'body-sticker-colour': 0x64, 
          'side-sticker-type': 0x80, 
          'side-sticker-colour': 0x84,
          'roof-sticker-type': 0x88,
          'roof-sticker-colour': 0x8C,
          'neon': 0x90,
          'trunk': 0x94, 
          'plate-frame-type': 0x98, 
          'plate-frame-colour': 0x9C, 
          'plate-number': 0xA0, 
          'japan-sticker-type': 0xA4, 
          'japan-sticker-colour': 0xA8, 
          'power': 0xAC, 
          'handling': 0xB8, 
          'rank': 0xBC, 
          'window-sticker-toggle': 0xC0,
          'window-sticker-font': 0xD0,
          'window-sticker-type': 0xD4,
          'window-sticker-colour': 0xD8,
          'rival-marker': 0xDC,
          'rival-marker-colour': 0xE0
        }, 
        values: {
          'region': [
            [0x00, "OCR"],
            [0x01, "ARG"],
            [0x02, "AUS"],
            [0x03, "AUT"],
            [0x04, "BHR"],
            [0x05, "BEL"],
            [0x06, "BRA"],
            [0x07, "BRN"],
            [0x08, "CAN"],
            [0x09, "CHL"],
            [0x0A, "CHN"],
            [0x0B, "DNK"],
            [0x0C, "FIN"],
            [0x0D, "FRA"],
            [0x0E, "DEU"],
            [0x0F, "HKG"],
            [0x10, "HUN"],
            [0x11, "IND"],
            [0x12, "IDN"],
            [0x13, "ITA"],
            [0x14, "JPN"],
            [0x15, "KOR"],
            [0x16, "MAC"],
            [0x17, "MYS"],
            [0x18, "MEX"],
            [0x19, "NLD"],
            [0x1A, "NZL"],
            [0x1B, "OMN"],
            [0x1C, "PRY"],
            [0x1D, "PER"],
            [0x1E, "PHL"],
            [0x1F, "QAT"],
            [0x20, "RUS"],
            [0x21, "SAU"],
            [0x22, "SGP"],
            [0x23, "ZAF"],
            [0x24, "ESP"],
            [0x25, "LKA"],
            [0x26, "CHE"],
            [0x27, "TWN"],
            [0x28, "THA"],
            [0x29, "TUR"],
            [0x2A, "ARE"],
            [0x2B, "GBR"],
            [0x2C, "USA"],
            [0x2D, "URY"],
            [0x2E, "VNM"]
          ], 
          'car-id': [

          ],
          'car-model': [
            [0x00, "CORVETTE ZR1 (C6)"],
            [0x01, "CORVETTE ZR1 (C6) Taxi"],
            [0x02, "CORVETTE Camaro SS RS"],
            [0x03, "CORVETTE Camaro SS RS (Matte)"],
            [0x04, "CORVETTE Stingray (C3)"],
            [0x05, "Roadster RS RHT (NCEC)"],
            [0x06, "RX-7 Type R (FD3S)"],
            [0x07, "SAVANNA RX-7 GT-X (FC3S)"],
            [0x08, "RX-8 Type S (SE3P)"],
            [0x09, "EUNOS Cosmo TYPE-S (JCESE)"],
            [0x0A, "MAZDASPEED Atenza (GG3P)"],
            [0x0B, "Driving School Atenza (GG3P)"],
            [0x0C, "SAVANNA RX-7 TURBO SE-Limited (SA22C)"],
            [0x0D, "Cosmo SPORTS (L10B)"],
            [0x0E, "LANCER EVOLUTION X GSR (CZ4A)"],
            [0x0F, "LANCER Evolution IX MR GSR (CT9A)"],
            [0x10, "LANCER Evolution VIII MR GSR (CT9A)"],
            [0x11, "LANCER Evolution VIII RS (CT9A)"],
            [0x12, "LANCER EVOLUTION VI GSR (CP9A)"],
            [0x13, "LANCER EVOLUTION VI RS (CP9A)"],
            [0x14, "LANCER EVOLUTION V GSR (CP9A)"],
            [0x15, "LANCER EVOLUTION V RS (CP9A)"],
            [0x16, "LANCER Evolution III GSR (CE9A)"],
            [0x17, "LANCER Evolution III RS (CE9A)"],
            [0x18, "GTO TWIN TURBO (Z16A)"],
            [0x19, "STARION GSR-VR (A187A)"],
            [0x1A, "PAJERO EVOLUTION (V55W)"],
            [0x1B, "NISSAN GT-R (R35)"],
            [0x1C, "NISSAN GT-R (R35) Spec V"],
            [0x1D, "SKYLINE GT-R V-specII (BNR34)"],
            [0x1E, "SKYLINE GT-R V-specII NÜR (BNR34)"],
            [0x1F, "SKYLINE GT-R V-spec (BCNR33)"],
            [0x20, "SKYLINE GT-R (BNR32)"],
            [0x21, "SKYLINE GT-R (KPGC10)"],
            [0x22, "FAIRLADY Z Version ST (Z34)"],
            [0x23, "FAIRLADY Z Version S (Z33)"],
            [0x24, "Nissan 300ZX (Z32)"],
            [0x25, "Nissan 200ZX (Z31)"],
            // "26, ""],
            [0x27, "Fairlady Z (S30)"],
            [0x28, "Silvia spec.R (S15)"],
            [0x29, "180SX TYPE III (RPS13)"],
            [0x2A, "SKYLINE COUPE 370GT Type S (CKV36)"],
            [0x2B, "FUGA 370GT Type S (KY51)"],
            [0x2C, "Ruf CTR"],
            [0x2D, "Ruf RGT"],
            [0x2E, "Ruf RK Coupe"],
            [0x2F, "IMPREZA WRX STI (GRB)"],
            [0x30, "IMPREZA WRX STI (GDB-F)"],
            [0x31, "Impreza WRX STi (GDB-C)"],
            [0x32, "Impreza WRX STi (GDB-C) Spec C"],
            [0x33, "Impreza WRX STi Version VI (GC8)"],
            [0x34, "Impreza WRX STi Version VI (GC8) RS"],
            [0x35, "LEGACY B4 2.0GT spec.B (BL5)"],
            [0x36, "ALCYONE SVX Version L (CXD)"],
            [0x37, "R2 (RC2)"],
            [0x38, "LEGACY B4 2.5GT S Package (BM9)"],
            [0x39, "Supra RZ (JZA80)"],
            [0x3A, "SUPRA 2.5GT TWIN TURBO R (JZA70)"],
            [0x3B, "MR2 GT-S (SW20)"],
            [0x3C, "CHASER Tourer V (JZX100)"],
            [0x3D, "CELSIOR (UCF10)"],
            // "3E, ""],
            // "3F, ""],
            // "40, ""],
            // "41, ""],
            [0x42, "CELSIOR (UCF10) Taxi"],
            // "43, ""],
            // "44, ""],
            // "45, ""],
            // "46, ""],
            [0x47, "ARISTO V300 'VERTEX EDITION' (JZS161)"],
            [0x48, "ARISTO V300 'VERTEX EDITION' (JZS161) Taxi"],
            [0x49, "COROLLA SEDAN G (NZE121)"],
            [0x4A, "HIACE WAGON (KZH100G)"],
            [0x4B, "HIACE WAGON (KZH100G) Lifted"],
            [0x4C, "CROWN ATHLETE (GRS204)"],
            [0x4D, "SPRINTER TRUENO GT-APEX (AE86)"],
            [0x4E, "CELICA XX 2800GT (MA61)"],
            [0x4F, "Toyota 2000GT"],
            [0x50, "Toyota 2000GT"],
            // MT5 ON
            [0x51, "Z4 sDrive35is (E89)"],
            [0x52, "M3 COUPE (E92)"],
            [0x53, "CHEVROLET Camaro Z28 [Z28]"],
            [0x54, "Corvette STINGRAY (C2)"],
            [0x55, "EUNOS ROADSTER (NA6CE)"],
            [0x56, "SAVANNA GT (S124A)"],
            [0x57, "500E (W124)"],
            [0x58, "SLK350 BlueEFFICIENCY (R172)"],
            [0x59, "GALANT VR-4 (E-E39A)"],
            [0x5A, "Gloria GranTurismo ULTIMA (Y33)"],
            [0x5B, "SKYLINE Hardtop 2000 TURBO INTERCOOLER RS-X (R30)"],
            [0x5C, "STAGEA Autech Version 260RS (WGNC34)"],
            [0x5D, "RUF RT35"],
            [0x5E, "WRX STI (GVB)"],
            [0x5F, "Subaru BRZ"],
            [0x60, "Toyota Soarer"],
            [0x61, "Toyota 86"],
            [0x62, "Hiace Super GL"],
            [0x63, "Maxi G Truck"],
            [0x64, "BMW Z4 S DRIVE 35is [E89P]"],
            [0x65, "BMW M3 (Matte)"],
            [0x66, "CHEVROLET CAMARO SS RS [CAMAROT]"],
            [0x67, "SLK Taxi"],
            [0x68, "Hiace Super GL Lift"],
            [0x69, "BMW M1 [E26] (Test)"],
            [0x6A, "BMW M3 CSL [E46] (Test)"],
            [0x6B, "Mercedes-Benz SLS AMG [C197] (Test)"],
            [0x6C, "Mercedes-Benz 190E 2.5-16 Evolution2 [W201] (Test)"],
            [0x6D, "Audi R8 5.2 FSI quattro [R8] (Test)"],
            [0x6E, "Audi RS 4 Avant [RS4] (Test)"],
            [0x6F, "Dodge Viper SRT10 [SRT-10]"],
            [0x70, "Dodge Charger SRT8 [SRT8]"],
            [0x71, "SUBARU LEVORG [VMG]"],
            // MT5DX
            [0x72, "BMW M6 Gran Coupe [M6]"],
            [0x73, "BMW 2002 TURBO [2002]"],
            [0x74, "MAZDA ROADSTER ND [ND5RC]"],
            [0x75, "NISSAN LAUREL 25 CLUB|S [C35]"],
            [0x76, "NISSAN GT-R NISMO [BNR35N]"],
            [0x77, "NISSAN FAIRLADY Z NISMO [Z34N]"],
            [0x78, "RUF RCT [RCT]"],
            [0x79, "TOYOTA MARKII TOURER V [MARK2]"],
            [0x7A, "BMW MINI Cooper S Crossover [R60]"],
            // MT5DX+
            [0x7B, "Lamborghini Aventador LP700-4 [LP700]"],
            [0x7C, "Lamborghini Countach LP400 [LP400]"],
            [0x7D, "Lamborghini Miura P400S [P400S]"],
            [0x7E, "Lamborghini Diablo VT [DIABLO]"],
            [0x7F, "HONDA New NSX [NC1]"],
            [0x80, "HONDA NSX [NA1]"],
            [0x81, "HONDA NSX-R [NA2]"],
            [0x83, "HONDA S2000 [AP2]"],
            [0x82, "HONDA S660 [JW5]"],
            [0x84, "NISSAN GT-R MC [BNR35MC]"],
            [0x85, "NISSAN SILVIA K's [PS13]"],
            [0x86, "ACURA New NSX (ACURA)"],
            [0x87, "ACURA NSX (ACURA)"],
            [0x88, "HONDA INTEGRA TYPE R [DC2]"],
            [0x89, "MAZDA ROADSTER ND RF [NDERC]"],
            [0x8A, "NISSAN LEOPARD Ultima [UF31]"],
            [0x8B, "NISSAN FAIRLADY Z S130 [GS130]"],
          ], 
          'colour-stock': [
            [0x00, "Stock Colour 1"],
            [0x01, "Stock Colour 2"],
            [0x02, "Stock Colour 3"],
            [0x03, "Stock Colour 4"],
            [0x04, "Stock Colour 5"],
            [0x05, "Stock Colour 6"],
            [0x06, "Stock Colour 7"],
            [0x07, "Stock Colour 8"],
            [0x08, "Stock Colour 9"],
            [0x09, "Stock Colour 10"],
          ], 
          'colour-custom': [
            [0x00, "No Custom Colour"],
            [0x01, "Custom Colour 1"],
            [0x02, "Custom Colour 2"],
            [0x03, "Custom Colour 3"],
            [0x04, "Custom Colour 4"],
            [0x05, "Custom Colour 5"],
            [0x06, "Custom Colour 6"],
            [0x07, "Custom Colour 7"],
            [0x08, "Custom Colour 8"],
            [0x09, "Custom Colour 9"],
            [0x0A, "Custom Colour 10"],
            [0x0B, "Custom Colour 11"],
            [0x0C, "Custom Colour 12"],
            [0x0D, "Custom Colour 13"],
            [0x0E, "Custom Colour 14"],
            [0x0F, "Custom Colour 15"],
            [0x10, "Custom Colour 16"],
            [0x11, "Custom Colour 17"],
            [0x12, "Custom Colour 18"],
            [0x13, "Custom Colour 19"],
            [0x14, "Custom Colour 20"],
            [0x15, "Custom Colour 21"],
            [0x16, "Custom Colour 22"],
            [0x17, "Custom Colour 23"],
            [0x18, "Custom Colour 24"],
            [0x19, "Custom Colour 25"],
            [0x1A, "Custom Colour 26"],
            [0x1B, "Custom Colour 27"],
            [0x1C, "Custom Colour 28"],
            [0x1D, "Custom Colour 29"],
            [0x1E, "Custom Colour 30"],
            [0x1F, "Custom Colour 31"],
            [0x20, "Custom Colour 32"],
            [0x21, "Custom Colour 33"],
            [0x22, "Custom Colour 34"],
            [0x23, "Custom Colour 35"],
            [0x24, "Custom Colour 36"],
            [0x25, "Custom Colour 37"],
            [0x26, "Custom Colour 38"],
            [0x27, "Custom Colour 39"],
            [0x28, "Custom Colour 40"],
          ],
          'rims': [
            [0x00, "Stock"], 
            [0x01, "Yokohama Super ADVAN Racing Ver. 2"],
            [0x02, "Yokohama ADVAN Racing RGII"],
            [0x03, "Yokohama ADVAN Racing TCII"],
            [0x04, "Yokohama AVS Model T5"],
            [0x05, "Yokohama AVS Model T6"],
            [0x06, "Yokohama AVS Model T7"],
            [0x07, "Yokohama ADVAN Racing RCII"],
            [0x08, "Yokohama ADVAN Racing RS"],
            [0x09, "Yokohama ADVAN Racing RZ"],
            [0x0A, "Yokohama ADVAN Racing RS-D"],
            [0x0B, "Yokohama ADVAN Racing RG-D"],
            [0x0C, "Yokohama ADVAN Racing RCIII"],
            [0x0D, "Watanabe Eight Spoke"],
            [0x0E, "Watanabe Forged MG Cyclone"],
            [0x0F, "Watanabe Stellar"],
            [0x10, "Watanabe GR-8"],
            [0x11, "RAYS VR TE37"], 
            [0x12, "RAYS VR CE28N"], 
            [0x13, "RAYS VR GT-TypeM"], 
            [0x14, "RAYS GT-Type C"], 
            [0x15, "RAYS GABBANA"], 
            [0x16, "RAYS Gram Lights 57F"], 
            [0x17, "RAYS BL-70-SX"], 
            [0x18, "RAYS Shotgun"], 
            [0x19, "RAYS X401"], 
            // "1A, "RAYS "], 
            [0x1B, "RAYS GRAM Lights 57A"], 
            [0x1C, "RAYS G-Games 77 NTL"], 
            [0x1D, "RAYS VR G10"], 
            [0x1E, "RAYS VR RE30"], 
            [0x1F, "RAYS SPR-EX"], 
            [0x20, "RAYS GRAM LIGHTS 57D"], 
            [0x21, "RAYS BLACKFLEET F2B"], 
            [0x22, "ENKEI RACING NTO3+M"], 
            [0x23, "ENKEI RACING WRC FORGED"],
            [0x24, "ENKEI RACING JS+M"], 
            [0x25, "ENKEI RACING RPF1"], 
            [0x26, "ENKEI RACING RS+M"], 
            [0x27, "ENKEI RSPORT RC-T4"], 
            [0x28, "ENKEI RACING RP05"], 
            [0x29, "ENKEI RACING PF02"], 
            [0x2A, "ENKEI RACING GTC01"], 
            [0x2B, "ENKEI RACING RS05"],
            [0x2C, "ENKEI RACING GT GO1 RR"], 
            [0x2D, "ENKEI RACING ES TARMAC"], 
            // After this point, is MT5DX+ Exclusive
            [0x2E, "ENKEI 5Spoke"], 
            [0x2F, "ENKEI 92"], 
            [0x30, "ENKEI TMW LM16"], 
            [0x31, "ENKEI Tuning SC03"], 
            [0x32, "ENKEI PerformanceLine PF02"], 
            [0x33, "RAYS ARPIONE"], 
            [0x34, "RAYS BLACKFLEET V350"], 
            [0x35, "RAYS 57 FXX"], 
            [0x36, "RAYS SCUDO"], 
            [0x37, "RAYS VR C345"], 
            [0x38, "RAYS HOMURA 2X8GT"], 
            [0x39, "Yokohama AVS Model F15"], 
            [0x3A, "Yokohama ADVAN Racing GT"], 
            [0x3B, "Yokohama ADVAN Racing RZ-DF"], 
            [0x3C, "Yokohama REUTZER SERIES VI"], 
            [0x3D, "Watanabe New RS8"], 
            [0x3E, "OZ Formula-HLT"], 
            [0x3F, "OZ Botticelli-3"], 
            [0x40, "OZ Crono-3"], 
            [0x41, "OZ Versilia"], 
            [0x42, "OZ Superturismo-LM"], 
            [0x43, "OZ Leggenda"], 
            [0x44, "OZ Ultraleggera"], 
            [0x45, "OZ Italia 150"], 
          ], 
          'colour-rims': [
            [0x00, "Default Colour"], 
            [0x01, "Rims Colour 2"], 
            [0x02, "Rims Colour 3"], 
            [0x03, "Rims Colour 4"], 
            [0x04, "Rims Colour 5"], 
            [0x05, "Rims Colour 6"], 
            [0x06, "Rims Colour 7"], 
            [0x07, "Rims Colour 8"], 
            [0x08, "Rims Colour 9"], 
            [0x09, "Rims Colour 10"], 
          ], 
          'aero': [
            [0x00, "Stock"],
            [0x01, "Aero Set A"],
            [0x02, "Aero Set B"],
            [0x03, "Aero Set C"],
            [0x04, "Aero Set D"],
            [0x05, "Aero Set E"],
            [0x06, "Aero Set F"],
            [0x07, "Aero Set G"],
            [0x08, "Aero Set H"],
          ], 
          'hood': [
            [0x00, "Stock"],
            [0x01, "Carbon Hood Original Style"],
            [0x02, "FRP Bonnet A"],
            [0x03, "Carbon Bonnet (with duct 1)"],
            [0x04, "FRP Bonnet B"],
            [0x05, "FRP Bonnet C"],
            [0x06, "FRP Bonnet D"],
            [0x07, "Carbon Bonnet (with duct 2)"],
            [0x08, "Carbon Bonnet (with duct 3)"],
          ], 
          'wing': [
            [0x00, "Stock"],
            [0x01, "GT Wing Straight"],
            [0x02, "GT Wing 3D"],
            [0x03, "Exclusive Wing A"],
            [0x04, "GT Wing Twin"],
            [0x05, "GT Wing 3D 2"],
            [0x06, "Exclusive Wing B"],
            [0x07, "Exclusive Wing B"],
            [0x08, "GT Wing Swan"],
            [0x09, "No Wing / Custom GT Wing"],
          ],
          'mirror': [
            [0x00, "Stock Mirror"],
            [0x01, "Aero Mirror"], 
            [0x02, "Carbon Mirror"], 
          ], 
          'body-sticker-type': [
            [0x00, "No Sticker"], 
            [0x01, "Racing Stripe 1 (10 Variants)"], 
            [0x02, "Fire Pattern 1 (10 Variants)"], 
            [0x03, "Racing Stripe 2 (10 Variants)"], 
            [0x04, "Fire Pattern 2 (10 Variants)"], 
            [0x05, "Pac Man (1 Variant)"], 
            [0x06, "Namco (1 Variant)"], 
            [0x07, "Works (1 Variant)"], 
            [0x08, "Racing Stripe 3 (10 Variants)"], 
            [0x09, "Fire Pattern 3 (10 Variants)"], 
            [0x0A, "Tribal 1  (10 Variants)"], 
            [0x0B, "Camo 1 (1 Variant)"], 
            [0x0C, "One Point 1 (10 Variants)"], 
            [0x0D, "Fire Pattern 4 (5 Variants)"], 
            [0x0E, "Japonism 1 (10 Variants)"], 
            [0x0F, "Competition 1 (10 Variants)"], 
            [0x10, "Racing Stripe 4 (10 Variants)"], 
            [0x11, "Animal 1 (2 Variants)"], 
            [0x12, "Tribal 2 (10 Variants)"], 
            [0x13, "Graffiti 1 (1 Variant)"], 
            [0x14, "Checker 1 (10 Variants)"], 
            [0x15, "Camo 2 (1 Variant)"], 
            [0x16, "Japonism 2 (1 Variant)"], 
            [0x17, "Animal 2 (10 Variants)"], 
            [0x18, "One Point 2 (10 Variants)"], 
            [0x19, "Graffiti 2 (1 Variant)"], 
            [0x1A, "Tribal 3 (10 Variants)"], 
            [0x1B, "Galaga (1 Variant)"], 
            [0x1C, "One Point 3 (10 Variants)"], 
            [0x1D, "Graffiti 1 (1 Variant)"], 
            [0x1E, "Pin Stripe (10 Variants)"], 
            [0x1F, "Competition 1 (10 Variants)"], 
            [0x20, "Racing Stripe 5 (10 Variants)"], 
            [0x21, "Racing Stripe 6 (10 Variants)"], 
            [0x22, "Racing Stripe 7 (10 Variants)"], 
            [0x23, "Thunder Bolt 1 (1 Variant)"], 
            [0x24, "Thunder Bolt 2 (1 Variant)"], 
            [0x25, "Thunder Bolt 3 (1 Variant)"], 
            [0x26, "Tribal 4 (10 Variants)"], 
            [0x27, "Tribal 5 (10 Variants)"], 
            [0x28, "Checker 2 (10 Variants)"], 
            [0x29, "Competition 3 (10 Variants)"], 
            [0x2A, "Two Tone ? (10 Variants)"], 
          ], 
          'body-sticker-colour': [
            [0x00, "Sticker Option 1"], 
            [0x01, "Sticker Option 2"], 
            [0x02, "Sticker Option 3"], 
            [0x03, "Sticker Option 4"], 
            [0x04, "Sticker Option 5"], 
            [0x05, "Sticker Option 6"], 
            [0x06, "Sticker Option 7"], 
            [0x07, "Sticker Option 8"], 
            [0x08, "Sticker Option 9"], 
            [0x09, "Sticker Option 10"], 
          ], 
          'side-sticker-type': [
            [0x00, "Default"], 
          ], 
          'side-sticker-colour': [
            [0x00, "Sticker Option 1"], 
            [0x01, "Sticker Option 2"], 
            [0x02, "Sticker Option 3"], 
            [0x03, "Sticker Option 4"], 
            [0x04, "Sticker Option 5"], 
            [0x05, "Sticker Option 6"], 
            [0x06, "Sticker Option 7"], 
            [0x07, "Sticker Option 8"], 
            [0x08, "Sticker Option 9"], 
            [0x09, "Sticker Option 10"], 
          ],
          'roof-sticker-type': [
            [0x00, "Stock"], 
            [0x01, "Flat Colour"], 
          ],
          'roof-sticker-colour': [
            [0x00, "Sticker Option 1"], 
            [0x01, "Sticker Option 2"], 
            [0x02, "Sticker Option 3"], 
            [0x03, "Sticker Option 4"], 
            [0x04, "Sticker Option 5"], 
            [0x05, "Sticker Option 6"], 
            [0x06, "Sticker Option 7"], 
            [0x07, "Sticker Option 8"], 
            [0x08, "Sticker Option 9"], 
            [0x09, "Sticker Option 10"], 
          ],
          'neon': [
            [0x00, "No Neon"], 
            [0x01, "Green Straight"], 
            [0x02, "Blue Straight"], 
            [0x03, "Purple Straight"], 
            [0x04, "Red Straight"], 
            [0x05, "Yellow Straight"], 
            [0x06, "Light Purple Straight"], 
            [0x07, "Green Dotted"], 
            [0x08, "Blue Dotted"], 
            [0x09, "Purple Dotted"], 
            [0x0A, "Purple Dotted"], 
            [0x0B, "Yellow Dotted"], 
            [0x0C, "Light Purple Dotted"], 
          ],
          'trunk': [
            [0x00, "Stock Trunk"],
            [0x01, "Carbon Trunk"],
          ], 
          'plate-frame-type': [
            [0x00, "Stock"], 
            [0x01, "Green (L/R Lights)"],
            [0x02, "Red Stripes"], 
            [0x03, "YM Speed Blue"],
          ], 
          'plate-frame-colour': [
            [0x00, "Frame Option 1"], 
            [0x01, "Frame Option 2"], 
            [0x02, "Frame Option 3"], 
            [0x03, "Frame Option 4"], 
            [0x04, "Frame Option 5"], 
            [0x05, "Frame Option 6"], 
            [0x06, "Frame Option 7"], 
            [0x07, "Frame Option 8"], 
            [0x08, "Frame Option 9"], 
            [0x09, "Frame Option 10"], 
          ], 
          'plate-number': [

          ], 
          'japan-sticker-type': [
            [0x00, "No Sticker"], 
            [0x01, "Japan Challenge Stickers 1 (10 Variants)"], 
            [0x02, "Japan Challenge Stickers 2 (10 Variants)"], 
            [0x03, "Japan Challenge Stickers 3 (10 Variants)"], 
            [0x04, "Japan Challenge Stickers 4 (10 Variants)"], 
            [0x05, "Japan Challenge Stickers 5 (10 Variants)"], 
            [0x06, "Japan Challenge 6 Summer (1 Variant)"], 
            [0x07, "Japan Challenge 7 Fall (1 Variant)"], 
            [0x08, "Japan Challenge 1 Spring (1 Variant)"], 
            [0x09, "Japan Challenge 2 Summer (1 Variant)"], 
            [0x0A, "Japan Challenge 3 Fall (1 Variant)"], 
            [0x0B, "Japan Challenge 4 Winter (1 Variant)"], 
            [0x0C, "Japan Challenge 5 Spring (1 Variant)"], 
            [0x0D, "Japan Challenge 6 Summer (1 Variant)"], 
            [0x0E, "Japan Challenge 7 Fall (1 Variant)"], 
            [0x0F, "Japan Challenge 8 Winter (1 Variant)"], 
          ], 
          'japan-sticker-colour': [
            [0x00, "Sticker Option 1"], 
            [0x01, "Sticker Option 2"], 
            [0x02, "Sticker Option 3"], 
            [0x03, "Sticker Option 4"], 
            [0x04, "Sticker Option 5"], 
            [0x05, "Sticker Option 6"], 
            [0x06, "Sticker Option 7"], 
            [0x07, "Sticker Option 8"], 
            [0x08, "Sticker Option 9"], 
            [0x09, "Sticker Option 10"], 
          ], 
          'power': [
            [0x00, "0 Points (Stock)"], // No mods
            [0x01, "1 Point (360 HP)"],
            [0x02, "2 Points"], 
            [0x03, "3 Points"], 
            [0x04, "4 Points"], 
            [0x05, "5 Points"], 
            [0x06, "6 Points"], 
            [0x07, "7 Points"], 
            [0x08, "8 Points"], 
            [0x09, "9 Points"],
            [0x0A, "10 Points (600 HP)"], // 600 HP
            [0x0B, "11 Points (620 HP)"], // 620 HP
            [0x0C, "12 Points (640 HP)"], // 640 HP
            [0x0D, "13 Points (660 HP)"], // 660 HP
            [0x0E, "14 Points (680 HP)"], // 680 HP
            [0x0F, "15 Points (700 HP)"], // 700 HP
            [0x10, "16 Points (720 HP)"], // 720 HP
            [0x11, "17 Points (740 HP)"], // 740 HP
            [0x12, "18 Points (760 HP)"], // 760 HP
            [0x13, "19 Points (780 HP)"], // 780 HP
            [0x14, "20 Points (800 HP)"], // 800 HP
            [0x15, "21 Points (815 HP)"], // 815 HP
            [0x16, "22 Points (830 HP)"], // 830 HP
          ], 
          'handling': [
            [0x00, "0 Points (Stock)"], // No mods
            [0x01, "1 Point"],
            [0x02, "2 Points"], 
            [0x03, "3 Points"], 
            [0x04, "4 Points"], 
            [0x05, "5 Points"], 
            [0x06, "6 Points"], 
            [0x07, "7 Points"], 
            [0x08, "8 Points"], 
            [0x09, "9 Points"],
            [0x0A, "10 Points"],
            [0x0B, "11 Points"],
            [0x0C, "12 Points"],
            [0x0D, "13 Points"],
            [0x0E, "14 Points"],
            [0x0F, "15 Points"],
            [0x10, "16 Points"],
            [0x11, "17 Points"],
            [0x12, "18 Points"],
            [0x13, "19 Points"],
            [0x14, "20 Points"],
            [0x15, "21 Points"],
            [0x16, "22 Points"],
          ], 
          'rank': [
            [0x01, "N"], 
            [0x02, "C9"], 
            [0x03, "C8"], 
            [0x04, "C7"], 
            [0x05, "C6"], 
            [0x06, "C5"], 
            [0x07, "C4"], 
            [0x08, "C3"], 
            [0x09, "C2"], 
            [0x0A, "C1"], 
            [0x0B, "B9"], 
            [0x0C, "B8"], 
            [0x0D, "B7"], 
            [0x0E, "B6"], 
            [0x0F, "B5"], 
            [0x10, "B4"], 
            [0x11, "B3"], 
            [0x12, "B2"], 
            [0x13, "B1"], 
            [0x14, "A9"], 
            [0x15, "A8"], 
            [0x16, "A7"], 
            [0x17, "A6"], 
            [0x18, "A5"], 
            [0x19, "A4"], 
            [0x1A, "A3"], 
            [0x1B, "A2"], 
            [0x1C, "A1"], 
            [0x1D, "S9"], 
            [0x1E, "S8"], 
            [0x1F, "S7"], 
            [0x20, "S6"], 
            [0x21, "S5"], 
            [0x22, "S4"], 
            [0x23, "S3"], 
            [0x24, "S2"], 
            [0x25, "S1"], 
            [0x26, "SS9"], 
            [0x27, "SS8"], 
            [0x28, "SS7"], 
            [0x29, "SS6"], 
            [0x2A, "SS5"], 
            [0x2B, "SS4"], 
            [0x2C, "SS3"], 
            [0x2D, "SS2"], 
            [0x2E, "SS1"], 
            [0x2F, "SSS9"], 
            [0x30, "SSS8"], 
            [0x31, "SSS7"], 
            [0x32, "SSS6"], 
            [0x33, "SSS5"], 
            [0x34, "SSS4"], 
            [0x35, "SSS3"], 
            [0x36, "SSS2"], 
            [0x37, "SSS1"], 
            [0x38, "SSSS"], 
          ], 
          'window-sticker-toggle': [
            [0x00, "Disabled"], 
            [0x01, "Enabled"], 
          ],
          'window-sticker-font': [
            [0x00, "Default"],
            [0x01, "Bold Block"], 
            [0x02, "Times New Roman"],
            [0x03, "Rounded"], 
            [0x04, "Craft"],
          ],
          'window-sticker-type': [
            [0x00, "No Sticker"],
            [0x01, "Flames"],
            [0x02, "Flames 2"],
            [0x03, "Circles"],
            [0x04, "Circles 2"],
            [0x05, "Triangles"],
            [0x06, "Triangles 2"],
            [0x07, "Tribal"],
            [0x08, "Bat"],
            [0x09, "Stars"],
            [0x0A, "Stars 2"],
            [0x0B, "Lightning"],
            [0x0C, "Diamond"],
            [0x0D, "Arrows"],
            [0x0E, "Tribal 2"],
            [0x0F, "Tribal 3"],
            [0x10, "Cards"],
            [0x11, "Cards 2"],
            [0x12, "Hearts"],
            [0x13, "Hearts 2"],
            [0x14, "Tribal 4"],
            [0x15, "Japonism"],
            [0x16, "Japonism 2"],
            [0x17, "Japonism 3"],
            [0x18, "Waves"],
            [0x19, "Waves 2"],
            [0x1A, "Waves 3"],
            [0x1B, "Tribal 5"],
            [0x1C, "Url"],
            [0x1D, "Galaga"],
            [0x1E, "Pac Man"],
            [0x1F, "Kiss"],
            [0x20, "Emotion"],
            [0x21, "Waves 4"],
            [0x22, "Galaga 2"],
            [0x23, "Shatter"],
            [0x24, "Wings"],
            [0x25, "Wings 2"],
            [0x26, "Bullets"],
            [0x27, "Shapes"],
            [0x28, "Shapes 2"],
            [0x29, "Moustache"],
            [0x2A, "Spark"],
            [0x2B, "Shredded"],
            [0x2C, "Rose"],
            [0x2D, "Tyres"],
            [0x2E, "Galaga 3"],
            [0x2F, "Flag"],
            [0x30, "Flag 2"],
            [0x31, "Puzzle"],
            [0x32, "Puzzle 2"],
            [0x33, "Waves 5"],
            [0x34, "Shark"],
            [0x35, "Wolf"],
            [0x36, "Chain"],
            [0x37, "City"],
            [0x38, "Wire"],
            [0x39, "Barcode"],
            [0x3A, "Zipper"],
            [0x3B, "Url 2"],
          ],
          'window-sticker-colour': [
            // Not implemented in final game
          ],
          'rival-marker': [
            [0x00, "Default"],
            [0x01, "Fire"],
            [0x02, "Animal"],
            [0x03, "Neon"],
            [0x04, ""],
            [0x05, "Dangerous"],
            [0x06, "Casual"],
            [0x07, "Flowers"],
            [0x08, "Paint Splash"],
            [0x09, "Graffiti"],
            [0x0A, "Japanese Pattern"],
            [0x0B, "Relief"],
            [0x0C, "Mechanical"],
            [0x0D, "Cosmos"],
            [0x0E, "Silvercraft"],
            [0x0F, "Camo"],
            [0x10, "Wood"],
            [0x11, "Tropical"],
            [0x12, "Lightning"],
            [0x13, "Wall"],
            [0x14, "Reggae"],
            [0x15, "Decoration"],
            [0x16, "Tropical 2"],
            [0x17, "Monogram"],
            [0x18, "Studded"],
            [0x19, "Casual 2"],
            [0x1A, "Graffiti 2"],
            [0x1B, "Mechanical 2"],
            [0x1C, "Guitar Pick"],
            [0x1D, "Bat"],
            [0x1E, "Effect"],
            [0x1F, "V"],
            [0x20, "Wings"],
            [0x21, "Heart"],
            [0x22, "Diamond"],
            [0x23, "Fire Pattern"],
            [0x24, "Pinstripe"],
            [0x25, "Arrow of Light"],
            [0x26, "Hex"],
            [0x27, "Silver Accessory"],
            [0x28, "New Driver"],
            [0x29, "Steel"],
            [0x2A, "Japanese Pattern 2"],
            [0x2B, "Wire"],
            [0x2C, "Stickers 2"],
            [0x2D, "ID Tag"],
            [0x2E, "Animal 2"],
            [0x2F, "Paint Splash 2"],
            [0x30, "Marine"],
            [0x31, "Woofer"],
            [0x32, "Glitter"],
            [0x33, "Comic"],
            [0x34, "Forest"],
            [0x35, "Bandana"],
            [0x36, "Road"],
            [0x37, "Camo 2"],
            [0x38, "Pinstripe 2"],
            [0x39, "Graffiti 2"],
            [0x3A, "Crystal"],
            [0x3B, "Metro Police"],
            [0x3C, "Studded 2"],
            [0x3D, "Electronics 2"],
            [0x3E, "Punk"],
            [0x3F, "Leather"],
            [0x40, "Fire Pattern 2"],
            [0x41, "Camo 3"],
            [0x42, "Wall 2"],
            [0x43, "Lava"],
            [0x44, "Mechanical 2"],
            [0x45, "Electronics"],
            [0x46, "Butterfly"],
            [0x47, "Katana"],
            [0x48, "Arrow"],
            [0x49, "Suriken"],
            [0x4A, "Heavy Metal"],
            [0x4B, "Helmet"],
            [0x4C, "Fang"],
            [0x4D, "Dragon"],
            [0x4F, "Hawk"],
            [0x4E, "Love You"],
            [0x50, "Speech Bubble"],
          ],
          'rival-marker-colour': [
            // Not implemented in final game
          ]
        }
      }, 
      story: {
        indexes: {
          // Total Wins
          'wins': 0x118, 

          // Win Streak
          'win-streak': 0x138, 

          // Current Beaten Stories
          'current-chapters': 0x14C,
        },
        values: {

        }
      }, 
      miles: {
        indexes: {
          'miles': 0x0,
          'games': 0x4 // Games Played
        },
        values: {
          
        }
      }, 
      gtwing: {
        indexes: {

          // Pillar

          "pillar-type": 0x18,
          "pillar-material": 0x1C,
      
          // Main Wing

          "main-wing-type": 0x20,
          "main-wing-colour": 0x24,
      
          // Decoration

          "wing-tip-type": 0x28,
          "wing-material": 0x2C,
        },
        values: {

          // Pillar

          "pillar-type": [
            [0x00, "None (No GT Wing)"],
            [0x01, "Tall Outside Pillars"],
            [0x02, "Tall Inside Pillars"],
            [0x03, "Mid Outside Pillars"],
            [0x04, "Mid Inside Pillars"],
            [0x05, "Short Outside Pillars"],
            [0x06, "Short Inside Pillars"],
          ],

          "pillar-material": [
            [0x00, "Black"],
            [0x01, "Silver"],
          ],

          // Main Wing
          
          "main-wing-type": [
            [0x00, "None (No GT Wing)"],
            [0x01, "Standard Wing"],
            [0x02, "Curved Wing"],
            [0x03, "3D Wing"],
            [0x04, "Angled Wing"],
            [0x05, "Double Wing"],
            [0x06, "Triple Wing"],
          ],

          "main-wing-colour": [
            [0x00, "Red"],
            [0x01, "Orange"],
            [0x02, "Yellow"],
            [0x03, "Green"],
            [0x04, "Purple"],
            [0x05, "Light Blue"],
            [0x06, "Blue"],
            [0x07, "Black"],
            [0x08, "Silver"],
            [0x09, "White"],
          ],

          // Decoration
          
          "wing-tip-type": [
            [0x00, "None (No GT Wing)"],
            [0x01, "Standard"],
            [0x02, "Curved"],
            [0x03, "Large"],
            [0x04, "Large Curved"],
          ],

          "wing-material": [
            [0x00, "Glossy"],
            [0x01, "Matte"],
          ],
        }
      }, 
      versus: {
        indexes: {

        },
        values: {
          
        }
      }, 
      settings: {
        indexes: {

          // Booleans
          
          "view": 0x1C, 
          "transmission": 0x1D, 
          "retire": 0x1E, 
          "navi-map": 0x1F, 

          // Integers

          "meter": 0x20, 
          "volume": 0x24,
          "ost": 0x28,
          "nameplate-type": 0x2C,
          "nameplate-colour": 0x30,
          "frame-type": 0x34, 
          "frame-colour": 0x38, 
          "terminal-bg": 0x3C
        },
        values: {

          // Booleans
          
          "view": [
            [0x0, "Off"], 
            [0x1, "On"]
          ], 
          "transmission": [
            [0x0, "Off"], 
            [0x1, "On"]
          ], 
          "retire": [
            [0x0, "Off"], 
            [0x1, "On"]
          ], 
          "navi-map": [
            [0x0, "Off"], 
            [0x1, "On"]
          ], 

          // Integers

          "meter": [
            [0x0, "Default Meter"],
            [0x1, "White Meter"],
            [0x2, "Yellow Meter"],
            [0x3, "Red Meter"],
            [0x4, "Special Meter"],
            [0x5, "Blue Meter"],
            [0x6, "Carbon Meter"],
          ], 
          "volume": [
            [0x0, "No Sound"],
            [0x1, "Quiet"],
            [0x2, "Standard"],
            [0x3, "Loud"],
          ],
          "ost": [
            [0x0, "Default Soundtra"], 
            [0x1, "MT3/3DX/3DX+"], 
            [0x2, "10 Outrun"], 
            [0x3, "MT1/2"], 
            [0x4, "MTR"], 
            [0x5, "MT4"], 
          ],
          "nameplate-type": [
            [0x0, "Default Nameplate"]
          ],
          "nameplate-colour": [
            [0x0, "Nameplate Colour 1"],
            [0x1, "Nameplate Colour 2"],
            [0x2, "Nameplate Colour 3"],
            [0x3, "Nameplate Colour 4"],
            [0x4, "Nameplate Colour 5"],
            [0x5, "Nameplate Colour 6"],
            [0x6, "Nameplate Colour 7"],
            [0x7, "Nameplate Colour 8"],
          ],
          "frame-type": [
            [0x0, "No Frame"]
          ], 
          "frame-colour": [
            [0x0, "Frame Colour 1"],
            [0x1, "Frame Colour 2"],
            [0x2, "Frame Colour 3"],
            [0x3, "Frame Colour 4"],
            [0x4, "Frame Colour 5"],
            [0x5, "Frame Colour 6"],
            [0x6, "Frame Colour 7"],
            [0x7, "Frame Colour 8"],
          ], 
          "terminal-bg": [
            // lol
          ]
        }
      },
      ministick: {
        indexes: {

        },
        values: {
          
        }
      }
    }, 
    wmmt6: {
      name: "MT56/6R",
      cars: {
        indexes: {

        }, 
        values: {

        }
      },
      story: {
        indexes: {

        }, 
        values: {

        }
      },
      miles: {
        indexes: {

        }, 
        values: {

        }
      },
      gtwing: {
        indexes: {

        }, 
        values: {

        }
      },
      versus: {
        indexes: {

        }, 
        values: {

        }
      },
      settings: {
        indexes: {

        }, 
        values: {

        }
      },
      ministick: {
        indexes: {

        }, 
        values: {

        }
      },
    }
  }
}