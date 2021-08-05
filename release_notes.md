---
title: Release notes
nav_order: 99
---

![Microchip logo](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_logo.png)
![Harmony logo small](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_mplab_harmony_logo_small.png)

# Microchip MPLAB® Harmony 3 Release Notes
## Microchip MPLAB® Harmony 3 Motor Control Application Examples for PIC32MK family v3.1.0


### Applications

| Development Board | Number of Applications | 
| --- | --- | 
|[dsPICDEM™ MCLV-2 Low Voltage Development Board](https://www.microchip.com/DevelopmentTools/ProductDetails/DM330021-2) | 4 |
| [dsPICDEM™ MCHV-3 High Voltage Development Board](https://www.microchip.com/developmenttools/ProductDetails/dm330023-3) | 4 |

### New Features
None

### Known Issues

* In pmsm_foc_encoder_pic32_mk projects, overcurrent fault occurs at higher speeds in reverse direction with field weakening mode enabled.
* pmsm_foc_encoder_pic32_mk_mcm_mchv3 and pmsm_foc_encoder_pic32_mk_mcf_mchv3 application running on dsPICDEM MCHV-3 requires increasing bandwidth of the quadrature encoder signal filter to maintain signal integrity of quadrature sensor signals at higher motor speeds. Without these modifications, motor operation may fail at higher speeds.
  * Reduce the capacitance value of C25, C26 and C27 from 100pF to 10pF 50V NPO 0805

### Required MPLAB Harmony v3 Modules
* csp v3.9.1
* x2c v1.1.4
* motor_control v3.7.0
* dev_packs v3.9.0
* mhc v3.8.0

### Development Tools

* [MPLAB X IDE v5.50](https://www.microchip.com/mplab/mplab-x-ide)
* [MPLAB XC32 C/C++ Compiler v3.01](https://www.microchip.com/mplab/compilers)
* MPLAB X IDE plug-ins:
  * MPLAB Harmony Configurator (MHC) v3.6.4
  * X2CScope v1.3.0.


## Microchip MPLAB® Harmony 3 Motor Control Application Examples for PIC32MK family v3.0.0


### Applications

Applications migrated from motor_control repository to this application repository for PIC32MK family. 

| Development Board | Number of Applications | 
| --- | --- | 
|[dsPICDEM™ MCLV-2 Low Voltage Development Board](https://www.microchip.com/DevelopmentTools/ProductDetails/DM330021-2) | 4 |
| [dsPICDEM™ MCHV-3 High Voltage Development Board](https://www.microchip.com/developmenttools/ProductDetails/dm330023-3) | 4 |

### Required MPLAB Harmony v3 Modules
* csp v3.8.3
* x2c v1.1.3
* motor_control v3.6.0
* dev_packs v3.8.0
* mhc v3.6.5

### Known Issues

* pmsm_foc_encoder_pic32_mk_mcm_mchv3 and pmsm_foc_encoder_pic32_mk_mcf_mchv3 application running on dsPICDEM MCHV-3 requires increasing bandwidth of the quadrature encoder signal filter to maintain signal integrity of quadrature sensor signals at higher motor speeds. Without these modifications, motor operation may fail at higher speeds.
  * Reduce the capacitance value of C25, C26 and C27 from 100pF to 10pF 50V NPO 0805


### Development Tools

* [MPLAB X IDE v5.45](https://www.microchip.com/mplab/mplab-x-ide)
* [MPLAB XC32 C/C++ Compiler v2.50](https://www.microchip.com/mplab/compilers)
* MPLAB X IDE plug-ins:
  * MPLAB Harmony Configurator (MHC) v3.6.2
  * X2CScope v1.3.0.
