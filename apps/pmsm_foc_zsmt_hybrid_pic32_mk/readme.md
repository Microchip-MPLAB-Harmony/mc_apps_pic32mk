---
parent: Microchip MPLAB® Harmony 3 Motor Control Application Examples for PIC32MK family
title: PMSM FOC using ZS/MT Hybrid Estimator
has_children: false
has_toc: false
---

[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# Sensorless FOC on PMSM using ZS/MT Hybrid Estimator

This example application shows how to control the Permanent Magnet Synchronous Motor (PMSM) with ZS/MT Hybrid Estimator based Field Oriented Control (FOC) on a PIC32MK Micro-controller. 

## Description

Permanent Magnet Synchronous Motor (PMSM) is controlled using Field Oriented Control (FOC). Rotor position and speed is determined using a hybrid estimator with high frequency injection (ZS/MT) for low speed and back EMF observer with PLL estimator for high speed control. Motor start/stop operation is controlled by the switch and motor speed can be changed by the on-board potentiometer. Waveforms and variables can be monitored runtime using X2CScope.

Key features enabled in this project are:

- Dual shunt current measurement
- Speed control loop
- Hybrid ZS/MT

This demonstration project contains dummy libraries for IPD and ZS/MT hybrid and IPD algorithms. Kindly contact [Microchip Local Sales]() to get access to actual libraries. You can still use ```pic32mk_mcf_zsmt_firmware.hex``` for PIC32MK MCF devices, and  ```pic32mk_mcm_zsmt_firmware```for PIC32MK MCM devices to evaluate the project.

**Note**: Evaluation of ```pic32mk_mcm_zsmt_firmware``` for PIC32MK MCM requires PIM modification. Remove the external op-amp circuitary for current measurement. Contact us in case of queries.

## Downloading and building the application

To clone or download this application from Github, go to the [main page of this repository](https://github.com/Microchip-MPLAB-Harmony/mc_apps_pic32_mk) and then click **Clone** button to clone this repository or download as zip file.
This content can also be downloaded using content manager by following these [instructions](https://github.com/Microchip-MPLAB-Harmony/contentmanager/wiki).

Path of the application within the repository is **apps/pmsm_foc_smo_pic32_mk** .

To build the application, refer to the following table and open the project using its IDE.

| Project Name            | Description                                    | Demo User Guide |
| ----------------------- | ---------------------------------------------- |--------------------|
| mclv2_pic32mk_mcm_pim.X | MPLABX project for MCLV2 board with PIC32MK MCF PIM |[MCLV2 with PIC32MK MCM PIM](../docs/mclv2_tc1_pic32mk_mcm_pim_sensorless.md)|
| mclv2_pic32mk_mcf_pim.X | MPLABX project for MCLV2 board with PIC32MK MCF PIM |[MCLV2 with PIC32MK MCF PIM](../docs/mclv2_tc1_pic32mk_mcf_pim_sensorless.md)|
